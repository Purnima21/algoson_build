(function(e){function t(t){for(var r,o,a=t[0],s=t[1],i=t[2],f=0,l=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-05c0807f":"40f3a4fa","chunk-5e51a221":"c97a7b92","chunk-22b35027":"d063cf49","chunk-28fecaca":"a51de4c5","chunk-59bbe615":"ea38eabe"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-05c0807f":1,"chunk-22b35027":1,"chunk-28fecaca":1,"chunk-59bbe615":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05c0807f":"447f06b9","chunk-5e51a221":"31d6cfe0","chunk-22b35027":"52f302de","chunk-28fecaca":"3abc9a39","chunk-59bbe615":"a4d64c66"}[e]+".css",c=s.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],f=i.getAttribute("data-href");if(f===r||f===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=a(e);var l=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"setAllUsers",(function(){return U})),n.d(r,"setAction",(function(){return w})),n.d(r,"setSelectedUserData",(function(){return j}));var o={};n.r(o),n.d(o,"getAllUsers",(function(){return S})),n.d(o,"setSelectedUser",(function(){return A}));var c={};n.r(c),n.d(c,"getUserPost",(function(){return E})),n.d(c,"getPost",(function(){return x}));var u={};n.r(u),n.d(u,"setUserPosts",(function(){return C})),n.d(u,"setPost",(function(){return T}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],f={name:"App"},l=f,d=(n("034f"),n("2877")),p=Object(d["a"])(l,s,i,!1,null,null,null),h=p.exports,m=n("8c4f"),v=[{path:"/",component:function(e){return n.e("chunk-05c0807f").then(function(){var t=[n("bb51")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"",component:function(e){return Promise.all([n.e("chunk-5e51a221"),n.e("chunk-22b35027")]).then(function(){var t=[n("dbef")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/posts/:id",component:function(e){return Promise.all([n.e("chunk-5e51a221"),n.e("chunk-59bbe615")]).then(function(){var t=[n("7c2a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/each-post/:id",component:function(e){return Promise.all([n.e("chunk-5e51a221"),n.e("chunk-28fecaca")]).then(function(){var t=[n("19d5")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],b=v;a["a"].use(m["a"]);var g=new m["a"]({routes:b,linkActiveClass:"active"}),y=g,k=n("2f62"),P={users:[],selectedUser:{}};function U(e,t){e.users=t}function w(e,t){e.action=t}function j(e,t){e.selectedUser=t}n("d3b7"),n("7db0");function S(e,t){var n=e.commit,r=e.dispatch;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){n("setAllUsers",e),t&&r("User/setSelectedUser",{userId:t},{root:!0})}))}function A(e,t){var n=e.commit,r=e.dispatch,o=e.rootState,c=t.userId,u=o.User.users.find((function(e){return e.id==c}));u?n("setSelectedUserData",u):r("User/getAllUsers",c,{root:!0})}var O={namespaced:!0,state:P,mutations:r,actions:o},_={posts:[],post:{id:"",title:"",body:""}};function E(e,t){var n=e.commit,r=e.dispatch,o=t.userId;r("User/setSelectedUser",{userId:o},{root:!0}),fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(o)).then((function(e){return e.json()})).then((function(e){return n("setUserPosts",e)}))}function x(e,t){var n=e.commit,r=t.postId;fetch("https://jsonplaceholder.typicode.com/posts/".concat(r)).then((function(e){return e.json()})).then((function(e){return n("setPost",e)}))}function C(e,t){e.posts=t}function T(e,t){e.post=t}var I={namespaced:!0,state:_,actions:c,mutations:u};a["a"].use(k["a"]);var L=new k["a"].Store({modules:{User:O,Post:I}});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)},store:L,router:y}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.1569112c.js.map