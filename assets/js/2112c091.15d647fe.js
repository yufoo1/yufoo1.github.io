"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7303],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>N});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),m=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(a),u=i,N=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return a?t.createElement(N,r(r({ref:n},d),{},{components:a})):t.createElement(N,r({ref:n},d))}));function N(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[k]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var t=a(7462),i=(a(7294),a(3905));const l={sidebar_position:3},r="Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",o={unversionedId:"java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",id:"java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",title:"Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",description:"\u6982\u8ff0",source:"@site/docs/java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b.md",sourceDirName:"java-virtual-machine",slug:"/java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",permalink:"/docs/java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-virtual-machine/Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5783\u573e\u6536\u96c6\u5668\u4e0e\u5185\u5b58\u5206\u914d\u7b56\u7565",permalink:"/docs/java-virtual-machine/\u5783\u573e\u6536\u96c6\u5668\u4e0e\u5185\u5b58\u5206\u914d\u7b56\u7565"},next:{title:"\u673a\u5668\u5b66\u4e60",permalink:"/docs/category/\u673a\u5668\u5b66\u4e60"}},p={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Java \u5185\u5b58\u6a21\u578b",id:"java-\u5185\u5b58\u6a21\u578b",level:2},{value:"\u4e3b\u5185\u5b58\u4e0e\u5de5\u4f5c\u5185\u5b58",id:"\u4e3b\u5185\u5b58\u4e0e\u5de5\u4f5c\u5185\u5b58",level:3},{value:"\u5185\u5b58\u95f4\u4ea4\u4e92\u64cd\u4f5c",id:"\u5185\u5b58\u95f4\u4ea4\u4e92\u64cd\u4f5c",level:3},{value:"\u5bf9\u4e8e volatile \u578b\u53d8\u91cf\u7684\u7279\u6b8a\u89c4\u5219",id:"\u5bf9\u4e8e-volatile-\u578b\u53d8\u91cf\u7684\u7279\u6b8a\u89c4\u5219",level:3},{value:"\u539f\u5b50\u6027\u3001\u53ef\u89c1\u6027\u4e0e\u6709\u5e8f\u6027",id:"\u539f\u5b50\u6027\u53ef\u89c1\u6027\u4e0e\u6709\u5e8f\u6027",level:3}],d={toc:m};function k(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b"},"Java\u5185\u5b58\u6a21\u578b\u4e0e\u7ebf\u7a0b"),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u5185\u5b58\u6a21\u578b\u53ef\u4ee5\u7406\u89e3\u4e3a\u5728\u7279\u5b9a\u7684\u64cd\u4f5c\u534f\u8bae\u4e0b\uff0c\u5bf9\u7279\u5b9a\u7684\u5185\u5b58\u6216\u9ad8\u901f\u7f13\u5b58\u8fdb\u884c\u8bfb\u5199\u8bbf\u95ee\u7684\u8fc7\u7a0b\u62bd\u8c61\u3002\u4e0d\u540c\u67b6\u6784\u7684\u7269\u7406\u673a\u5668\u53ef\u4ee5\u62e5\u6709\u4e0d\u4e00\u6837\u7684\u5185\u5b58\u6a21\u578b\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u865a\u62df\u673a\u4e5f\u6709\u81ea\u5df1\u7684\u5185\u5b58\u6a21\u578b\uff0c\u5e76\u4e14\u4e0e\u5185\u5b58\u8bbf\u95ee\u64cd\u4f5c\u53ca\u786c\u4ef6\u7684\u7f13\u5b58\u8bbf\u95ee\u64cd\u4f5c\u5177\u6709\u9ad8\u5ea6\u7684\u53ef\u7c7b\u6bd4\u6027\u3002\u9664\u4e86\u589e\u52a0\u9ad8\u901f\u7f13\u5b58\u4e4b\u5916\uff0c\u4e3a\u4e86\u4f7f\u5904\u7406\u5668\u5185\u90e8\u7684\u8fd0\u7b97\u5355\u5143\u80fd\u5c3d\u53ef\u80fd\u88ab\u5145\u5206\u5229\u7528\uff0c\u5904\u7406\u5668\u53ef\u80fd\u4f1a\u5bf9\u8f93\u5165\u4ee3\u7801\u8fdb\u884c\u4e71\u5e8f\u6267\u884c\u4f18\u5316\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u865a\u62df\u673a\u7684\u5373\u65f6\u7f16\u8bd1\u5668\u4e2d\u4e5f\u6709\u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316\u3002"),(0,i.kt)("h2",{id:"java-\u5185\u5b58\u6a21\u578b"},"Java \u5185\u5b58\u6a21\u578b"),(0,i.kt)("p",null,"\u300aJava\u865a\u62df\u673a\u89c4\u5b9a\u300b\u4e2d\u66fe\u8bd5\u56fe\u5b9a\u4e49\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u6765\u5c4f\u853d\u5404\u79cd\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u8bbf\u95ee\u5dee\u5f02\uff0c\u4ee5\u5b9e\u73b0\u8ba9",(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u7a0b\u5e8f\u5728\u5404\u79cd\u5e73\u53f0\u4e0b\u90fd\u80fd\u8fbe\u5230\u4e00\u81f4\u7684\u5185\u5b58\u8bbf\u95ee\u6548\u679c\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u4e3b\u6d41\u7a0b\u5e8f\u8bed\u8a00\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"c++"),"\uff0c\u76f4\u63a5\u4f7f\u7528\u7269\u7406\u786c\u4ef6\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u6a21\u578b\u3002\u7531\u4e8e\u4e0d\u540c\u5e73\u53f0\u4e0a\u5185\u5b58\u6a21\u578b\u7684\u5dee\u5f02\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u5728\u4e00\u5957\u5e73\u53f0\u4e0a\u5e76\u53d1\u5b8c\u5168\u6b63\u5e38\uff0c\u800c\u5728\u53e6\u5916\u4e00\u5957\u5e73\u53f0\u4e0a\u5e76\u53d1\u8bbf\u95ee\u5374\u7ecf\u5e38\u51fa\u9519\u3002"),(0,i.kt)("h3",{id:"\u4e3b\u5185\u5b58\u4e0e\u5de5\u4f5c\u5185\u5b58"},"\u4e3b\u5185\u5b58\u4e0e\u5de5\u4f5c\u5185\u5b58"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u7684\u4e3b\u8981\u76ee\u7684\u662f\u5b9a\u4e49\u7a0b\u5e8f\u4e2d\u5404\u79cd\u53d8\u91cf\u7684\u8bbf\u95ee\u89c4\u5219\uff0c\u5373\u5173\u6ce8\u5728\u865a\u62df\u673a\u4e2d\u628a\u53d8\u91cf\u503c\u5b58\u50a8\u5230\u5185\u5b58\u548c\u4ece\u5185\u5b58\u4e2d\u53d6\u51fa\u53d8\u91cf\u503c\u8fd9\u6837\u7684\u5e95\u5c42\u7ec6\u8282\u3002\u6b64\u5904\u63d0\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u53d8\u91cf"),"\u5305\u62ec\u4e86\u5b9e\u4f8b\u5b57\u6bb5\u3001\u9759\u6001\u5b57\u6bb5\u548c\u6784\u6210\u6570\u7ec4\u5bf9\u8c61\u7684\u5143\u7d20\uff0c\u4e0d\u5305\u62ec\u5c40\u90e8\u53d8\u91cf\u4e0e\u65b9\u6cd5\u53c2\u6570\uff0c\u56e0\u4e3a\u540e\u8005\u662f\u7ebf\u7a0b\u79c1\u6709\u7684\uff0c\u4e0d\u5b58\u5728\u7ade\u4e89\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u89c4\u5b9a\u4e86\u6240\u6709\u7684\u53d8\u91cf\u90fd\u5b58\u50a8\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u5185\u5b58"),"\u4e2d\uff0c\u7269\u7406\u4e0a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u5185\u5b58"),"\u4ec5\u662f\u865a\u62df\u673a\u5185\u5b58\u7684\u4e00\u90e8\u5206\u3002\u6bcf\u6761\u7ebf\u7a0b\u8fd8\u6709\u81ea\u5df1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u5185\u5b58"),"\uff0c\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u4e2d\u4fdd\u5b58\u4e86\u88ab\u8be5\u7ebf\u7a0b\u4f7f\u7528\u7684\u53d8\u91cf\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u5185\u5b58\u526f\u672c"),"\uff0c\u7ebf\u7a0b\u5bf9\u53d8\u91cf\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u5fc5\u987b\u5728\u5de5\u4f5c\u5185\u5b58\u4e2d\u8fdb\u884c\uff0c\u800c\u4e0d\u80fd\u76f4\u63a5\u8bfb\u5199\u4e3b\u5185\u5b58\u4e2d\u7684\u6570\u636e\uff0c\u7ebf\u7a0b\u95f4\u53d8\u91cf\u503c\u7684\u4f20\u9012\u9700\u8981\u901a\u8fc7\u4e3b\u5185\u5b58\u6765\u5b8c\u6210\u3002"),(0,i.kt)("h3",{id:"\u5185\u5b58\u95f4\u4ea4\u4e92\u64cd\u4f5c"},"\u5185\u5b58\u95f4\u4ea4\u4e92\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5173\u4e8e\u4e3b\u5185\u5b58\u4e0e\u5de5\u4f5c\u5185\u5b58\u4e4b\u95f4\u5177\u4f53\u7684\u4ea4\u4e92\u534f\u8bae\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u4e2d\u5b9a\u4e49\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"8\u79cd"),"\u64cd\u4f5c\u6765\u5b8c\u6210\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u865a\u62df\u673a\u5b9e\u73b0\u65f6\u5fc5\u987b\u4fdd\u8bc1\u4e0b\u9762\u63d0\u53ca\u7684\u6bcf\u4e00\u79cd\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u7684\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u53d8\u91cf\u6807\u8bc6\u4e3a\u4e00\u6761\u7ebf\u7a0b\u72ec\u5360\u7684\u72b6\u6001\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"unlock"),"\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\u7684\u53d8\u91cf\u91ca\u653e\u51fa\u6765\uff0c\u91ca\u653e\u540e\u7684\u53d8\u91cf\u624d\u53ef\u4ee5\u88ab\u5176\u4ed6\u7ebf\u7a0b\u9501\u5b9a\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"read"),"\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4ece\u4e3b\u5185\u5b58\u4f20\u8f93\u5230\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u968f\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\u52a8\u4f5c\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff1a\u5b83\u628a",(0,i.kt)("inlineCode",{parentName:"li"},"read"),"\u64cd\u4f5c\u4ece\u4e3b\u5185\u5b58\u4e2d\u5f97\u5230\u7684\u53d8\u91cf\u503c\u653e\u5165\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\u526f\u672c\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"use"),"\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u5de5\u4f5c\u5185\u5b58\u4e2d\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4f20\u9012\u7ed9\u6267\u884c\u5f15\u64ce\uff0c\u6bcf\u5f53\u865a\u62df\u673a\u9047\u5230\u4e00\u4e2a\u9700\u8981\u4f7f\u7528\u53d8\u91cf\u7684\u503c\u7684\u5b57\u8282\u7801\u6307\u4ee4\u65f6\u5c06\u4f1a\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u4e00\u4e2a\u4ece\u6267\u884c\u5f15\u64ce\u63a5\u6536\u7684\u503c\u8d4b\u7ed9\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u6bcf\u5f53\u865a\u62df\u673a\u9047\u5230\u4e00\u4e2a\u7ed9\u53d8\u91cf\u8d4b\u503c\u7684\u5b57\u8282\u7801\u6307\u4ee4\u65f6\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"store"),"\uff1a\u4f5c\u7528\u4e8e\u5de5\u4f5c\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a\u5de5\u4f5c\u5185\u5b58\u4e2d\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u4f20\u9001\u5230\u4e3b\u5185\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u968f\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"write"),"\u64cd\u4f5c\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"write"),"\uff1a\u4f5c\u7528\u4e8e\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\uff0c\u5b83\u628a",(0,i.kt)("inlineCode",{parentName:"li"},"store"),"\u64cd\u4f5c\u4ece\u5de5\u4f5c\u5185\u5b58\u4e2d\u5f97\u5230\u7684\u53d8\u91cf\u7684\u503c\u653e\u5165\u4e3b\u5185\u5b58\u7684\u53d8\u91cf\u4e2d\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u5185\u5b58\u6a21\u578b\u8981\u6c42\u5728\u628a\u53d8\u91cf\u4ece\u4e3b\u5185\u5b58\u62f7\u8d1d\u5230\u5de5\u4f5c\u5185\u5b58\u65f6\uff0c\u9700\u8981\u6309\u987a\u5e8f\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"read"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"load"),"\u64cd\u4f5c\uff1b\u5728\u628a\u53d8\u91cf\u4ece\u5de5\u4f5c\u5185\u5b58\u540c\u6b65\u56de\u4e3b\u5185\u5b58\u65f6\uff0c\u9700\u8981\u6309\u987a\u5e8f\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"store"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"write"),"\u64cd\u4f5c\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6309\u987a\u5e8f\u5e76\u4e0d\u4e00\u5b9a\u662f\u8fde\u7eed\u3002\u9664\u6b64\u4e4b\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u8fd8\u89c4\u5b9a\u4e86\u5728\u6267\u884c\u4e0a\u8ff0\u57fa\u672c\u64cd\u4f5c\u65f6\u5fc5\u987b\u6ee1\u8db3\u5982\u4e0b\u89c4\u5219\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u5141\u8bb8",(0,i.kt)("inlineCode",{parentName:"li"},"read"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"store"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"write"),"\u64cd\u4f5c\u4e4b\u4e00\u5355\u72ec\u51fa\u73b0\uff0c\u5373\u4e0d\u5141\u8bb8\u4e00\u4e2a\u53d8\u91cf\u4ece\u4e3b\u5185\u5b58\u8bfb\u53d6\u4e86\u4f46\u5de5\u4f5c\u5185\u5b58\u4e0d\u63a5\u53d7\uff0c\u6216\u8005\u5de5\u4f5c\u5185\u5b58\u53d1\u8d77\u56de\u5199\u4e86\u4f46\u4e3b\u5185\u5b58\u4e0d\u63a5\u53d7\u7684\u60c5\u51b5\u51fa\u73b0\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u4e22\u5f03\u5b83\u6700\u8fd1\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\u64cd\u4f5c\uff0c\u5373\u53d8\u91cf\u5728\u5de5\u4f5c\u5185\u5b58\u4e2d\u6539\u53d8\u4e86\u4e4b\u540e\u5fc5\u987b\u628a\u8be5\u53d8\u5316\u540c\u6b65\u5230\u4e3b\u5185\u5b58\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u5141\u8bb8\u4e00\u4e2a\u7ebf\u7a0b\u65e0\u539f\u56e0\u5730\uff08\u6ca1\u6709\u53d1\u751f\u8fc7\u4efb\u4f55",(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\u64cd\u4f5c\uff09\u628a\u6570\u636e\u4ece\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u540c\u6b65\u56de\u4e3b\u5185\u5b58\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\u53ea\u80fd\u5728\u4e3b\u5185\u5b58\u4e2d",(0,i.kt)("inlineCode",{parentName:"li"},"\u8bde\u751f"),"\uff0c\u4e0d\u5141\u8bb8\u5728\u5de5\u4f5c\u5185\u5b58\u4e2d\u76f4\u63a5\u4f7f\u7528\u4e00\u4e2a\u672a\u88ab\u521d\u59cb\u5316\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\uff09\u7684\u53d8\u91cf\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u5bf9\u4e00\u4e2a\u53d8\u91cf\u5b9e\u65bd",(0,i.kt)("inlineCode",{parentName:"li"},"use"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"store"),"\u64cd\u4f5c\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u53d8\u91cf\u5728\u540c\u4e00\u4e2a\u65f6\u523b\u53ea\u5141\u8bb8\u4e00\u6761\u7ebf\u7a0b\u5bf9\u5176\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\u64cd\u4f5c\uff0c\u4f46",(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\u64cd\u4f5c\u53ef\u4ee5\u88ab\u540c\u4e00\u6761\u7ebf\u7a0b\u91cd\u590d\u6267\u884c\u591a\u6b21\uff0c\u591a\u6b21\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\u540e\uff0c\u53ea\u6709\u6267\u884c\u76f8\u540c\u6b21\u6570\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"unlock"),"\u64cd\u4f5c\uff0c\u53d8\u91cf\u624d\u4f1a\u88ab\u89e3\u9501\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bf9\u4e00\u4e2a\u53d8\u91cf\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\u64cd\u4f5c\uff0c\u90a3\u5c06\u4f1a\u6e05\u7a7a\u5de5\u4f5c\u5185\u5b58\u4e2d\u6b64\u53d8\u91cf\u7684\u503c\uff0c\u5728\u6267\u884c\u5f15\u64ce\u4f7f\u7528\u8fd9\u4e2a\u53d8\u91cf\u524d\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"load"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"assign"),"\u64cd\u4f5c\u4ee5\u521d\u59cb\u5316\u53d8\u91cf\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u4e8b\u5148\u6ca1\u6709\u88ab",(0,i.kt)("inlineCode",{parentName:"li"},"lock"),"\u64cd\u4f5c\u9501\u5b9a\uff0c\u90a3\u5c31\u4e0d\u5141\u8bb8\u5bf9\u5b83\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"unlock"),"\u64cd\u4f5c\uff0c\u4e5f\u4e0d\u5141\u8bb8\u53bb",(0,i.kt)("inlineCode",{parentName:"li"},"unlock"),"\u4e00\u4e2a\u88ab\u5176\u4ed6\u7ebf\u7a0b\u9501\u5b9a\u7684\u53d8\u91cf\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e00\u4e2a\u53d8\u91cf\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"unlock"),"\u64cd\u4f5c\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u628a\u6b64\u53d8\u91cf\u540c\u6b65\u56de\u4e3b\u5185\u5b58\u4e2d\uff08\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"store"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"write"),"\u64cd\u4f5c\uff09\u3002")),(0,i.kt)("h3",{id:"\u5bf9\u4e8e-volatile-\u578b\u53d8\u91cf\u7684\u7279\u6b8a\u89c4\u5219"},"\u5bf9\u4e8e volatile \u578b\u53d8\u91cf\u7684\u7279\u6b8a\u89c4\u5219"),(0,i.kt)("p",null,"\u5173\u952e\u5b57",(0,i.kt)("inlineCode",{parentName:"p"},"volatile"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Java"),"\u865a\u62df\u673a\u63d0\u4f9b\u7684\u6700\u8f7b\u91cf\u7ea7\u7684\u540c\u6b65\u673a\u5236\uff0c\u5f53\u4e00\u4e2a\u53d8\u91cf\u88ab\u5b9a\u4e49\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"volatile"),"\u4e4b\u540e\uff0c\u5b83\u5c06\u5177\u5907\u4e24\u9879\u7279\u5f81\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u9879\u662f\u4fdd\u8bc1\u6b64\u53d8\u91cf\u5bf9\u6240\u6709\u7ebf\u7a0b\u7684\u53ef\u89c1\u6027\uff0c\u5373\u6307\u5f53\u4e00\u6761\u7ebf\u7a0b\u4fee\u6539\u4e86\u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\uff0c\u65b0\u503c\u5bf9\u4e8e\u5176\u4ed6\u7ebf\u7a0b\u6765\u8bf4\u662f\u53ef\u4ee5\u7acb\u5373\u5f97\u77e5\u7684\u3002\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"volatile"),"\u53d8\u91cf\u53ea\u80fd\u4fdd\u8bc1\u53ef\u89c1\u6027\uff0c\u5728\u4e0d\u7b26\u5408\u4ee5\u4e0b\u4e24\u6761\u89c4\u5219\u7684\u8fd0\u7b97\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u4ecd\u7136\u8981\u901a\u8fc7\u52a0\u9501\u6765\u4fdd\u8bc1\u539f\u5b50\u6027\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u7b97\u7ed3\u679c\u5e76\u4e0d\u4f9d\u8d56\u53d8\u91cf\u7684\u5f53\u524d\u503c\uff0c\u6216\u8005\u80fd\u591f\u786e\u4fdd\u53ea\u6709\u5355\u4e00\u7684\u7ebf\u7a0b\u4fee\u6539\u53d8\u91cf\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u53d8\u91cf\u4e0d\u9700\u8981\u4e0e\u5176\u4ed6\u7684\u72b6\u6001\u53d8\u91cf\u5171\u540c\u53c2\u4e0e\u4e0d\u53d8\u7ea6\u675f\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"volatile"),"\u53d8\u91cf\u7684\u7b2c\u4e8c\u4e2a\u8bed\u4e49\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u7981\u6b62\u6307\u4ee4\u91cd\u6392\u5e8f\u4f18\u5316"),"\u3002"),(0,i.kt)("h3",{id:"\u539f\u5b50\u6027\u53ef\u89c1\u6027\u4e0e\u6709\u5e8f\u6027"},"\u539f\u5b50\u6027\u3001\u53ef\u89c1\u6027\u4e0e\u6709\u5e8f\u6027"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Java\u5185\u5b58\u6a21\u578b"),"\u662f\u56f4\u7ed5\u5728\u5e76\u53d1\u8fc7\u7a0b\u4e2d\u5982\u4f55\u5904\u7406\u539f\u5b50\u6027\u3001\u53ef\u89c1\u6027\u548c\u6709\u5e8f\u6027\u8fd9\u4e09\u4e2a\u7279\u5f81\u6765\u5efa\u7acb\u7684\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u539f\u5b50\u6027\uff1a\u7531",(0,i.kt)("inlineCode",{parentName:"li"},"Java"),"\u5185\u5b58\u6a21\u578b\u6765\u76f4\u63a5\u4fdd\u8bc1\u7684\u539f\u5b50\u6027\u53d8\u91cf\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u53ef\u89c1\u6027\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"Java\u5185\u5b58\u6a21\u578b"),"\u662f\u901a\u8fc7\u5728\u53d8\u91cf\u4fee\u6539\u540e\u5c06\u65b0\u503c\u540c\u6b65\u56de\u4e3b\u5185\u5b58\uff0c\u5728\u53d8\u91cf\u8bfb\u53d6\u524d\u4ece\u4e3b\u5185\u5b58\u5237\u65b0\u53d8\u91cf\u503c\u8fd9\u79cd\u4f9d\u8d56\u4e3b\u5185\u5b58\u4f5c\u4e3a\u4f20\u9012\u5a92\u4ecb\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u53ef\u89c1\u6027\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6709\u5e8f\u6027\uff1a\u5982\u679c\u5728\u672c\u7ebf\u7a0b\u5185\u89c2\u5bdf\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u662f\u6709\u5e8f\u7684\uff1b\u5982\u679c\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u89c2\u5bdf\u53e6\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u662f\u65e0\u5e8f\u7684\u3002")))}k.isMDXComponent=!0}}]);