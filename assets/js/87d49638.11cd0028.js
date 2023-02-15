"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9564],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},l="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,u=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),l=s(t),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c[l]="string"==typeof n?n:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4393:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:9},i="Functions and Lambdas",c={unversionedId:"cpp/Functions and Lambdas",id:"cpp/Functions and Lambdas",title:"Functions and Lambdas",description:"Function Pointers",source:"@site/docs/cpp/Functions and Lambdas.md",sourceDirName:"cpp",slug:"/cpp/Functions and Lambdas",permalink:"/docs/cpp/Functions and Lambdas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/Functions and Lambdas.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Template Functions",permalink:"/docs/cpp/Template Functions"},next:{title:"Operators",permalink:"/docs/cpp/Operators"}},u={},s=[{value:"Function Pointers",id:"function-pointers",level:2},{value:"Lambdas",id:"lambdas",level:2},{value:"Functor",id:"functor",level:2}],p={toc:s};function l(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-and-lambdas"},"Functions and Lambdas"),(0,a.kt)("h2",{id:"function-pointers"},"Function Pointers"),(0,a.kt)("p",null,"Function pointers can be treated just like other pointers. They can be passed arround like variables as parameters or in template functions and they can be called like functions."),(0,a.kt)("h2",{id:"lambdas"},"Lambdas"),(0,a.kt)("p",null,"Lambdas are inline, anonymous functions that can know about  functions declared in their same  scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"auto var = [capture-clause] (auto param) -> bool {\n    ...   \n}\n\n\nint limit = 5;\nauto isMoreThan = [limit] (int n) {return n > limit;};\n")),(0,a.kt)("p",null,"You can capture any outside variable, both by reference and by value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename InputIt, typename Unipred>\nint count_occurrences(InputIt begin, InputIt end, UniPred pred) {\n    int count = 0;\n    for(auto iter = begin; iter != end; ++iter) {\n        if(pred(*iter)) count++;\n    }\n    return count;\n}\n\n\nint limit = 5;\nauto isMoreThan = [limit] (int n) {return n > limit;};\nstd::vector<int> nums = {3, 5, 6, 7, 9, 13};\n\ncount_occurrences(nums.begin(), nums.end(), isMoreThan);\n")),(0,a.kt)("p",null,"You can use lambda when you need a short function or to access local variables in your functions. If you need more logic or overloading, use funcion pointers."),(0,a.kt)("h2",{id:"functor"},"Functor"),(0,a.kt)("p",null,"A functor is any class that provides an implementatioon of operator(). They can create ",(0,a.kt)("inlineCode",{parentName:"p"},"closures")," of customized functions. Lambdas are just a reskin of functors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class functor {\n    public:\n        int operator() (int arg) const {\n            return num + arg;\n        }\n    private:\n        int num;\n}\n\nint num = 0;\nauto lambda = [&num] (int  arg) {num += arg;};\n\nlambda(5);\n")))}l.isMDXComponent=!0}}]);