"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_settings_runner-groups_ts-app_assets_modules_github_throttled-input-d4dbeb","ui_packages_fetch-utils_fetch-utils_ts","ui_packages_onfocus_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages_trust-0eb5c4"],{75487:(e,t,n)=>{var r=n(26234),o=n(97797);let i="SELECTED";function a(e){let t=e.target.closest(".js-runner-group-form"),n=Array.from(t.querySelectorAll(".js-public-repository")),r=t.querySelector(".js-network-configuration-selector"),o=t.querySelector(".js-allow-public-repository-checkbox"),i=t.querySelector(".js-btn-create-group"),a=t.querySelector(".js-public-repository-warning"),s=t.querySelector(".js-vnet-public-repository-warning");!o.checked&&n.filter(e=>e.checked).length>0?(a.hidden=!1,i.disabled=!0):(a.hidden=!0,i.disabled=!1),o.checked&&"-1"!==r.value?s.hidden=!1:s.hidden=!0}(0,o.on)("details-menu-selected",".js-runner-group-component-visibility-menu",function(e){let t=e.detail.relatedTarget,n=t.closest(".js-runner-group-form"),r=t.getAttribute("value");n.querySelector(".js-runner-group-targets-selection").hidden=r!==i,n.querySelector(".js-runner-group-targets-count").hidden=r!==i},{capture:!0}),(0,o.on)("details-menu-selected",".js-runner-group-component-workflow-menu",function(e){let t=e.detail.relatedTarget,n=t.closest(".js-runner-group-form"),r=t.getAttribute("value");n.querySelector(".js-runner-group-workflow-selection").hidden=r!==i,n.querySelector(".js-runner-group-workflow-count").hidden=r!==i},{capture:!0}),(0,o.on)("details-dialog-close",".dialog-visibility",function(e){let t=e.target.closest("selected-item-list");if(t){for(let e of t.items)e.checked=e.defaultChecked;t.updateCount()}}),(0,o.on)("click",".js-btn-select-items.visibility-targets",function(e){let t=e.target.closest("details-dialog"),n=e.target.closest("selected-item-list");if((0,r.Av)(t))for(let e of n.items)e.defaultChecked=e.checked;t.toggle(!1),n.querySelector("selected-item-count").updateCount(Number(n.selectedCount.textContent))}),(0,o.on)("click",".js-btn-select-items.workflow-refs",function(e){let t=e.target.closest("details-dialog"),n=e.target.closest("selected-item-list"),r=t.querySelector(".js-runner-group-workflow-selection textarea");r.defaultValue=r.value,t.toggle(!1);let o=new Set(r.value.match(/[^,\s]+/g)).size;n.querySelector("selected-item-count").updateCount(o)}),(0,o.on)("toggle",".details-dialog-workflow",function(e){let t=e.currentTarget,n=t.querySelector(".js-runner-group-workflow-selection textarea");t.open?function(e){function t(){let t=e.value===e.defaultValue,n=e.closest("form").querySelector(".js-btn-select-items.workflow-refs");t?n?.setAttribute("disabled","disabled"):n?.removeAttribute("disabled"),e.setCustomValidity(t?"unchanged":"")}e.hasAttribute("data-uninitialized")&&(e.addEventListener("change",t),e.addEventListener("input",t),e.removeAttribute("data-uninitialized"))}(n):n.value=n.defaultValue},{capture:!0}),(0,o.on)("change",".js-allow-public-repository-checkbox",a),(0,o.on)("click",".js-btn-select-items",a),(0,o.on)("change",".js-network-configuration-selector",a)},38147:(e,t,n)=>{n.d(t,{NB:()=>u,Up:()=>l,pk:()=>c});let r=new WeakMap;function o(e){let t=r.get(e);t&&(null!=t.timer&&clearTimeout(t.timer),t.timer=window.setTimeout(()=>{null!=t.timer&&(t.timer=null),t.inputed=!1,t.listener.call(null,e)},t.wait))}function i(e){let t=e.currentTarget,n=r.get(t);n&&(n.keypressed=!0,null!=n.timer&&clearTimeout(n.timer))}function a(e){let t=e.currentTarget,n=r.get(t);n&&(n.keypressed=!1,n.inputed&&o(t))}function s(e){let t=e.currentTarget,n=r.get(t);n&&(n.inputed=!0,n.keypressed||o(t))}function l(e,t,n={wait:null}){r.set(e,{keypressed:!1,inputed:!1,timer:void 0,listener:t,wait:null!=n.wait?n.wait:100}),e.addEventListener("keydown",i),e.addEventListener("keyup",a),e.addEventListener("input",s)}function u(e,t){e.removeEventListener("keydown",i),e.removeEventListener("keyup",a),e.removeEventListener("input",s);let n=r.get(e);n&&(null!=n.timer&&n.listener===t&&clearTimeout(n.timer),r.delete(e))}function c(e){let t=r.get(e);t&&t.listener.call(null,e)}},40440:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{M:()=>o})},27756:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{JK:()=>i,_$:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},5728:(e,t,n)=>{n.d(t,{G:()=>o,K:()=>i});var r=n(97156);let o=r.XC?.readyState==="interactive"||r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.cg?.addEventListener("load",e)})},40588:(e,t,n)=>{n.d(t,{N7:()=>y});var r=n(36301),o=n(54098),i=n(24212),a=n(40440),s=n(14740),l=n(97156),u=n(97564),c=n(54861);let d=!1,f=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function h(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function y(e,t={}){if((0,u.G7)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(S.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(v({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:E(n),catalogService:void 0},t));return}h(e)||g(v(w(e),t))}else h(e)||g(v(w(e),t))}async function g(e){if(!(!T&&!d&&f<10&&(0,o.TT)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>b.test(e.filename)||b.test(e.function))){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:E(e),catalogService:e.catalogService}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.M)()||window.location.href,readyState:document.readyState,referrer:(0,c.dR)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.y)();return`anonymous-${t}`}()||void 0,bundler:s.v,ui:!!document.querySelector('meta[name="ui"]')},t)}function E(e){return(0,i.q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let b=/(chrome|moz|safari)-extension:\/\//,T=!1;l.cg?.addEventListener("pageshow",()=>T=!1),l.cg?.addEventListener("pagehide",()=>T=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{y(e.data.error)});let S=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},97564:(e,t,n)=>{n.d(t,{G7:()=>l,XY:()=>u,fQ:()=>s});var r=n(5225),o=n(27756);function i(){return new Set((0,o._$)().featureFlags.map(e=>e.toLowerCase()))}let a=n(97156).X3?i:(0,r.A)(i);function s(){return Array.from(a())}function l(e){return a().has(e.toLowerCase())}let u={isFeatureEnabled:l}},27193:(e,t,n)=>{n.d(t,{Ee:()=>c,b4:()=>d,Ts:()=>u});var r=n(46650);let o=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};var i=n(6440),a=n(2240);let s="server-x-safe-html",l=i.wA.createPolicy(s,{createHTML:(e,t)=>a.b.apply({policy:()=>(!function(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new o(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new o(`expected response with text/html or application/json, but was ${r}`,t);let i=t.headers.get("x-html-safe");if(i){if(!e.includes(i))throw new o("response X-HTML-Safe nonce did not match",t)}else throw new o("missing X-HTML-Safe nonce",t)}(function(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}(document),t),e),policyName:s,fallback:e,silenceErrorReporting:!0})});async function u(e,t,n){let o=new Request(t,n);o.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(o);if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);let a=l.createHTML(await i.text(),i);return(0,r.B)(e,a)}function c(e,t,n=1e3,r=[200],o=[202]){return async function n(i){let a=new Request(e,t);a.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(a);if(o.includes(s.status))return await new Promise(e=>setTimeout(e,i)),n(1.5*i);if(r.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(n)}async function d(e,t,n){let{wait:r=500,acceptedStatusCodes:o=[200],max:i=3,attempt:a=0}=n||{},s=async()=>new Promise((n,s)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(r);if(o.includes(s.status)||a+1===i)return n(s);n("retry")}catch(e){s(e)}},r*a)}),l=await s();return"retry"!==l?l:d(e,t,{wait:r,acceptedStatusCodes:o,max:i,attempt:a+1})}},78350:(e,t,n)=>{n.d(t,{Cy:()=>s,K3:()=>c,Z8:()=>l,k_:()=>i,lK:()=>d,m$:()=>a});var r=n(41695);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.A)(t)),o(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function s(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function l(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function u(e){return new URLSearchParams(e)}function c(e,t){let n=new URLSearchParams(e.search);for(let[e,r]of u(t))n.append(e,r);return n.toString()}function d(e){return u(new FormData(e)).toString()}},41695:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>r,C:()=>o})},26234:(e,t,n)=>{let r,o,i;n.d(t,{Av:()=>c,it:()=>u});var a=n(74057),s=n(78350),l=n(97156);function u(e,t=!1,n=!1){var l;return!n&&c(e)||function(e,t){let n=r instanceof Element?r:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null;return null!==n&&(!t||n!==e)&&(!!(n===e&&(0,s.Z8)(n)||e.contains(n)&&!function(e){if(e instanceof a.A)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(i instanceof Element))return!1;let r=e.closest(d);return!!r&&r===i.closest(d)}(n))||i instanceof Element&&e.contains(i)&&!!i.closest("details[open] > summary"))}(e,t)||(l=e).matches(":active:enabled")||l.contains(o)||!!(e.closest(".is-dirty")||e.querySelector(".is-dirty"))}function c(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&function(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}(t))return!0;return!1}l.XC?.addEventListener("mousedown",function(e){o=e.target},!0),l.XC?.addEventListener("mouseup",function(e){o=null,i=e.target},!0),l.XC?.addEventListener("contextmenu",function(e){o=null,i=e.target},!0),l.XC?.addEventListener("dragend",function(){o=null},!0);let d="a[href], button"},51848:(e,t,n)=>{let r;n.d(t,{BI:()=>m,Ti:()=>p,lA:()=>f});var o=n(70837),i=n(97524),a=n(74572),s=n(51528);let{getItem:l}=(0,a.A)("localStorage"),u="dimension_",c=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,r=new i.s(e)}catch(e){}function d(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(u)&&(t[e.replace(u,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))c.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,s.X)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},21232:(e,t,n)=>{n.d(t,{Ff:()=>l,eC:()=>u,uE:()=>s});var r=n(6986);let o=!1,i=new r.A;function a(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of i.matches(t))e.data.call(null,t)}function s(e,t){o||(o=!0,document.addEventListener("focus",a,!0)),i.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function l(e,t,n){function r(t){let o=t.currentTarget;o&&(o.removeEventListener(e,n),o.removeEventListener("blur",r))}s(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function u(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}s(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},46650:(e,t,n)=>{n.d(t,{B:()=>s});var r=n(6440),o=n(2240);let i="parse-html-no-op",a=r.wA.createPolicy(i,{createHTML:e=>o.b.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function s(e,t){let n=e.createElement("template");return n.innerHTML=a.createHTML(t),e.importNode(n.content,!0)}},14740:(e,t,n)=>{n.d(t,{k:()=>a,v:()=>s});var r=n(5225),o=n(97156);let i=(0,r.A)(function(){return o.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),a=(0,r.A)(function(){return"enterprise"===i()}),s="webpack"},74572:(e,t,n)=>{n.d(t,{A:()=>a,D:()=>s});var r=n(97156),o=n(51528);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function a(e,t={throwQuotaErrorsOnSet:!1},n=r.cg,a=e=>e,s=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:u}=t;function c(e){t.sendCacheStats&&(0,o.i)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),a(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,s(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(u&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function s(e){return a(e,{throwQuotaErrorsOnSet:!1},r.cg,JSON.parse,JSON.stringify)}},69653:(e,t,n)=>{n.d(t,{Ai:()=>i,Gq:()=>r,SO:()=>o});let{getItem:r,setItem:o,removeItem:i}=(0,n(74572).A)("sessionStorage")},54861:(e,t,n)=>{n.d(t,{BW:()=>o,Ff:()=>m,HK:()=>v,JA:()=>L,LM:()=>p,Pv:()=>T,Vy:()=>f,ZW:()=>b,dR:()=>E,di:()=>h,fX:()=>S,k9:()=>w,my:()=>g,r7:()=>_,wG:()=>y,xT:()=>d});var r=n(69653);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",s="soft-nav:referrer",l="soft-nav:marker",u="soft-nav:react-app-name",c="soft-nav:latest-mechanism";function d(){(0,r.SO)(l,"0"),(0,r.Ai)(s),(0,r.Ai)(i),(0,r.Ai)(a),(0,r.Ai)(u),(0,r.Ai)(c)}function f(e){(0,r.SO)(l,e)}function m(){(0,r.SO)(l,"0")}function p(){let e=(0,r.Gq)(l);return e&&"0"!==e}function h(){return(0,r.Gq)(l)}function y(){return!!g()}function g(){return(0,r.Gq)(i)}function w(e){(0,r.SO)(i,e||o),(0,r.SO)(a,window.location.href)}function v(){(0,r.SO)(s,window.location.href)}function E(){return(0,r.Gq)(s)||document.referrer}function b(){let e=S();e?(0,r.SO)(u,e):(0,r.Ai)(u)}function T(){return(0,r.Gq)(u)}function S(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function L(e){(0,r.SO)(c,e)}function _(){return(0,r.Gq)(c)}},97156:(e,t,n)=>{n.d(t,{KJ:()=>r.KJ,Kn:()=>o.Kn,X3:()=>r.X3,XC:()=>o.XC,cg:()=>o.cg,fV:()=>o.fV,g5:()=>r.g5});var r=n(15572),o=n(86733)},86733:(e,t,n)=>{n.d(t,{Kn:()=>i,XC:()=>r,cg:()=>o,fV:()=>a});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:"",href:""}:location},15572:(e,t,n)=>{n.d(t,{KJ:()=>i,X3:()=>o,g5:()=>a});var r=n(86733);let o=void 0===r.XC,i=!o;function a(){return!!o||!!r.XC.querySelector('react-app[data-ssr="true"]')}},51528:(e,t,n)=>{n.d(t,{X:()=>m,i:()=>u});var r=n(97156),o=n(5728),i=n(14740),a=n(97564),s=n(70170);let l=[];function u(e,t=!1,n=.5){if(!0!==(0,a.G7)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=i.v,Math.random()<n&&l.push(e),t?f():d()}}let c=null,d=(0,s.n)(async function(){await o.K,null==c&&(c=window.requestIdleCallback(f))},5e3);function f(){if(c=null,!l.length)return;let e=r.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function m(){return!!r.XC?.head?.querySelector('meta[name="user-staff"]')?.content}r.XC?.addEventListener("pagehide",f),r.XC?.addEventListener("visibilitychange",f)},2240:(e,t,n)=>{n.d(t,{b:()=>u,r:()=>TrustedTypesPolicyError});var r=n(97564),o=n(51528),i=n(40588),a=n(42838),s=n.n(a),l=n(51848);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let u={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:u,silenceErrorReporting:c=!1}){try{if((0,r.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return u&&new Promise(e=>{let n=window.performance.now(),r=s().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),s=a.stack?.slice(0,1e3),u=i.slice(0,250);(0,l.BI)("trusted_types_policy.sanitize",{policyName:t,output:u,stack:s,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(c||(0,i.N7)(e),(0,o.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},6440:(e,t,n)=>{n.d(t,{wA:()=>c});var r,o=n(97156),i=n(51528);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),u=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},c={createPolicy:(e,t)=>{if(l.has(e))return(0,i.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(u.createPolicy(e,t));return l.set(e,n),n}}},d=!1;o.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_settings_runner-groups_ts-app_assets_modules_github_throttled-input-d4dbeb-bf28d9b07104.js.map