"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:13},i="RAII and Smart Pointers",p={unversionedId:"cpp/RAII and Smart Pointers",id:"cpp/RAII and Smart Pointers",title:"RAII and Smart Pointers",description:"Exceptions",source:"@site/docs/cpp/RAII and Smart Pointers.md",sourceDirName:"cpp",slug:"/cpp/RAII and Smart Pointers",permalink:"/docs/cpp/RAII and Smart Pointers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/RAII and Smart Pointers.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Move Semantics",permalink:"/docs/cpp/Move Semantics"},next:{title:"Concurrency in Cpp",permalink:"/docs/category/concurrency-in-cpp"}},s={},l=[{value:"Exceptions",id:"exceptions",level:2},{value:"RAII",id:"raii",level:2},{value:"Smart Pointers",id:"smart-pointers",level:2},{value:"std::unique_ptr",id:"stdunique_ptr",level:3},{value:"std::shared_ptr",id:"stdshared_ptr",level:3},{value:"std::weak_ptr",id:"stdweak_ptr",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raii-and-smart-pointers"},"RAII and Smart Pointers"),(0,a.kt)("h2",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,"Exceptions are a way to signal that something has gone wrong."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"try {\n    // code associated with exception handler\n} catch([exception type] e) {\n    // exception handler\n} catch([exception type] e) {\n    // exception handler\n} // etc\n")),(0,a.kt)("p",null,"Lots of kinds of resources need to be released."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Heap memory: ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," to acquire, ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," to release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Files: ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," to acquire, ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," to release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Locks: ",(0,a.kt)("inlineCode",{parentName:"p"},"try_lock")," to acquire, ",(0,a.kt)("inlineCode",{parentName:"p"},"unlock")," to release.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sockets: ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," to acquire, ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," to release."))),(0,a.kt)("h2",{id:"raii"},"RAII"),(0,a.kt)("p",null,"To guarantee resources get released, even if there are exceptions, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"RAII"),"(Resource Acquisition is Initialization). ",(0,a.kt)("inlineCode",{parentName:"p"},"RAII")," means that all resources used by a class should be acquired in the constructor while all resources used by a class should be released in the destructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'void printFile() {\n    ifstream input("hamlet.txt");\n    string line;\n    while(getline(input, line)) { // might throw exception\n        cout << line << endl;\n    }\n    // no close call needed\n} // stream destructor, releases access to file.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class lock_guard {\n    public:\n        lock_guard(mutex& lock): acquired_lock(lock) {\n            acqiored_lock(lock);\n        }\n        ~lock_guard() {\n            acqiored_lock.unlock();\n        }\n    private:\n        mutex& acquired_lock;\n}\n")),(0,a.kt)("p",null,"Acquire resources in the constructor of your class, release in the destructor. Clients of an RAII class won't have to worry about mismanaged resources."),(0,a.kt)("h2",{id:"smart-pointers"},"Smart Pointers"),(0,a.kt)("h3",{id:"stdunique_ptr"},"std::unique_ptr"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," uniquely owns its resource and deletes it when the object is destroyed. It cannot be copied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void rawPtrFn() {\n    std::uniques_ptr<Node> n(new Node);\n    // do some stuff with n\n} // free\n")),(0,a.kt)("h3",{id:"stdshared_ptr"},"std::shared_ptr"),(0,a.kt)("p",null,"If we want to have multiple pointers to the same object, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"std::shared_ptr"),". The resource is deleted when none of then points to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"{\n    std::shared_ptr<int> p1(new int);\n    // Use p1\n    {\n        std::shared_ptr<int> p2 = p1;\n        // use p1 and p2\n    }\n    // use p1\n} // deallocated\n")),(0,a.kt)("h3",{id:"stdweak_ptr"},"std::weak_ptr"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"std::weak_ptr")," can only be copy / move constructed(or empty)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::unique_ptr<T> up{new T};\nstd::unique_ptr<T> up = std::make_unique<T>(); // better, always use std::make_unique<T>()\n")))}u.isMDXComponent=!0}}]);