"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3292],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},C=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(t),C=p,s=k["".concat(l,".").concat(C)]||k[C]||N[C]||i;return t?a.createElement(s,r(r({ref:n},m),{},{components:t})):a.createElement(s,r({ref:n},m))}));function s(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,r=new Array(i);r[0]=C;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[k]="string"==typeof e?e:p,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}C.displayName="MDXCreateElement"},5594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),p=(t(7294),t(3905));const i={sidebar_position:3},r="Lab 2\uff1aMMU \u8bbe\u7f6e\u548c\u5185\u5b58\u7ba1\u7406",o={unversionedId:"riscv-os-port/Lab2",id:"riscv-os-port/Lab2",title:"Lab 2\uff1aMMU \u8bbe\u7f6e\u548c\u5185\u5b58\u7ba1\u7406",description:"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40",source:"@site/docs/riscv-os-port/Lab2.md",sourceDirName:"riscv-os-port",slug:"/riscv-os-port/Lab2",permalink:"/docs/riscv-os-port/Lab2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/riscv-os-port/Lab2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lab 1\uff1a\u5185\u6838\u542f\u52a8\u548c Printf \u7684\u5b9e\u73b0",permalink:"/docs/riscv-os-port/Lab1"},next:{title:"Lab 3\uff1a\u5f02\u5e38\u5904\u7406\u548c\u8fdb\u7a0b\u7ba1\u7406",permalink:"/docs/riscv-os-port/Lab3"}},l={},d=[{value:"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40",id:"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40",level:2},{value:"\u5185\u5b58\u7ba1\u7406",id:"\u5185\u5b58\u7ba1\u7406",level:2},{value:"\u5efa\u7acb\u6620\u5c04",id:"\u5efa\u7acb\u6620\u5c04",level:2},{value:"\u5f00\u542f MMU",id:"\u5f00\u542f-mmu",level:2}],m={toc:d};function k(e){let{components:n,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"lab-2mmu-\u8bbe\u7f6e\u548c\u5185\u5b58\u7ba1\u7406"},"Lab 2\uff1aMMU \u8bbe\u7f6e\u548c\u5185\u5b58\u7ba1\u7406"),(0,p.kt)("h2",{id:"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40"},"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40"),(0,p.kt)("p",null,"\u8bbe\u8ba1\u5185\u5b58\u5e03\u5c40\uff0c\u53ef\u4ee5\u8bf4\u662f\u79fb\u690d\u65f6\u9047\u5230\u7684\u7b2c\u4e8c\u4e2a\u96be\u9898\u3002\u7b2c\u4e00\u4e2a\u662f\u5185\u6838\u542f\u52a8\uff0c\u540e\u9762\u8fd8\u6709\u65e0\u6570\u4e2a\u96be\u9898\uff08\u5570\u55e6\u4e00\u53e5\uff0c\u7b2c\u4e00\u6b21\u505a\u611f\u89c9\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"qemu")," \u4e0a\u8dd1\u8d77\u6765\u7cfb\u7edf\u662f\u65e0\u6bd4\u7384\u5b66\u7684\uff0c\u800c\u4e14\u8fd0\u884c\u53c2\u6570\u7684\u542b\u4e49\u8fd8\u5f88\u96be\u67e5\uff0c\u5b8c\u5168\u4e0d\u77e5\u9053\u5b83\u5728\u5e72\u4ec0\u4e48\u3002\u5e76\u4e14\u5404\u79cd\u539f\u56e0\u90fd\u53ef\u80fd\u8d77\u4e0d\u6765\u5185\u6838\uff0c\u7b14\u8005\u56e0\u4e3a\u94fe\u63a5\u7684\u95ee\u9898\u88ab\u5361\u4e86\u597d\u51e0\u5929\uff0c\u6700\u7ec8\u9ebb\u70e6\u90ed\u5b66\u957f\u5230\u534a\u591c\u4e00\u70b9\u624d\u89e3\u51b3\uff0c\u611f\u8c22\uff09\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"32")," \u4f4d\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"64")," \u4f4d\u7684\u5185\u5b58\u5e03\u5c40\u53ef\u4ee5\u8bf4\u662f\u5929\u5dee\u5730\u522b\uff0c\u57fa\u672c\u5b8c\u5168\u8981\u91cd\u65b0\u8bbe\u8ba1\uff0c\u5e76\u4e14\u7531\u4e8e\u7b14\u8005\u4ece\u6765\u6ca1\u505a\u8fc7\u8fd9\u79cd\u4e8b\uff0c\u800c\u4e14\u5f53\u65f6 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 2")," \u7684\u9636\u6bb5\u8fd8\u4e0d\u600e\u4e48\u4e86\u89e3 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V"),"\uff0c\u56e0\u6b64\u8bbe\u8ba1\u4e86\u5f88\u957f\u65f6\u95f4\uff0c\u4e00\u904d\u4e00\u904d\u5730\u9ebb\u70e6\u52a9\u6559\u5b66\u957f\u76d1\u5de5\u3002\u5148\u63d0\u4e00\u53e5\u7b14\u8005\u8d70\u8fc7\u7684\u5f2f\u8def\u5427\uff0c\u7531\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u6ca1\u6709\u6307\u5bfc\u4e66\uff0c\u7b14\u8005\u5c31\u53bb\u53c2\u8003\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"ARM")," \u7684\u79fb\u690d\u6307\u5bfc\u4e66\uff0c\u91cc\u9762\u63d0\u5230\u4e00\u822c ",(0,p.kt)("inlineCode",{parentName:"p"},"ARM")," \u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"\u5185\u6838\u7a7a\u95f4"),"\u653e\u5728\u9ad8\u5730\u5740\uff0c\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u7a7a\u95f4")," \u653e\u5728\u4f4e\u5730\u5740\uff0c\u56e0\u6b64\u7b14\u8005\u6700\u521d\u4e5f\u5c3d\u91cf\u6309\u7167\u8fd9\u4e2a\u601d\u8def\u8bbe\u8ba1\uff0c\u5e76\u4e14\u53d7\u5230\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"MOS")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"32")," \u4f4d\u5185\u5b58\u5e03\u5c40\u7684\u5f71\u54cd\uff0c\u5bfc\u81f4\u6211\u6700\u5f00\u59cb\u7684\u6784\u60f3\u662f\u8fd9\u6837\u7684\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"64")," \u4f4d\u7684\u7a7a\u95f4\uff0c\u5982\u679c\u8fd8\u662f\u6a21\u4eff ",(0,p.kt)("inlineCode",{parentName:"p"},"MOS")," \u5c06\u7528\u6237\u7a7a\u95f4\u653e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"0x80000000")," \u4e0b\u9762\uff0c\u90a3\u4e48 ",(0,p.kt)("inlineCode",{parentName:"p"},"64")," \u4f4d\u7684\u7a7a\u95f4\u57fa\u672c\u5c31\u88ab\u6d6a\u8d39\u6389\u4e86\uff0c\u56e0\u6b64\u6211\u5f53\u65f6\u5e0c\u671b\u4fee\u6539 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 1")," \u7684\u5185\u6838\u94fe\u63a5\u811a\u672c\uff0c\u5e0c\u671b\u628a\u5185\u6838\u76f4\u63a5\u653e\u5728\u4e00\u4e2a\u7279\u522b\u9ad8\u7684\u5730\u5740\uff0c\u4e3a\u7528\u6237\u8fdb\u7a0b\u9884\u7559\u51fa\u4e86\u6781\u5927\u7684\u7a7a\u95f4\uff0c\u4f46\u53d1\u73b0\u8fd9\u6837\u5185\u6838\u4f3c\u4e4e\u6839\u672c\u8d77\u4e0d\u6765\u3002\u4e0e\u5b66\u957f\u4ea4\u6d41\u540e\u53d1\u73b0\uff0c\u662f\u56e0\u4e3a\u5728\u521d\u59cb\u5316\u5185\u5b58\u7ba1\u7406\u4e4b\u524d\uff0c\u8fd8\u6ca1\u6709\u542f\u52a8 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \uff0c\u5c06\u5185\u6838\u5730\u5740\u8bbe\u7f6e\u5f97\u90a3\u4e48\u9ad8\uff0c\u5904\u7406\u5668\u6839\u672c\u627e\u4e0d\u5230\u5185\u6838\u5165\u53e3\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5f53\u65f6\u6211\u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u7684\u77e5\u8bc6\u8fd8\u76f8\u5f53\u6a21\u7cca\uff0c\u73b0\u5728\u6211\u77e5\u9053\u4e86\u6ca1\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU"),"\u8fd8\u60f3\u628a\u5185\u6838\u653e\u5728\u9ad8\u5730\u5740\uff0c\u53ef\u4ee5\u76f4\u63a5\u628a\u5b83\u653e\u5728\u7269\u7406\u5730\u5740\u7684\u9ad8\u4f4d\uff0c\u56e0\u4e3a\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u4e4b\u524d\uff0c\u5904\u7406\u5668\u90fd\u662f\u64cd\u4f5c\u7684\u7269\u7406\u5730\u5740\u3002")),(0,p.kt)("p",null,"\u6240\u4ee5\u6211\u53c8\u9677\u5165\u4e86\u50f5\u5c40\uff0c\u4e8e\u662f\u53c8\u8bde\u751f\u4e86\u4e00\u4e2a\u60f3\u6cd5\uff0c\u6211\u53bb\u7f51\u4e0a\u641c\u7d22\u4e86\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"Linux")," \u7cfb\u7edf\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u4e0a\u7684\u5185\u5b58\u5e03\u5c40\uff0c\u867d\u7136\u7b14\u8005\u5b9e\u73b0\u7684\u64cd\u4f5c\u7cfb\u7edf\u6bd4 ",(0,p.kt)("inlineCode",{parentName:"p"},"Linux")," \u4e0d\u77e5\u9053\u7b80\u5355\u591a\u5c11\u500d\uff0c\u4f46\u8fd8\u662f\u6709\u501f\u9274\u610f\u4e49\u7684\uff0c\u4e0d\u8fc7\u501f\u9274\u5f97\u4e0d\u600e\u4e48\u6b63\u786e\u3002\u5c31\u662f\u5b83\u8ba9\u6211\u60f3\u7740\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"0x80200000")," \u8fdb\u5165\u5185\u6838\uff0c\u7136\u540e\u7b80\u5355\u8bbe\u7f6e\u4e0b\u9875\u8868\uff0c\u518d\u8df3\u8f6c\u81f3\u4e00\u4e2a\u7279\u522b\u9ad8\u7684\u5730\u5740\uff0c\u8fd9\u4e2a\u9875\u8868\u5728\u8df3\u8f6c\u540e\u53ef\u4ee5\u820d\u5f03\u6389\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Linux")," \u4e2d\u6709\u7c7b\u4f3c\u7684\u4f5c\u7528\u7684\u4e1c\u897f\u3002\u4f46\u662f\u8fd9\u6837\u5c31\u4f7f\u5f97\u5185\u5b58\u5e03\u5c40\u53d8\u5f97\u590d\u6742\u4e86\u8d77\u6765\uff0c\u76f8\u5f53\u4e8e\u6211\u9700\u8981\u5728\u4f4e\u4f4d\u4fdd\u7559\u4e00\u4e2a\u5c0f\u7247\u6bb5\u7ed9\u5185\u6838\uff0c\u5b83\u5f88\u53ef\u80fd\u63d2\u5728\u7528\u6237\u7a7a\u95f4\u4e2d\u95f4\uff0c\u56e0\u6b64\u8bbe\u8ba1\u4e86\u534a\u5929\u4e5f\u6ca1\u6709\u4e00\u4e2a\u7279\u522b\u6ee1\u610f\u7684\u7ed3\u679c\u3002"),(0,p.kt)("p",null,"\u4f46\u6700\u7ec8\u5b66\u957f\u70b9\u9192\u4e86\u6211\uff0c\u5176\u5b9e\u7528\u6237\u7a7a\u95f4\u7528\u4e0d\u4e86\u591a\u5927\u7684\u5730\u5740\uff0c\u800c\u4e14 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u8ddf ",(0,p.kt)("inlineCode",{parentName:"p"},"ARM")," \u4e0d\u4e00\u6837\uff0c\u5b83\u7684\u5185\u5b58\u5e03\u5c40\u662f\u76f8\u5f53\u81ea\u7531\u7684\uff0c\u6839\u672c\u6ca1\u6709\u5185\u6838\u7a7a\u95f4\u5728\u4e0a\uff0c\u7528\u6237\u7a7a\u95f4\u5728\u4e0b\u7684\u9650\u5236\uff0c\u4f46\u6211\u4f9d\u65e7\u6ca1\u6709\u653e\u5f03 ",(0,p.kt)("inlineCode",{parentName:"p"},"MOS")," \u5bf9\u6211\u7684\u5f71\u54cd\uff0c\u6700\u7ec8\u8bbe\u8ba1\u51fa\u4e86\u4e00\u7248\u8fd9\u6837\u7684\u5e03\u5c40\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"/*\n o    16E -----------\x3e  +----------------------------+------------0xffff_ffff_ffff_ffff\n o                      |                            |\n o                      |           ...              |\n o                      |                            |\n o               -----\x3e +----------------------------+------------0xffff_ffff_8000_0000\n o                      |                            |\n o                      |           MMIO             |\n o                      |                            |\n o               -----\x3e +----------------------------+------------0xffff_ffff_0000_0000\n o                      |                            |\n o                      |                            |\n o                      |           ...              |\n o                      |                            |\n o                      |                            |\n o        UTOP   -----\x3e +----------------------------+------------0x0000_0001_8000_0000\n o                      |          ENVS              |     PDMAP\n o      UENVS    -----\x3e +----------------------------+------------0x0000_0001_4000_0000\n o                      |          PAGES             |     PDMAP\n o      UPAGES   -----\x3e +----------------------------+------------0x0000_0001_0000_0000\n o                      |         User VPT           |     PDMAP\n o        UVPT   -----\x3e +----------------------------+------------0x0000_0000_c000_0000\n o Physics Memory Max -/|                            |\n o                      |                            |\n o                      |                            |\n o                      |                            |\n o                      |            ...             |\n o                      |                            |\n o                      |                            |\n o                      |                            |\n o  VPT,KSTACKTOP-----\x3e +----------------------------+------------0x0000_0000_8040 0000\n o                      |       Kernel Stack         |\n o                      +----------------------------+-----------\n o                      |       Kernel Text          |\n o                      +----------------------------+-----------\n o                      |   Interrupts & Exception   |\n o    KERNBASE   -----\x3e +----------------------------+------------0x0000_0000_8020_0000\n o                      |           SBI              |\n o   QEMU ENTRY  -----\x3e +----------------------------+------------0x0000_0000_8000_0000\n o   UXSTACKTOP       -/|    user exception stack    |\n o    USTACKTOP  -----\x3e +----------------------------+------------0x0000_0000_7fff_f000\n o                      |     normal user stack      |\n o               -----\x3e +----------------------------+------------0x0000_0000_7fff_e000\n o                      |                            |\n o                      |                            |\n o                      |        User Space          |\n o                      |                            |\n o                      |                            |\n o       ------------\x3e  +----------------------------+ -----------0x0000_0000_4000_0000\n o                      |                            |\n o                      |                            |\n o                      |                            |\n o                      |                            |\n o       ------------\x3e  +----------------------------+ ----------- 0\n*/\n\n")),(0,p.kt)("p",null,"\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u6211\u662f\u7528\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u5e38\u7528\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Sv39")," \u5185\u5b58\u5e03\u5c40\uff0c\u5373\u865a\u62df\u5730\u5740\u7684\u7a7a\u95f4\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"1 << 39")," \u4e2a\u5b57\u8282\u5927\u5c0f\uff0c\u800c\u7269\u7406\u5730\u5740\u7684\u7a7a\u95f4\u6211\u9009\u62e9\u7684\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"1 << 30")," \u4e2a\u5b57\u8282\u5927\u5c0f\u3002"),(0,p.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u6709\u5fc5\u8981\u8fd9\u4e48\u590d\u6742\u4e48\uff1f\u90a3\u5f53\u7136\u662f\u6ca1\u6709\uff0c\u800c\u4e14\u79fb\u690d ",(0,p.kt)("inlineCode",{parentName:"p"},"ARM")," \u7684\u5f3a\u54e5\uff08\u4ed6\u4eec\u5f53\u65f6\u5728\u505a ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 4"),"\uff09\u8bf4\uff0c\u4ed6\u4eec\u7cfb\u7edf\u8c03\u7528\u7b80\u5355\u7684\u53ef\u4ee5\uff0c\u4f46\u53ea\u8981\u6d89\u53ca\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"ENVS")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"PAGES")," \u5c31\u4f1a\u51fa\u9505\uff0c\u56e0\u6b64\u7b14\u8005\u540e\u9762\u7d22\u6027\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"ENVS")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"PAGES")," \u7684\u533a\u57df\u53d6\u6d88\u6389\uff0c\u56e0\u4e3a\u8ba1\u7b97\u540e\u53d1\u73b0\u629b\u5f00\u8fdb\u7a0b\u4e0a\u4e0b\u6587\uff0c\u5176\u5b9e\u6240\u6709\u7269\u7406\u9875\u9762\u6570\u7ec4\u548c\u8fdb\u7a0b\u63a7\u5236\u5757\u6570\u7ec4\u52a0\u8d77\u6765\u4e5f\u5360\u4e0d\u4e86\u5185\u6838\u591a\u5927\u7a7a\u95f4\uff0c\u56e0\u6b64\u5c31\u5c06\u8fd9\u4e24\u5757\u533a\u57df\u5408\u5e76\u8fdb\u4e86\u5185\u6838\uff0c\u7136\u540e\u5355\u72ec\u7528\u4e00\u90e8\u5206\u7a7a\u95f4\u5b58\u50a8\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u6784\u6210\u7684\u6570\u7ec4\uff0c\u7269\u7406\u9875\u9762\u6570\u7ec4\u548c\u8fdb\u7a0b\u63a7\u5236\u5757\u6570\u7ec4\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\u51fa\u73b0\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u91cd\u65b0\u8003\u91cf ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 2")," \u90a3\u4e9b\u5f88\u591a\u5947\u5947\u602a\u602a\u7684\u8f6c\u6362\u5b8f\u4e0e\u8f6c\u6362\u51fd\u6570\uff0c",(0,p.kt)("del",{parentName:"p"},"\u5220\u603b\u6bd4\u6539\u5feb"),"\u3002\u4e8b\u5b9e\u4e0a\uff0c\u7b14\u8005\u8fd8\u662f\u82b1\u4e86\u534a\u5468\u65f6\u95f4\u91cd\u5199\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 2"),"\u90a3\u4e9b\u8f6c\u6362\u5b8f\u548c\u8f6c\u6362\u51fd\u6570\uff0c\u4f46\u6700\u7ec8\u57fa\u672c\u90fd\u6ca1\u6709\u7528\u4e0a\uff0c\u53c8\u591a\u8d70\u4e86\u4e9b\u5f2f\u8def\u3002"),(0,p.kt)("p",null,"\u6700\u7ec8\uff0c\u7b14\u8005\u9009\u62e9\u5c06\u5185\u6838\u5730\u5740\u7a7a\u95f4\u4ecd\u7136\u653e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"0x80200000~0x80400000"),"\uff0c\u7136\u540e\u5c06\u7528\u6237\u7a7a\u95f4\u653e\u5230\u4e86\u5f88\u9ad8\u7684\u4f4d\u7f6e\uff0c\u8fd9\u6837\u5c31\u6ca1\u6709\u7531\u4e8e\u6ca1\u6709\u521d\u59cb\u9875\u8868\uff0c\u5bfc\u81f4\u9ad8\u5730\u5740\u65e0\u6cd5\u8bbf\u95ee\u7684\u95ee\u9898\uff0c",(0,p.kt)("del",{parentName:"p"},"\u5c5e\u4e8e\u662f\u653e\u98de\u81ea\u6211"),"\uff0c\u4f46\u975e\u5e38\u7b80\u5355\uff0c\u6bd5\u7adf\u518d\u91cd\u590d\u4e00\u904d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u6ca1\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"ARM")," \u90a3\u4e2a\u5185\u6838\u7a7a\u95f4\u5728\u4e0a\uff0c\u7528\u6237\u7a7a\u95f4\u5728\u4e0b\u7684\u523b\u677f\u89c4\u5b9a\uff0c",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"RISC-V"),"\u662f\u5b8c\u5168\u81ea\u7531\u7684\uff01")),(0,p.kt)("p",null,"\u7136\u540e\u4ecb\u7ecd\u4e00\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},"Sv39")," \u7684\u5185\u5b58\u5e03\u5c40\uff0c\u987e\u540d\u601d\u4e49\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Sv39")," \u53ea\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"64")," \u4f4d\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"39")," \u4f4d\uff0c\u6beb\u65e0\u7591\u95ee\u8db3\u591f ",(0,p.kt)("inlineCode",{parentName:"p"},"MOS")," \u4f7f\u7528\uff0c\u4e0d\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"Sv39")," \u9700\u8981\u4f7f\u7528\u4e09\u7ea7\u9875\u8868\uff0c\u610f\u5473\u7740\u6211\u4eec\u539f\u5148\u5f88\u591a\u5185\u5b58\u7ba1\u7406\u7684\u4ee3\u7801\u90fd\u9700\u8981\u91cd\u5199\uff0c\u4f46\u5176\u5b9e\u4e5f\u5c31\u662f\u591a\u52a0\u4e00\u6b21\u9875\u8868\u7684\u8bbf\u95ee\u3002\u5bf9\u4e8e\u9875\u76ee\u5f55\u800c\u8a00\uff0c\u76ee\u5f55\u504f\u79fb\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"38~30")," \u4f4d\uff1b\u5bf9\u4e8e\u4e8c\u7ea7\u9875\u76ee\u5f55\u800c\u8a00\uff0c\u76ee\u5f55\u504f\u79fb\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"29~21")," \u4f4d\uff1b\u5bf9\u4e8e\u4e09\u7ea7\u9875\u8868\u800c\u8a00\uff0c\u9875\u8868\u504f\u79fb\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"20~12")," \u4f4d\uff1b\u9875\u5185\u504f\u79fb\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"11~0")," \u4f4d\uff0c\u5373\u4e00\u9875\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"4096")," \u4e2a\u5b57\u8282\u3002"),(0,p.kt)("h2",{id:"\u5185\u5b58\u7ba1\u7406"},"\u5185\u5b58\u7ba1\u7406"),(0,p.kt)("p",null,"\u6ce8\u610f\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"boot")," \u5f00\u5934\u7684\u51fd\u6570\u7b14\u8005\u5df2\u7ecf\u57fa\u672c\u5220\u6389\u4e86\uff0c\u5e76\u4e14\u5185\u6838\u7684\u9875\u76ee\u5f55\u6211\u4eec\u4e5f\u5df2\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"start.S")," \u4e2d\u5b9a\u4e49\u5b8c\u6210\uff0c\u8fd9\u91cc\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"pgdir_walk")," \u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\u8bf4\u660e\u4e8c\u7ea7\u9875\u8868\u4e0e\u4e09\u7ea7\u9875\u8868\u7684\u5dee\u5f02\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"int pgdir_walk(Pde *pgdir, u_longlong va, int create, Pte **ppte)\n{\n    Pde *pgdir_entryp;\n    Pmde *pgmedir_entryp;\n    Pte *pgtable_entryp;\n    struct Page *ppage;\n    pgdir_entryp = pgdir + PDX(va);\n    if ((*pgdir_entryp & PTE_V) == 0)\n    {\n        if (create)\n        {\n            if (page_alloc(&ppage) == -E_NO_MEM)\n            {\n                return -E_NO_MEM;\n            }\n            *pgdir_entryp = page2pa(ppage);\n            *pgdir_entryp = (*pgdir_entryp) | PTE_V | PTE_R;\n      sfence_vma();\n            ppage->pp_ref++;\n        }\n        else\n        {\n            *ppte = 0;\n            return 0;\n        }\n    }\n\n    pgmedir_entryp = ((Pmde *)KADDR(PTE_ADDR(*pgdir_entryp))) + PMDX(va);\n    if ((*pgmedir_entryp & PTE_V) == 0)\n    {\n        if (create)\n        {\n            if (page_alloc(&ppage) == -E_NO_MEM)\n            {\n                return -E_NO_MEM;\n            }\n            *pgmedir_entryp = page2pa(ppage);\n            *pgmedir_entryp = (*pgmedir_entryp) | PTE_V | PTE_R;\n      sfence_vma();\n            ppage->pp_ref++;\n        }\n        else\n        {\n            *ppte = 0;\n            return 0;\n        }\n    }\n    *ppte = (Pte *)KADDR(PTE_ADDR(*pgmedir_entryp)) + PTX(va);\n    return 0;\n}\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"sfence_vma();")," \u7528\u4e8e\u5237\u65b0\u5904\u7406\u5668\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"TLB"),"\uff0c\u6211\u4eec\u6bcf\u6b21\u4fee\u6539\u9875\u8868\u5185\u5bb9\u540e\uff0c\u53ef\u80fd ",(0,p.kt)("inlineCode",{parentName:"p"},"TLB")," \u4e0e\u9875\u8868\u4f1a\u51fa\u73b0",(0,p.kt)("inlineCode",{parentName:"p"},"\u4e0d\u4e00\u81f4"),"\u7684\u73b0\u8c61\uff0c\u4e3a\u4e86\u4fdd\u6301\u4e00\u81f4\u6027\uff0c\u6211\u4eec\u9700\u8981\u8c03\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"sfence_vma();"),"\uff0c\u628a ",(0,p.kt)("inlineCode",{parentName:"p"},"TLB")," \u7684\u5185\u5bb9\u5168\u90e8\u5237\u65b0\uff0c\u5176\u5b9e\u4e5f\u53ef\u4ee5\u53ea\u5237\u65b0\u67d0\u4e00\u4e2a\u865a\u62df\u5730\u5740\u7684\u5185\u5bb9\uff0c",(0,p.kt)("del",{parentName:"p"},"\u4e0d\u8fc7\u6ca1\u5fc5\u8981\uff0c\u4e0d\u5728\u4e4e\u6027\u80fd"),"\u3002")),(0,p.kt)("h2",{id:"\u5efa\u7acb\u6620\u5c04"},"\u5efa\u7acb\u6620\u5c04"),(0,p.kt)("p",null,"\u518d\u5b8c\u6210\u6240\u6709\u5185\u5b58\u7ba1\u7406\u76f8\u5173\u51fd\u6570\u7684\u9002\u914d\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u5185\u6838\u9875\u76ee\u5f55\u4e2d\u6784\u5efa\u865a\u62df\u5730\u5740\u4e0e\u7269\u7406\u5730\u5740\u7684\u6620\u5c04\uff0c\u8fd9\u6837\u5f15\u51fa\u4e00\u4e2a\u7b14\u8005\u7406\u89e3\u5f88\u4e45\u7684\u95ee\u9898\uff0c\u4e5f\u662f\u8fd9\u4e2a\u95ee\u9898\u8feb\u4f7f\u7b14\u8005\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 3")," \u8fd4\u5de5\u2014\u2014\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u4e2d\uff0c\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU"),"  \u524d\u548c\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u540e\uff0c\u5904\u7406\u5668\u90fd\u662f\u5982\u4f55\u5bfb\u5740\u7684\u5462\uff1f"),(0,p.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e2a\u95ee\u9898\u7684\u7b54\u6848\u73b0\u5728\u770b\u6765\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u7b14\u8005\u82b1\u8d39\u4e86\u5f88\u591a\u65f6\u95f4\u8c03\u7814\uff0c\u8ddf\u5b66\u957f\u4ea4\u6d41\uff0c\u624d\u771f\u6b63\u7406\u6e05\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u6ca1\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"MIPS32")," \u4e2d",(0,p.kt)("inlineCode",{parentName:"p"},"kseg2"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"kseg1"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"kseg0"),"\u4ee5\u53ca",(0,p.kt)("inlineCode",{parentName:"p"},"kuseg")," \u7684\u6982\u5ff5\uff0c\u4f17\u6240\u5468\u77e5\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"R3000")," \u624d\u5bf9\u8fd9\u4e9b\u5730\u5740\u8bbf\u95ee\u65f6\uff0c\u6709\u4e0d\u540c\u7684\u89c4\u5219\uff0c\u4f46\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u4efb\u4f55\u6620\u5c04\u89c4\u5219\u90fd\u6ca1\u6709\uff0c\u5728\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u524d\uff0c\u5904\u7406\u5668\u6309\u7167\u7269\u7406\u5730\u5740\u8bbf\u95ee\uff0c\u5728\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u540e\uff0c\u5904\u7406\u5668\u6309\u7167 ",(0,p.kt)("inlineCode",{parentName:"p"},"satp")," \u7684\u8bb0\u5f55\u7684\u9875\u8868\u7269\u7406\u5730\u5740\uff0c\u4ece\u865a\u62df\u5730\u5740\u8bbf\u95ee\u7269\u7406\u5730\u5740\u3002\u7b54\u6848\u5c31\u662f\u8fd9\u6837\u7b80\u5355\uff0c\u7406\u6e05\u8fd9\u70b9\u540e\uff0c\u4e00\u5207\u90fd\u53d8\u5f97\u5f02\u5e38\u5bb9\u6613\uff1a\u6211\u53ea\u9700\u8981\u5728\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u524d\uff0c\u5efa\u7acb\u597d\u865a\u62df\u5730\u5740\u548c\u7269\u7406\u5730\u5740\u7684\u6620\u5c04\u5173\u7cfb\u5c31\u53ef\u4ee5\u4e86\uff0c\u6bd4\u5982\u5e0c\u671b\u76f4\u63a5\u6620\u5c04\uff0c\u90a3\u5c31\u8ba9\u9875\u8868\u91cc\u9762\u865a\u62df\u5730\u5740\u5bf9\u5e94\u7684\u7269\u7406\u5730\u5740\u7b49\u4e8e\u81ea\u8eab\uff0c\u5e76\u4e14\u5728\u63d2\u5165\u8fd9\u90e8\u5206\u9875\u9762\u65f6\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},".text")," \u6bb5\u5e94\u5f53\u8bbe\u7f6e",(0,p.kt)("inlineCode",{parentName:"p"},"Valid"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Read"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Dirty"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Access"),"\u6743\u9650\u4f4d\uff0c\u5176\u4ed6\u6bb5\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"Valid"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Write"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Read"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Dirty"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"Access")," \u6743\u9650\u4f4d\u3002"),(0,p.kt)("p",null,"\u90a3\u5bf9\u4e8e\u5185\u6838\u800c\u8a00\uff0c\u6211\u4eec\u9700\u8981\u6784\u5efa\u600e\u6837\u7684\u6620\u5c04\u5462\uff1f\u4e0d\u8a00\u800c\u55bb\uff0c\u5c31\u50cf ",(0,p.kt)("inlineCode",{parentName:"p"},"MOS")," \u4e2d\u5185\u6838\u6001\u662f\u76f4\u63a5\u6620\u5c04\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u5f53\u6211\u4eec\u5904\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"\u5185\u6838\u6001")," \u7684\u65f6\u5019\uff0c\u5730\u5740\u90fd\u662f\u76f4\u63a5\u6620\u5c04\u7684\uff0c\u56e0\u6b64\u7b14\u8005\u5c06\u5168\u90e8\u7269\u7406\u5730\u5740 ",(0,p.kt)("inlineCode",{parentName:"p"},"0x80000000~0xC0000000")," \u6620\u5c04\u81f3 ",(0,p.kt)("inlineCode",{parentName:"p"},"0x80000000~0xC0000000")," \u7684\u865a\u62df\u5730\u5740\u7a7a\u95f4\uff0c\u8fd9\u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 2"),"\u5df2\u7ecf\u8db3\u591f\u4e86\uff0c\u8fd8\u6709\u5173\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"MMIO")," \u4ee5\u53ca ",(0,p.kt)("inlineCode",{parentName:"p"},"\u4e2d\u65ad\u5f02\u5e38\u5904\u7406\u51fd\u6570"),"\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u6570\u7ec4")," \u7684\u6620\u5c04\uff0c\u540e\u9762\u7528\u5230\u65f6\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,p.kt)("h2",{id:"\u5f00\u542f-mmu"},"\u5f00\u542f MMU"),(0,p.kt)("p",null,"\u5728\u8fd9\u91cc\u7b14\u8005\u9047\u5230\u4e86\u8fc4\u4eca\u4e3a\u6b62\u6700\u7384\u5b66\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"BUG"),"\uff0c\u505a\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 3")," \u7684\u65f6\u5019\u624d\u53d1\u73b0\uff0c\u5728\u70e4\u6f06\u5361\u4e86\u6574\u6574\u4e00\u5468\uff0c\u5947\u602a\u7684\u73b0\u8c61\u4ee4\u5b66\u957f\u90fd\u65e0\u6cd5\u7406\u89e3\u3002\u5176\u5b9e\u7b14\u8005\u505a\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 3"),"\u65f6\uff0c\u5df2\u7ecf\u5c06\u7528\u6237\u7a0b\u5e8f\u6253\u5305\u8ddf\u5185\u6838\u94fe\u63a5\uff0c\u5e76\u5728\u521b\u5efa\u7528\u6237\u7a0b\u5e8f\u8fdb\u7a0b\u65f6\u6210\u529f\u5c06\u7528\u6237\u7a0b\u5e8f\u6620\u5c04\u81f3\u7528\u6237\u7a7a\u95f4\uff0c\u4f46\u6b64\u65f6\u53d1\u73b0\u5176\u5b9e\u7b14\u8005\u4ece\u6765\u6ca1\u6709\u6210\u529f\u6253\u5f00\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU"),"\uff0c",(0,p.kt)("del",{parentName:"p"},"\u5f53\u65f6\u4e50\u6b7b\u6211\u4e86\uff0c\u4f46\u4e50\u5b8c\u5c31\u662f\u7edd\u671b\uff0c\u8fd4\u5de5\u65f6\u8003\u8651\u8fc7\u65e0\u6570\u904d\u653e\u5f03"),"\u3002"),(0,p.kt)("p",null,"\u6700\u521d\u7b14\u8005\u662f\u8fd9\u6837\u201c\u5f00\u542f\u201d ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},'void mmu_init()\n{\n    asm volatile(\n        "li     t0, 0x8000000000000000\\n\\t"\n        "csrr   t0, satp\\n\\t");\n}\n')),(0,p.kt)("p",null,"\u8fd9\u662f\u7b14\u8005\u5b8c\u5168\u4e0d\u4e86\u89e3 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u65f6\u5199\u4e0b\u7684\u4ee3\u7801\uff0c\u5176\u5b9e\u4e5f\u4e0d\u662f\u81ea\u5df1\u5199\u7684\uff0c\u6bd5\u7adf\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u80af\u5b9a\u662f\u8981\u67e5\u8be2\u8d44\u6599\u7684\uff0c\u4e0d\u77e5\u9053\u8bfb\u8005\u80fd\u4e0d\u80fd\u53d1\u73b0\uff0c\u4e0a\u9762\u5185\u5d4c\u7684\u6c47\u7f16\u4ec5\u4ec5\u5b9e\u73b0\u4e86\u8bfb\u53d6 ",(0,p.kt)("inlineCode",{parentName:"p"},"satp")," \u7684\u503c\uff0c\u53ef\u4ee5\u8bf4\u5565\u90fd\u4e0d\u5e72\uff0c\u8fd9\u6837\u600e\u4e48\u53ef\u80fd\u5f00\u542f\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU"),"\uff0c\u4f46\u662f\u6211\u8fd4\u5de5\u7684\u65f6\u5019\u4e5f\u5fd8\u4e86\u5f53\u65f6\u8fd9\u4e24\u884c\u4ee3\u7801\u662f\u4ece\u54ea\u91cc\u6284\u7684\u4e86\u3002"),(0,p.kt)("p",null,"\u67e5\u9605 ",(0,p.kt)("inlineCode",{parentName:"p"},"RISC-V")," \u6807\u51c6\u4e2d\u5173\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"stap")," \u5bc4\u5b58\u5668\u7684\u63cf\u8ff0\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"stap")," \u4f4e ",(0,p.kt)("inlineCode",{parentName:"p"},"44")," \u4f4d\u7528\u4e8e\u8bb0\u5f55\u9875\u76ee\u5f55\u7269\u7406\u5730\u5740\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"PPN")," \uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"59~44")," \u4f4d\u662f\u4fdd\u7559\u4f4d\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"63~60")," \u4f4d\u7528\u6765\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"mode")," \uff0c\u5982\u679c ",(0,p.kt)("inlineCode",{parentName:"p"},"mode")," \u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"0")," \u4ee3\u8868 ",(0,p.kt)("inlineCode",{parentName:"p"},"No translation or protection"),"\uff0c\u4ee3\u8868\u4e0d\u8fdb\u884c\u6620\u5c04\uff0c\u4e5f\u5c31\u662f\u8bf4\u865a\u62df\u5730\u5740\u548c\u7269\u7406\u5730\u5740\u76f4\u63a5\u5bf9\u5e94\uff0c\u6211\u4eec\u521a\u8fdb\u5165\u5185\u6838\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u5c31\u662f\u8fd9\u4e2a\u72b6\u6001\uff0c\u76f4\u63a5\u901a\u8fc7\u7269\u7406\u5730\u5740\u8bbf\u95ee\u5185\u5b58\uff1b\u6211\u4eec\u9009\u62e9\u7684\u5185\u5b58\u5e03\u5c40\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"Sv39")," \uff0c\u67e5\u8868\u53d1\u73b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"mode")," \u5e94\u8be5\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"8"),"\u3002\u4e4b\u540e\u5c31\u5f88\u660e\u6670\u4e86\uff0c\u6700\u521d\u7684\u5199\u6cd5\u7528\u4e8e\u6ca1\u6709\u5f80 ",(0,p.kt)("inlineCode",{parentName:"p"},"satp")," \u4e2d\u5199\u5165\u4efb\u4f55\u4e1c\u897f\uff0c\u4e5f\u5c31\u662f\u8bf4\u6ca1\u6709\u8bbe\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"mode"),"\uff0c\u662f\u4e0d\u53ef\u80fd\u6253\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u7684\u3002\u56e0\u6b64\uff0c\u6b63\u786e\u6253\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u7684\u4ee3\u7801\u662f\u8fd9\u6837\u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-c"},"void mmu_init() {\n    w_satp(MAKE_SATP(kernelPgdir)); // \u7528\u5230\u4e86 RISC-V \u5e38\u7528\u5b8f\n    sfence_vma(); // \u5e38\u7528\u5b8f\uff0c\u7528\u4e8e\u5237\u65b0 TLB\n}\n")),(0,p.kt)("p",null,"\u90a3\u7b14\u8005\u521a\u624d\u63d0\u5230\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"BUG")," \u662f\u4ec0\u4e48\u5462\uff1f\u5c31\u662f\u7b14\u8005\u5728\u6b63\u786e\u4e86\u89e3\u5e76\u5b9e\u73b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u7684\u5f00\u542f\u6d41\u7a0b\u540e\uff0c\u4f9d\u65e7\u6ca1\u6709\u6210\u529f\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU"),"\uff0c\u800c\u4e14\u8be1\u5f02\u7684\u662f\uff0c\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"sfence_vma();"),"\u540e\u9762\u7d27\u8ddf\u4e24\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"sbi call"),"\uff0c\u53ea\u53ef\u4ee5\u6267\u884c\u7b2c\u4e00\u4e2a\uff0c\u7b2c\u4e8c\u4e2a\u6267\u884c\u4e0d\u4e86\uff1b\u5220\u9664 ",(0,p.kt)("inlineCode",{parentName:"p"},"sfence_vma();"),"\u540e\uff0c\u5185\u6838\u53ef\u4ee5\u77ed\u6682\u8fd0\u884c\uff0c\u4f46\u8fd9\u663e\u7136\u662f\u4e0d\u88ab\u5141\u8bb8\u7684\uff0c\u6bd5\u7adf\u6253\u5f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u540e\u5fc5\u987b\u5237\u65b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"TLB"),"\uff0c\u539f\u6765 ",(0,p.kt)("inlineCode",{parentName:"p"},"TLB")," \u4e2d\u7684\u5185\u5bb9\u90fd\u662f\u4e0d\u53ef\u4fe1\u7684\uff1b\u66f4\u751a\uff0c\u6211\u5c1d\u8bd5\u968f\u4fbf\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"satp")," \u4e2d\u5199\u5165\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"PPN")," \u548c\u6b63\u786e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"mode"),"\uff0c\u5b83\u4f9d\u65e7\u80fd\u591f\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"sfence_vma();")," \u540e\u7d27\u8ddf\u7684\u4e00\u6761 ",(0,p.kt)("inlineCode",{parentName:"p"},"sbi call"),"\u3002\u8fd9\u4e2a\u9636\u6bb5\u662f\u7b14\u8005\u6700\u7edd\u671b\u7684\u9636\u6bb5\uff0c\u56e0\u4e3a\u5b66\u957f\u4ece\u6ca1\u89c1\u8fc7\u8fd9\u79cd\u60c5\u51b5\uff0c\u800c\u5b9e\u9645\u4e0a\uff0c\u4ece\u5185\u6838\u542f\u52a8\u5230\u8fd9\u4e00\u6b65\u7684\u8fc7\u7a0b\u76f8\u5f53\u7b80\u5355\uff0c\u4e5f\u53cd\u590d\u68c0\u67e5\u4e0d\u8fc7\uff0c\u7167\u7406\u8bf4\u4e0d\u5e94\u8be5\u51fa\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u786e\u5b9e\u51fa\u4e86\u95ee\u9898\u3002\u867d\u7136\u5b66\u957f\u6ca1\u89c1\u8fc7\uff0c\u4e0d\u8fc7\u63d0\u51fa\u4e86\u4e00\u79cd\u53ef\u80fd\u7684\u60c5\u51b5\uff0c\u5c31\u662f\u5904\u7406\u5668\u9677\u5165\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"M\u6001")," \u540e\u6ca1\u6709\u6210\u529f\u8fd4\u56de\u3002\u4f46\u5177\u4f53\u4e3a\u4ec0\u4e48\u5f00\u542f ",(0,p.kt)("inlineCode",{parentName:"p"},"MMU")," \u540e\u5904\u7406\u5668\u4f9d\u65e7\u80fd\u591f\u627e\u5230\u7d27\u8ddf\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"sbi call"),"\uff0c\u6ca1\u4eba\u80fd\u591f\u77e5\u9053\u4e86\uff0c\u56e0\u4e3a\u540e\u6765\u8fd9\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"BUG")," \u81ea\u52a8\u6d88\u5931\u4e86\u3002"),(0,p.kt)("p",null,"\u9677\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"M\u6001")," \u6ca1\u6709\u6210\u529f\u8fd4\u56de\uff0c\u4e5f\u5c31\u662f\u8fdb\u5165\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi")," \u7ba1\u63a7\u7684\u533a\u57df\u6ca1\u6709\u8fd4\u56de\uff0c\u6211\u5e94\u8be5\u600e\u4e48\u8ffd\u8e2a\u8fd9\u4e2a\u8fc7\u7a0b\u5462\uff1f\u5728\u9047\u5230\u8fd9\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"BUG")," \u4e4b\u524d\uff0c\u6211\u4f7f\u7528\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"qemu")," \u5185\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi"),"\uff0c\u8fd9\u663e\u7136\u662f\u6ca1\u6cd5\u8ffd\u8e2a\u7684\uff0c\u56e0\u6b64\u6211\u542c\u4ece\u4e86\u5b66\u957f\u7684\u5efa\u8bae\uff0c\u5bf9 ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi")," \u7684\u6e90\u7801\u81ea\u884c\u8fdb\u884c\u4e86\u7f16\u8bd1\uff0c\u5373\u6309\u7167\u672c\u6587 ",(0,p.kt)("inlineCode",{parentName:"p"},"Lab 0")," \u63d0\u5230\u7684\u65b9\u6cd5\uff0c\u83b7\u5f97\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},".bin")," \u6587\u4ef6\u3002\u8fd9\u4e2a\u505a\u6cd5\u6709\u4ec0\u4e48\u597d\u5904\u5462\uff1f\u5c31\u662f\u56e0\u4e3a\u6211\u4eec\u662f\u6839\u636e ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi")," \u7684\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u53ef\u4ee5\u5f80\u6e90\u7801\u4e2d\u52a0\u5165\u4e00\u4e9b ",(0,p.kt)("inlineCode",{parentName:"p"},"debug")," \u4fe1\u53f7\u6765\u6253\u5370\uff0c\u4ece\u800c\u8ffd\u8e2a\u5904\u7406\u5668\u9677\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"M\u6001")," \u7684\u8fc7\u7a0b\uff0c\u7b14\u8005\u6700\u7ec8\u53d1\u73b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"BUG")," \u7684\u539f\u56e0\u662f\u5904\u7406\u5668\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"opensbi")," \u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\uff0c\u5176\u5b9e\u8fd8\u662f\u6620\u5c04\u7684\u65f6\u5019\u51fa\u4e86\u95ee\u9898\u3002"),(0,p.kt)("p",null,"\u8fdb\u884c\u5230\u8fd9\u91cc\uff0c\u7b14\u8005\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"FibOS")," \u5c31\u6709\u4e86\u865a\u62df\u5185\u5b58\u7ba1\u7406\u673a\u5236\u3002"))}k.isMDXComponent=!0}}]);