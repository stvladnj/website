export const app=function(t){"use strict";function e(){}const n=t=>t;function o(t){return t()}function l(){return Object.create(null)}function c(t){t.forEach(o)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):e;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function g(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e){(null!=e||t.value)&&(t.value=e)}function w(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function S(t,e,n){t.classList[n?"add":"remove"](e)}function E(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const O=new Set;let I,M=0;function q(t,e,n,o,l,c,s,r=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;O.add(f);const g=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,g.insertRule(`@keyframes ${d} ${u}`,g.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?p+", ":""}${d} ${o}ms linear ${l}ms 1 both`,M+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),l=n.length-o.length;l&&(t.style.animation=o.join(", "),M-=l,M||u(()=>{M||(O.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),O.clear())}))}function D(t){I=t}function F(){if(!I)throw new Error("Function called outside component initialization");return I}function N(){const t=F();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=E(e,n);o.slice().forEach(e=>{e.call(t,l)})}}}const A=[],L=[],T=[],z=[],G=Promise.resolve();let U=!1;function j(t){T.push(t)}function B(t){z.push(t)}let R=!1;const J=new Set;function P(){if(!R){R=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];D(e),Y(e.$$)}for(A.length=0;L.length;)L.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];J.has(e)||(J.add(e),e())}T.length=0}while(A.length);for(;z.length;)z.pop()();U=!1,R=!1,J.clear()}}function Y(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function V(t,e,n){t.dispatchEvent(E(`${e?"intro":"outro"}${n}`))}const K=new Set;let Q;function W(){Q={r:0,c:[],p:Q}}function X(){Q.r||c(Q.c),Q=Q.p}function Z(t,e){t&&t.i&&(K.delete(t),t.i(e))}function tt(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push(()=>{K.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const et={duration:0};function nt(t,o,l,r){let i=o(t,l),g=r?0:1,m=null,p=null,h=null;function y(){h&&C(t,h)}function v(t,e){const n=t.b-g;return e*=Math.abs(n),{a:g,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:l=0,duration:s=300,easing:r=n,tick:$=e,css:b}=i||et,k={start:a()+l,b:o};o||(k.group=Q,Q.r+=1),m?p=k:(b&&(y(),h=q(t,g,o,s,l,r,b)),o&&$(0,1),m=v(k,s),j(()=>V(t,o,"start")),function(t){let e;0===d.size&&u(f),new Promise(n=>{d.add(e={c:t,f:n})})}(e=>{if(p&&e>p.start&&(m=v(p,s),p=null,V(t,m.b,"start"),b&&(y(),h=q(t,g,m.b,m.duration,0,r,i.css))),m)if(e>=m.end)$(g=m.b,1-g),V(t,m.b,"end"),p||(m.b?y():--m.group.r||c(m.group.c)),m=null;else if(e>=m.start){const t=e-m.start;g=m.a+m.d*r(t/m.duration),$(g,1-g)}return!(!m&&!p)}))}return{run(t){s(i)?(H||(H=Promise.resolve(),H.then(()=>{H=null})),H).then(()=>{i=i(),$(t)}):$(t)},end(){y(),m=p=null}}}function ot(t,e){tt(t,1,1,()=>{e.delete(t.key)})}function lt(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function ct(t){t&&t.c()}function st(t,e,n){const{fragment:l,on_mount:r,on_destroy:i,after_update:a}=t.$$;l&&l.m(e,n),j(()=>{const e=r.map(o).filter(s);i?i.push(...e):c(e),t.$$.on_mount=[]}),a.forEach(j)}function rt(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(A.push(t),U||(U=!0,G.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,n,o,s,r,i,a=[-1]){const u=I;D(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:r,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:l(),dirty:a};let g=!1;if(f.ctx=o?o(t,d,(e,n,...o)=>{const l=o.length?o[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=l)&&(f.bound[e]&&f.bound[e](l),g&&it(t,e)),n}):[],f.update(),g=!0,c(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();n.intro&&Z(t.$$.fragment),st(t,n.target,n.anchor),P()}D(u)}class ut{$destroy(){rt(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function dt(t){const e=t-1;return e*e*e+1}function ft(t,{delay:e=0,duration:o=400,easing:l=n}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:l,css:t=>"opacity: "+t*c}}function gt(t,{delay:e=0,duration:n=400,easing:o=dt,x:l=0,y:c=0,opacity:s=0}){const r=getComputedStyle(t),i=+r.opacity,a="none"===r.transform?"":r.transform,u=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*l}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-u*e}`}}function mt(t){let n,o,l,s,r,i,a,u,d,f,h,x,w,S=t[1].toFixed(2)+"";return{c(){n=y("div"),o=y("button"),o.innerHTML='<i class="fa fa-minus svelte-35ueno"></i>',l=$(),s=y("div"),r=v(t[2]),i=v(" $"),a=v(S),u=v(" ×"),d=y("span"),f=v(t[0]),h=$(),x=y("button"),x.innerHTML='<i class="fa fa-plus svelte-35ueno"></i>',k(o,"class","btn btn-default btn-sm button-circle svelte-35ueno"),k(d,"class","quantity svelte-35ueno"),k(s,"class","button-title svelte-35ueno"),k(x,"class","btn btn-default btn-sm button-circle svelte-35ueno"),k(n,"class","button-row svelte-35ueno")},m(e,p,y){m(e,n,p),g(n,o),g(n,l),g(n,s),g(s,r),g(s,i),g(s,a),g(s,u),g(s,d),g(d,f),g(n,h),g(n,x),y&&c(w),w=[b(o,"click",t[4]),b(x,"click",t[3])]},p(t,[e]){4&e&&_(r,t[2]),2&e&&S!==(S=t[1].toFixed(2)+"")&&_(a,S),1&e&&_(f,t[0])},i:e,o:e,d(t){t&&p(n),c(w)}}}function pt(t,e,n){let{price:o=1}=e,{limit:l=5}=e,{quantity:c=0}=e,{label:s=""}=e;const r=N();return t.$set=t=>{"price"in t&&n(1,o=t.price),"limit"in t&&n(5,l=t.limit),"quantity"in t&&n(0,c=t.quantity),"label"in t&&n(2,s=t.label)},[c,o,s,()=>{c<l&&(n(0,c+=1),r("quantity"))},()=>{c>0&&(n(0,c-=1),r("quantity"))},l]}class ht extends ut{constructor(t){super(),at(this,t,pt,mt,r,{price:1,limit:5,quantity:0,label:2})}}function yt(t,e,n){const o=t.slice();return o[12]=e[n],o}function vt(t,e,n){const o=t.slice();return o[15]=e[n],o}function $t(t,e){let n,o,l,c,s;return{key:t,first:null,c(){n=y("div"),o=y("img"),o.src!==(l=e[15].image)&&k(o,"src",l),w(o,"transform","rotate("+e[15].rotate+"deg)"),k(o,"alt",""),k(o,"class","svelte-n0vah4"),k(n,"class","candle svelte-n0vah4"),w(n,"left",e[15].pos+"%"),w(n,"height",e[15].height),this.first=n},m(t,e){m(t,n,e),g(n,o),s=!0},p(t,e){(!s||1&e&&o.src!==(l=t[15].image))&&k(o,"src",l),(!s||1&e)&&w(o,"transform","rotate("+t[15].rotate+"deg)"),(!s||1&e)&&w(n,"left",t[15].pos+"%"),(!s||1&e)&&w(n,"height",t[15].height)},i(t){s||(j(()=>{c||(c=nt(n,gt,{y:120,duration:600},!0)),c.run(1)}),s=!0)},o(t){c||(c=nt(n,gt,{y:120,duration:600},!1)),c.run(0),s=!1},d(t){t&&p(n),t&&c&&c.end()}}}function bt(t){let e,n;function o(e){t[10].call(null,e,t[12])}let l={label:t[12].description[t[4]],price:t[12].price,limit:t[12].limit};void 0!==t[0][t[12].id]&&(l.quantity=t[0][t[12].id]);const c=new ht({props:l});return L.push(()=>lt(c,"quantity",o)),c.$on("quantity",t[11]),{c(){ct(c.$$.fragment)},m(t,e){st(c,t,e),n=!0},p(n,o){t=n;const l={};24&o&&(l.label=t[12].description[t[4]]),8&o&&(l.price=t[12].price),8&o&&(l.limit=t[12].limit),!e&&9&o&&(e=!0,l.quantity=t[0][t[12].id],B(()=>e=!1)),c.$set(l)},i(t){n||(Z(c.$$.fragment,t),n=!0)},o(t){tt(c.$$.fragment,t),n=!1},d(t){rt(c,t)}}}function kt(t){let e,n,o,l,c,s,r,i,a,u,d=[],f=new Map,b=t[2][t[4]]+"",x=t[5](t[0]);const w=t=>t[15].key;for(let e=0;e<x.length;e+=1){let n=vt(t,x,e),o=w(n);f.set(o,d[e]=$t(o,n))}let S=t[3],E=[];for(let e=0;e<S.length;e+=1)E[e]=bt(yt(t,S,e));const O=t=>tt(E[t],1,1,()=>{E[t]=null});return{c(){e=y("div"),n=y("img"),l=$();for(let t=0;t<d.length;t+=1)d[t].c();c=$(),s=y("div"),r=y("div"),i=v(b),a=$();for(let t=0;t<E.length;t+=1)E[t].c();n.src!==(o=t[1])&&k(n,"src",o),k(n,"alt",""),k(n,"class","svelte-n0vah4"),k(r,"class","button-title svelte-n0vah4"),k(s,"class","buttons svelte-n0vah4"),k(e,"class","icon svelte-n0vah4")},m(t,o){m(t,e,o),g(e,n),g(e,l);for(let t=0;t<d.length;t+=1)d[t].m(e,null);g(e,c),g(e,s),g(s,r),g(r,i),g(s,a);for(let t=0;t<E.length;t+=1)E[t].m(s,null);u=!0},p(t,[l]){if((!u||2&l&&n.src!==(o=t[1]))&&k(n,"src",o),33&l){const n=t[5](t[0]);W(),d=function(t,e,n,o,l,c,s,r,i,a,u,d){let f=t.length,g=c.length,m=f;const p={};for(;m--;)p[t[m].key]=m;const h=[],y=new Map,v=new Map;for(m=g;m--;){const t=d(l,c,m),r=n(t);let i=s.get(r);i?o&&i.p(t,e):(i=a(r,t),i.c()),y.set(r,h[m]=i),r in p&&v.set(r,Math.abs(m-p[r]))}const $=new Set,b=new Set;function k(t){Z(t,1),t.m(r,u,s.has(t.key)),s.set(t.key,t),u=t.first,g--}for(;f&&g;){const e=h[g-1],n=t[f-1],o=e.key,l=n.key;e===n?(u=e.first,f--,g--):y.has(l)?!s.has(o)||$.has(o)?k(e):b.has(l)?f--:v.get(o)>v.get(l)?(b.add(o),k(e)):($.add(l),f--):(i(n,s),f--)}for(;f--;){const e=t[f];y.has(e.key)||i(e,s)}for(;g;)k(h[g-1]);return h}(d,l,w,1,t,n,f,e,ot,$t,c,vt),X()}if((!u||20&l)&&b!==(b=t[2][t[4]]+"")&&_(i,b),25&l){let e;for(S=t[3],e=0;e<S.length;e+=1){const n=yt(t,S,e);E[e]?(E[e].p(n,l),Z(E[e],1)):(E[e]=bt(n),E[e].c(),Z(E[e],1),E[e].m(s,null))}for(W(),e=S.length;e<E.length;e+=1)O(e);X()}},i(t){if(!u){for(let t=0;t<x.length;t+=1)Z(d[t]);for(let t=0;t<S.length;t+=1)Z(E[t]);u=!0}},o(t){for(let t=0;t<d.length;t+=1)tt(d[t]);E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)tt(E[t]);u=!1},d(t){t&&p(e);for(let t=0;t<d.length;t+=1)d[t].d();h(E,t)}}}function _t(t,e,n){let{src:o="icon_theotokos.png"}=e,{name:l="Icon of Theotokos"}=e,{candles:c=[]}=e,{lang:s="en"}=e,{order:r={}}=e;const i=t=>{for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*e),o=t[e];t[e]=t[n],t[n]=o}return t},a=c.reduce((t,e)=>t+e.limit,0),u={};function d(){u.pos=i([...Array(a).keys()]),u.rotation=[...Array(a).keys()].map(()=>10*Math.random()-5)}d();return t.$set=t=>{"src"in t&&n(1,o=t.src),"name"in t&&n(2,l=t.name),"candles"in t&&n(3,c=t.candles),"lang"in t&&n(4,s=t.lang),"order"in t&&n(0,r=t.order)},[r,o,l,c,s,t=>{const e=[];var n=0;for(const o of c){for(let l=0;l<t[o.id];l++)e.push({image:o.image,pos:100*(.25+u.pos[n+l])/a,height:o.height,rotate:u.rotation[n+l],key:n+l});n+=o.limit}return 0===e.length&&d(),e},u,i,a,d,function(t,e){r[e.id]=t,n(0,r)},function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class xt extends ut{constructor(t){super(),at(this,t,_t,kt,r,{src:1,name:2,candles:3,lang:4,order:0})}}function wt(t){let n,o,l,c,s,r,i,a;return{c(){n=y("label"),o=y("input"),l=$(),c=y("span"),s=$(),r=y("span"),i=v(t[1]),k(o,"type","checkbox"),k(o,"class","svelte-52zyub"),k(c,"class","slider svelte-52zyub"),w(c,"background-color",t[0]?t[2]:"#ccc"),k(n,"class","switch svelte-52zyub"),k(r,"class","label svelte-52zyub"),w(r,"color",t[2])},m(e,u,d){m(e,n,u),g(n,o),o.checked=t[0],g(n,l),g(n,c),m(e,s,u),m(e,r,u),g(r,i),d&&a(),a=b(o,"change",t[3])},p(t,[e]){1&e&&(o.checked=t[0]),5&e&&w(c,"background-color",t[0]?t[2]:"#ccc"),2&e&&_(i,t[1]),4&e&&w(r,"color",t[2])},i:e,o:e,d(t){t&&p(n),t&&p(s),t&&p(r),a()}}}function St(t,e,n){let{checked:o=!1}=e,{label:l=""}=e,{color:c="#2196F3"}=e;return t.$set=t=>{"checked"in t&&n(0,o=t.checked),"label"in t&&n(1,l=t.label),"color"in t&&n(2,c=t.color)},[o,l,c,function(){o=this.checked,n(0,o)}]}class Et extends ut{constructor(t){super(),at(this,t,St,wt,r,{checked:0,label:1,color:2})}}function Ot(t){let e,n;return{c(){e=y("img"),e.src!==(n="/img/note-black.png")&&k(e,"src","/img/note-black.png"),k(e,"alt",""),k(e,"class","svelte-xnito")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function It(t){let e,n;return{c(){e=y("img"),e.src!==(n="/img/note-red.png")&&k(e,"src","/img/note-red.png"),k(e,"alt",""),k(e,"class","svelte-xnito")},m(t,n){m(t,e,n)},d(t){t&&p(e)}}}function Mt(t){let e,n,o,l,c,s,r,i,a,u,d,f,h,S,E,O=(t[1]?t[0].length:"")+"";function I(t,e){return t[3]?It:Ot}let M=I(t),q=M(t);function C(e){t[11].call(null,e)}let D={label:t[3]?t[6][t[2]]:t[7][t[2]],color:t[3]?"#c36266":"gray"};void 0!==t[1]&&(D.checked=t[1]);const F=new Et({props:D});return L.push(()=>lt(F,"checked",C)),{c(){e=y("link"),n=$(),o=y("div"),q.c(),l=$(),c=y("div"),ct(F.$$.fragment),r=$(),i=y("span"),a=v(O),u=$(),d=y("textarea"),k(e,"rel","stylesheet"),k(e,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),k(i,"class","number-of-names svelte-xnito"),w(i,"color",t[3]?"#c36266":"gray"),k(c,"class","input-group title custom-control custom-switch svelte-xnito"),k(d,"class","notes svelte-xnito"),k(d,"rows","12"),d.readOnly=f=!t[1],k(d,"placeholder",h=t[1]?"":t[5][t[2]]),k(o,"class","note svelte-xnito")},m(s,f,p){g(document.head,e),m(s,n,f),m(s,o,f),q.m(o,null),g(o,l),g(o,c),st(F,c,null),g(c,r),g(c,i),g(i,a),g(o,u),g(o,d),x(d,t[4]),S=!0,p&&E(),E=b(d,"input",t[12])},p(t,[e]){M!==(M=I(t))&&(q.d(1),q=M(t),q&&(q.c(),q.m(o,l)));const n={};12&e&&(n.label=t[3]?t[6][t[2]]:t[7][t[2]]),8&e&&(n.color=t[3]?"#c36266":"gray"),!s&&2&e&&(s=!0,n.checked=t[1],B(()=>s=!1)),F.$set(n),(!S||3&e)&&O!==(O=(t[1]?t[0].length:"")+"")&&_(a,O),(!S||8&e)&&w(i,"color",t[3]?"#c36266":"gray"),(!S||2&e&&f!==(f=!t[1]))&&(d.readOnly=f),(!S||6&e&&h!==(h=t[1]?"":t[5][t[2]]))&&k(d,"placeholder",h),16&e&&x(d,t[4])},i(t){S||(Z(F.$$.fragment,t),S=!0)},o(t){tt(F.$$.fragment,t),S=!1},d(t){p(e),t&&p(n),t&&p(o),q.d(),rt(F),E()}}}function qt(t,e,n){let{names:o=[]}=e,{lang:l="en"}=e,{active:c=!1}=e,{living:s=!0}=e;const r=N();let i="",a=o.join("\n"),u=c;return t.$set=t=>{"names"in t&&n(0,o=t.names),"lang"in t&&n(2,l=t.lang),"active"in t&&n(1,c=t.active),"living"in t&&n(3,s=t.living)},t.$$.update=()=>{786&t.$$.dirty&&u!==c&&(c?n(4,i=a):(n(8,a=i),n(4,i="")),n(9,u=c),r("names")),18&t.$$.dirty&&c&&(n(8,a=i),n(0,o=i.split("\n").map(t=>t.trim()).filter(t=>!!t)),r("names"))},[o,c,l,s,i,{ru:"Включите  ⇧  эту кнопку и введите имена крещёных православных христиан.",en:"Toggle  ⇧  this switch and enter names of baptised orthodox christians."},{ru:"О ЗДРАВИИ",en:"FOR LIVING"},{ru:"О УПОКОЕНИИ",en:"FOR DECEASED"},a,u,r,function(t){c=t,n(1,c)},function(){i=this.value,n(4,i),n(9,u),n(1,c),n(8,a)}]}class Ct extends ut{constructor(t){super(),at(this,t,qt,Mt,r,{names:0,lang:2,active:1,living:3})}}function Dt(t,e,n){const o=t.slice();return o[34]=e[n],o}function Ft(t,e,n){const o=t.slice();return o[31]=e[n],o}function Nt(t){let e,n;const o=new xt({props:{candles:t[2],src:t[34].image,order:t[0][t[34].id],name:t[34].description,lang:t[1]}});return o.$on("quantity",t[12]),{c(){e=y("div"),ct(o.$$.fragment),k(e,"class","col-md-4 spaced svelte-1xkbmg4")},m(t,l){m(t,e,l),st(o,e,null),n=!0},p(t,e){const n={};4&e[0]&&(n.candles=t[2]),1&e[0]&&(n.order=t[0][t[34].id]),2&e[0]&&(n.lang=t[1]),o.$set(n)},i(t){n||(Z(o.$$.fragment,t),n=!0)},o(t){tt(o.$$.fragment,t),n=!1},d(t){t&&p(e),rt(o)}}}function At(t){let e,n,o=t[31],l=[];for(let e=0;e<o.length;e+=1)l[e]=Nt(Dt(t,o,e));const c=t=>tt(l[t],1,1,()=>{l[t]=null});return{c(){e=y("div");for(let t=0;t<l.length;t+=1)l[t].c();k(e,"class","row")},m(t,o){m(t,e,o);for(let t=0;t<l.length;t+=1)l[t].m(e,null);n=!0},p(t,n){if(20487&n[0]){let s;for(o=t[31],s=0;s<o.length;s+=1){const c=Dt(t,o,s);l[s]?(l[s].p(c,n),Z(l[s],1)):(l[s]=Nt(c),l[s].c(),Z(l[s],1),l[s].m(e,null))}for(W(),s=o.length;s<l.length;s+=1)c(s);X()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)Z(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)tt(l[t]);n=!1},d(t){t&&p(e),h(l,t)}}}function Lt(t){let e,n,o,l,c=t[4][t[1]]+"";return{c(){e=y("div"),n=v(c),k(e,"class","row thanks svelte-1xkbmg4")},m(t,o){m(t,e,o),g(e,n),l=!0},p(t,e){(!l||18&e[0])&&c!==(c=t[4][t[1]]+"")&&_(n,c)},i(t){l||(j(()=>{o||(o=nt(e,ft,{},!0)),o.run(1)}),l=!0)},o(t){o||(o=nt(e,ft,{},!1)),o.run(0),l=!1},d(t){t&&p(e),t&&o&&o.end()}}}function Tt(t){let e,n,o,l,s,r,i,a,u,d,f,x,w,E,O,I,M,q,C,D,F,N,A,T,z,G=t[5].toFixed(2)+"",U=t[14],j=[];for(let e=0;e<U.length;e+=1)j[e]=At(Ft(t,U,e));const R=t=>tt(j[t],1,1,()=>{j[t]=null});function J(e){t[27].call(null,e)}function P(e){t[28].call(null,e)}let Y={lang:t[1]};void 0!==t[6]&&(Y.names=t[6]),void 0!==t[7]&&(Y.active=t[7]);const H=new Ct({props:Y});function V(e){t[29].call(null,e)}function K(e){t[30].call(null,e)}L.push(()=>lt(H,"names",J)),L.push(()=>lt(H,"active",P)),H.$on("names",t[12]);let Q={living:!1,lang:t[1]};void 0!==t[8]&&(Q.names=t[8]),void 0!==t[9]&&(Q.active=t[9]);const et=new Ct({props:Q});L.push(()=>lt(et,"names",V)),L.push(()=>lt(et,"active",K)),et.$on("names",t[12]);let nt=t[10]&&Lt(t);return{c(){for(let t=0;t<j.length;t+=1)j[t].c();e=$(),n=y("div"),o=y("div"),ct(H.$$.fragment),r=$(),i=y("div"),ct(et.$$.fragment),d=$(),f=y("div"),x=y("div"),w=$(),E=y("div"),O=y("span"),I=v("$"),M=v(G),q=$(),C=y("button"),C.innerHTML='<i class="fa fa-times"></i>',D=$(),nt&&nt.c(),F=$(),N=y("script"),k(o,"class","col-md-4 col-md-offset-2 spaced svelte-1xkbmg4"),k(i,"class","col-md-4 spaced svelte-1xkbmg4"),k(n,"class","row"),k(x,"id","paypal-button-container"),k(x,"class","paypal-ugly svelte-1xkbmg4"),k(O,"class","number svelte-1xkbmg4"),k(C,"class","btn btn-circle btn-danger cancel svelte-1xkbmg4"),k(E,"class","amount svelte-1xkbmg4"),k(f,"class","total svelte-1xkbmg4"),S(f,"visible",t[5]>0),N.src!==(A="https://www.paypal.com/sdk/js?client-id="+t[3]+"&currency=USD&disable-funding=card,credit")&&k(N,"src",A),k(N,"data-sdk-integration-source","button-factory")},m(l,s,a){for(let t=0;t<j.length;t+=1)j[t].m(l,s);m(l,e,s),m(l,n,s),g(n,o),st(H,o,null),g(n,r),g(n,i),st(et,i,null),m(l,d,s),m(l,f,s),g(f,x),g(f,w),g(f,E),g(E,O),g(O,I),g(O,M),g(E,q),g(E,C),m(l,D,s),nt&&nt.m(l,s),m(l,F,s),g(document.head,N),T=!0,a&&c(z),z=[b(C,"click",t[11]),b(N,"load",t[13])]},p(t,n){if(20487&n[0]){let o;for(U=t[14],o=0;o<U.length;o+=1){const l=Ft(t,U,o);j[o]?(j[o].p(l,n),Z(j[o],1)):(j[o]=At(l),j[o].c(),Z(j[o],1),j[o].m(e.parentNode,e))}for(W(),o=U.length;o<j.length;o+=1)R(o);X()}const o={};2&n[0]&&(o.lang=t[1]),!l&&64&n[0]&&(l=!0,o.names=t[6],B(()=>l=!1)),!s&&128&n[0]&&(s=!0,o.active=t[7],B(()=>s=!1)),H.$set(o);const c={};2&n[0]&&(c.lang=t[1]),!a&&256&n[0]&&(a=!0,c.names=t[8],B(()=>a=!1)),!u&&512&n[0]&&(u=!0,c.active=t[9],B(()=>u=!1)),et.$set(c),(!T||32&n[0])&&G!==(G=t[5].toFixed(2)+"")&&_(M,G),32&n[0]&&S(f,"visible",t[5]>0),t[10]?nt?(nt.p(t,n),1024&n[0]&&Z(nt,1)):(nt=Lt(t),nt.c(),Z(nt,1),nt.m(F.parentNode,F)):nt&&(W(),tt(nt,1,1,()=>{nt=null}),X()),(!T||8&n[0]&&N.src!==(A="https://www.paypal.com/sdk/js?client-id="+t[3]+"&currency=USD&disable-funding=card,credit"))&&k(N,"src",A)},i(t){if(!T){for(let t=0;t<U.length;t+=1)Z(j[t]);Z(H.$$.fragment,t),Z(et.$$.fragment,t),Z(nt),T=!0}},o(t){j=j.filter(Boolean);for(let t=0;t<j.length;t+=1)tt(j[t]);tt(H.$$.fragment,t),tt(et.$$.fragment,t),tt(nt),T=!1},d(t){h(j,t),t&&p(e),t&&p(n),rt(H),rt(et),t&&p(d),t&&p(f),t&&p(D),nt&&nt.d(t),t&&p(F),p(N),c(z)}}}function zt(t,e,n){let{lang:o="en"}=e,{locations:l=[]}=e,{candles:c=[]}=e,{paypalClientId:s}=e,{brandName:r={}}=e,{thankYouMessage:i={}}=e,{order:a={}}=e;const u=t=>1*Math.floor((t+10-1)/10),d=()=>{for(const t of l){n(0,a[t.id]={},a);for(const e of c)n(0,a[t.id][e.id]=0,a)}n(7,h=!1),n(9,v=!1),$()},f=(t,e)=>a[t.id][e.id]||0,g=()=>{let t=0;for(const e of l)for(const n of c){t+=f(e,n)*n.price}return t+(h?u(p.length):0)+(v?u(y.length):0)};let m=0,p=[];try{p=JSON.parse(localStorage.getItem("names-living")||"[]")}catch{}let h=!1,y=[];try{y=JSON.parse(localStorage.getItem("names-deceased")||"[]")}catch{}let v=!1;function $(){n(5,m=g())}let b=!1,k=!1;var _;function x(t,e){const n=[];for(const t of l)for(const e of c){const l=f(t,e);l>0&&n.push({name:"candles",sku:e.id+"/"+t.id,unit_amount:{currency_code:"USD",value:e.price.toFixed(2)},quantity:l,description:e.description[o]+" :: "+e.description[o],category:"DIGITAL_GOODS"})}if(h&&p.length>0){localStorage.setItem("names-living",JSON.stringify(p));let t=u(p.length);for(const e of p)n.push({name:"names",sku:"names/living",unit_amount:{currency_code:"USD",value:t.toFixed(2)},quantity:1,description:e,category:"DIGITAL_GOODS"}),t=0}if(v&&y.length>0){localStorage.setItem("names-deceased",JSON.stringify(y));let t=u(y.length);for(const e of y)n.push({name:"names",sku:"names/deceased",unit_amount:{currency_code:"USD",value:t.toFixed(2)},quantity:1,description:e,category:"DIGITAL_GOODS"}),t=0}const s={amount:{currency_code:"USD",value:m.toFixed(2),breakdown:{item_total:{currency_code:"USD",value:m.toFixed(2)}}},description:"Candles",items:n};return e.order.create({purchase_units:[s],application_context:{brand_name:r[o]}})}function w(t,e){return e.order.capture().then((function(t){d(),I()}))}_=()=>{k=!0,b&&E()},F().$$.on_mount.push(_);const S=t=>{console.log("Cancelled:",t)};function E(){paypal.Buttons({style:{size:"responsive",shape:"pill",color:"blue",layout:"vertical",label:"paypal",tagline:!1},createOrder:x,onApprove:w,onCancel:S}).render("#paypal-button-container")}let O=!1;function I(){n(10,O=!0),setTimeout(()=>{n(10,O=!1)},2500)}d();const M=[l.slice(0,3),l.slice(3)];return t.$set=t=>{"lang"in t&&n(1,o=t.lang),"locations"in t&&n(15,l=t.locations),"candles"in t&&n(2,c=t.candles),"paypalClientId"in t&&n(3,s=t.paypalClientId),"brandName"in t&&n(16,r=t.brandName),"thankYouMessage"in t&&n(4,i=t.thankYouMessage),"order"in t&&n(0,a=t.order)},[a,o,c,s,i,m,p,h,y,v,O,d,$,function(){b=!0,k&&E()},M,l,r,b,k,u,f,g,x,w,S,E,I,function(t){p=t,n(6,p)},function(t){h=t,n(7,h)},function(t){y=t,n(8,y)},function(t){v=t,n(9,v)}]}return t.CandleBox=class extends ut{constructor(t){super(),at(this,t,zt,Tt,r,{lang:1,locations:15,candles:2,paypalClientId:3,brandName:16,thankYouMessage:4,order:0},[-1,-1])}},t}({});
//# sourceMappingURL=online-candle-box.js.map