import{_ as Ot,o as W,c as U,a as H,i as lt,k as J,F as kt,f as Mt,t as ft}from"./index-cde5024b.js";const Lt={props:["pages"]},xt={"aria-label":"Page navigation example"},It={class:"pagination"},Rt=H("span",{"aria-hidden":"true"},"«",-1),$t=[Rt],Vt=["onClick"],Ft=H("span",{"aria-hidden":"true"},"»",-1),qt=[Ft];function Bt(l,k,e,o,f,s){return W(),U("nav",xt,[H("ul",It,[H("li",{class:lt(["page-item",{disabled:!e.pages.has_pre}])},[H("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:k[0]||(k[0]=J(n=>l.$emit("change-page",e.pages.current_page-1),["prevent"]))},$t)],2),(W(!0),U(kt,null,Mt(e.pages.total_pages,n=>(W(),U("li",{class:lt(["page-item",{active:n===e.pages.current_page}]),key:n+"page"},[n===e.pages.current_page?(W(),U("a",{key:0,class:"page-link",href:"#",onClick:k[1]||(k[1]=J(()=>{},["prevent"]))},ft(n),1)):(W(),U("a",{key:1,class:"page-link",href:"#",onClick:J(h=>l.$emit("change-page",n),["prevent"])},ft(n),9,Vt))],2))),128)),H("li",{class:lt(["page-item",{disabled:!e.pages.has_next}])},[H("a",{class:"page-link",href:"#","aria-label":"Next",onClick:k[2]||(k[2]=J(n=>l.$emit("change-page",e.pages.current_page+1),["prevent"]))},qt)],2)])])}const ae=Ot(Lt,[["render",Bt]]);var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ut={},Pt={get exports(){return ut},set exports(l){ut=l}},z={},jt={get exports(){return z},set exports(l){z=l}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function P(){return ht||(ht=1,function(l,k){(function(e,o){o(k)})($,function(e){const s="transitionend",n=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},u=t=>{let a=t.getAttribute("data-bs-target");if(!a||a==="#"){let d=t.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),a=d&&d!=="#"?d.trim():null}return a},A=t=>{const a=u(t);return a&&document.querySelector(a)?a:null},y=t=>{const a=u(t);return a?document.querySelector(a):null},g=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:d}=window.getComputedStyle(t);const S=Number.parseFloat(a),C=Number.parseFloat(d);return!S&&!C?0:(a=a.split(",")[0],d=d.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(d))*1e3)},D=t=>{t.dispatchEvent(new Event(s))},c=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),b=t=>c(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,m=t=>{if(!c(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",d=t.closest("details:not([open])");if(!d)return a;if(d!==t){const S=t.closest("summary");if(S&&S.parentNode!==d||S===null)return!1}return a},p=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",M=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?M(t.parentNode):null},V=()=>{},w=t=>{t.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],i=t=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of O)a()}),O.push(t)):t()},r=()=>document.documentElement.dir==="rtl",_=t=>{i(()=>{const a=I();if(a){const d=t.NAME,S=a.fn[d];a.fn[d]=t.jQueryInterface,a.fn[d].Constructor=t,a.fn[d].noConflict=()=>(a.fn[d]=S,t.jQueryInterface)}})},E=t=>{typeof t=="function"&&t()},N=(t,a,d=!0)=>{if(!d){E(t);return}const S=5,C=g(a)+S;let L=!1;const R=({target:q})=>{q===a&&(L=!0,a.removeEventListener(s,R),E(t))};a.addEventListener(s,R),setTimeout(()=>{L||D(a)},C)},T=(t,a,d,S)=>{const C=t.length;let L=t.indexOf(a);return L===-1?!d&&S?t[C-1]:t[0]:(L+=d?1:-1,S&&(L=(L+C)%C),t[Math.max(0,Math.min(L,C-1))])};e.defineJQueryPlugin=_,e.execute=E,e.executeAfterTransition=N,e.findShadowRoot=M,e.getElement=b,e.getElementFromSelector=y,e.getNextActiveElement=T,e.getSelectorFromElement=A,e.getTransitionDurationFromElement=g,e.getUID=h,e.getjQuery=I,e.isDisabled=p,e.isElement=c,e.isRTL=r,e.isVisible=m,e.noop=V,e.onDOMContentLoaded=i,e.reflow=w,e.toType=n,e.triggerTransitionEnd=D,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(jt,z)),z}var X={},Kt={get exports(){return X},set exports(l){X=l}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function G(){return pt||(pt=1,function(l,k){(function(e,o){l.exports=o(P())})($,function(e){const o=/[^.]*(?=\..*)\.|.*/,f=/\..*/,s=/::\d+$/,n={};let h=1;const u={mouseenter:"mouseover",mouseleave:"mouseout"},A=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(i,r){return r&&`${r}::${h++}`||i.uidEvent||h++}function g(i){const r=y(i);return i.uidEvent=r,n[r]=n[r]||{},n[r]}function D(i,r){return function _(E){return O(E,{delegateTarget:i}),_.oneOff&&I.off(i,E.type,r),r.apply(i,[E])}}function c(i,r,_){return function E(N){const T=i.querySelectorAll(r);for(let{target:t}=N;t&&t!==this;t=t.parentNode)for(const a of T)if(a===t)return O(N,{delegateTarget:t}),E.oneOff&&I.off(i,N.type,r,_),_.apply(t,[N])}}function b(i,r,_=null){return Object.values(i).find(E=>E.callable===r&&E.delegationSelector===_)}function m(i,r,_){const E=typeof r=="string",N=E?_:r||_;let T=w(i);return A.has(T)||(T=i),[E,N,T]}function p(i,r,_,E,N){if(typeof r!="string"||!i)return;let[T,t,a]=m(r,_,E);r in u&&(t=(at=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return at.call(this,B)})(t));const d=g(i),S=d[a]||(d[a]={}),C=b(S,t,T?_:null);if(C){C.oneOff=C.oneOff&&N;return}const L=y(t,r.replace(o,"")),R=T?c(i,_,t):D(i,t);R.delegationSelector=T?_:null,R.callable=t,R.oneOff=N,R.uidEvent=L,S[L]=R,i.addEventListener(a,R,T)}function M(i,r,_,E,N){const T=b(r[_],E,N);T&&(i.removeEventListener(_,T,Boolean(N)),delete r[_][T.uidEvent])}function V(i,r,_,E){const N=r[_]||{};for(const T of Object.keys(N))if(T.includes(E)){const t=N[T];M(i,r,_,t.callable,t.delegationSelector)}}function w(i){return i=i.replace(f,""),u[i]||i}const I={on(i,r,_,E){p(i,r,_,E,!1)},one(i,r,_,E){p(i,r,_,E,!0)},off(i,r,_,E){if(typeof r!="string"||!i)return;const[N,T,t]=m(r,_,E),a=t!==r,d=g(i),S=d[t]||{},C=r.startsWith(".");if(typeof T<"u"){if(!Object.keys(S).length)return;M(i,d,t,T,N?_:null);return}if(C)for(const L of Object.keys(d))V(i,d,L,r.slice(1));for(const L of Object.keys(S)){const R=L.replace(s,"");if(!a||r.includes(R)){const q=S[L];M(i,d,t,q.callable,q.delegationSelector)}}},trigger(i,r,_){if(typeof r!="string"||!i)return null;const E=e.getjQuery(),N=w(r),T=r!==N;let t=null,a=!0,d=!0,S=!1;T&&E&&(t=E.Event(r,_),E(i).trigger(t),a=!t.isPropagationStopped(),d=!t.isImmediatePropagationStopped(),S=t.isDefaultPrevented());let C=new Event(r,{bubbles:a,cancelable:!0});return C=O(C,_),S&&C.preventDefault(),d&&i.dispatchEvent(C),C.defaultPrevented&&t&&t.preventDefault(),C}};function O(i,r){for(const[_,E]of Object.entries(r||{}))try{i[_]=E}catch{Object.defineProperty(i,_,{configurable:!0,get(){return E}})}return i}return I})}(Kt)),X}var Z={},Ht={get exports(){return Z},set exports(l){Z=l}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _t;function ct(){return _t||(_t=1,function(l,k){(function(e,o){l.exports=o(P())})($,function(e){return{find(f,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,f))},findOne(f,s=document.documentElement){return Element.prototype.querySelector.call(s,f)},children(f,s){return[].concat(...f.children).filter(n=>n.matches(s))},parents(f,s){const n=[];let h=f.parentNode.closest(s);for(;h;)n.push(h),h=h.parentNode.closest(s);return n},prev(f,s){let n=f.previousElementSibling;for(;n;){if(n.matches(s))return[n];n=n.previousElementSibling}return[]},next(f,s){let n=f.nextElementSibling;for(;n;){if(n.matches(s))return[n];n=n.nextElementSibling}return[]},focusableChildren(f){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(s,f).filter(n=>!e.isDisabled(n)&&e.isVisible(n))}}})}(Ht)),Z}var tt={},Yt={get exports(){return tt},set exports(l){tt=l}},et={},Wt={get exports(){return et},set exports(l){et=l}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function Tt(){return gt||(gt=1,function(l,k){(function(e,o){l.exports=o()})($,function(){function e(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function o(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,h){s.setAttribute(`data-bs-${o(n)}`,h)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${o(n)}`)},getDataAttributes(s){if(!s)return{};const n={},h=Object.keys(s.dataset).filter(u=>u.startsWith("bs")&&!u.startsWith("bsConfig"));for(const u of h){let A=u.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1,A.length),n[A]=e(s.dataset[u])}return n},getDataAttribute(s,n){return e(s.getAttribute(`data-bs-${o(n)}`))}}})}(Wt)),et}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function Ut(){return mt||(mt=1,function(l,k){(function(e,o){l.exports=o(ct(),Tt(),P())})($,function(e,o,f){const s=c=>c&&typeof c=="object"&&"default"in c?c:{default:c},n=s(e),h=s(o),u=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",A=".sticky-top",y="padding-right",g="margin-right";class D{constructor(){this._element=document.body}getWidth(){const b=document.documentElement.clientWidth;return Math.abs(window.innerWidth-b)}hide(){const b=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,y,m=>m+b),this._setElementAttributes(u,y,m=>m+b),this._setElementAttributes(A,g,m=>m-b)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,y),this._resetElementAttributes(u,y),this._resetElementAttributes(A,g)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(b,m,p){const M=this.getWidth(),V=w=>{if(w!==this._element&&window.innerWidth>w.clientWidth+M)return;this._saveInitialAttribute(w,m);const I=window.getComputedStyle(w).getPropertyValue(m);w.style.setProperty(m,`${p(Number.parseFloat(I))}px`)};this._applyManipulationCallback(b,V)}_saveInitialAttribute(b,m){const p=b.style.getPropertyValue(m);p&&h.default.setDataAttribute(b,m,p)}_resetElementAttributes(b,m){const p=M=>{const V=h.default.getDataAttribute(M,m);if(V===null){M.style.removeProperty(m);return}h.default.removeDataAttribute(M,m),M.style.setProperty(m,V)};this._applyManipulationCallback(b,p)}_applyManipulationCallback(b,m){if(f.isElement(b)){m(b);return}for(const p of n.default.find(b,this._element))m(p)}}return D})}(Yt)),tt}var nt={},zt={get exports(){return nt},set exports(l){nt=l}},st={},Qt={get exports(){return st},set exports(l){st=l}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Et;function Gt(){return Et||(Et=1,function(l,k){(function(e,o){l.exports=o()})($,function(){const e=new Map;return{set(f,s,n){e.has(f)||e.set(f,new Map);const h=e.get(f);if(!h.has(s)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(s,n)},get(f,s){return e.has(f)&&e.get(f).get(s)||null},remove(f,s){if(!e.has(f))return;const n=e.get(f);n.delete(s),n.size===0&&e.delete(f)}}})}(Qt)),st}var it={},Jt={get exports(){return it},set exports(l){it=l}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function dt(){return bt||(bt=1,function(l,k){(function(e,o){l.exports=o(P(),Tt())})($,function(e,o){const s=(h=>h&&typeof h=="object"&&"default"in h?h:{default:h})(o);class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,A){const y=e.isElement(A)?s.default.getDataAttribute(A,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...e.isElement(A)?s.default.getDataAttributes(A):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,A=this.constructor.DefaultType){for(const y of Object.keys(A)){const g=A[y],D=u[y],c=e.isElement(D)?"element":e.toType(D);if(!new RegExp(g).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${c}" but expected type "${g}".`)}}}return n})}(Jt)),it}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Xt(){return yt||(yt=1,function(l,k){(function(e,o){l.exports=o(Gt(),P(),G(),dt())})($,function(e,o,f,s){const n=D=>D&&typeof D=="object"&&"default"in D?D:{default:D},h=n(e),u=n(f),A=n(s),y="5.2.3";class g extends A.default{constructor(c,b){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(b),h.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){h.default.remove(this._element,this.constructor.DATA_KEY),u.default.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,b,m=!0){o.executeAfterTransition(c,b,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return h.default.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,b={}){return this.getInstance(c)||new this(c,typeof b=="object"?b:null)}static get VERSION(){return y}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return g})}(zt)),nt}var rt={},Zt={get exports(){return rt},set exports(l){rt=l}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function te(){return At||(At=1,function(l,k){(function(e,o){l.exports=o(G(),P(),dt())})($,function(e,o,f){const s=m=>m&&typeof m=="object"&&"default"in m?m:{default:m},n=s(e),h=s(f),u="backdrop",A="fade",y="show",g=`mousedown.bs.${u}`,D={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class b extends h.default{constructor(p){super(),this._config=this._getConfig(p),this._isAppended=!1,this._element=null}static get Default(){return D}static get DefaultType(){return c}static get NAME(){return u}show(p){if(!this._config.isVisible){o.execute(p);return}this._append();const M=this._getElement();this._config.isAnimated&&o.reflow(M),M.classList.add(y),this._emulateAnimation(()=>{o.execute(p)})}hide(p){if(!this._config.isVisible){o.execute(p);return}this._getElement().classList.remove(y),this._emulateAnimation(()=>{this.dispose(),o.execute(p)})}dispose(){this._isAppended&&(n.default.off(this._element,g),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const p=document.createElement("div");p.className=this._config.className,this._config.isAnimated&&p.classList.add(A),this._element=p}return this._element}_configAfterMerge(p){return p.rootElement=o.getElement(p.rootElement),p}_append(){if(this._isAppended)return;const p=this._getElement();this._config.rootElement.append(p),n.default.on(p,g,()=>{o.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(p){o.executeAfterTransition(p,this._getElement(),this._config.isAnimated)}}return b})}(Zt)),rt}var ot={},ee={get exports(){return ot},set exports(l){ot=l}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function ne(){return vt||(vt=1,function(l,k){(function(e,o){l.exports=o(G(),ct(),dt())})($,function(e,o,f){const s=I=>I&&typeof I=="object"&&"default"in I?I:{default:I},n=s(e),h=s(o),u=s(f),A="focustrap",g=".bs.focustrap",D=`focusin${g}`,c=`keydown.tab${g}`,b="Tab",m="forward",p="backward",M={autofocus:!0,trapElement:null},V={autofocus:"boolean",trapElement:"element"};class w extends u.default{constructor(O){super(),this._config=this._getConfig(O),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return M}static get DefaultType(){return V}static get NAME(){return A}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,g),n.default.on(document,D,O=>this._handleFocusin(O)),n.default.on(document,c,O=>this._handleKeydown(O)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,g))}_handleFocusin(O){const{trapElement:i}=this._config;if(O.target===document||O.target===i||i.contains(O.target))return;const r=h.default.focusableChildren(i);r.length===0?i.focus():this._lastTabNavDirection===p?r[r.length-1].focus():r[0].focus()}_handleKeydown(O){O.key===b&&(this._lastTabNavDirection=O.shiftKey?p:m)}}return w})}(ee)),ot}var Q={},se={get exports(){return Q},set exports(l){Q=l}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function ie(){return Dt||(Dt=1,function(l,k){(function(e,o){o(k,G(),P())})($,function(e,o,f){const n=(u=>u&&typeof u=="object"&&"default"in u?u:{default:u})(o),h=(u,A="hide")=>{const y=`click.dismiss${u.EVENT_KEY}`,g=u.NAME;n.default.on(document,y,`[data-bs-dismiss="${g}"]`,function(D){if(["A","AREA"].includes(this.tagName)&&D.preventDefault(),f.isDisabled(this))return;const c=f.getElementFromSelector(this)||this.closest(`.${g}`);u.getOrCreateInstance(c)[A]()})};e.enableDismissTrigger=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(se,Q)),Q}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,k){(function(e,o){l.exports=o(P(),G(),ct(),Ut(),Xt(),te(),ne(),ie())})($,function(e,o,f,s,n,h,u,A){const y=K=>K&&typeof K=="object"&&"default"in K?K:{default:K},g=y(o),D=y(f),c=y(s),b=y(n),m=y(h),p=y(u),M="modal",w=".bs.modal",I=".data-api",O="Escape",i=`hide${w}`,r=`hidePrevented${w}`,_=`hidden${w}`,E=`show${w}`,N=`shown${w}`,T=`resize${w}`,t=`click.dismiss${w}`,a=`mousedown.dismiss${w}`,d=`keydown.dismiss${w}`,S=`click${w}${I}`,C="modal-open",L="fade",R="show",q="modal-static",at=".modal.show",B=".modal-dialog",wt=".modal-body",Nt='[data-bs-toggle="modal"]',St={backdrop:!0,focus:!0,keyboard:!0},Ct={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class j extends b.default{constructor(v,x){super(v,x),this._dialog=D.default.findOne(B,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return St}static get DefaultType(){return Ct}static get NAME(){return M}toggle(v){return this._isShown?this.hide():this.show(v)}show(v){this._isShown||this._isTransitioning||g.default.trigger(this._element,E,{relatedTarget:v}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(C),this._adjustDialog(),this._backdrop.show(()=>this._showElement(v)))}hide(){!this._isShown||this._isTransitioning||g.default.trigger(this._element,i).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(R),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const v of[window,this._dialog])g.default.off(v,w);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new p.default({trapElement:this._element})}_showElement(v){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const x=D.default.findOne(wt,this._dialog);x&&(x.scrollTop=0),e.reflow(this._element),this._element.classList.add(R);const F=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,g.default.trigger(this._element,N,{relatedTarget:v})};this._queueCallback(F,this._dialog,this._isAnimated())}_addEventListeners(){g.default.on(this._element,d,v=>{if(v.key===O){if(this._config.keyboard){v.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),g.default.on(window,T,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),g.default.on(this._element,a,v=>{g.default.one(this._element,t,x=>{if(!(this._element!==v.target||this._element!==x.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(C),this._resetAdjustments(),this._scrollBar.reset(),g.default.trigger(this._element,_)})}_isAnimated(){return this._element.classList.contains(L)}_triggerBackdropTransition(){if(g.default.trigger(this._element,r).defaultPrevented)return;const x=this._element.scrollHeight>document.documentElement.clientHeight,F=this._element.style.overflowY;F==="hidden"||this._element.classList.contains(q)||(x||(this._element.style.overflowY="hidden"),this._element.classList.add(q),this._queueCallback(()=>{this._element.classList.remove(q),this._queueCallback(()=>{this._element.style.overflowY=F},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const v=this._element.scrollHeight>document.documentElement.clientHeight,x=this._scrollBar.getWidth(),F=x>0;if(F&&!v){const Y=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[Y]=`${x}px`}if(!F&&v){const Y=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[Y]=`${x}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(v,x){return this.each(function(){const F=j.getOrCreateInstance(this,v);if(typeof v=="string"){if(typeof F[v]>"u")throw new TypeError(`No method named "${v}"`);F[v](x)}})}}return g.default.on(document,S,Nt,function(K){const v=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&K.preventDefault(),g.default.one(v,E,Y=>{Y.defaultPrevented||g.default.one(v,_,()=>{e.isVisible(this)&&this.focus()})});const x=D.default.findOne(at);x&&j.getInstance(x).hide(),j.getOrCreateInstance(v).toggle(this)}),A.enableDismissTrigger(j),e.defineJQueryPlugin(j),j})})(Pt);const re=ut,le={data(){return{modal:{}}},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new re(this.$refs.modal)}};export{le as m,ae as p};
