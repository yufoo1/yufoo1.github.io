"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:12},i="Move Semantics",c={unversionedId:"cpp/Move Semantics",id:"cpp/Move Semantics",title:"Move Semantics",description:"Lvalues and Rvalues",source:"@site/docs/cpp/Move Semantics.md",sourceDirName:"cpp",slug:"/cpp/Move Semantics",permalink:"/docs/cpp/Move Semantics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/Move Semantics.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Special Member Functions",permalink:"/docs/cpp/Special Member Functions"},next:{title:"RAII and Smart Pointers",permalink:"/docs/cpp/RAII and Smart Pointers"}},s={},p=[{value:"Lvalues and Rvalues",id:"lvalues-and-rvalues",level:2},{value:"Move Constructor",id:"move-constructor",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"move-semantics"},"Move Semantics"),(0,a.kt)("h2",{id:"lvalues-and-rvalues"},"Lvalues and Rvalues"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"r-value")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"temporary"),", and a ",(0,a.kt)("inlineCode",{parentName:"p"},"l-value")," is not. The official definition is that a ",(0,a.kt)("inlineCode",{parentName:"p"},"l-value")," has an address(can do ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"), and a ",(0,a.kt)("inlineCode",{parentName:"p"},"r-value")," does not."),(0,a.kt)("h2",{id:"move-constructor"},"Move Constructor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"std::move")," is a cast to a rvalue &&(equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"std::static_cast<T&&>"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<T>& operator=(vector<T>&& other) {\n    _size(std::move(other._size)),\n    _capacity(std::move(other._capacity))\n    _elems = std::move(other._elems);\n    other._elems = nullptr;\n    other._size = 0;\n}\n\nvector<T>& v = {1, 2, 3};\nvector<T>& v2;\nv2 = std::move(v);\n")),(0,a.kt)("p",null,"For our vector:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>\nvoid vector<T>::push_back(T&& element) {\n    elems[_size++] = std::move(element);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"std::swap")," is something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>\nvoid swap<T& a, T& b> noexcept {\n    T c(std::move(a));\n    a = std::move(b);\n    b = std::move(c);\n}\n")))}u.isMDXComponent=!0}}]);