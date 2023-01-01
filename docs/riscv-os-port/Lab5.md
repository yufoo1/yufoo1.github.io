---
sidebar_position: 6
---
# Lab 5：文件系统

`Lab 5` 需要驱动 `SD` 卡，直接用两位学长中的 `Sd.c` 和 `Sd.h`就行。怎么用呢？我们需要像 `MOS` 一样，生成“磁盘”镜像文件，也就是 `Sd` 卡的镜像文件，生成镜像文件之后，就需要调整文件系统进程与镜像文件的交互方式，这里要调用 `Sd.c` 中的 `sdRead` 和 `sdWrite`，需要封装成系统调用，其他部分的代码几乎不需要做什么改动。

## 文件系统进程号

在 `Lab 5`阶段，笔者完整地嵌入了文件系统的代码，并将原先 `MOS` 杂乱的代码进行了整理，将文件系统部分显式地归入用户进程，并且定义静态变量指示文件系统进程号，这样就不要求文件系统一定要按照以前 `MOS` 中必须要建立为第一个进程。

## 控制台输入

笔者成功移植了从控制台读入字符的功能，原理是通过设置 `UART` 的 `MMIO` 空间，通过轮训访问其是否接受到字符，如果接受到则返回。

```c
inline int _getchar(void)
{
    int* uartRegRXFIFO = (int*)(uartBaseAddr + UART_REG_RXFIFO);
	u_int ret = readl(uartRegRXFIFO);
    while (ret & UART_RXFIFO_EMPTY) {
        ret = readl(uartRegRXFIFO);
    }
    if ((ret & UART_RXFIFO_DATA) == '\r')
        return '\n';
    return ret & UART_RXFIFO_DATA;
}
```

在用户态可以通过系统调用实现字符读入，而进入内核态则通过上述定义的 `_getchar` 接口从 `UART` 指定地址读入字符并返回。

## SD 卡驱动

在 `Lab 5`，笔者需要驱动学长们写好的 `SD` 卡驱动，首先需要在 `qemu` 启动参数中添加：

````
-drive file=fs.img,if=sd,format=raw
````

在提供给我的 `sd` 驱动中，主要是利用两个接口，分别是：

```c
int sdRead(u_char *buf, u_longlong startSector, u_int sectorNumber);
int sdWrite(u_char *buf, u_longlong startSector, u_int sectorNumber);
```

`sdRead` 用于从 `SD` 中读入数据，第一个参数代表将数据读入到哪个地址，第二个参数用于代表开始读取数据的扇区号，第三个参数用于代表需要读入多少个扇区的数据。

`sdWrite` 用于向 `SD` 中写入数据，第一个参数代表将哪个地址写入，第二个参数用于代表开始写入数据的扇区号，第三个参数用于代表需要写入多少个扇区的数据。

笔者将 `SD` 卡的读写封装成为了系统调用函数供用户态使用，目前已成功验证在内核态写入数据后可以正常读取。

## 文件系统镜像

类似于 `MOS`，我们同样需要为 `SD` 卡生成相应的镜像来对其进行使用，同时在镜像生成的过程也要对镜像进行初始化，比如加载超级块。

生成镜像的方法是用 `MOS` 原来的 `fsformat.c`，该程序运行于本机操作系统之上，独立于 `FibOS`，具体 `Makefile` 写法如下，其中 `FSIMGFILES` 为需要提前写入磁盘的文件：

```makefile
fs.img: $(FSIMGFILES)
	dd if=/dev/zero of=./fs.img bs=4096 count=1024 2>/dev/null
	gcc ./tool/fsformat.c -o fsformat -m32
	chmod +x fsformat
	./fsformat ./fs.img $(FSIMGFILES)
```

需要说明的是，在 `Lab 5`阶段，笔者只将 `motd` 和 `newmotd` 两个文件预先写入磁盘，其他文件仍然以全局变量的形式链接入内核，在进程创建的时候加载进用户空间使用。

## 文件系统进程

文件系统的生成过程与用户进程类似，笔者为了将其相关文件与应用程序区分开，将其放入了 `user/fs` 文件夹中，而用户程序放入 `user/app` 文件夹中，注意笔者将 `serv.c` 文件重命名为 `fsProcess.c` ，用于指代文件系统进程运行在其上，在生成 `fsProcess.x` 的时候需要将 `user/lib` 下的所有文件一同链接，用以生成完整的文件系统进程。

## 文件系统

在 `FibOS` 中，文件系统由以下结构构成：

* 三种文件：file.c、console.c、pipe.c
* 用户进程载体：fsProcess.c
* 缓冲块和文件操作：fs.c
* 文件描述符：fd.c
* 文件系统与其他进程的通讯方式：fsipc.c

> 由于时间缘故，文件系统部分仅完成了代码移植，架构梳理，重写了很多`Makefile`，但是功能已经来不及进行测试了。
