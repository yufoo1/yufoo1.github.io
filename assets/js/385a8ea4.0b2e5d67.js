"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8805],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6},c="\u6307\u4ee4\u89e3\u7801",i={unversionedId:"superscalar-processor-architecture/decode",id:"superscalar-processor-architecture/decode",title:"\u6307\u4ee4\u89e3\u7801",description:"\u5728\u8d85\u6807\u91cf\u5904\u7406\u5668\u4e2d\uff0c\u5373\u4f7f\u662fRISC\u6307\u4ee4\u96c6\uff0c\u4ecd\u5b58\u5728\u4e00\u4e9b\u6307\u4ee4\u4e0d\u80fd\u4f7f\u7528\u4e00\u822c\u6307\u4ee4\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u9700\u8981\u7279\u6b8a\u5904\u7406\uff0c\u4f8b\u5982\u6709\u4e9b\u6307\u4ee4\u7684\u76ee\u7684\u5bc4\u5b58\u5668\u4e2a\u6570\u591a\u4e8e\u4e00\u4e2a\uff0c\u8fd9\u4f1a\u5f71\u54cd\u5bc4\u5b58\u5668\u91cd\u547d\u540d\u7684\u8fc7\u7a0b\uff1b\u518d\u4f8b\u5982\uff0c\u6709\u4e9bRISC\u6307\u4ee4\u96c6\u652f\u6301\u6bcf\u6761\u6307\u4ee4\u90fd\u53ef\u4ee5\u6761\u4ef6\u6307\u4ee4\uff0c\u8fd9\u6837\u7684\u6307\u4ee4\u5728\u89e3\u7801\u65f6\u9700\u8981\u8fdb\u884c\u7279\u6b8a\u5904\u7406\u7b49\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u7279\u6b8a\u7684\u6307\u4ee4\u4f7f\u7528\u7684\u9891\u7387\u5e76\u4e0d\u9ad8\uff0c\u6ca1\u6709\u5fc5\u8981\u8ba9\u540e\u9762\u7684\u6d41\u6c34\u7ebf\u589e\u52a0\u786c\u4ef6\u6765\u5bf9\u5b83\u4eec\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u9700\u8981\u5728\u89e3\u7801\u9636\u6bb5\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u666e\u901a\u7684\u6307\u4ee4\uff0c\u540e\u9762\u7684\u6d41\u6c34\u7ebf\u6309\u7167\u4e00\u822c\u6307\u4ee4\u7684\u5904\u7406\u65b9\u5f0f\u6765\u6267\u884c\u5b83\u4eec\u3002",source:"@site/docs/superscalar-processor-architecture/decode.md",sourceDirName:"superscalar-processor-architecture",slug:"/superscalar-processor-architecture/decode",permalink:"/docs/superscalar-processor-architecture/decode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/superscalar-processor-architecture/decode.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6307\u4ee4\u96c6\u4f53\u7cfb",permalink:"/docs/superscalar-processor-architecture/isa"},next:{title:"\u5bc4\u5b58\u5668\u91cd\u547d\u540d",permalink:"/docs/superscalar-processor-architecture/register-renaming"}},s={},p=[{value:"\u6307\u4ee4\u7f13\u5b58",id:"\u6307\u4ee4\u7f13\u5b58",level:2}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6307\u4ee4\u89e3\u7801"},"\u6307\u4ee4\u89e3\u7801"),(0,o.kt)("p",null,"\u5728\u8d85\u6807\u91cf\u5904\u7406\u5668\u4e2d\uff0c\u5373\u4f7f\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"RISC"),"\u6307\u4ee4\u96c6\uff0c\u4ecd\u5b58\u5728\u4e00\u4e9b\u6307\u4ee4\u4e0d\u80fd\u4f7f\u7528\u4e00\u822c\u6307\u4ee4\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u9700\u8981\u7279\u6b8a\u5904\u7406\uff0c\u4f8b\u5982\u6709\u4e9b\u6307\u4ee4\u7684\u76ee\u7684\u5bc4\u5b58\u5668\u4e2a\u6570\u591a\u4e8e\u4e00\u4e2a\uff0c\u8fd9\u4f1a\u5f71\u54cd\u5bc4\u5b58\u5668\u91cd\u547d\u540d\u7684\u8fc7\u7a0b\uff1b\u518d\u4f8b\u5982\uff0c\u6709\u4e9b",(0,o.kt)("inlineCode",{parentName:"p"},"RISC"),"\u6307\u4ee4\u96c6\u652f\u6301\u6bcf\u6761\u6307\u4ee4\u90fd\u53ef\u4ee5\u6761\u4ef6\u6307\u4ee4\uff0c\u8fd9\u6837\u7684\u6307\u4ee4\u5728\u89e3\u7801\u65f6\u9700\u8981\u8fdb\u884c\u7279\u6b8a\u5904\u7406\u7b49\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u7279\u6b8a\u7684\u6307\u4ee4\u4f7f\u7528\u7684\u9891\u7387\u5e76\u4e0d\u9ad8\uff0c\u6ca1\u6709\u5fc5\u8981\u8ba9\u540e\u9762\u7684\u6d41\u6c34\u7ebf\u589e\u52a0\u786c\u4ef6\u6765\u5bf9\u5b83\u4eec\u8fdb\u884c\u5904\u7406\uff0c\u8fd9\u9700\u8981\u5728\u89e3\u7801\u9636\u6bb5\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u666e\u901a\u7684\u6307\u4ee4\uff0c\u540e\u9762\u7684\u6d41\u6c34\u7ebf\u6309\u7167\u4e00\u822c\u6307\u4ee4\u7684\u5904\u7406\u65b9\u5f0f\u6765\u6267\u884c\u5b83\u4eec\u3002"),(0,o.kt)("h2",{id:"\u6307\u4ee4\u7f13\u5b58"},"\u6307\u4ee4\u7f13\u5b58"),(0,o.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11",(0,o.kt)("inlineCode",{parentName:"p"},"I-Cache"),"\u7f3a\u5931\u5e26\u6765\u7684\u5f71\u54cd\uff0c\u5904\u7406\u5668\u53ef\u4ee5\u5728\u53d6\u6307\u4ee4\u9636\u6bb5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"I-Cache"),"\u4e2d\u53d6\u51fa\u7684\u6307\u4ee4\u4e2a\u6570\u591a\u4e8e\u6bcf\u5468\u671f\u53ef\u4ee5\u89e3\u7801\u7684\u6307\u4ee4\u4e2a\u6570\uff0c\u8fd9\u5c31\u9700\u8981\u5728\u53d6\u6307\u4ee4\u9636\u6bb5\u548c\u89e3\u7801\u9636\u6bb5\u4e4b\u95f4\u52a0\u5165\u4e00\u4e2a\u7f13\u5b58\uff0c\u7528\u6765\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"I-Cache"),"\u53d6\u51fa\u7684\u6240\u6709\u6307\u4ee4\u4fdd\u5b58\u8d77\u6765\uff0c\u8fd9\u4e2a\u7f13\u5b58\u79f0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"\u6307\u4ee4\u7f13\u5b58(Instruction Buffer)")))}u.isMDXComponent=!0}}]);