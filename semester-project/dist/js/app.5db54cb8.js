(function(){"use strict";var e={4385:function(e,t,o){var r=o(5130),n=o(6768);const i={id:"app"};function a(e,t){const o=(0,n.g2)("router-link"),r=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("nav",null,[(0,n.bF)(o,{to:"/"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Home")]))),_:1}),(0,n.bF)(o,{to:"/Portfolio"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("Portfolio")]))),_:1})]),(0,n.bF)(r)])}var s=o(1241);const l={},u=(0,s.A)(l,[["render",a]]);var c=u,d=o(1387),f=o.p+"img/prof_photo.a74466ae.png";const p={lang:"en"};function h(e,t){return(0,n.uX)(),(0,n.CE)("html",p,t[0]||(t[0]=[(0,n.Fv)('<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Personal Professional Website</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.7.3/css/foundation.min.css"></head><body><div class="grid-container"><div class="grid-x grid-margin-x"><div class="cell medium-12"><h1>Welcome to My Website</h1><p>Hello, my name is Chase McIntire. I am a student at CCC and have lived in Nebraska for a while. I graduated college, have one bachelors and am currently working on the second. I love computers, sports, and weight lifting. </p></div></div><div class="grid-x grid-margin-x"><div class="cell medium-6"><h2>Professional Photo</h2><p><img src="'+f+'" alt="Professional Photo"></p></div></div></div></body>',2)]))}const v={},m=(0,s.A)(v,[["render",h]]);var g=m,y=o(4232);const b={class:"portfolio"},k={key:0,class:"loading"},_={key:1,class:"error"},w={key:2,class:"repo-list"},C=["href"],L={class:"repo-meta"};function P(e,t,o,r,i,a){return(0,n.uX)(),(0,n.CE)("div",b,[t[2]||(t[2]=(0,n.Lk)("h1",null,"My GitHub Repositories",-1)),i.loading?((0,n.uX)(),(0,n.CE)("div",k,"Loading repositories...")):(0,n.Q3)("",!0),i.error?((0,n.uX)(),(0,n.CE)("div",_,(0,y.v_)(i.error),1)):(0,n.Q3)("",!0),i.repositories.length?((0,n.uX)(),(0,n.CE)("ul",w,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.repositories,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"repo-item"},[(0,n.Lk)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},[(0,n.Lk)("h2",null,(0,y.v_)(e.name),1)],8,C),(0,n.Lk)("p",null,(0,y.v_)(e.description||"No description provided."),1),(0,n.Lk)("div",L,[(0,n.Lk)("span",null,[t[0]||(t[0]=(0,n.Lk)("strong",null,"Language:",-1)),(0,n.eW)(" "+(0,y.v_)(e.language||"N/A"),1)]),(0,n.Lk)("span",null,[t[1]||(t[1]=(0,n.Lk)("strong",null,"Last Updated:",-1)),(0,n.eW)(" "+(0,y.v_)(a.formatDate(e.updated_at)),1)])])])))),128))])):(0,n.Q3)("",!0)])}var O=o(4373),j={name:"Portfolio-page",data(){return{repositories:[],loading:!0,error:null}},methods:{async fetchRepositories(){const e="https://api.github.com/users/cmcintire13/repos";try{const t=await O.A.get(e);this.repositories=t.data}catch(t){this.error="Failed to load repositories. Please try again later."}finally{this.loading=!1}},formatDate(e){const t={year:"numeric",month:"short",day:"numeric"};return new Date(e).toLocaleDateString(void 0,t)}},mounted(){this.fetchRepositories()}};const E=(0,s.A)(j,[["render",P],["__scopeId","data-v-a3cc694e"]]);var x=E;const F=[{path:"/",name:"home",component:g},{path:"/portfolio",name:"portfolio",component:x}],X=(0,d.aE)({history:(0,d.Bt)(),routes:F});var W=X;(0,r.Ef)(c).use(W).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],s=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(t&&t(r);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=self["webpackChunksemester_project"]=self["webpackChunksemester_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(4385)}));r=o.O(r)})();
//# sourceMappingURL=app.5db54cb8.js.map