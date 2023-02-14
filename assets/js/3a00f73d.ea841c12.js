"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},o="Iterators and Pointers",l={unversionedId:"cpp/Iterators and Pointers",id:"cpp/Iterators and Pointers",title:"Iterators and Pointers",description:"Iterators",source:"@site/docs/cpp/Iterators and Pointers.md",sourceDirName:"cpp",slug:"/cpp/Iterators and Pointers",permalink:"/docs/cpp/Iterators and Pointers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/Iterators and Pointers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/docs/cpp/Containers"},next:{title:"Classes",permalink:"/docs/cpp/Classes"}},p={},s=[{value:"Iterators",id:"iterators",level:2},{value:"Operations of Iterators",id:"operations-of-iterators",level:3},{value:"Categories of Iterators",id:"categories-of-iterators",level:3},{value:"Loop",id:"loop",level:3},{value:"Pointers",id:"pointers",level:2},{value:"Intro",id:"intro",level:3},{value:"Dereference",id:"dereference",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iterators-and-pointers"},"Iterators and Pointers"),(0,a.kt)("h2",{id:"iterators"},"Iterators"),(0,a.kt)("p",null,"Iterators let you access all data in containers programmatically. An iterator has a certain ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," and it knows what  element will come next. However, not necessarily the same each time you iterate. "),(0,a.kt)("h3",{id:"operations-of-iterators"},"Operations of Iterators"),(0,a.kt)("p",null,"All containers in the STL implement iterators, but they're not all the same. Each container has its own iterator, which can have different behavior. "),(0,a.kt)("p",null,"All iterators implement a few shared operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Initializing: ",(0,a.kt)("inlineCode",{parentName:"p"},"iter = s.begin();"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Incrementing: ",(0,a.kt)("inlineCode",{parentName:"p"},"++iter;"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dereferencing: ",(0,a.kt)("inlineCode",{parentName:"p"},"*iter;"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Comparing: ",(0,a.kt)("inlineCode",{parentName:"p"},"iter != s.end();"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copying: ",(0,a.kt)("inlineCode",{parentName:"p"},"new_iter = iter;")))),(0,a.kt)("h3",{id:"categories-of-iterators"},"Categories of Iterators"),(0,a.kt)("p",null,"Iterators are classified into five categories depending on the functionality they implement:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Input")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," iterators are the most limited types of iterators, they can perform sequential single-pass input or output  operations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Forward")," iterators have all the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," iterators. If they are not ",(0,a.kt)("inlineCode",{parentName:"p"},"constant")," iterators, they have also the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," iterators. All standard containers support at least ",(0,a.kt)("inlineCode",{parentName:"p"},"forward")," iterator types.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Bidirectional")," iterators are like ",(0,a.kt)("inlineCode",{parentName:"p"},"forward")," iterators but can also be iterated through backwards.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Random-access")," iterators implement all the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"bidirectional")," iterators, and also have the ability to access ranges non-sequentially. Distant elements can be accessed directly by applying an offset value to an iterator without iterating through all the elements in between."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Forward")," iterators are the minimum level of functionality for standard containers. ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," iterators can appear on the ",(0,a.kt)("inlineCode",{parentName:"p"},"RHS")," of an ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"auto elem = *it;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Output")," iterators can appear on the ",(0,a.kt)("inlineCode",{parentName:"p"},"LHS")," of an ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"*elem = value;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Bidirectional")," iterators can go forward as well as backward."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"--iter;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Random-access")," iterators allow you to directly access values without visiting all elements sequentially."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"iter += 5;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3841).Z,width:"394",height:"294"})),(0,a.kt)("h3",{id:"loop"},"Loop"),(0,a.kt)("p",null,"To access each element individually, you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"for(auto iter = set.begin(); iter != set.end(); ++iter) {\n    // use *iter to dereference\n    const auto& elem = *iter;\n}\n")),(0,a.kt)("p",null,"Don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"iter++")," because it returns the value before being incremented, which is slightly more inefficient."),(0,a.kt)("p",null,"If we have a map, we can use structured binding to be more efficient while dereferencing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::map<int> map{{1, 6}, {1, 8}, {0, 3}, {3, 9}};\nfor(auto iter = map.begin(); iter != map.end(); ++iter) {\n    const auto& [key, value] = *iter;\n}\n")),(0,a.kt)("h2",{id:"pointers"},"Pointers"),(0,a.kt)("h3",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Iterators are a particular type of pointer. Iterators point at particular elements in a container while pointers can point at any objects in your code. Pointers reference those memory addresses and not the object themselves."),(0,a.kt)("h3",{id:"dereference"},"Dereference"),(0,a.kt)("p",null,"Pointers are marked by the asterisk(*) next to the type of the object they're pointing at when they're declared. The address of a variable can be accessed by using ",(0,a.kt)("inlineCode",{parentName:"p"},"&")," before its name, same as when passing by reference."),(0,a.kt)("p",null,"If we need to access a pointer's object's member variables, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ptr->var")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"*ptr.var"),"."))}u.isMDXComponent=!0},3841:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1-55d8dcf94a023903540c71d9cba6a783.png"}}]);