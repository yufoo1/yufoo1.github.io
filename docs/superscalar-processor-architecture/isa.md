---
sidebar_position: 5
---
# 指令集体系

## 精简指令集概述

### MIPS指令集

1. `op==000_xxx`时，表示分支和跳转指令（`000000`、`000001`除外），这些指令都是直接跳转类型的（`PC-relative`）；
2. `op==001_xxx`时，表示含有立即数的算术操作指令；
3. `op==100_xxx`时，表示访问存储器的`load`类型的指令；
4. `op==101_xxx`时，表示访问存储器的`store`类型的指令；
5. `op==000_000(Special)`、`000_001(RegImm)`、`011_100(Special2)`和`010_000(COP0)`这四个值时，有着特殊的含义，需要进一步解码才能够知道操作的类型。

在`Special`和`Special2`区域，需要使用指令当中的`Bit[5:0]`才可以进一步区分指令的类型。
