"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3270],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>h});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),m=s,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?t.createElement(h,i(i({ref:n},p),{},{components:a})):t.createElement(h,i({ref:n},p))}));function h(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[u]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3845:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=a(7462),s=(a(7294),a(3905));const l={sidebar_position:6},i="Classes and Instances",r={unversionedId:"haskell/Classes and Instances",id:"haskell/Classes and Instances",title:"Classes and Instances",description:"To define our own classes with existing classes, for example, make our own type a member of the Eq class,  we can:",source:"@site/docs/haskell/Classes and Instances.md",sourceDirName:"haskell",slug:"/haskell/Classes and Instances",permalink:"/docs/haskell/Classes and Instances",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/haskell/Classes and Instances.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Type System and Defining Custom Types",permalink:"/docs/haskell/Type System and Defining Custom Types"},next:{title:"Design Patterns for Typed Functional Programming",permalink:"/docs/haskell/Design Patterns for Typed Functional Programming"}},o={},c=[{value:"Syntax of Classes and Instances",id:"syntax-of-classes-and-instances",level:2},{value:"Restrictions on Instances",id:"restrictions-on-instances",level:2},{value:"Default Implementations",id:"default-implementations",level:2},{value:"Useful Stuff",id:"useful-stuff",level:2},{value:"Deriving",id:"deriving",level:3},{value:"Asking GHCi About Classes",id:"asking-ghci-about-classes",level:3},{value:"Hierarchies",id:"hierarchies",level:2},{value:"Instance Hierarchies",id:"instance-hierarchies",level:3},{value:"Class Hierarchy",id:"class-hierarchy",level:3}],p={toc:c};function u(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"classes-and-instances"},"Classes and Instances"),(0,s.kt)("p",null,"To define our own classes with existing classes, for example, make our own type a member of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Eq")," class,  we can:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"data Color = Black | White\n\ninstance Eq Color where\n  Black == Black  = True\n  White == White  = True\n  _     == _      = False\n")),(0,s.kt)("p",null,"A class instance is an ",(0,s.kt)("inlineCode",{parentName:"p"},"instance")," block that contains definitions for the functions in that class."),(0,s.kt)("h2",{id:"syntax-of-classes-and-instances"},"Syntax of Classes and Instances"),(0,s.kt)("p",null,"A type class is defined using ",(0,s.kt)("inlineCode",{parentName:"p"},"class")," syntax. The functions in the class are given types. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"class Size a where\n  size :: a -> Int\n")),(0,s.kt)("p",null,"Instances of a class are defined with instance syntax. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"instance Size Int where\n  size x = abs x\n\ninstance Size [a] where\n  size xs = length xs\n")),(0,s.kt)("p",null,"A class can contain multiple functions, and even constants."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"class Size a where\n  empty :: a\n  size :: a -> Int\n  sameSize :: a -> a -> Bool\n\ninstance Size (Maybe a) where\n  empty = Nothing\n\n  size Nothing = 0\n  size (Just a) = 1\n\n  sameSize x y = size x == size y\n\ninstance Size [a] where\n  empty = []\n  size xs = length xs\n  sameSize x y = size x == size y\n")),(0,s.kt)("h2",{id:"restrictions-on-instances"},"Restrictions on Instances"),(0,s.kt)("p",null,"You can only define instances where all type parameters are different type variables. The rule guarantees that it's simple for the compiler to loop up the correct type class instance. "),(0,s.kt)("h2",{id:"default-implementations"},"Default Implementations"),(0,s.kt)("p",null,"To give example values of types, you should:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"class Example a where\n  example :: a           -- the main example for the type `a`\n  examples :: [a]        -- a short list of examples\n  examples = [example]   -- ...defaulting to just the main example\n\ninstance Example Int where\n  example = 1\n  examples = [0,1,2]\n\ninstance Example Bool where\n  example = True  \n")),(0,s.kt)("p",null,"Here's how Example works."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"Prelude> example :: Bool\nTrue\nPrelude> example :: Int\n1\nPrelude> examples :: [Bool]\n[True]\nPrelude> examples :: [Int]\n[0,1,2]\n")),(0,s.kt)("p",null,"For ",(0,s.kt)("inlineCode",{parentName:"p"},"Eq"),", the docs say ",(0,s.kt)("inlineCode",{parentName:"p"},"Minimal complete definition: either == or /="),". "),(0,s.kt)("p",null,"For ",(0,s.kt)("inlineCode",{parentName:"p"},"Ord"),", the docs say ",(0,s.kt)("inlineCode",{parentName:"p"},"Minimal complete definition: either compare or <="),"."),(0,s.kt)("h2",{id:"useful-stuff"},"Useful Stuff"),(0,s.kt)("h3",{id:"deriving"},"Deriving"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"deriving")," is a way to get automatically generated class instances. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Read")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Show")," classes should always be derived to get the standard behaviour."),(0,s.kt)("h3",{id:"asking-ghci-about-classes"},"Asking GHCi About Classes"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},":info")," command in ",(0,s.kt)("inlineCode",{parentName:"p"},"GHCi")," to get the contents and instances of a class."),(0,s.kt)("h2",{id:"hierarchies"},"Hierarchies"),(0,s.kt)("p",null,"Both classes and instances can form ",(0,s.kt)("inlineCode",{parentName:"p"},"hierarchies"),". This means that a class or instance depends on another class or instance."),(0,s.kt)("h3",{id:"instance-hierarchies"},"Instance Hierarchies"),(0,s.kt)("p",null,"Take defining an ",(0,s.kt)("inlineCode",{parentName:"p"},"Eq")," instance for a simple pair type as an example, we should add a type constraint to the instance declaration to compare pairs of values of type ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"instance Eq a => Eq (Pair a) where\n  (MakePair x y) == (MakePair a b)   =   x==a && y==b\n")),(0,s.kt)("h3",{id:"class-hierarchy"},"Class Hierarchy"),(0,s.kt)("p",null,"A class can depend on another class, which is useful for instance when you want to use functions from another class in your defualt implementations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-haskell"},"class Size a where\n  size :: a -> Int\n\nclass Size a => SizeBoth a where\n  sizeBoth :: a -> a -> Int\n  sizeBoth x y = size x + size y\n")))}u.isMDXComponent=!0}}]);