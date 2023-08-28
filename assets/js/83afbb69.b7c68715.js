"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(o),d=n,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||a;return o?r.createElement(m,l(l({ref:t},p),{},{components:o})):r.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4490:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=o(7462),n=(o(7294),o(3905)),a=o(4996);const l={sidebar_position:1},i="Set up Google Cloud",u={unversionedId:"natural-language-api/set-up-google-cloud",id:"natural-language-api/set-up-google-cloud",title:"Set up Google Cloud",description:"This section requires a Google Cloud account. You can create one and get $300 in free credits here.",source:"@site/docs/3-natural-language-api/set-up-google-cloud.mdx",sourceDirName:"3-natural-language-api",slug:"/natural-language-api/set-up-google-cloud",permalink:"/google-cloud-workshop/docs/natural-language-api/set-up-google-cloud",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/3-natural-language-api/set-up-google-cloud.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Natural Language API",permalink:"/google-cloud-workshop/docs/category/google-cloud-natural-language-api"},next:{title:"Enable the Google Cloud Natural Language API",permalink:"/google-cloud-workshop/docs/natural-language-api/set-up-nl-api"}},c={},p=[],g={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"set-up-google-cloud"},"Set up Google Cloud"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This section requires a Google Cloud account. You can create one and get $300 in free credits ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"here"),".\nAlternatively, you can use this Google Cloud Skills Boost lab \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://mdb.link/gc-lab-2"},"MongoDB Atlas with Natural Language API and Cloud Run"),". When you start the lab, you will get access to a temporary Google Cloud account that you can use for the duration of the lab.")),(0,n.kt)("p",null,"In this section, we'll be using the Google Cloud Natural Language API to analyze the sentiment of the comments left on the cakes in the web app. That's why you need to set up a Google Cloud account and project."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sign in to ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/getting-started"},"Cloud Console")," and create a new project."),(0,n.kt)("img",{alt:"Select project dropdown in Google Cloud",src:(0,a.Z)("/img/chapter-3-nlp/select-project.png"),width:"500"}),(0,n.kt)("img",{alt:"Dialog box in Google Cloud highlighting the 'New Project' button",src:(0,a.Z)("/img/chapter-3-nlp/new-project.png"),width:"500"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remember your project ID. The rest of the tutorial will refer to it as ",(0,n.kt)("inlineCode",{parentName:"p"},"PROJECT_ID"),"."),(0,n.kt)("img",{alt:"New Project dialog in highlighting the Project ID text",src:(0,a.Z)("/img/chapter-3-nlp/project-id.png"),width:"300"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/billing"},"Enable billing")," to use Google Cloud resources. If you\u2019re a new user, you\u2019re eligible for the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"$300 Free Trial")," program."))))}d.isMDXComponent=!0}}]);