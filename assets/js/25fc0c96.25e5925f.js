"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},i="Configure Flutter Environment in Your PC",l={unversionedId:"web-app-development/Configure Flutter Environment in Your PC",id:"web-app-development/Configure Flutter Environment in Your PC",title:"Configure Flutter Environment in Your PC",description:"Download Dependency",source:"@site/docs/web-app-development/Configure Flutter Environment in Your PC.md",sourceDirName:"web-app-development",slug:"/web-app-development/Configure Flutter Environment in Your PC",permalink:"/docs/web-app-development/Configure Flutter Environment in Your PC",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-app-development/Configure Flutter Environment in Your PC.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Set Up Personal Site and Deploy Through GitHub",permalink:"/docs/web-app-development/Set Up Personal Site and Deploy Through GitHub"},next:{title:"Use JDBC to Connect MySQL in Native Android App",permalink:"/docs/web-app-development/Use JDBC to Connect Database in Native Android App"}},u={},p=[{value:"Download Dependency",id:"download-dependency",level:2},{value:"Use Simulator",id:"use-simulator",level:2},{value:"Perform Hot Reload",id:"perform-hot-reload",level:2}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-flutter-environment-in-your-pc"},"Configure Flutter Environment in Your PC"),(0,r.kt)("h2",{id:"download-dependency"},"Download Dependency"),(0,r.kt)("p",null,"At first, download dependencies through git and configure environment variables. My environment is MacOS and if you are using Windows or Linux, just only notice slight differences in the configuration of environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# download dependency\ngit clone -b beta https://github.com/flutter/flutter.git\n\n# add to .bash_profile\nexport PUB_HOSTED_URL=https://pub.flutter-io.cn\nexport FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn\nexport PATH="$PATH:{ flutter download path, please replace }/flutter/bin"\n\n# re-source .bash_profile\nsource ~/.bash_profile\n\n# check whether the environment takes effect\nflutter doctor\n\n# create your first project\nflutter create demo\n\n# run your demo\ncd demo && flutter run\n')),(0,r.kt)("h2",{id:"use-simulator"},"Use Simulator"),(0,r.kt)("p",null,"you may have noticed that when you type ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter run")," in command line, you're asked to choose one device to display, such ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome"),"(web) or macOS(desktop). If you have downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},"Android Studio")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Xcode"),", even ",(0,r.kt)("inlineCode",{parentName:"p"},"QEMU"),", you can choose them to display in your IDE simply, like Virtual Studio Code. Just download ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter")," plugin, click on the bottom right(in Virtual Studio Code) and then, type ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter run"),".\n",(0,r.kt)("img",{src:n(6027).Z,width:"1460",height:"1084"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in Xcode simulator\n",(0,r.kt)("img",{src:n(8109).Z,width:"930",height:"1840"})),(0,r.kt)("li",{parentName:"ul"},"in Chrome\n",(0,r.kt)("img",{src:n(9764).Z,width:"2470",height:"2134"}))),(0,r.kt)("h2",{id:"perform-hot-reload"},"Perform Hot Reload"),(0,r.kt)("p",null,"Maybe you're used to Hot Reload when you're developing a website. If you want to perform a hot reload when you use flutter, you can follow the steps below. Attention please, only ",(0,r.kt)("inlineCode",{parentName:"p"},"debug mode")," can be hot reloaded."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're running the app at the command line using flutter run, you can just type ",(0,r.kt)("inlineCode",{parentName:"li"},"r")," in the terminal window."),(0,r.kt)("li",{parentName:"ul"},"If you're running the app in IDE, take instance of Virtual Studio Code, you should firstly change the mode of ",(0,r.kt)("inlineCode",{parentName:"li"},"Dart: Flutter Hot Reload On Save")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Code->Preferences->Settings"),". There are 5 modes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"never: Never auto perform a hot reload when saving."),(0,r.kt)("li",{parentName:"ul"},"all: Trigger a hot reload for both manual save and autosave."),(0,r.kt)("li",{parentName:"ul"},"allDirty: Trigger a hot reload for both manual save and autosave only if the saved file had changes."),(0,r.kt)("li",{parentName:"ul"},"manual: Trigger a hot reload for an explicitly manual save like pressing ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl + S")," on ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Command + S")," on ",(0,r.kt)("inlineCode",{parentName:"li"},"Mac"),"."),(0,r.kt)("li",{parentName:"ul"},"manualDirty: Trigger a hot reload for an explicitly manual save only if the saved file had changes.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I chose allDirty."),(0,r.kt)("p",{parentName:"blockquote"},"When you're done configuring, you should type ",(0,r.kt)("inlineCode",{parentName:"p"},"fn + F5")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"Mac")," or something like this on ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows")," to launch your app. If you still type ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter run")," in command line, auto hot reload is useless.")))}s.isMDXComponent=!0},6027:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-4af3ddccc39f1b1ac00ceb5b311efd8a.jpg"},8109:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2-a639c71d111a76b0175df87e4e42a7d8.jpg"},9764:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/3-ca430d93e447e26e0897372f90e4c1fd.jpg"}}]);