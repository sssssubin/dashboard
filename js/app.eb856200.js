(function(e){function t(t){for(var n,a,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dashboard/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"41fd":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app","data-breakpoint-mode":e.isMobile?"mobile":"pc"}},[t(e.currentLayout,{tag:"component"},[t("router-view")],1)],1)},i=[],a={name:"App",computed:{isMobile(){return this.$store.getters.isMobile},currentLayout(){const e=this.$route.matched.find(e=>e.meta.layout);return e?e.meta.layout:"div"}}},u=a,s=r("2877"),c=Object(s["a"])(u,o,i,!1,null,null,null),l=c.exports,d=r("2f62");n["a"].use(d["a"]);var p=new d["a"].Store({state:{screenWidth:window.innerWidth},mutations:{SET_SCREEN_WIDTH(e,t){e.screenWidth=t}},actions:{checkScreenWidth({commit:e}){const t=()=>{e("SET_SCREEN_WIDTH",window.innerWidth)};t(),window.addEventListener("resize",t)}},getters:{isMobile(e){return e.screenWidth<768},screenWidth(e){return e.screenWidth}}}),f=r("8c4f"),h=function(){var e=this,t=e._self._c;return t("router-view")},b=[],v={},m=Object(s["a"])(v,h,b,!1,null,null,null),y=m.exports,w=function(){var e=this;e._self._c;return e._m(0)},_=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard"},[t("div",{staticClass:"dashboard__container"})])}],g={},O=g,j=(r("64af"),Object(s["a"])(O,w,_,!1,null,null,null)),S=j.exports;n["a"].use(f["a"]);const W=[{path:"/dashboard/",component:S,meta:{layout:y}}],x=new f["a"]({mode:"history",base:"/dashboard/",routes:W});var M=x;n["a"].config.productionTip=!1,new n["a"]({router:M,store:p,render:e=>e(l),mounted(){this.$store.dispatch("checkScreenWidth")}}).$mount("#app")},"64af":function(e,t,r){"use strict";r("41fd")}});
//# sourceMappingURL=app.eb856200.js.map