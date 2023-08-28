"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[744],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var l=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=l.createContext({}),c=function(e){var t=l.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,g=d["".concat(u,".").concat(h)]||d[h]||s[h]||r;return o?l.createElement(g,a(a({ref:t},p),{},{components:o})):l.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4300:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var l=o(7462),n=(o(7294),o(3905)),r=o(4996);const a={sidebar_position:1},i="\ud83e\uddb8 Enable Cloud APIs with Cloud Shell",u={unversionedId:"cloud-run/enable-apis",id:"cloud-run/enable-apis",title:"\ud83e\uddb8 Enable Cloud APIs with Cloud Shell",description:"This section requires a Google Cloud account. You can create one and get $300 in free credits here.",source:"@site/docs/4-cloud-run/enable-apis.mdx",sourceDirName:"4-cloud-run",slug:"/cloud-run/enable-apis",permalink:"/google-cloud-workshop/docs/cloud-run/enable-apis",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/4-cloud-run/enable-apis.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Run",permalink:"/google-cloud-workshop/docs/category/google-cloud-run"},next:{title:"\ud83e\uddb8 Connect to App Services",permalink:"/google-cloud-workshop/docs/cloud-run/connect-to-app-services"}},c={},p=[{value:"Configure Cloud Shell",id:"configure-cloud-shell",level:2},{value:"Enable the Cloud Run and Cloud Build APIs",id:"enable-the-cloud-run-and-cloud-build-apis",level:2},{value:"Fetch the source code",id:"fetch-the-source-code",level:2}],d={toc:p},s="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(s,(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-enable-cloud-apis-with-cloud-shell"},"\ud83e\uddb8 Enable Cloud APIs with Cloud Shell"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This section requires a Google Cloud account. You can create one and get $300 in free credits ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"here"),".\nAlternatively, you can use this Google Cloud Skills Boost lab \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://mdb.link/gc-lab-2"},"MongoDB Atlas with Natural Language API and Cloud Run"),". When you start the lab, you will get access to a temporary Google Cloud account that you can use for the duration of the lab.")),(0,n.kt)("p",null,"Cloud Shell is a command-line environment running Google Cloud. You will be using Cloud Shell to enable Cloud APIs you need for the application deployment."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Cloud Shell is a powerful tool that will help you greatly in your Google Cloud journey. It\u2019s a Debian-based virtual machine, preloaded with all the tools you need for Cloud development.")),(0,n.kt)("h2",{id:"configure-cloud-shell"},"Configure Cloud Shell"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate Cloud Shell by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Activate Cloud Shell")," icon."),(0,n.kt)("img",{alt:"Cloud Console navigation bar highlighting the 'Activate Cloud Shell' button",src:(0,r.Z)("/img/chapter-4-cloud-run/activate-cloud-shell.png")})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find your project ID in the ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home/dashboard"},"Cloud Console dashboard"),"."),(0,n.kt)("img",{alt:"New Project dialog in highlighting the Project ID text",src:(0,r.Z)("/img/chapter-4-cloud-run/project-id.png"),width:"300"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set your project using the ",(0,n.kt)("inlineCode",{parentName:"p"},"PROJECT_ID"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gcloud config set project <PROJECT_ID>\n")))),(0,n.kt)("h2",{id:"enable-the-cloud-run-and-cloud-build-apis"},"Enable the Cloud Run and Cloud Build APIs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From Cloud Shell, enable the Cloud Run and Cloud Build APIs"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gcloud services enable run.googleapis.com\ngcloud services enable cloudbuild.googleapis.com\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If prompted, authorize Cloud Shell to make API calls.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see a success message similar to this one:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'Operation "operations/acf.cc11252d-30af-47ad-9d59-477a12847c9e" finished successfully.\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To see all enabled APIs, you can run:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"gcloud services list\n")))),(0,n.kt)("h2",{id:"fetch-the-source-code"},"Fetch the source code"),(0,n.kt)("p",null,"You need the source code of the app in order to deploy it to Cloud Run. Run ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone")," in the Cloud Shell to fetch the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mongodb-developer/Google-Cloud-MongoDB-Atlas-Workshop"},"public Github repository"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/mongodb-developer/Google-Cloud-MongoDB-Atlas-Workshop.git\n")))}h.isMDXComponent=!0}}]);