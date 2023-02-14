"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<i;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},s="Streams",p={unversionedId:"cpp/Streams",id:"cpp/Streams",title:"Streams",description:"Steams Intro",source:"@site/docs/cpp/Streams.md",sourceDirName:"cpp",slug:"/cpp/Streams",permalink:"/docs/cpp/Streams",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cpp/Streams.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Initialization and References",permalink:"/docs/cpp/Initialization and References"},next:{title:"Containers",permalink:"/docs/cpp/Containers"}},l={},o=[{value:"Steams Intro",id:"steams-intro",level:2},{value:"Output Streams",id:"output-streams",level:3},{value:"Input Streams",id:"input-streams",level:2},{value:"String Streams",id:"string-streams",level:2}],m={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"streams"},"Streams"),(0,r.kt)("h2",{id:"steams-intro"},"Steams Intro"),(0,r.kt)("p",null,"Steam is an abstraction for ",(0,r.kt)("inlineCode",{parentName:"p"},"input / output"),". Streams convert between ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"string representation of data"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"std::cout")," is an output stream, which has type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream"),"."),(0,r.kt)("p",null,"There are two ways to classify streams. One is ",(0,r.kt)("inlineCode",{parentName:"p"},"by direction"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Input streams: Used for reading data."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::istream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::cin"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Output streams: Used for writing data."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::cout"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Input / Output streams: Used for both reading and writing data."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::iostream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::stringsteam")))))),(0,r.kt)("p",null,"Another is ",(0,r.kt)("inlineCode",{parentName:"p"},"by source or destination"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Console streams: Read / write to console."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::cout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::cin"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"File Streams: Read / write to files."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::fstream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::ifstream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::ofstream"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"String streams: Read / write to strings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::stringstream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::istringstream"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"std::ostringstream")))))),(0,r.kt)("h3",{id:"output-streams"},"Output Streams"),(0,r.kt)("p",null,"Output streams have type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream")," and can only send data to the stream. It interacts with the stream using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<<")," operator and converts any type into string and sends it to the stream."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::cout")," is the output stream that goes to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::cout << 5 << std::endl;\n")),(0,r.kt)("p",null,"Output file streams have type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostream"),", only send data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"<<")," operator as well. It converts data of any type into a string and sends it to the file stream. You must initialize your own ",(0,r.kt)("inlineCode",{parentName:"p"},"ofstream")," object linked to your file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::ofstream out("out.txt");\nout << 5 << std::end;;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::cout")," is a global constant object that you get from ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <iostream>"),". To use any other output stream, you must first initialize it."),(0,r.kt)("h2",{id:"input-streams"},"Input Streams"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},">>")," is the stream extraction operator or simply extraction operator, which used to extract data from a stream and place it into a variable."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<<")," is the stream insertion operator or insertion operator, which used to insert data into a stream usually to output the data to a file, console, or string."),(0,r.kt)("p",null,"Input streams have type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::istream")," and can only receive strings using the ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," operator, which receives a string from the stream and converts it to data. ",(0,r.kt)("inlineCode",{parentName:"p"},"std::cin")," is the input stream that gets input from the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"int x;\nstring str;\nstd::cin >> x >> str;\n")),(0,r.kt)("p",null,"First call to ",(0,r.kt)("inlineCode",{parentName:"p"},"std::cin >>")," creates a command line prompt that allows the user to type until they hit enter. Each ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," only reads until the next whitespace, which includes tab, space and newline."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::istream")," as a sequence of characters. Int variables will stores ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to indicate a fail and once an error is detected, the input stream's fail bit will be set, which leads to it no longer accept input."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::getline()")," is used to read a line from a input stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"istream& getline(istream& is, string& str, char delim);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::getline()")," stops when reads ",(0,r.kt)("inlineCode",{parentName:"p"},"delim")," or reaches end of file, which default is ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," and it firstly clear contents in ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,r.kt)("p",null,"To read a whole line, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::getline(istream& stream, string& line);\n")),(0,r.kt)("p",null,"Input file streams have type ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ifstream")," and only receives string using the ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," operator. It receives strings from a file and converts it to data of any data. You muse initialize your own ",(0,r.kt)("inlineCode",{parentName:"p"},"ifstream")," object linked to your file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::ifstream in("in.txt")\nstring str;\nin >> str;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"std::cin")," is a global constant object that you get from ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <iostream>"),"."),(0,r.kt)("h2",{id:"string-streams"},"String Streams"),(0,r.kt)("p",null,"Stringstreams is a stream that can read from or write to a string object, which allows you to perform input / output operations on a string as if it were a stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string input = "123";\nstd::stringstream stream(input);\nint number;\nstream >> number;\nstd::cout << number << std::endl; // Outputs "123"\n')),(0,r.kt)("p",null,"If you only want to read or write data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::istringstream"),", gives any data type to the istringstream, it'll store it as a string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"write only: ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ostringstream"),", makes an ostringstream out of a string, read from it word / type by word / type."))))}u.isMDXComponent=!0}}]);