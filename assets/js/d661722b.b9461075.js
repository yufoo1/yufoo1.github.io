"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={},o="How to Implement CPU by Software Oriented Approach",l={unversionedId:"cpu-design-pattern/How to implement CPU by software oriented approach",id:"cpu-design-pattern/How to implement CPU by software oriented approach",title:"How to Implement CPU by Software Oriented Approach",description:"Considering to implement highly configurable CPU, we should use a very software oriented approach , in which there are few things that is fixed. This article borrows a lot from VexRiscv, a RISC-V CPU written in SpinalHDL , source code is here. In VecRiscv, nearly everything is plugin based, which means we can simply expand it or shrink it.  Besides, there is an automatic tool allowing plugins to insert data at a given stage and other plugins to read it in another stage. There is also a service system which provides a very dynamic framework to handle exception.",source:"@site/docs/cpu-design-pattern/How to implement CPU by software oriented approach.md",sourceDirName:"cpu-design-pattern",slug:"/cpu-design-pattern/How to implement CPU by software oriented approach",permalink:"/docs/cpu-design-pattern/How to implement CPU by software oriented approach",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpu-design-pattern/How to implement CPU by software oriented approach.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design Pattern in CPU",permalink:"/docs/category/design-pattern-in-cpu"}},s={},p=[{value:"Simple Introduction of VecRiscv Architecture",id:"simple-introduction-of-vecriscv-architecture",level:2},{value:"Gen Smallest",id:"gen-smallest",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-implement-cpu-by-software-oriented-approach"},"How to Implement CPU by Software Oriented Approach"),(0,a.kt)("p",null,"Considering to implement highly configurable CPU, we should use a very ",(0,a.kt)("inlineCode",{parentName:"p"},"software oriented approach")," , in which there are few things that is fixed. This article borrows a lot from VexRiscv, a RISC-V CPU written in ",(0,a.kt)("inlineCode",{parentName:"p"},"SpinalHDL")," , ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SpinalHDL/VexRiscv"},"source code is here"),". In VecRiscv, nearly everything is plugin based, which means we can simply expand it or shrink it.  Besides, there is an automatic tool allowing plugins to insert data at a given stage and other plugins to read it in another stage. There is also a service system which provides a very dynamic framework to handle exception."),(0,a.kt)("p",null,"I will try to understand this software oriented design approach and how VecRiscv use it, this article will record some thoughts of myself. Then, I will design my own CPU in ",(0,a.kt)("inlineCode",{parentName:"p"},"Chisel")," through this unique approach."),(0,a.kt)("h2",{id:"simple-introduction-of-vecriscv-architecture"},"Simple Introduction of VecRiscv Architecture"),(0,a.kt)("p",null,"VecRiscv is implemented via a 5 stage in-order pipeline and it's function can be extended through lots of optional and complementary plugins. The Extensibility of VecRiscv is so superior that we can turn on or turn off parts of this CPU directly through it's well-designed plugin system and add new functionalities or instructions without modifying any source of this CPU."),(0,a.kt)("h3",{id:"gen-smallest"},"Gen Smallest"),(0,a.kt)("p",null,"When we choose to generate VecRiscv in a smallest configuration, it firstly define a method which will return a instance of CPU. This method has only one parameter that representing the configuration we expected. The configuration is described through an object, which apply method need a list of plugins and we can also configure plugin before pushing it into that plugin list. By the way, the default option of VecRiscv is with memory stage and write back stage and ",(0,a.kt)("inlineCode",{parentName:"p"},"GenSmallest")," needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IBusSimplePlugin: implements the CPU frontend via a very simple and neutral memory interface out of CPU."),(0,a.kt)("li",{parentName:"ul"},"DBusSimplePlugin: implements the load and store instructions via a simple memory bus out of CPU."),(0,a.kt)("li",{parentName:"ul"},"CsrPlugin: implements most of the Machine mode and a few of the User mode registers."),(0,a.kt)("li",{parentName:"ul"},"DecodeSimplePlugin: provides instruction decoding capabilities."),(0,a.kt)("li",{parentName:"ul"},"RegFilePlugin: implements the register file."),(0,a.kt)("li",{parentName:"ul"},"IntAluPlugin: implements all compute instructions in the execute stage. The source values are from the outputs of SrcPlugin, which will be described next."),(0,a.kt)("li",{parentName:"ul"},"SrcPlugin: muxes different input values to produce values of the source registers."),(0,a.kt)("li",{parentName:"ul"},"LightShifterPlugin: implements shifter instructions in one cycle by using an iterative shifter register."),(0,a.kt)("li",{parentName:"ul"},"HazardSimplePlugin: checks the pipeline instruction dependencies, bypass the instruction results of stop the instruction in the decoding stage if necessary."),(0,a.kt)("li",{parentName:"ul"},"BranchPlugin: implements branch and jump instructions with primitives used  by the CPU frontend to implement branch prediction."),(0,a.kt)("li",{parentName:"ul"},"YamlPlugin: offers a service to other plugins to generate a Yaml file describing the CPU configuration.")),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"RegFilePlugin")," as an example. RegFilePlugin has 8 configuration parameters and in ",(0,a.kt)("inlineCode",{parentName:"p"},"GenSmallest")," only 2 of them are configured, ",(0,a.kt)("inlineCode",{parentName:"p"},"regFileReadyKind")," is configured to ",(0,a.kt)("inlineCode",{parentName:"p"},"Sync")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zeroBoot")," is configured to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", other parameters use default configuration. Every plugin extend the trait ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin and override two important methods, "),"setup(pipeline: T)",(0,a.kt)("inlineCode",{parentName:"p"},"and"),"build(pipeline: T)`."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"override def setup(pipeline: VecRiscv): Unit = {\n    import pipeline.config._\n    val decoderService = pipeline.service(classOf[DecoderService])\n    decoderService.addDefault(RS1_USE,False)\n    decoderService.addDefault(RS2_USE,False)\n    decoderService.addDefault(REGFILE_WRITE_VALID,False)\n}\n")),(0,a.kt)("p",null,"In the code above, pipeline is instance of VecRiscv, which extends trait ",(0,a.kt)("inlineCode",{parentName:"p"},"Pipeline"),". pipeline has a method ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", which can filter the class extended it's parameter, a trait, or filter the same class and superclass. In the example above, DecoderService is a trait and  DecodeSimplePlugin extends it. Therefore, we can get the instance of DecodeSimplePlugin if we call pipeline.service","[","T](clazz: Class","[T]","). Then, this example calls decoderService.addDefault(key: Stageable","[_ <: BaseType]",", value: Any). The method addDefault is overrided in DecodeSimplePlugin and it can add configuration into DecodeSimplePlugin, which can be known by other plugin."),(0,a.kt)("p",null,"The method ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," of RegFilePlugin is complicated and we take the build of ",(0,a.kt)("inlineCode",{parentName:"p"},"IntAluPlugin")," as another example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"override def build(pipeline: VexRiscv): Unit = {\n    import pipeline._\n    import pipeline.config._\n\n\n    execute plug new Area{\n      import execute._\n\n      val bitwise = input(ALU_BITWISE_CTRL).mux(\n        AluBitwiseCtrlEnum.AND  -> (input(SRC1) & input(SRC2)),\n        AluBitwiseCtrlEnum.OR   -> (input(SRC1) | input(SRC2)),\n        AluBitwiseCtrlEnum.XOR  -> (input(SRC1) ^ input(SRC2))\n      )\n\n      // mux results\n      insert(REGFILE_WRITE_DATA) := input(ALU_CTRL).mux(\n        AluCtrlEnum.BITWISE  -> bitwise,\n        AluCtrlEnum.SLT_SLTU -> input(SRC_LESS).asBits(32 bit),\n        AluCtrlEnum.ADD_SUB  -> input(SRC_ADD_SUB)\n      )\n    }\n  }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"input")," is a method of ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage"),", which has one parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"key: Stageable[T]"),". Through ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", we can get the corresponding input value of this stage. Here is the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val inputs   = mutable.LinkedHashMap[Stageable[Data],Data]()\n\ndef outsideCondScope[T](that : => T) : T = {\n    // Get the head of the current component symboles tree (AST in other words)\n    val body = Component.current.dslBody\n    // Now all access to the SpinalHDL API will be append to it (instead of the current context)\n    val ctx = body.push()\n    // Empty the symbole tree (but keep a reference to the old content)\n    val swapContext = body.swap()\n    // Execute the block of code (will be added to the recently empty body)\n    val ret = that\n    // Restore the original context in which this function was called\n    ctx.restore()\n    // append the original symboles tree to the modified body\n    swapContext.appendBack()\n    // return the value returned by that\n    ret\n  }\n\ndef input[T <: Data](key : Stageable[T]) : T = {\n    inputs.getOrElseUpdate(key.asInstanceOf[Stageable[Data]],outsideCondScope{\n      val input,inputDefault = key()\n      inputsDefault(key.asInstanceOf[Stageable[Data]]) = inputDefault\n      input := inputDefault\n      input.setPartialName(this, key.getName())\n    }).asInstanceOf[T]\n  }\n")),(0,a.kt)("p",null,"If given key is already in the hash map, ",(0,a.kt)("inlineCode",{parentName:"p"},"getOrElseUpdate")," will return associated value. Otherwise, it will compute value from given expression and return, meanwhile store the nonexistent key into hash map with the computed value."),(0,a.kt)("p",null,"Let's go back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," method. When we get the result through ",(0,a.kt)("inlineCode",{parentName:"p"},"IntAluPlugin"),", we then call ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," method to insert it into current stage."))}u.isMDXComponent=!0}}]);