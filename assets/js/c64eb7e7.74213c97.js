"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Containers",l={unversionedId:"cpp/Containers",id:"cpp/Containers",title:"Containers",description:"Defining Containers",source:"@site/docs/cpp/Containers.md",sourceDirName:"cpp",slug:"/cpp/Containers",permalink:"/docs/cpp/Containers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/Containers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Streams",permalink:"/docs/cpp/Streams"},next:{title:"Iterators and Pointers",permalink:"/docs/cpp/Iterators and Pointers"}},p={},s=[{value:"Defining Containers",id:"defining-containers",level:2},{value:"Vector Implementation",id:"vector-implementation",level:2},{value:"Map Implementation",id:"map-implementation",level:2},{value:"Unordered Maps / Sets",id:"unordered-maps--sets",level:2},{value:"Container Adaptors",id:"container-adaptors",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"containers"},"Containers"),(0,a.kt)("h2",{id:"defining-containers"},"Defining Containers"),(0,a.kt)("p",null,"Container is an object that allows us to collect other object together and interact with them in some way. The STL has many types of containers: Vector, Stack, Queue, Set, Map, Array, Deque, List, Unordered Set, Unordered Map."),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," is the primitive form of a vector, which has fixed size in a strict sequence."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"deque")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"double ended queue"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," is a doubly linked list, which can loop through in either direction."),(0,a.kt)("p",null,"There are two types of containers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sequence"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Containers that can be accessed sequentially.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Anything with an inherent order goes here.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Associative"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Containers that don't necessarily have a sequential order.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"More easily searched.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Maps and Sets go here."))))),(0,a.kt)("h2",{id:"vector-implementation"},"Vector Implementation"),(0,a.kt)("p",null,"At a high level, a vector is an ",(0,a.kt)("inlineCode",{parentName:"p"},"ordered")," collection of elements of the ",(0,a.kt)("inlineCode",{parentName:"p"},"same type")," that can grow and shrink in size."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"_size"),": number of elements in the vector.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"_capacity"),": space allocated for elements."))),(0,a.kt)("h2",{id:"map-implementation"},"Map Implementation"),(0,a.kt)("p",null,"Maps are implemented with pairs(",(0,a.kt)("inlineCode",{parentName:"p"},"std::pair<const key, value>"),") and keys must be immutable."),(0,a.kt)("h2",{id:"unordered-maps--sets"},"Unordered Maps / Sets"),(0,a.kt)("p",null,"Both maps and sets in the STL have an unordered version:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ordered maps / sets require a ",(0,a.kt)("inlineCode",{parentName:"p"},"comparison operator")," to be defined.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unordered maps / sets require a ",(0,a.kt)("inlineCode",{parentName:"p"},"hash function")," to be defined."))),(0,a.kt)("p",null,"Unordered maps / sets are usually faster than ordered ones."),(0,a.kt)("h2",{id:"container-adaptors"},"Container Adaptors"),(0,a.kt)("p",null,"Container adaptors are ",(0,a.kt)("inlineCode",{parentName:"p"},"wrappers")," to existing containers. Wrappers modify the interface to sequence containers and change what the client is allowed to do / how they can interact with the container."))}d.isMDXComponent=!0}}]);