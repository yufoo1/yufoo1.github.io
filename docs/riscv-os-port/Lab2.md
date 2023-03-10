---
sidebar_position: 3
---
# Lab 2：MMU 设置和内存管理

## 设计内存布局

设计内存布局，可以说是移植时遇到的第二个难题。第一个是内核启动，后面还有无数个难题（啰嗦一句，第一次做感觉在 `qemu` 上跑起来系统是无比玄学的，而且运行参数的含义还很难查，完全不知道它在干什么。并且各种原因都可能起不来内核，笔者因为链接的问题被卡了好几天，最终麻烦郭学长到半夜一点才解决，感谢）。

`32` 位和 `64` 位的内存布局可以说是天差地别，基本完全要重新设计，并且由于笔者从来没做过这种事，而且当时 `Lab 2` 的阶段还不怎么了解 `RISC-V`，因此设计了很长时间，一遍一遍地麻烦助教学长监工。先提一句笔者走过的弯路吧，由于 `RISC-V` 没有指导书，笔者就去参考了 `ARM` 的移植指导书，里面提到一般 `ARM` 将`内核空间`放在高地址，将 `用户空间` 放在低地址，因此笔者最初也尽量按照这个思路设计，并且受到了 `MOS` 的 `32` 位内存布局的影响，导致我最开始的构想是这样的：`64` 位的空间，如果还是模仿 `MOS` 将用户空间放在 `0x80000000` 下面，那么 `64` 位的空间基本就被浪费掉了，因此我当时希望修改 `Lab 1` 的内核链接脚本，希望把内核直接放在一个特别高的地址，为用户进程预留出了极大的空间，但发现这样内核似乎根本起不来。与学长交流后发现，是因为在初始化内存管理之前，还没有启动 `MMU` ，将内核地址设置得那么高，处理器根本找不到内核入口。

> 当时我对于 `RISC-V` 中 `MMU` 的知识还相当模糊，现在我知道了没开 `MMU`还想把内核放在高地址，可以直接把它放在物理地址的高位，因为开启 `MMU` 之前，处理器都是操作的物理地址。

所以我又陷入了僵局，于是又诞生了一个想法，我去网上搜索了下 `Linux` 系统在 `RISC-V` 上的内存布局，虽然笔者实现的操作系统比 `Linux` 不知道简单多少倍，但还是有借鉴意义的，不过借鉴得不怎么正确。就是它让我想着在 `0x80200000` 进入内核，然后简单设置下页表，再跳转至一个特别高的地址，这个页表在跳转后可以舍弃掉，`Linux` 中有类似的作用的东西。但是这样就使得内存布局变得复杂了起来，相当于我需要在低位保留一个小片段给内核，它很可能插在用户空间中间，因此设计了半天也没有一个特别满意的结果。

但最终学长点醒了我，其实用户空间用不了多大的地址，而且 `RISC-V` 跟 `ARM` 不一样，它的内存布局是相当自由的，根本没有内核空间在上，用户空间在下的限制，但我依旧没有放弃 `MOS` 对我的影响，最终设计出了一版这样的布局。

```c
/*
 o    16E ----------->  +----------------------------+------------0xffff_ffff_ffff_ffff
 o                      |                            |
 o                      |      	    ...              |
 o                      |                            |
 o               -----> +----------------------------+------------0xffff_ffff_8000_0000
 o                      |                            |
 o                      |           MMIO             |
 o                      |                            |
 o               -----> +----------------------------+------------0xffff_ffff_0000_0000
 o                      |                            |
 o                      |                            |
 o                      |           ...              |
 o                      |                            |
 o                      |                            |
 o        UTOP   -----> +----------------------------+------------0x0000_0001_8000_0000
 o                      |          ENVS              |     PDMAP
 o      UENVS    -----> +----------------------------+------------0x0000_0001_4000_0000
 o                      |          PAGES             |     PDMAP
 o      UPAGES   -----> +----------------------------+------------0x0000_0001_0000_0000
 o                      |         User VPT           |     PDMAP
 o        UVPT   -----> +----------------------------+------------0x0000_0000_c000_0000
 o Physics Memory Max -/|                            |
 o                      |                            |
 o                      |                            |
 o                      |                            |
 o                      |            ...             |
 o                      |                            |
 o                      |                            |
 o                      |                            |
 o  VPT,KSTACKTOP-----> +----------------------------+------------0x0000_0000_8040 0000
 o                      |       Kernel Stack         |
 o                      +----------------------------+-----------
 o                      |       Kernel Text          |
 o                      +----------------------------+-----------
 o                      |   Interrupts & Exception   |
 o    KERNBASE   -----> +----------------------------+------------0x0000_0000_8020_0000
 o                      |           SBI              |
 o   QEMU ENTRY  -----> +----------------------------+------------0x0000_0000_8000_0000
 o   UXSTACKTOP       -/|    user exception stack    |
 o    USTACKTOP  -----> +----------------------------+------------0x0000_0000_7fff_f000
 o                      |     normal user stack      |
 o               -----> +----------------------------+------------0x0000_0000_7fff_e000
 o                      |                            |
 o                      |                            |
 o                      |        User Space          |
 o                      |                            |
 o                      |                            |
 o       ------------>  +----------------------------+ -----------0x0000_0000_4000_0000
 o                      |                            |
 o                      |                            |
 o                      |                            |
 o                      |                            |
 o       ------------>  +----------------------------+ ----------- 0
*/

```

需要说明的是，我是用的是 `RISC-V` 常用的 `Sv39` 内存布局，即虚拟地址的空间有 `1 << 39` 个字节大小，而物理地址的空间我选择的是`1 << 30` 个字节大小。

事实上，有必要这么复杂么？那当然是没有，而且移植 `ARM` 的强哥（他们当时在做 `Lab 4`）说，他们系统调用简单的可以，但只要涉及了 `ENVS` 和 `PAGES` 就会出锅，因此笔者后面索性在 `ENVS` 和 `PAGES` 的区域取消掉，因为计算后发现抛开进程上下文，其实所有物理页面数组和进程控制块数组加起来也占不了内核多大空间，因此就将这两块区域合并进了内核，然后单独用一部分空间存储进程上下文构成的数组，物理页面数组和进程控制块数组作为全局变量出现，这样就不需要重新考量 `Lab 2` 那些很多奇奇怪怪的转换宏与转换函数，~~删总比改快~~。事实上，笔者还是花了半周时间重写了 `Lab 2`那些转换宏和转换函数，但最终基本都没有用上，又多走了些弯路。

最终，笔者选择将内核地址空间仍然放在 `0x80200000~0x80400000`，然后将用户空间放到了很高的位置，这样就没有由于没有初始页表，导致高地址无法访问的问题，~~属于是放飞自我~~，但非常简单，毕竟再重复一遍，`RISC-V` 没有 `ARM` 那个内核空间在上，用户空间在下的刻板规定，**`RISC-V`是完全自由的！**

然后介绍一下 `Sv39` 的内存布局，顾名思义，`Sv39` 只使用 `64` 位中的 `39` 位，毫无疑问足够 `MOS` 使用，不过 `Sv39` 需要使用三级页表，意味着我们原先很多内存管理的代码都需要重写，但其实也就是多加一次页表的访问。对于页目录而言，目录偏移是 `38~30` 位；对于二级页目录而言，目录偏移是 `29~21` 位；对于三级页表而言，页表偏移是 `20~12` 位；页内偏移是 `11~0` 位，即一页有 `4096` 个字节。

## 内存管理

注意以 `boot` 开头的函数笔者已经基本删掉了，并且内核的页目录我们也已在 `start.S` 中定义完成，这里以 `pgdir_walk` 作为一个例子说明二级页表与三级页表的差异：

```c
int pgdir_walk(Pde *pgdir, u_longlong va, int create, Pte **ppte)
{
	Pde *pgdir_entryp;
	Pmde *pgmedir_entryp;
	Pte *pgtable_entryp;
	struct Page *ppage;
	pgdir_entryp = pgdir + PDX(va);
	if ((*pgdir_entryp & PTE_V) == 0)
	{
		if (create)
		{
			if (page_alloc(&ppage) == -E_NO_MEM)
			{
				return -E_NO_MEM;
			}
			*pgdir_entryp = page2pa(ppage);
			*pgdir_entryp = (*pgdir_entryp) | PTE_V | PTE_R;
      sfence_vma();
			ppage->pp_ref++;
		}
		else
		{
			*ppte = 0;
			return 0;
		}
	}

	pgmedir_entryp = ((Pmde *)KADDR(PTE_ADDR(*pgdir_entryp))) + PMDX(va);
	if ((*pgmedir_entryp & PTE_V) == 0)
	{
		if (create)
		{
			if (page_alloc(&ppage) == -E_NO_MEM)
			{
				return -E_NO_MEM;
			}
			*pgmedir_entryp = page2pa(ppage);
			*pgmedir_entryp = (*pgmedir_entryp) | PTE_V | PTE_R;
      sfence_vma();
			ppage->pp_ref++;
		}
		else
		{
			*ppte = 0;
			return 0;
		}
	}
	*ppte = (Pte *)KADDR(PTE_ADDR(*pgmedir_entryp)) + PTX(va);
	return 0;
}
```

> 需要注意的是，`sfence_vma();` 用于刷新处理器的 `TLB`，我们每次修改页表内容后，可能 `TLB` 与页表会出现`不一致`的现象，为了保持一致性，我们需要调用`sfence_vma();`，把 `TLB` 的内容全部刷新，其实也可以只刷新某一个虚拟地址的内容，~~不过没必要，不在乎性能~~。

## 建立映射

再完成所有内存管理相关函数的适配后，我们需要在内核页目录中构建虚拟地址与物理地址的映射，这样引出一个笔者理解很久的问题，也是这个问题迫使笔者从 `Lab 3` 返工——在 `RISC-V` 中，开启 `MMU`  前和开启 `MMU` 后，处理器都是如何寻址的呢？

其实这个问题的答案现在看来非常简单，但笔者花费了很多时间调研，跟学长交流，才真正理清。`RISC-V` 没有 `MIPS32` 中`kseg2`、`kseg1`、`kseg0`以及`kuseg` 的概念，众所周知，`R3000` 才对这些地址访问时，有不同的规则，但是 `RISC-V` 任何映射规则都没有，在开启 `MMU` 前，处理器按照物理地址访问，在开启 `MMU` 后，处理器按照 `satp` 的记录的页表物理地址，从虚拟地址访问物理地址。答案就是这样简单，理清这点后，一切都变得异常容易：我只需要在开启 `MMU` 前，建立好虚拟地址和物理地址的映射关系就可以了，比如希望直接映射，那就让页表里面虚拟地址对应的物理地址等于自身，并且在插入这部分页面时，`.text` 段应当设置`Valid`、`Read`、`Dirty`、`Access`权限位，其他段设置 `Valid`、`Write`、`Read`、`Dirty`、`Access` 权限位。

那对于内核而言，我们需要构建怎样的映射呢？不言而喻，就像 `MOS` 中内核态是直接映射，我们也希望当我们处于 `内核态` 的时候，地址都是直接映射的，因此笔者将全部物理地址 `0x80000000~0xC0000000` 映射至 `0x80000000~0xC0000000` 的虚拟地址空间，这对于 `Lab 2`已经足够了，还有关于 `MMIO` 以及 `中断异常处理函数`、`进程上下文数组` 的映射，后面用到时会详细介绍。

## 开启 MMU

在这里笔者遇到了迄今为止最玄学的 `BUG`，做到 `Lab 3` 的时候才发现，在烤漆卡了整整一周，奇怪的现象令学长都无法理解。其实笔者做到 `Lab 3`时，已经将用户程序打包跟内核链接，并在创建用户程序进程时成功将用户程序映射至用户空间，但此时发现其实笔者从来没有成功打开过 `MMU`，~~当时乐死我了，但乐完就是绝望，返工时考虑过无数遍放弃~~。

最初笔者是这样“开启” `MMU` 的：

```c
void mmu_init()
{
	asm volatile(
		"li		t0, 0x8000000000000000\n\t"
		"csrr	t0, satp\n\t");
}
```

这是笔者完全不了解 `RISC-V` 时写下的代码，其实也不是自己写的，毕竟开启 `MMU` 肯定是要查询资料的，不知道读者能不能发现，上面内嵌的汇编仅仅实现了读取 `satp` 的值，可以说啥都不干，这样怎么可能开启了 `MMU`，但是我返工的时候也忘了当时这两行代码是从哪里抄的了。

查阅 `RISC-V` 标准中关于 `stap` 寄存器的描述，`stap` 低 `44` 位用于记录页目录物理地址的 `PPN` ，`59~44` 位是保留位，`63~60` 位用来设置 `mode` ，如果 `mode` 是 `0` 代表 `No translation or protection`，代表不进行映射，也就是说虚拟地址和物理地址直接对应，我们刚进入内核的时候，应该就是这个状态，直接通过物理地址访问内存；我们选择的内存布局是 `Sv39` ，查表发现 `mode` 应该设置为 `8`。之后就很明晰了，最初的写法用于没有往 `satp` 中写入任何东西，也就是说没有设置 `mode`，是不可能打开 `MMU` 的。因此，正确打开 `MMU` 的代码是这样的：

```c
void mmu_init() {
    w_satp(MAKE_SATP(kernelPgdir)); // 用到了 RISC-V 常用宏
    sfence_vma(); // 常用宏，用于刷新 TLB
}
```

那笔者刚才提到的 `BUG` 是什么呢？就是笔者在正确了解并实现 `MMU` 的开启流程后，依旧没有成功开启 `MMU`，而且诡异的是，在`sfence_vma();`后面紧跟两个`sbi call`，只可以执行第一个，第二个执行不了；删除 `sfence_vma();`后，内核可以短暂运行，但这显然是不被允许的，毕竟打开 `MMU` 后必须刷新 `TLB`，原来 `TLB` 中的内容都是不可信的；更甚，我尝试随便在 `satp` 中写入一个 `PPN` 和正确的 `mode`，它依旧能够执行 `sfence_vma();` 后紧跟的一条 `sbi call`。这个阶段是笔者最绝望的阶段，因为学长从没见过这种情况，而实际上，从内核启动到这一步的过程相当简单，也反复检查不过，照理说不应该出什么问题，但确实出了问题。虽然学长没见过，不过提出了一种可能的情况，就是处理器陷入了 `M态` 后没有成功返回。但具体为什么开启 `MMU` 后处理器依旧能够找到紧跟的 `sbi call`，没人能够知道了，因为后来这个 `BUG` 自动消失了。

陷入 `M态` 没有成功返回，也就是进入了 `opensbi` 管控的区域没有返回，我应该怎么追踪这个过程呢？在遇到这个 `BUG` 之前，我使用的是 `qemu` 内置的 `opensbi`，这显然是没法追踪的，因此我听从了学长的建议，对 `opensbi` 的源码自行进行了编译，即按照本文 `Lab 0` 提到的方法，获得了 `opensbi` 的 `.bin` 文件。这个做法有什么好处呢？就是因为我们是根据 `opensbi` 的源码进行编译的，所以我们也可以往源码中加入一些 `debug` 信号来打印，从而追踪处理器陷入 `M态` 的过程，笔者最终发现 `BUG` 的原因是处理器在 `opensbi` 中发生了异常，其实还是映射的时候出了问题。

进行到这里，笔者的 `FibOS` 就有了虚拟内存管理机制。
