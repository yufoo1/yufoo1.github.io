# How to Implement CPU by Software Oriented Approach

Considering to implement highly configurable CPU, we should use a very `software oriented approach` , in which there are few things that is fixed. This article borrows a lot from VexRiscv, a RISC-V CPU written in `SpinalHDL` , [source code is here](https://github.com/SpinalHDL/VexRiscv). In VecRiscv, nearly everything is plugin based, which means we can simply expand it or shrink it.  Besides, there is an automatic tool allowing plugins to insert data at a given stage and other plugins to read it in another stage. There is also a service system which provides a very dynamic framework to handle exception.

I will try to understand this software oriented design approach and how VecRiscv use it, this article will record some thoughts of myself. Then, I will design my own CPU in `Chisel` through this unique approach.

## Simple Introduction of VecRiscv Architecture

VecRiscv is implemented via a 5 stage in-order pipeline and it's function can be extended through lots of optional and complementary plugins. The Extensibility of VecRiscv is so superior that we can turn on or turn off parts of this CPU directly through it's well-designed plugin system and add new functionalities or instructions without modifying any source of this CPU.

### Gen Smallest

When we choose to generate VecRiscv in a smallest configuration, it firstly define a method which will return a instance of CPU. This method has only one parameter that representing the configuration we expected. The configuration is described through an object, which apply method need a list of plugins and we can also configure plugin before pushing it into that plugin list. By the way, the default option of VecRiscv is with memory stage and write back stage and `GenSmallest` needs:

* IBusSimplePlugin: implements the CPU frontend via a very simple and neutral memory interface out of CPU.
* DBusSimplePlugin: implements the load and store instructions via a simple memory bus out of CPU.
* CsrPlugin: implements most of the Machine mode and a few of the User mode registers.
* DecodeSimplePlugin: provides instruction decoding capabilities.
* RegFilePlugin: implements the register file.
* IntAluPlugin: implements all compute instructions in the execute stage. The source values are from the outputs of SrcPlugin, which will be described next.
* SrcPlugin: muxes different input values to produce values of the source registers.
* LightShifterPlugin: implements shifter instructions in one cycle by using an iterative shifter register.
* HazardSimplePlugin: checks the pipeline instruction dependencies, bypass the instruction results of stop the instruction in the decoding stage if necessary.
* BranchPlugin: implements branch and jump instructions with primitives used  by the CPU frontend to implement branch prediction.
* YamlPlugin: offers a service to other plugins to generate a Yaml file describing the CPU configuration.

Take `RegFilePlugin` as an example. RegFilePlugin has 8 configuration parameters and in `GenSmallest` only 2 of them are configured, `regFileReadyKind` is configured to `Sync` and `zeroBoot` is configured to `false`, other parameters use default configuration. Every plugin extend the trait `Plugin and override two important methods, `setup(pipeline: T)` and `build(pipeline: T)`.

```scala
override def setup(pipeline: VecRiscv): Unit = {
    import pipeline.config._
    val decoderService = pipeline.service(classOf[DecoderService])
    decoderService.addDefault(RS1_USE,False)
    decoderService.addDefault(RS2_USE,False)
    decoderService.addDefault(REGFILE_WRITE_VALID,False)
}
```

In the code above, pipeline is instance of VecRiscv, which extends trait `Pipeline`. pipeline has a method `service`, which can filter the class extended it's parameter, a trait, or filter the same class and superclass. In the example above, DecoderService is a trait and  DecodeSimplePlugin extends it. Therefore, we can get the instance of DecodeSimplePlugin if we call pipeline.service\[T](clazz: Class[T]). Then, this example calls decoderService.addDefault(key: Stageable[_ <: BaseType], value: Any). The method addDefault is overrided in DecodeSimplePlugin and it can add configuration into DecodeSimplePlugin, which can be known by other plugin.

The method `build` of RegFilePlugin is complicated and we take the build of `IntAluPlugin` as another example.

```scala
override def build(pipeline: VexRiscv): Unit = {
    import pipeline._
    import pipeline.config._


    execute plug new Area{
      import execute._

      val bitwise = input(ALU_BITWISE_CTRL).mux(
        AluBitwiseCtrlEnum.AND  -> (input(SRC1) & input(SRC2)),
        AluBitwiseCtrlEnum.OR   -> (input(SRC1) | input(SRC2)),
        AluBitwiseCtrlEnum.XOR  -> (input(SRC1) ^ input(SRC2))
      )

      // mux results
      insert(REGFILE_WRITE_DATA) := input(ALU_CTRL).mux(
        AluCtrlEnum.BITWISE  -> bitwise,
        AluCtrlEnum.SLT_SLTU -> input(SRC_LESS).asBits(32 bit),
        AluCtrlEnum.ADD_SUB  -> input(SRC_ADD_SUB)
      )
    }
  }
```

`input` is a method of `Stage`, which has one parameter `key: Stageable[T]`. Through `key`, we can get the corresponding input value of this stage. Here is the implementation of `input`.

```scala
val inputs   = mutable.LinkedHashMap[Stageable[Data],Data]()

def outsideCondScope[T](that : => T) : T = {
    // Get the head of the current component symboles tree (AST in other words)
    val body = Component.current.dslBody
    // Now all access to the SpinalHDL API will be append to it (instead of the current context)
    val ctx = body.push()
    // Empty the symbole tree (but keep a reference to the old content)
    val swapContext = body.swap()
    // Execute the block of code (will be added to the recently empty body)
    val ret = that
    // Restore the original context in which this function was called
    ctx.restore()
    // append the original symboles tree to the modified body
    swapContext.appendBack()
    // return the value returned by that
    ret
  }

def input[T <: Data](key : Stageable[T]) : T = {
    inputs.getOrElseUpdate(key.asInstanceOf[Stageable[Data]],outsideCondScope{
      val input,inputDefault = key()
      inputsDefault(key.asInstanceOf[Stageable[Data]]) = inputDefault
      input := inputDefault
      input.setPartialName(this, key.getName())
    }).asInstanceOf[T]
  }
```

If given key is already in the hash map, `getOrElseUpdate` will return associated value. Otherwise, it will compute value from given expression and return, meanwhile store the nonexistent key into hash map with the computed value.

Let's go back to the `build` method. When we get the result through `IntAluPlugin`, we then call `insert` method to insert it into current stage.
