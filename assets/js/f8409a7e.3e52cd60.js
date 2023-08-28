"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[206],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(o),g=r,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||n;return o?a.createElement(m,l(l({ref:t},s),{},{components:o})):a.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=o(7462),r=(o(7294),o(3905));o(2389);const n={sidebar_position:1},l="Tutorial Intro",i={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"| Workshop goal | Learn how to use MongoDB Atlas and Google Cloud together |",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/google-cloud-workshop/docs/intro",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"MongoDB Atlas: Cloud Database",permalink:"/google-cloud-workshop/docs/category/mongodb-atlas-cloud-database"}},u={},p=[{value:"Agenda",id:"agenda",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Workshop goal"),(0,r.kt)("th",{parentName:"tr",align:null},"Learn how to use MongoDB Atlas and Google Cloud together"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What you will learn"),(0,r.kt)("td",{parentName:"tr",align:null},"How to set up and take advantage of products in the MongoDB Atlas data platform, work with Google Cloud AI APIs and deploy a serverless app to Google Cloud Run")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prerequisites"),(0,r.kt)("td",{parentName:"tr",align:null},"Free ",(0,r.kt)("a",{parentName:"td",href:"https://mongodb.com/try?utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=google_cloud_workshop&utm_term=stanimira.vlaeva"},"MongoDB Atlas account")," and Google Cloud account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time to complete"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5h")))),(0,r.kt)("p",null,"MongoDB Atlas is the best way to deploy, manage, and grow MongoDB on Google Cloud! Today, you will build a web application that displays a list of cakes, with the ability to view further details on the cakes and even leave a comment! You will then learn to leverage Atlas App Services products such as Triggers and Functions, to call out to Google Cloud Natural Language API and carry out sentiment analysis on the comments. Finally, we'll deploy our application to Google Cloud Run."),(0,r.kt)("p",null,"Even better, no prior knowledge of MongoDB or Google Cloud is required!"),(0,r.kt)("h2",{id:"agenda"},"Agenda"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/mongodb-atlas-cloud-database"},"MongoDB Atlas: Cloud Database Setup"),": Get up and running in MongoDB Atlas by creating your first MongoDB Atlas database and inserting our first ever documents."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/atlas-app-services"},"Atlas App Services: GraphQL API"),": Create and configure your first app within Atlas App Services. Learn how to set up a GraphQL API for your data. Connect the App Services to a bakery web application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/google-cloud-natural-language-api"},"Google Cloud Natural Language API"),": Set up Google Cloud Natural Language API and use Atlas Triggers and Functions to hook it up to our web app."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/category/google-cloud-run"},"Google Cloud Run Deployment"),": Deploy your bakery web app to the Cloud with Google Cloud Run.")))}d.isMDXComponent=!0}}]);