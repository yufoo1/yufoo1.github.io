"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=a.createContext({}),l=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,h=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(h,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var h in t)hasOwnProperty.call(t,h)&&(c[h]=t[h]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Git Branch",c={unversionedId:"git/Git Branch",id:"git/Git Branch",title:"Git Branch",description:"Branch Management",source:"@site/docs/git/Git Branch.md",sourceDirName:"git",slug:"/git/Git Branch",permalink:"/docs/git/Git Branch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/Git Branch.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/category/git"},next:{title:"Some Basic Tips of Using Git",permalink:"/docs/git/Some Basic Tips of Using Git"}},h={},l=[{value:"Branch Management",id:"branch-management",level:2},{value:"Create New Branch",id:"create-new-branch",level:3},{value:"Switch Branch",id:"switch-branch",level:3},{value:"Merge Branch",id:"merge-branch",level:3},{value:"Delete Branch",id:"delete-branch",level:3},{value:"List Branches",id:"list-branches",level:3},{value:"Change Branch Name",id:"change-branch-name",level:3},{value:"Remote Branches",id:"remote-branches",level:2},{value:"List Remote Branches",id:"list-remote-branches",level:3},{value:"Fetch Remote Branch",id:"fetch-remote-branch",level:3},{value:"Push to Remote Branch",id:"push-to-remote-branch",level:3},{value:"Track Remote Branch",id:"track-remote-branch",level:3},{value:"Rebasing",id:"rebasing",level:2},{value:"Basic Rebase",id:"basic-rebase",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-branch"},"Git Branch"),(0,r.kt)("h2",{id:"branch-management"},"Branch Management"),(0,r.kt)("h3",{id:"create-new-branch"},"Create New Branch"),(0,r.kt)("p",null,"In Git, it keeps a special pointer called ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," to record what branch you're currently on. You can create a new branch through ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch <branch name>"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch")," only create a new branch and It won't switch to that branch. If you want to create a new branch and switch to it, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout -b <branch name>"),"."),(0,r.kt)("p",null,"What's more, ",(0,r.kt)("inlineCode",{parentName:"p"},"git switch <branch name>")," will switch to an existing branch, ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," option will create a new branch and switch to it. You can return to your previously checked out branch by ",(0,r.kt)("inlineCode",{parentName:"p"},"git switch -"),"."),(0,r.kt)("h3",{id:"switch-branch"},"Switch Branch"),(0,r.kt)("p",null,"To switch to an existing branch, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout <branch name>"),". This command will do two things, move the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," pointer and revert the files in your working directory back to the snapshot the your target branch points to."),(0,r.kt)("p",null,"If your working directory or staging area has uncommitted changes that conflict with the branch you're checking out, Git won't let you switch branches."),(0,r.kt)("h3",{id:"merge-branch"},"Merge Branch"),(0,r.kt)("p",null,"Through ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge <branch>"),", you can merge the target branch to current branch. When you merge a branch that is directly ahead of the commit you're are ,it will show ",(0,r.kt)("inlineCode",{parentName:"p"},"fast-forward"),". If the commit on the branch you're on isn't a direct ancestor of the branch you're merging in, Git will do a simple three-way merge, using the two snapshots pointed to by the branch tips and the common ancestor of the two. Occasionally, if changed the same part of the same file differently in two branches you're merging, Git won't be able to merge them automatically and cleanly and you need to resolve the conflict by yourself."),(0,r.kt)("h3",{id:"delete-branch"},"Delete Branch"),(0,r.kt)("p",null,"When you no longer need a branch that has been merged, you can delete it with ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," option, like ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch -d <branch>"),". You can forcibly delete a branch whether it's merged or not with ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," option."),(0,r.kt)("h3",{id:"list-branches"},"List Branches"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git branch")," will help you get a simple listing of your current branches. To see the last commit of each branch, you can run it with ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," option. ",(0,r.kt)("inlineCode",{parentName:"p"},"--merged")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-merged")," options can filter this list to branches that you have or have not yet merged into the branch you're currently on. "),(0,r.kt)("h3",{id:"change-branch-name"},"Change Branch Name"),(0,r.kt)("p",null,"You can rename the branch locally with the ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch --move <old name> <new name>"),". To let others see it on the remote, you must push it: ",(0,r.kt)("inlineCode",{parentName:"p"},"git push --set-upstream origin <new name>"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"git push origin --delete <old name>")," can delete the branch with bad name on the remote."),(0,r.kt)("h2",{id:"remote-branches"},"Remote Branches"),(0,r.kt)("h3",{id:"list-remote-branches"},"List Remote Branches"),(0,r.kt)("p",null,"To get a full list of remote references explicitly, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"git ls-remote <remote>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote show <remote>"),". "),(0,r.kt)("h3",{id:"fetch-remote-branch"},"Fetch Remote Branch"),(0,r.kt)("p",null,"To synchronize your work with a given remote, you need run ",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch <remote>"),". Then, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"<remote>/<branch>")," that you cannot modify, if you want to get your own branch based on the remote one, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout -b <branch> <remote>/<branch>")," after you fetch the remote branch."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"git fetch --all"),", you can fetch from all your remotes."),(0,r.kt)("h3",{id:"push-to-remote-branch"},"Push to Remote Branch"),(0,r.kt)("p",null,"When you want to share a branch with others, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git push <remote> <branch>"),". If your local branch name is different from remote branch name, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git push <remote> <local branch>:<remote branch>"),"."),(0,r.kt)("h3",{id:"track-remote-branch"},"Track Remote Branch"),(0,r.kt)("p",null,"If you're on a tracking branch and type ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),", Git will automatically knows which server to fetch from and which branch to merge in. When you clone a repository, it will generally create a ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch automatically that tracks ",(0,r.kt)("inlineCode",{parentName:"p"},"origin/master"),"."),(0,r.kt)("p",null,"Through ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout --track <remote>/<branch>"),", which can be simplify to ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout <branch>"),", you can set up a tracking branches. To set up a local branch with a different name than the remote branch, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git checkout -b <local branch> <remote>/<remote branch>"),"."),(0,r.kt)("p",null,"If you already have a local branch and want to set it to a remote branch or change the upstream branch you're tracking, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"-u")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--set-upstream-to")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch")," to explicitly set it."),(0,r.kt)("p",null,"To see what tracking branches you have set up, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"git branch -vv"),", which will list out your local branches with more information including what each branch is tracking and if your local branch is ahead, behind or both."),(0,r.kt)("h2",{id:"rebasing"},"Rebasing"),(0,r.kt)("h3",{id:"basic-rebase"},"Basic Rebase"),(0,r.kt)("p",null,"In Git, there are two ways to integrate changes from one branch to another, which are ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase"),". To use ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase"),", you need switch to your target branch at first and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"git rebase <base branch>"),". After that, you can switch to the base branch and do a fast-forward merge."))}u.isMDXComponent=!0}}]);