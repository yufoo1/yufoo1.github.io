"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:7},a="\u540e\u8bb0",p={unversionedId:"riscv-os-port/postscript",id:"riscv-os-port/postscript",title:"\u540e\u8bb0",description:"\u9057\u61be\u7684\u662f\uff0c\u6700\u7ec8\u5e76\u6ca1\u6709\u5982\u6211\u5f53\u521d\u671f\u76fc\u7684\u90a3\u6837\uff0c\u5728\u6211\u81ea\u5df1\u7684 FibOS \u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c Shell\uff0c\u4f46\u8fd9\u786e\u5b9e\u662f\u6211\u503c\u5f97\u7eaa\u5ff5\u7684\u7b2c\u4e00\u6b21\u79fb\u690d\u7ecf\u5386\u3002\u5176\u5b9e\u4efb\u52a1\u521a\u53d1\u5e03\u65f6\uff0c\u6709\u4e0d\u5c11\u5c0f\u4f19\u4f34\u90fd\u5e0c\u671b\u6765\u53c2\u4e0e\u8fd9\u9879\u4efb\u52a1\uff0c\u751a\u81f3\u79fb\u690d\u7fa4\u7684\u4eba\u6570\u8fbe\u5230\u4e86\u4e00\u767e\u4f59\u53f7\u4eba\uff0c\u53ef\u6162\u6162\u5730\uff0c\u7b14\u8005\u53d1\u73b0\u8eab\u8fb9\u4ecd\u5728\u575a\u6301\u7684\u4f19\u4f34\u8d8a\u6765\u8d8a\u5c11\uff0c\u4e0d\u77e5\u9053\u6700\u7ec8\u6709\u6ca1\u6709\u8d85\u8fc7\u4e09\u4e2a\uff0c\u800c\u79fb\u690d\u7684\u96be\u5ea6\u53c8\u8d8a\u6765\u8d8a\u5927\uff0c\u5176\u5b9e\u8fd9\u79cd\u611f\u89c9\u771f\u7684\u633a\u7edd\u671b\u3001\u633a\u5b64\u72ec\u7684\uff0c\u8ba9\u6211\u5728\u53d7\u963b\u65f6\u65e0\u6570\u904d\u60f3\u627e\u9000\u8def\uff0c\u60f3\u8981\u653e\u5f03\uff0c\u540e\u6094\u5f53\u521d\u4e3a\u4ec0\u4e48\u8981\u53c2\u4e0e\u8fdb\u6765\uff0c\u56e0\u4e3a\u9664\u4e86\u52a9\u6559\uff0c\u51e0\u4e4e\u6ca1\u6709\u4eba\u53ef\u4ee5\u4ea4\u6d41\uff0c\u9664\u4e86 riscv \u6807\u51c6\u548c\u5f00\u6e90\u4ee3\u7801\uff0c\u4e5f\u6ca1\u6709\u4ec0\u4e48\u4fdd\u59c6\u7ea7\u6559\u7a0b\u6765\u5b66\u4e60\u3002\u4f46\u60f3\u4e86\u60f3\uff0c\u8fd8\u662f\u54ac\u7259\u575a\u6301\u5427\uff0c\u6bd5\u7adf\u5f53\u521d\u9009\u62e9 riscv\uff0c\u6709\u5f88\u5927\u539f\u56e0\u5c31\u662f\u56e0\u4e3a\u5b83\u6ca1\u6709\u6307\u5bfc\u4e66\uff0c\u800c\u6ca1\u6709\u6307\u5bfc\u4e66\uff0c\u5c31\u5f88\u53ef\u80fd\u6ca1\u4ec0\u4e48\u4eba\u505a\uff0c\u6ca1\u4ec0\u4e48\u4eba\u505a\u6211\u5c31\u60f3\u505a\u3002\u6700\u540e\u966a\u6211\u8d70\u4e0b\u6765\u7684\u662f\u53e6\u5916\u4e24\u4f4d\u79fb\u690d arm \u7684\u5144\u5f1f\u4ee5\u53ca\u8010\u5fc3\u89e3\u7b54\u4e86\u6211\u65e0\u6570\u95ee\u9898\u7684\u9648\u5b66\u957f\u3001\u90ed\u5b66\u957f\u3002\u867d\u7136\u5f88\u660e\u663e\uff0c\u6211\u5728 riscv \u79fb\u690d\u4e0a\u53d6\u5f97\u7684\u6210\u679c\u8fdc\u8fdc\u4e0d\u5982\u90a3\u4e24\u4f4d\u5144\u5f1f\uff0c\u4ed6\u4eec\u4e0d\u4ec5\u8fd0\u884c\u4e86 Shell\uff0c\u8fd8\u6210\u529f\u9a71\u52a8\u8d77\u663e\u793a\u5668\u6765\u8fd0\u884c Shell\u3002\u6bd4\u8d77\u4ed6\u4eec\uff0c\u6211\u7684\u6210\u679c\u7740\u5b9e\u6709\u4e9b\u8bb8\u5bd2\u9178\u3002\u4f46\u6bd5\u7adf\u6211\u5728\u5176\u4e0a\u9762\u6295\u5165\u4e86\u5f88\u591a\uff0c\u5f88\u591a\u7ecf\u5386\u4e5f\u88ab\u5176\u6d88\u8017\uff0c\u8fd9\u4e2a\u5b66\u671f\u6211\u4e00\u5927\u534a\u7684\u7126\u8651\u6216\u8bb8\u90fd\u6765\u81ea\u4e8e\u79fb\u690d\u8fd9\u9879\u4efb\u52a1\uff0c\u53e6\u4e00\u5c0f\u90e8\u5206\u6765\u6e90\u4e8e\u9f99\u82af\u676f\uff0c\u7279\u522b\u662f\u8fd1\u51e0\u5929\uff0c\u6211\u77e5\u9053\u961f\u53cb\u5728\u7b49\u7740\u6211\u56de\u53bb\u5199\u6838\u5fc3\uff0c\u800c\u79fb\u690d\u51e0\u5929\u53c8\u6ca1\u4ec0\u4e48\u8fdb\u5c55\uff0c\u5bfc\u81f4\u6211\u6574\u591c\u6574\u591c\u5730\u7761\u4e0d\u7740\u89c9\uff0c\u663c\u591c\u98a0\u5012\uff0c\u53ef\u80fd\u8eba\u5728\u5e8a\u4e0a\u4e24\u4e09\u70b9\u89c9\u5f97\u7761\u4e0d\u7740\u8d77\u6765\u5199\u4ee3\u7801\uff0c\u56e0\u4e3a\u6211\u89c9\u5f97\u6211\u79bb\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\u5c31\u5dee\u4e34\u95e8\u4e00\u811a\uff0c\u800c\u53ea\u8981\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u5c31\u6709\u53ef\u80fd\u8d77\u6765 Shell\uff0c\u4f46\u8fd9\u4e00\u811a\u5728\u7b54\u8fa9\u524d\u4e5f\u6ca1\u6709\u8e22\u51fa\u53bb\u3002",source:"@site/docs/riscv-os-port/postscript.md",sourceDirName:"riscv-os-port",slug:"/riscv-os-port/postscript",permalink:"/docs/riscv-os-port/postscript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/riscv-os-port/postscript.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Lab 5\uff1a\u6587\u4ef6\u7cfb\u7edf",permalink:"/docs/riscv-os-port/Lab5"},next:{title:"Design Pattern in CPU",permalink:"/docs/category/design-pattern-in-cpu"}},c={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,o.kt)("p",null,"\u9057\u61be\u7684\u662f\uff0c\u6700\u7ec8\u5e76\u6ca1\u6709\u5982\u6211\u5f53\u521d\u671f\u76fc\u7684\u90a3\u6837\uff0c\u5728\u6211\u81ea\u5df1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"FibOS")," \u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Shell"),"\uff0c\u4f46\u8fd9\u786e\u5b9e\u662f\u6211\u503c\u5f97\u7eaa\u5ff5\u7684\u7b2c\u4e00\u6b21\u79fb\u690d\u7ecf\u5386\u3002\u5176\u5b9e\u4efb\u52a1\u521a\u53d1\u5e03\u65f6\uff0c\u6709\u4e0d\u5c11\u5c0f\u4f19\u4f34\u90fd\u5e0c\u671b\u6765\u53c2\u4e0e\u8fd9\u9879\u4efb\u52a1\uff0c\u751a\u81f3\u79fb\u690d\u7fa4\u7684\u4eba\u6570\u8fbe\u5230\u4e86\u4e00\u767e\u4f59\u53f7\u4eba\uff0c\u53ef\u6162\u6162\u5730\uff0c\u7b14\u8005\u53d1\u73b0\u8eab\u8fb9\u4ecd\u5728\u575a\u6301\u7684\u4f19\u4f34\u8d8a\u6765\u8d8a\u5c11\uff0c\u4e0d\u77e5\u9053\u6700\u7ec8\u6709\u6ca1\u6709\u8d85\u8fc7\u4e09\u4e2a\uff0c\u800c\u79fb\u690d\u7684\u96be\u5ea6\u53c8\u8d8a\u6765\u8d8a\u5927\uff0c\u5176\u5b9e\u8fd9\u79cd\u611f\u89c9\u771f\u7684\u633a\u7edd\u671b\u3001\u633a\u5b64\u72ec\u7684\uff0c\u8ba9\u6211\u5728\u53d7\u963b\u65f6\u65e0\u6570\u904d\u60f3\u627e\u9000\u8def\uff0c\u60f3\u8981\u653e\u5f03\uff0c\u540e\u6094\u5f53\u521d\u4e3a\u4ec0\u4e48\u8981\u53c2\u4e0e\u8fdb\u6765\uff0c\u56e0\u4e3a\u9664\u4e86\u52a9\u6559\uff0c\u51e0\u4e4e\u6ca1\u6709\u4eba\u53ef\u4ee5\u4ea4\u6d41\uff0c\u9664\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"riscv")," \u6807\u51c6\u548c\u5f00\u6e90\u4ee3\u7801\uff0c\u4e5f\u6ca1\u6709\u4ec0\u4e48\u4fdd\u59c6\u7ea7\u6559\u7a0b\u6765\u5b66\u4e60\u3002\u4f46\u60f3\u4e86\u60f3\uff0c\u8fd8\u662f\u54ac\u7259\u575a\u6301\u5427\uff0c\u6bd5\u7adf\u5f53\u521d\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"riscv"),"\uff0c\u6709\u5f88\u5927\u539f\u56e0\u5c31\u662f\u56e0\u4e3a\u5b83\u6ca1\u6709\u6307\u5bfc\u4e66\uff0c\u800c\u6ca1\u6709\u6307\u5bfc\u4e66\uff0c\u5c31\u5f88\u53ef\u80fd\u6ca1\u4ec0\u4e48\u4eba\u505a\uff0c\u6ca1\u4ec0\u4e48\u4eba\u505a\u6211\u5c31\u60f3\u505a\u3002\u6700\u540e\u966a\u6211\u8d70\u4e0b\u6765\u7684\u662f\u53e6\u5916\u4e24\u4f4d\u79fb\u690d ",(0,o.kt)("inlineCode",{parentName:"p"},"arm")," \u7684\u5144\u5f1f\u4ee5\u53ca\u8010\u5fc3\u89e3\u7b54\u4e86\u6211\u65e0\u6570\u95ee\u9898\u7684\u9648\u5b66\u957f\u3001\u90ed\u5b66\u957f\u3002\u867d\u7136\u5f88\u660e\u663e\uff0c\u6211\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"riscv")," \u79fb\u690d\u4e0a\u53d6\u5f97\u7684\u6210\u679c\u8fdc\u8fdc\u4e0d\u5982\u90a3\u4e24\u4f4d\u5144\u5f1f\uff0c\u4ed6\u4eec\u4e0d\u4ec5\u8fd0\u884c\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Shell"),"\uff0c\u8fd8\u6210\u529f\u9a71\u52a8\u8d77\u663e\u793a\u5668\u6765\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Shell"),"\u3002\u6bd4\u8d77\u4ed6\u4eec\uff0c\u6211\u7684\u6210\u679c\u7740\u5b9e\u6709\u4e9b\u8bb8\u5bd2\u9178\u3002\u4f46\u6bd5\u7adf\u6211\u5728\u5176\u4e0a\u9762\u6295\u5165\u4e86\u5f88\u591a\uff0c\u5f88\u591a\u7ecf\u5386\u4e5f\u88ab\u5176\u6d88\u8017\uff0c\u8fd9\u4e2a\u5b66\u671f\u6211\u4e00\u5927\u534a\u7684\u7126\u8651\u6216\u8bb8\u90fd\u6765\u81ea\u4e8e\u79fb\u690d\u8fd9\u9879\u4efb\u52a1\uff0c\u53e6\u4e00\u5c0f\u90e8\u5206\u6765\u6e90\u4e8e\u9f99\u82af\u676f\uff0c\u7279\u522b\u662f\u8fd1\u51e0\u5929\uff0c\u6211\u77e5\u9053\u961f\u53cb\u5728\u7b49\u7740\u6211\u56de\u53bb\u5199\u6838\u5fc3\uff0c\u800c\u79fb\u690d\u51e0\u5929\u53c8\u6ca1\u4ec0\u4e48\u8fdb\u5c55\uff0c\u5bfc\u81f4\u6211\u6574\u591c\u6574\u591c\u5730\u7761\u4e0d\u7740\u89c9\uff0c\u663c\u591c\u98a0\u5012\uff0c\u53ef\u80fd\u8eba\u5728\u5e8a\u4e0a\u4e24\u4e09\u70b9\u89c9\u5f97\u7761\u4e0d\u7740\u8d77\u6765\u5199\u4ee3\u7801\uff0c\u56e0\u4e3a\u6211\u89c9\u5f97\u6211\u79bb\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\u5c31\u5dee\u4e34\u95e8\u4e00\u811a\uff0c\u800c\u53ea\u8981\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\uff0c\u6211\u5c31\u6709\u53ef\u80fd\u8d77\u6765 ",(0,o.kt)("inlineCode",{parentName:"p"},"Shell"),"\uff0c\u4f46\u8fd9\u4e00\u811a\u5728\u7b54\u8fa9\u524d\u4e5f\u6ca1\u6709\u8e22\u51fa\u53bb\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u52aa\u529b\u63a8\u8fdb\uff0c\u6211\u5728\u4f11\u606f\u65f6\u4e5f\u4f1a\u56de\u60f3\u8d77\u5f88\u591a\u81ea\u5df1\u6781\u6709\u53ef\u80fd\u653e\u5f03\u7684\u65f6\u673a\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Lab 3")," \u53d1\u73b0\u5730\u5740\u6620\u5c04\u8981\u91cd\u65b0\u6784\u5efa\uff0c\u5f53\u65f6\u6211\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"MMU")," \u4f9d\u65e7\u6ca1\u4ec0\u4e48\u8ba4\u8bc6\uff1b\u6bd4\u5982\u91cd\u65b0\u6784\u5efa\u5730\u5740\u6620\u5c04\u65f6\u53d1\u73b0\u5904\u7406\u5668\u884c\u4e3a\u8be1\u5f02\u5f97\u96be\u4ee5\u7406\u89e3\u3001\u5185\u6838\u9677\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"M\u6001")," \u4e0d\u56de\u53bb\u4e86\uff1b\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Lab 5")," \u53d1\u73b0\u81ea\u5df1\u5bf9\u4e8e\u78c1\u76d8\u3001\u6587\u4ef6\u7684\u7406\u89e3\uff0c\u5176\u5b9e\u6ca1\u6709\u90a3\u4e48\u6df1\u3002\u4f46\u5373\u4f7f\u5230\u4e86\u7b54\u8fa9\u524d\u7684\u8fd9\u4e00\u6bb5\u65f6\u95f4\uff0c\u6211\u4f9d\u7136\u5728\u60f3\u529e\u6cd5\u89e3\u51b3\u89e3\u51b3\u7528\u6237\u6001\u8bfb\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"SD")," \u5361\u7684\u95ee\u9898\uff0c\u5e0c\u671b\u6709\u5947\u8ff9\u51fa\u73b0\u3002\u53ef\u5c31\u50cf\u5f3a\u54e5\u8bf4\u7684\uff0c\u64cd\u4f5c\u7cfb\u7edf\u91cc\u9762\u6ca1\u6709\u9b54\u6cd5\uff0c\u6211\u6b6a\u66f2\u4e86\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\uff0c\u662f\u6307\u6211\u65e2\u7136\u6ca1\u6709\u5199\u5bf9\uff0c\u5b83\u53c8\u600e\u4e48\u53ef\u80fd\u6309\u7167\u6211\u60f3\u8c61\u7684\u65b9\u5f0f\u53bb\u8fd0\u884c\u5462\uff1f\u6240\u4ee5\u6211\u8ba4\u4e3a\uff0c\u8fd9\u4e24\u4e2a\u591a\u6708\u5bf9\u6211\u6765\u8bf4\u5982\u6b64\u8270\u8f9b\u7684\u539f\u56e0\uff0c\u4e00\u4e2a\u662f\u4e0d\u65ad\u751f\u51fa\u7684\u5b64\u72ec\u611f\u3001\u632b\u8d25\u611f\uff0c\u53e6\u4e00\u4e2a\u5c31\u662f\u8d8a\u5230\u540e\u9762\uff0c\u77e5\u8bc6\u8d8a\u4e0d\u624e\u5b9e\uff0c\u5bfc\u81f4\u63a8\u8fdb\u53d8\u5f97\u5c24\u4e3a\u5403\u529b\u3002"),(0,o.kt)("p",null,"\u5b9e\u8bdd\u5b9e\u8bf4\uff0c\u6211\u5230\u73b0\u5728\u786e\u5b9e\u6ca1\u6709\u4ec0\u4e48\u5f88\u5927\u7684\u6210\u5c31\u611f\uff0c\u53ea\u662f\u89c9\u5f97\u81ea\u5df1\u505a\u5230\u4e86\u4e00\u4ef6\u5f88\u591a\u4eba\u6ca1\u6709\u505a\u5230\u7684\u4e8b\u60c5\uff0c\u5c31\u662f\u628a\u79fb\u690d\u575a\u6301\u505a\u4e0b\u53bb\uff0c\u53ef\u80fd\u6211\u7684\u610f\u5fd7\u529b\u901a\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\u5f97\u5230\u4e86\u4e0d\u5c0f\u7684\u953b\u70bc\u3002\u800c\u4eca\u5929\u4e4b\u540e\uff0c\u6211\u77ed\u65f6\u95f4\u5185\u4f30\u8ba1\u4e0d\u518d\u6709\u65f6\u95f4\u6765\u5b8c\u5584\u6211\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"FibOS")," \u5185\u6838\uff0c\u56e0\u4e3a\u6211\u9700\u8981\u5168\u8eab\u5fc3\u5730\u6295\u5165\u5230\u9f99\u82af\u6bd4\u8d5b\u5f53\u4e2d\uff0c\u53ef\u6211\u6709\u4e00\u79cd\u60f3\u6cd5\uff0c\u5c31\u662f\u5728\u4e4b\u540e\uff0c\u53ea\u8981\u6709\u673a\u4f1a\uff0c\u6211\u8fd8\u662f\u4f1a\u60f3\u53bb\u7ee7\u7eed\u5b8c\u5584\u6211\u7684\u5185\u6838\uff0c\u6765\u5f25\u8865\u8fd9\u6b21\u7f3a\u61be\u3002\u56de\u5934\u6765\u770b\uff0c\u5176\u5b9e\u9009\u62e9\u4efb\u52a1\u8fd8\u662f\u8981\u8003\u8651\u81ea\u5df1\u7684\u80fd\u529b\uff0c\u6bd5\u7adf\u6709\u4e9b\u4e8b\u4e0d\u662f\u4e00\u8154\u70ed\u8840\u5c31\u53ef\u4ee5\u505a\u6210\u7684\uff0c\u4f46\u6211\u4e5f\u8ba4\u4e3a\uff0c\u5728\u4e00\u5b9a\u7684\u9650\u5ea6\u4e0b\uff0c\u80fd\u529b\u5f31\uff0c\u591a\u82b1\u4e00\u4e9b\u65f6\u95f4\uff0c\u4e5f\u662f\u6709\u53ef\u80fd\u53d6\u5f97\u4ee4\u81ea\u5df1\u6ee1\u610f\u7684\u7ed3\u679c\u7684\u3002"))}u.isMDXComponent=!0}}]);