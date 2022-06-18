var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e){return null==e?"":e}function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function m(){return d(" ")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function y(e,t,n){e.classList[n?"add":"remove"](t)}let h;function x(e){h=e}function v(e){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_destroy.push(e)}const k=[],b=[],E=[],T=[],P=Promise.resolve();let w=!1;function R(e){E.push(e)}let W=!1;const _=new Set;function N(){if(!W){W=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];x(t),S(t.$$)}for(x(null),k.length=0;b.length;)b.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];_.has(t)||(_.add(t),t())}E.length=0}while(k.length);for(;T.length;)T.pop()();w=!1,W=!1,_.clear()}}function S(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const q=new Set;let C;function D(){C={r:0,c:[],p:C}}function L(){C.r||r(C.c),C=C.p}function I(e,t){e&&e.i&&(q.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),C.c.push((()=>{q.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function U(e){e&&e.c()}function z(e,n,s,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=e.$$;a&&a.m(n,s),o||R((()=>{const n=l.map(t).filter(i);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(R)}function B(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function M(e,t){-1===e.$$.dirty[0]&&(k.push(e),w||(w=!0,P.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,i,s,o,a,l,u=[-1]){const d=h;x(t);const m=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:i.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=s?s(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return m.ctx&&a(m.ctx[e],m.ctx[e]=i)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](i),p&&M(t,e)),n})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!o&&o(m.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);m.fragment&&m.fragment.l(e),e.forEach(c)}else m.fragment&&m.fragment.c();i.intro&&I(t.$$.fragment),z(t,i.target,i.anchor,i.customElement),N()}x(d)}class j{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function A(e,t,n){let{callback:r}=t,{interval:i=1e3}=t;return function(e,t){const n=setInterval(e,t);v((()=>{clearInterval(n)}))}(r,i),e.$$set=e=>{"callback"in e&&n(0,r=e.callback),"interval"in e&&n(1,i=e.interval)},[r,i]}class H extends j{constructor(e){super(),O(this,e,A,null,s,{callback:0,interval:1})}}const G=document.createElement("audio");G.src="audio/combo.wav";var X=0;function Y(e,t,n){e.currentTime=t,X=n,e.play()}function J(t){let n,r,s,o,h,x,v,k,b,E,T,P,w;return{c(){n=u("div"),r=u("div"),s=u("span"),o=d(t[0]),h=m(),x=u("div"),v=u("span"),k=d(t[1]),b=u("span"),b.textContent="X",E=m(),T=u("div"),g(s,"class","numFont"),g(r,"class","svelte-p7qq7y"),g(v,"class","numFont"),g(b,"class","x svelte-p7qq7y"),g(x,"class","svelte-p7qq7y"),g(n,"id","timerUI"),g(n,"class","svelte-p7qq7y"),g(T,"class","timerBar svelte-p7qq7y"),$(T,"width",t[2]+"%"),y(T,"paused",!(t[3]||t[4]))},m(e,c){l(e,n,c),a(n,r),a(r,s),a(s,o),a(n,h),a(n,x),a(x,v),a(v,k),a(x,b),l(e,E,c),l(e,T,c),P||(w=p(b,"click",(function(){i(t[5])&&t[5].apply(this,arguments)})),P=!0)},p(e,[n]){t=e,1&n&&f(o,t[0]),2&n&&f(k,t[1]),4&n&&$(T,"width",t[2]+"%"),24&n&&y(T,"paused",!(t[3]||t[4]))},i:e,o:e,d(e){e&&c(n),e&&c(E),e&&c(T),P=!1,w()}}}function K(e,t,n){let{timeElapsed:r}=t,{timeRemaining:i}=t,{percentComplete:s}=t,{isPlaying:o}=t,{isEnded:a}=t,{clearWorkout:l}=t;return e.$$set=e=>{"timeElapsed"in e&&n(0,r=e.timeElapsed),"timeRemaining"in e&&n(1,i=e.timeRemaining),"percentComplete"in e&&n(2,s=e.percentComplete),"isPlaying"in e&&n(3,o=e.isPlaying),"isEnded"in e&&n(4,a=e.isEnded),"clearWorkout"in e&&n(5,l=e.clearWorkout)},[r,i,s,o,a,l]}G.addEventListener("timeupdate",(function(){this.currentTime>X&&this.pause()}),!1);class Q extends j{constructor(e){super(),O(this,e,K,J,s,{timeElapsed:0,timeRemaining:1,percentComplete:2,isPlaying:3,isEnded:4,clearWorkout:5})}}function V(e){let t,n;return{c(){t=u("img"),g(t,"alt","right"),t.src!==(n="img/armL.gif")&&g(t,"src","img/armL.gif"),g(t,"class","svelte-exnbrl")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function Z(e){let t,n;return{c(){t=u("img"),g(t,"alt","left"),t.src!==(n="img/armR1.gif")&&g(t,"src","img/armR1.gif"),g(t,"class","svelte-exnbrl")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function ee(t){let n,r;function i(e,t){return"left"==e[0]?Z:"right"==e[0]?V:void 0}let s=i(t),a=s&&s(t);return{c(){n=u("div"),a&&a.c(),g(n,"id","sideUI"),g(n,"class",r=o(t[0])+" svelte-exnbrl")},m(e,t){l(e,n,t),a&&a.m(n,null)},p(e,[t]){s!==(s=i(e))&&(a&&a.d(1),a=s&&s(e),a&&(a.c(),a.m(n,null))),1&t&&r!==(r=o(e[0])+" svelte-exnbrl")&&g(n,"class",r)},i:e,o:e,d(e){e&&c(n),a&&a.d()}}}function te(e,t,n){let{side:r}=t;return e.$$set=e=>{"side"in e&&n(0,r=e.side)},[r]}class ne extends j{constructor(e){super(),O(this,e,te,ee,s,{side:0})}}function re(e){let t,n,r;return{c(){t=d(e[4]),n=d(" / "),r=d(e[5])},m(e,i){l(e,t,i),l(e,n,i),l(e,r,i)},p(e,n){16&n&&f(t,e[4]),32&n&&f(r,e[5])},d(e){e&&c(t),e&&c(n),e&&c(r)}}}function ie(t){let n,r,i,s,o,p,$,h,x=t[5]>0&&re(t);return{c(){n=u("div"),r=u("div"),i=d(t[0]),s=m(),o=u("div"),x&&x.c(),p=m(),$=u("div"),h=d(t[1]),g(r,"class","title svelte-1xzl3qa"),g(o,"class","numFont reps svelte-1xzl3qa"),g($,"class","numFont timeContent svelte-1xzl3qa"),g(n,"id","contentUI"),g(n,"class","svelte-1xzl3qa"),y(n,"paused",!(t[2]||t[3])),y(n,"isEnded",t[3])},m(e,t){l(e,n,t),a(n,r),a(r,i),a(n,s),a(n,o),x&&x.m(o,null),a(n,p),a(n,$),a($,h)},p(e,[t]){1&t&&f(i,e[0]),e[5]>0?x?x.p(e,t):(x=re(e),x.c(),x.m(o,null)):x&&(x.d(1),x=null),2&t&&f(h,e[1]),12&t&&y(n,"paused",!(e[2]||e[3])),8&t&&y(n,"isEnded",e[3])},i:e,o:e,d(e){e&&c(n),x&&x.d()}}}function se(e,t,n){let{title:r}=t,{timeRemaining:i}=t,{isPlaying:s}=t,{isEnded:o}=t,{rep:a}=t,{reps:l}=t;return e.$$set=e=>{"title"in e&&n(0,r=e.title),"timeRemaining"in e&&n(1,i=e.timeRemaining),"isPlaying"in e&&n(2,s=e.isPlaying),"isEnded"in e&&n(3,o=e.isEnded),"rep"in e&&n(4,a=e.rep),"reps"in e&&n(5,l=e.reps)},[r,i,s,o,a,l]}class oe extends j{constructor(e){super(),O(this,e,se,ie,s,{title:0,timeRemaining:1,isPlaying:2,isEnded:3,rep:4,reps:5})}}function ae(e){let t,n;return{c(){t=u("img"),g(t,"alt","play"),t.src!==(n="img/play.svg")&&g(t,"src","img/play.svg")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function le(e){let t,n;return{c(){t=u("img"),g(t,"alt","pause"),t.src!==(n="img/pause.svg")&&g(t,"src","img/pause.svg")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function ce(t){let n,s,o,d,f,$,h,x;function v(e,t){return e[3]?le:ae}let k=v(t),b=k(t);return{c(){n=u("div"),s=u("button"),s.textContent="<",o=m(),d=u("button"),b.c(),f=m(),$=u("button"),$.textContent=">",g(s,"class","prev svelte-71rrop"),g(d,"class","play svelte-71rrop"),g($,"class","next svelte-71rrop"),g(n,"id","controlsUI"),g(n,"class","svelte-71rrop"),y(n,"isNotEnded",!t[4])},m(e,r){l(e,n,r),a(n,s),a(n,o),a(n,d),b.m(d,null),a(n,f),a(n,$),h||(x=[p(s,"click",(function(){i(t[0])&&t[0].apply(this,arguments)})),p(d,"click",(function(){i(t[2])&&t[2].apply(this,arguments)})),p($,"click",(function(){i(t[1])&&t[1].apply(this,arguments)}))],h=!0)},p(e,[r]){k!==(k=v(t=e))&&(b.d(1),b=k(t),b&&(b.c(),b.m(d,null))),16&r&&y(n,"isNotEnded",!t[4])},i:e,o:e,d(e){e&&c(n),b.d(),h=!1,r(x)}}}function ue(e,t,n){let{goPrev:r}=t,{goNext:i}=t,{toggleTimer:s}=t,{isPlaying:o}=t,{isEnded:a}=t;return e.$$set=e=>{"goPrev"in e&&n(0,r=e.goPrev),"goNext"in e&&n(1,i=e.goNext),"toggleTimer"in e&&n(2,s=e.toggleTimer),"isPlaying"in e&&n(3,o=e.isPlaying),"isEnded"in e&&n(4,a=e.isEnded)},[r,i,s,o,a]}class de extends j{constructor(e){super(),O(this,e,ue,ce,s,{goPrev:0,goNext:1,toggleTimer:2,isPlaying:3,isEnded:4})}}function me(e){let t,n;return{c(){t=u("img"),g(t,"alt","done"),t.src!==(n="img/finished.gif")&&g(t,"src","img/finished.gif"),g(t,"class","svelte-1ax9hbo")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function pe(e){let t,n;return{c(){t=u("img"),g(t,"alt","go"),t.src!==(n="img/dog_work.gif")&&g(t,"src","img/dog_work.gif"),g(t,"class","svelte-1ax9hbo")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function ge(e){let t,n;return{c(){t=u("img"),g(t,"alt","rest"),t.src!==(n="img/dog_rest.gif")&&g(t,"src","img/dog_rest.gif"),g(t,"class","svelte-1ax9hbo")},m(e,n){l(e,t,n)},d(e){e&&c(t)}}}function fe(t){let n,r;function i(e,t){return"intro"==e[0]||"rest"==e[0]||"exercise-rest"==e[0]?ge:"exercise"==e[0]||"exercise-left"==e[0]||"exercise-right"==e[0]?pe:"end"==e[0]?me:void 0}let s=i(t),a=s&&s(t);return{c(){n=u("div"),a&&a.c(),g(n,"id","dogUI"),g(n,"class",r=o("end"==t[0]?t[0]:"notEnd")+" svelte-1ax9hbo")},m(e,t){l(e,n,t),a&&a.m(n,null)},p(e,[t]){s!==(s=i(e))&&(a&&a.d(1),a=s&&s(e),a&&(a.c(),a.m(n,null))),1&t&&r!==(r=o("end"==e[0]?e[0]:"notEnd")+" svelte-1ax9hbo")&&g(n,"class",r)},i:e,o:e,d(e){e&&c(n),a&&a.d()}}}function $e(e,t,n){let{dogType:r}=t;return e.$$set=e=>{"dogType"in e&&n(0,r=e.dogType)},[r]}class ye extends j{constructor(e){super(),O(this,e,$e,fe,s,{dogType:0})}}function he(t){let n,r;return{c(){n=u("div"),r=d(t[0]),g(n,"id","nextUI"),g(n,"class","svelte-1djo429"),y(n,"hasNext",!!t[0]),y(n,"paused",!(t[1]||t[2])),y(n,"isEnded",t[2])},m(e,t){l(e,n,t),a(n,r)},p(e,[t]){1&t&&f(r,e[0]),1&t&&y(n,"hasNext",!!e[0]),6&t&&y(n,"paused",!(e[1]||e[2])),4&t&&y(n,"isEnded",e[2])},i:e,o:e,d(e){e&&c(n)}}}function xe(e,t,n){let{nextTitle:r}=t,{isPlaying:i}=t,{isEnded:s}=t;return e.$$set=e=>{"nextTitle"in e&&n(0,r=e.nextTitle),"isPlaying"in e&&n(1,i=e.isPlaying),"isEnded"in e&&n(2,s=e.isEnded)},[r,i,s]}class ve extends j{constructor(e){super(),O(this,e,xe,he,s,{nextTitle:0,isPlaying:1,isEnded:2})}}function ke(t){let n,r;return n=new H({props:{callback:t[5]}}),{c(){U(n.$$.fragment)},m(e,t){z(n,e,t),r=!0},p:e,i(e){r||(I(n.$$.fragment,e),r=!0)},o(e){F(n.$$.fragment,e),r=!1},d(e){B(n,e)}}}function be(e){let t,n;return t=new ne({props:{side:e[6](e[1],e[3]).side}}),{c(){U(t.$$.fragment)},m(e,r){z(t,e,r),n=!0},p(e,n){const r={};10&n&&(r.side=e[6](e[1],e[3]).side),t.$set(r)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function Ee(e){let t,n,r,i,s,o,d,p,f,$,h,x,v,k,b,E=e[6](e[1],e[3]).side,T=e[2]&&ke(e);i=new Q({props:{timeElapsed:Pe(e[3]),timeRemaining:Pe(e[6](e[1],e[3]).totalTimeRemaining),percentComplete:e[3]/(e[1].totalDuration-1)*100,isPlaying:e[2],isEnded:"end"==e[6](e[1],e[3]).type,clearWorkout:e[0]}});let P=E&&be(e);return d=new oe({props:{title:e[6](e[1],e[3]).title,timeRemaining:Pe(e[6](e[1],e[3]).timeRemaining),isPlaying:e[2],isEnded:"end"==e[6](e[1],e[3]).type,rep:e[6](e[1],e[3]).rep,reps:e[6](e[1],e[3]).reps}}),f=new de({props:{goNext:e[7],goPrev:e[8],toggleTimer:e[4],isPlaying:e[2],isEnded:"end"!=e[6](e[1],e[3]).type}}),x=new ye({props:{dogType:e[6](e[1],e[3]).type}}),k=new ve({props:{isPlaying:e[2],isEnded:"end"==e[6](e[1],e[3]).type,nextTitle:e[6](e[1],e[3]).nextTitle}}),{c(){T&&T.c(),t=m(),n=u("main"),r=u("div"),U(i.$$.fragment),s=m(),P&&P.c(),o=m(),U(d.$$.fragment),p=m(),U(f.$$.fragment),$=m(),h=u("div"),U(x.$$.fragment),v=m(),U(k.$$.fragment),g(r,"id","top"),g(r,"class","svelte-1l196q"),g(h,"id","bottom"),g(h,"class","svelte-1l196q"),g(n,"class","svelte-1l196q"),y(n,"green","exercise"==e[6](e[1],e[3]).type||"exercise-left"==e[6](e[1],e[3]).type),y(n,"blue","exercise-right"==e[6](e[1],e[3]).type)},m(e,c){T&&T.m(e,c),l(e,t,c),l(e,n,c),a(n,r),z(i,r,null),a(r,s),P&&P.m(r,null),a(n,o),z(d,n,null),a(n,p),z(f,n,null),a(n,$),a(n,h),z(x,h,null),a(h,v),z(k,h,null),b=!0},p(e,[s]){e[2]?T?(T.p(e,s),4&s&&I(T,1)):(T=ke(e),T.c(),I(T,1),T.m(t.parentNode,t)):T&&(D(),F(T,1,1,(()=>{T=null})),L());const o={};8&s&&(o.timeElapsed=Pe(e[3])),10&s&&(o.timeRemaining=Pe(e[6](e[1],e[3]).totalTimeRemaining)),10&s&&(o.percentComplete=e[3]/(e[1].totalDuration-1)*100),4&s&&(o.isPlaying=e[2]),10&s&&(o.isEnded="end"==e[6](e[1],e[3]).type),1&s&&(o.clearWorkout=e[0]),i.$set(o),10&s&&(E=e[6](e[1],e[3]).side),E?P?(P.p(e,s),10&s&&I(P,1)):(P=be(e),P.c(),I(P,1),P.m(r,null)):P&&(D(),F(P,1,1,(()=>{P=null})),L());const a={};10&s&&(a.title=e[6](e[1],e[3]).title),10&s&&(a.timeRemaining=Pe(e[6](e[1],e[3]).timeRemaining)),4&s&&(a.isPlaying=e[2]),10&s&&(a.isEnded="end"==e[6](e[1],e[3]).type),10&s&&(a.rep=e[6](e[1],e[3]).rep),10&s&&(a.reps=e[6](e[1],e[3]).reps),d.$set(a);const l={};4&s&&(l.isPlaying=e[2]),10&s&&(l.isEnded="end"!=e[6](e[1],e[3]).type),f.$set(l);const c={};10&s&&(c.dogType=e[6](e[1],e[3]).type),x.$set(c);const u={};4&s&&(u.isPlaying=e[2]),10&s&&(u.isEnded="end"==e[6](e[1],e[3]).type),10&s&&(u.nextTitle=e[6](e[1],e[3]).nextTitle),k.$set(u),74&s&&y(n,"green","exercise"==e[6](e[1],e[3]).type||"exercise-left"==e[6](e[1],e[3]).type),74&s&&y(n,"blue","exercise-right"==e[6](e[1],e[3]).type)},i(e){b||(I(T),I(i.$$.fragment,e),I(P),I(d.$$.fragment,e),I(f.$$.fragment,e),I(x.$$.fragment,e),I(k.$$.fragment,e),b=!0)},o(e){F(T),F(i.$$.fragment,e),F(P),F(d.$$.fragment,e),F(f.$$.fragment,e),F(x.$$.fragment,e),F(k.$$.fragment,e),b=!1},d(e){T&&T.d(e),e&&c(t),e&&c(n),B(i),P&&P.d(),B(d),B(f),B(x),B(k)}}}function Te(e,t){e.workoutData.push({startTime:e.totalDuration,...t}),e.totalDuration+=t.duration}function Pe(e){var t=Math.floor(e%3600/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}function we(e,t,n){let r,i,s,{clearWorkout:o}=t,{currentWorkout:a}=t;const l=()=>Y(G,1.1,2),c=()=>Y(G,3.1,4),u=()=>Y(G,4.1,5);let d=!1;const m=()=>{0==r&&(console.log("start!"),Y(G,0,1)),n(2,d=!d)};function p(e,t){let n=e.workoutData;if(t>=e.totalDuration)return console.log("timeElapsed is greater than total workout duration"),{title:"You're done!",timeRemaining:0,nextTitle:"",type:"end",startTime:e.totalDuration,totalTimeRemaining:0};for(let r=0;r<n.length;r++){let i=n[r];if(i.startTime<=t&&t<i.startTime+i.duration){let n={};return i.side&&(n.side=i.side),n.title=i.name,n.timeRemaining=i.startTime+i.duration-t,n.totalTimeRemaining=e.totalDuration-t,n.nextTitle=i.nextName,n.startTime=i.startTime,n.type=i.type,n.rep=i.rep?i.rep:0,n.reps=i.reps?i.reps:0,n}}}return e.$$set=e=>{"clearWorkout"in e&&n(0,o=e.clearWorkout),"currentWorkout"in e&&n(9,a=e.currentWorkout)},e.$$.update=()=>{512&e.$$.dirty&&n(1,i=function(e){let t=e.rest,n={workoutData:[],totalDuration:0};Te(n,{type:"intro",name:"Get Ready!",duration:3,nextName:(e=e.data)[0].name});for(let r=0;r<e.length;r++){let i=e[r],s=i.reps?i.reps:1;i.nextName=e[r+1]?e[r+1].name:"";for(let e=1;e<=s;e++)i.rep=e,"reps"==i.alternating?(Te(n,{side:"left",type:"exercise-left",...i}),Te(n,{side:"right",type:"exercise-right",...i})):(Te(n,{type:"exercise",...i}),e<s&&Te(n,{type:"exercise-rest",name:"Rest",nextName:i.nextName,rep:e,reps:s,duration:i.rest?i.rest:t||3}));e[r+1]&&Te(n,{type:"rest",name:"Rest",duration:t||3,nextName:e[r+1].name})}return n}(a)),1024&e.$$.dirty&&n(3,s=r),2&e.$$.dirty&&console.log(i)},n(10,r=0),[o,i,d,s,m,()=>{r>=i.totalDuration?m():n(10,r+=1);let e=p(i,s).type,t=p(i,s+1).type;if(t!=e)switch(t){case"end":Y(G,5,6);break;case"rest":Y(G,2.1,3);break;case"exercise":"exercise-rest"==e?c():l();break;case"exercise-left":"exercise-right"==e?c():l();break;case"exercise-right":u();case"exercise-rest":u()}},p,function(){let e=p(i,s);n(10,r+=e.timeRemaining)},function(){let e=p(i,s);s==e.startTime&&s>0&&(e=p(i,s-1)),n(10,r=e.startTime)},a,r]}class Re extends j{constructor(e){super(),O(this,e,we,Ee,s,{clearWorkout:0,currentWorkout:9})}}const We=[{name:"Core Workout",data:[{name:"Sun Salutations",duration:15},{name:"Plank Walk",duration:10,reps:8},{name:"Sun Salutations",duration:15},{name:"Side Plank",duration:10,reps:8},{name:"Sun Salutations",duration:15},{name:"Other Side Plank",duration:10,reps:8},{name:"Upside Down Bugs",duration:8,alternating:"reps",reps:10},{name:"Bicycles",duration:60,rest:10,reps:5}]},{name:"Test Workout",rest:10,data:[{name:"Forward Fold",duration:3,alternating:"reps",reps:2},{name:"Neck Stretch",duration:5},{name:"Stretch",duration:3,reps:2},{name:"Last one",duration:5}]},{name:"Morning Stretch",data:[{name:"Calf Stretch",duration:25,alternating:"reps"},{name:"Forward Fold",duration:30},{name:"IT Band Stretch",duration:20,alternating:"reps"},{name:"Inner Thigh Stretch",duration:20,alternating:"reps"},{name:"Pretzel Stretch",duration:30,alternating:"reps"},{name:"Neck Stretch",duration:30},{name:"Leg Hold Stretch",duration:20,reps:2,alternating:"reps"},{name:"Pigeon Stretch",duration:20,reps:2,alternating:"reps"},{name:"Leg Rocks 1",duration:5,reps:5,alternating:"reps"},{name:"Leg Rocks 2",duration:5,reps:5,alternating:"reps"}]}];function _e(e,t,n){const r=e.slice();return r[2]=t[n].name,r[3]=t[n].data,r[5]=n,r}function Ne(e){let t,n,r,i,s,o,m=e[2]+"";function f(){return e[1](e[5])}return{c(){t=u("div"),n=u("button"),r=d(m),i=u("button"),i.innerHTML='<img alt="edit" src="img/edit.svg"/>',g(n,"class","workout svelte-3r5p2y"),g(i,"class","edit disabled svelte-3r5p2y"),g(t,"class","workout-buttons svelte-3r5p2y")},m(e,c){l(e,t,c),a(t,n),a(n,r),a(t,i),s||(o=p(n,"click",f),s=!0)},p(t,n){e=t},d(e){e&&c(t),s=!1,o()}}}function Se(t){let n,r,i,s,o,d=We,p=[];for(let e=0;e<d.length;e+=1)p[e]=Ne(_e(t,d,e));return{c(){n=u("main"),r=u("div"),r.innerHTML='<div id="topBar" class="svelte-3r5p2y"></div> \n        <img src="img/dog_wo.png" alt="WO Dog"/>',i=m();for(let e=0;e<p.length;e+=1)p[e].c();s=m(),o=u("button"),o.textContent="+",g(r,"id","top"),g(r,"class","svelte-3r5p2y"),g(o,"class","add disabled svelte-3r5p2y"),g(n,"class","svelte-3r5p2y")},m(e,t){l(e,n,t),a(n,r),a(n,i);for(let e=0;e<p.length;e+=1)p[e].m(n,null);a(n,s),a(n,o)},p(e,[t]){if(1&t){let r;for(d=We,r=0;r<d.length;r+=1){const i=_e(e,d,r);p[r]?p[r].p(i,t):(p[r]=Ne(i),p[r].c(),p[r].m(n,s))}for(;r<p.length;r+=1)p[r].d(1);p.length=d.length}},i:e,o:e,d(e){e&&c(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(p,e)}}}function qe(e,t,n){let{setWorkout:r}=t;return e.$$set=e=>{"setWorkout"in e&&n(0,r=e.setWorkout)},[r,e=>r(We[e])]}class Ce extends j{constructor(e){super(),O(this,e,qe,Se,s,{setWorkout:0})}}function De(t){let n,r;return n=new Ce({props:{setWorkout:t[2]}}),{c(){U(n.$$.fragment)},m(e,t){z(n,e,t),r=!0},p:e,i(e){r||(I(n.$$.fragment,e),r=!0)},o(e){F(n.$$.fragment,e),r=!1},d(e){B(n,e)}}}function Le(e){let t,n;return t=new Re({props:{clearWorkout:e[1],currentWorkout:e[0]}}),{c(){U(t.$$.fragment)},m(e,r){z(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentWorkout=e[0]),t.$set(r)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){B(t,e)}}}function Ie(e){let t,n,r,i;const s=[Le,De],o=[];function a(e,t){return e[0].name?0:1}return t=a(e),n=o[t]=s[t](e),{c(){n.c(),r=d("")},m(e,n){o[t].m(e,n),l(e,r,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?o[t].p(e,i):(D(),F(o[l],1,1,(()=>{o[l]=null})),L(),n=o[t],n?n.p(e,i):(n=o[t]=s[t](e),n.c()),I(n,1),n.m(r.parentNode,r))},i(e){i||(I(n),i=!0)},o(e){F(n),i=!1},d(e){o[t].d(e),e&&c(r)}}}function Fe(e,t,n){let r={};return[r,()=>n(0,r=[]),function(e){n(0,r=e)}]}return new class extends j{constructor(e){super(),O(this,e,Fe,Ie,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
