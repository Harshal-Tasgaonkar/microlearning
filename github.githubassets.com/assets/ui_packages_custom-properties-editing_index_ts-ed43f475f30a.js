"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_custom-properties-editing_index_ts"],{99395:(e,t,r)=>{r.d(t,{AA:()=>p,_0:()=>f,ov:()=>h,Jj:()=>c,sq:()=>d,q0:()=>y});let n=["true","false"];var a=r(70758),l=r(83056),i=r(91931),s=r(28784);let o=/[^a-zA-Z0-9_#$-]/gu,u=/[^ -!#-~]/gu;function d(e,t){if(e.length>75)return"Name cannot be longer than 75 characters";if(0===e.length)return"Name is required";for(let r of t)if(r.toLowerCase()===e.toLowerCase())return"Name already exists";let r=g(e,o);if(r)return`Name contains invalid characters: ${r}`}async function c(e,t){let r="Could not check property name";try{let n=await (0,s.lS)((0,l.wY)({sourceName:e,propertyName:t}));if(n.ok){let{status:e}=await n.json();switch(e){case"valid":return;case"already_exists":return"Name already exists";case"exists_in_business_orgs":return`The property ${t} already exists in this enterprise`}}return r}catch{return r}}function p(e,t){if(e.length>75)return"Option cannot be longer than 75 characters";if(0===e.length)return"Option cannot be empty";if(t.has(e))return"Option already exists";let r=g(e,u);if(r)return`Option contains invalid characters: ${r}`}function h(e){if(e.length>255)return"Description cannot be longer than 255 characters"}let x="Invalid value type",m="Default value should be a valid option";async function f(e,t,r,l=[],i){if(r){if(!e.length)return"Cannot be empty for a required property";switch(t){case"single_select":if((0,a.OD)(e))return x;if(!l.includes(e))return m;break;case"true_false":if((0,a.OD)(e))return x;if(!n.includes(e))return m;break;case"multi_select":if(!(0,a.OD)(e))return x;if(!e.every(e=>l.includes(e)))return m;break;case"string":if((0,a.OD)(e))return x;return await y(e,i)}}}async function y(e,t){if(!e)return;if(e.length>75)return"Cannot be longer than 75 characters";let r=g(e,u);return r?`Contains invalid characters: ${r}`:t&&!await (0,i.N)(t,e)?"Value does not match pattern":void 0}function g(e,t){let r=Array.from(e.matchAll(t));return r?Array.from(new Set(r.map(e=>" "===e[0]?"whitespace":e[0]))).join(", "):""}},19345:(e,t,r)=>{r.d(t,{w:()=>s,x:()=>o});var n=r(70758),a=r(88360),l=r(96540),i=r(99395);function s(e,t,r=[]){let[s,o]=(0,l.useState)(()=>(function(e){let t={},r={};for(let a of e)for(let[e,l]of Object.entries(a)){let a=t[e];a?(0,n.tE)(a.value,l)||(t[e]={mixed:!0}):t[e]={value:l},r[e]||(r[e]=0),r[e]++}for(let[n,a]of Object.entries(r))t[n]&&a<e.length&&(t[n]={mixed:!0});return t})(e)),u=(0,l.useMemo)(()=>new Map(t.map(e=>[e.propertyName,e.regex||void 0])),[t]),[d,c]=(0,l.useState)({}),[p,h]=(0,l.useState)({});(0,l.useEffect)(()=>h({}),r);let x=(0,l.useCallback)(async(e,t)=>{let r=t&&!(0,n.OD)(t)&&await (0,i.q0)(t,u.get(e)),a={...d};delete a[e],r&&(a[e]=r),c(a)},[d,u]),m=(0,a.d)(x,300,{onChangeBehavior:"cancel"});return{propertyValuesMap:(0,l.useMemo)(()=>{let e=Object.entries({...s,...p}).reduce((e,[t,r])=>{let a=s[t],l=t in p;if(!l&&a?.mixed)e[t]={propertyName:t,changed:!1,mixed:!0};else{let i=l&&(a?.mixed||!(0,n.tE)(a?.value,r.value)),s=l?r.value:a?.value;e[t]={value:s,changed:i,propertyName:t,mixed:!1}}return e},{});for(let t of Object.entries(d)){let[r,n]=t,a=e[r];a&&(a.error=n)}return e},[p,s,d]),setPropertyValue:function(e,t){h({...p,[e]:{value:t}}),m(e,t)},revertPropertyValue:function(e){let t={...p};delete t[e],h(t);let r={...d};delete r[e],c(r)},discardChanges:function(){h({})},commitChanges:function(){let e=Object.entries(p).reduce((e,[t,r])=>(e[t]={value:r.value},e),{});o({...s,...e}),h({})}}}function o(e,t){return e.reduce((e,r)=>{let a=t[r.propertyName];return a?.changed&&(e[r.propertyName]=a.value||(0,n.sN)(r.valueType)),e},{})}},23722:(e,t,r)=>{r.d(t,{az:()=>n.az,D2:()=>D,qR:()=>W});var n=r(93882),a=r(74848),l=r(70758),i=r(83056),s=r(15820),o=r(59857),u=r(75177),d=r(69909),c=r(86519),p=r(66889),h=r(60717),x=r(30631),m=r(281),f=r(87330),y=r(17909),g=r(96540),j=r(44981),b=r(53796);function v(e){let{valueType:t,defaultValue:r}=e.propertyDefinition,i=e.propertyValue||(0,l.sN)(t);switch(t){case"single_select":return(0,a.jsx)(n.ze,{...e,propertyValue:i});case"multi_select":return(0,a.jsx)(n.az,{...e,propertyValue:i});case"true_false":return e.booleanMenuEnabled?(0,a.jsx)(b.r,{...e,defaultValue:r,propertyValue:i}):(0,a.jsx)(n.ze,{...e,propertyDefinition:{...e.propertyDefinition,allowedValues:["true","false"]},propertyValue:i});case"string":return(0,a.jsx)(A,{...e,propertyValue:i});default:return null}}function A({propertyDefinition:e,propertyValue:t,mixed:r,block:l,onChange:i,hideDefaultPlaceholder:s,inputProps:o}){let{defaultValue:u,propertyName:d}=e,c=r?n.ON:s?"":u||"";return(0,a.jsx)(j.A,{block:l,"aria-label":d,onChange:e=>i(e.target.value),value:t,placeholder:c,...o})}try{v.displayName||(v.displayName="CustomPropertyInput")}catch{}try{A.displayName||(A.displayName="StringPropertyInput")}catch{}var w=r(85349),C=r(55847),N=r(89015),V=r(43257),S=r(19345);let k={display:"-webkit-box","-webkit-line-clamp":"5","-webkit-box-orient":"vertical",overflow:"hidden",wordBreak:"break-all",textOverflow:"ellipsis"};function O({org:e,mixed:t,propertyDefinition:r,onApply:s,...d}){var h;let{valueType:m,defaultValue:f,propertyName:y}=r,j=d.appliedValue||(0,l.sN)(m),b=(0,l.sX)(j)&&!t?"default":"custom",[A,O]=(0,g.useState)(b),{propertyValuesMap:D,setPropertyValue:_,revertPropertyValue:P}=(0,S.w)([{[y]:j}],[r]),M=D[y],[T,I]=(0,g.useState)(""),[W,R]=(0,g.useState)(!1);function $(){I(""),O(b),P(y),R(!1)}let z=(0,n.sJ)(j,f,t),L=(h=f||"",(0,l.OD)(h)?`default (${h.join(", ")})`:`default (${h})`),E=(0,l.sX)(M.value)&&t,q=T||M.error;return(0,a.jsxs)(w.T,{open:W,onOpen:()=>R(!0),onClose:$,renderAnchor:e=>(0,a.jsx)(C.Q,{...e,block:!0,alignContent:"start",trailingAction:o.TriangleDownIcon,sx:{minWidth:0,'>span[data-component="buttonContent"]':{flex:1}},"data-testid":"properties-overlay-editor",children:(0,a.jsx)(x.A,{maxWidth:"100%",title:z,children:z})}),side:"outside-bottom",overlayProps:{role:"dialog",sx:{width:270}},children:[(0,a.jsx)(u.A,{sx:{p:3,borderBottom:"solid 1px",borderBottomColor:"border.muted",boxSizing:"border-box"},children:(0,a.jsxs)(N.A,{name:"Property value options",onChange:e=>O(e),children:[(0,a.jsx)(N.A.Label,{visuallyHidden:!0,children:"Property value options"}),(0,a.jsxs)(p.A,{children:[(0,a.jsx)(V.A,{checked:"default"===A,value:"default"}),(0,a.jsx)(p.A.Label,{sx:k,children:L}),(0,a.jsxs)(p.A.Caption,{children:["Inherited from"," ",(0,a.jsx)(c.A,{inline:!0,href:(0,i.p3)({owner:e}),children:e})]})]}),(0,a.jsxs)(p.A,{children:[(0,a.jsx)(V.A,{checked:"custom"===A,value:"custom"}),(0,a.jsx)(p.A.Label,{children:"Custom value"}),(0,a.jsx)(p.A.Caption,{children:"Set your own value"})]}),(0,a.jsxs)(u.A,{sx:{pl:4},children:["custom"===A&&(0,a.jsx)(v,{block:!0,hideDefaultPlaceholder:!0,propertyDefinition:r,propertyValue:M.value,mixed:E,onChange:function(e){I(""),_(y,e)},orgName:e}),q&&(0,a.jsx)(p.A.Validation,{variant:"error",sx:{pt:2},children:q})]})]})}),(0,a.jsxs)(u.A,{sx:{p:3,display:"flex",gap:2,justifyContent:"end"},children:[(0,a.jsx)(C.Q,{size:"small",onClick:$,children:"Cancel"}),(0,a.jsx)(C.Q,{size:"small",variant:"primary",onClick:function(){if(I(""),"custom"===A){if(M.error)return;if(M.value&&!(0,l.sX)(M.value))s(M.value);else{I("Value is required");return}}else s((0,l.sN)(m)),_(y,(0,l.sN)(m));R(!1)},children:"Apply"})]})]})}try{O.displayName||(O.displayName="PropertiesOverlayEditor")}catch{}function D(e){let{definitions:t,propertyValuesMap:r,orgName:n,showLockMessages:l=!0,showUndo:i=!0,propertiesOverlayEditorEnabled:s}=e,{editableDefinitions:o}=e,d=(0,g.useMemo)(()=>new Set((o||[]).map(e=>e.propertyName)),[o]);return 0===t.length?null:(0,a.jsx)(u.A,{sx:{border:"1px solid",borderColor:"border.muted",borderRadius:2,"div:last-child":{borderBottomWidth:0}},"data-testid":"custom-property-values-table",children:t.map(t=>{let{propertyName:o}=t,c=r[o],p="editableDefinitions"in e&&d.has(o);return(0,a.jsx)(u.A,{sx:{px:3,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"border.default"},"data-testid":"property-row",children:p?(0,a.jsx)(P,{changed:!!c?.changed,mixed:!!c?.mixed,propertyValue:c?.value,definition:t,error:c?.error,onChange:t=>e.setPropertyValue(o,t),onReset:()=>e.revertPropertyValue(o),showUndo:i,orgName:n,propertiesOverlayEditorEnabled:s},o):(0,a.jsx)(_,{propertyValue:c?.value||t.defaultValue||"",definition:t,showLockMessages:l,orgName:n},o)},o)})})}function _({propertyValue:e,definition:t,showLockMessages:r,orgName:n}){let{description:l}=t;return(0,a.jsx)(T,{label:W(t),description:l,value:(0,a.jsx)(I,{propertyValue:e,definition:t}),bottomMessage:r&&(0,a.jsxs)(u.A,{sx:{display:"inline"},children:[(0,a.jsxs)(d.A,{sx:{color:"fg.subtle"},children:[(0,a.jsx)(o.ShieldLockIcon,{size:"small"})," Managed by"," "]}),(0,a.jsx)(c.A,{inline:!0,href:(0,i.p3)({owner:n}),children:n})]})})}function P({propertyValue:e,definition:t,changed:r,mixed:n=!1,error:l,onChange:i,onReset:o,showUndo:d,orgName:c,propertiesOverlayEditorEnabled:h}){let{propertyName:x,description:m}=t,f=(0,s.u)("boolean_property_value_toggle"),y="true_false"===t.valueType&&f,g=`${x}-validation-error`;return(0,a.jsx)(T,{label:W(t),description:m,value:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.A,{sx:{display:"flex",gap:2},children:h&&t.required&&!y?(0,a.jsx)(O,{propertyDefinition:t,mixed:n,appliedValue:e,onApply:i,org:c}):(0,a.jsx)(v,{propertyDefinition:t,propertyValue:e,mixed:n,block:!0,onChange:i,orgName:c,booleanMenuEnabled:f,inputProps:l?{"aria-describedby":g}:{}})}),l&&(0,a.jsx)(p.A.Validation,{variant:"error",id:g,sx:{pt:2},children:l})]}),trailing:(0,a.jsx)(R,{required:t.required,propertyName:x,changed:r,onReset:o,onChange:i,showUndo:d})})}let M={display:"grid",flex:1,py:3,gridTemplateColumns:["1fr auto","1fr auto","1fr 220px minmax(39px, auto)"],gridTemplateRows:["auto auto auto auto","auto auto auto auto","min-content min-content 1fr"],gridTemplateAreas:['"name trailing" "description trailing" "value trailing" "bottomMessage trailing"','"name trailing" "description trailing" "value trailing" "bottomMessage trailing"','"name value trailing" "description value trailing" "bottomMessage value trailing"']};function T({label:e,description:t,bottomMessage:r,value:n,trailing:l}){return(0,a.jsxs)(p.A,{sx:M,children:[(0,a.jsx)(p.A.Label,{sx:{gridArea:"name",pr:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},"data-testid":"property-name",children:e}),(0,a.jsx)(u.A,{sx:{gridArea:"value",mt:[1,1,0]},children:n}),l&&(0,a.jsx)(u.A,{sx:{gridArea:"trailing",pl:2,mt:0},children:l}),t&&(0,a.jsx)(p.A.Caption,{sx:{gridArea:"description",pr:3,mt:0},children:t}),r&&(0,a.jsx)(u.A,{sx:{gridArea:"bottomMessage",mt:1},children:r})]})}function I({propertyValue:e,definition:t}){if((0,l.sX)(e))return(0,a.jsx)(d.A,{sx:{color:"fg.muted"},children:"(Empty)"});switch(t.valueType){case"single_select":case"true_false":return(0,a.jsx)(h.A,{sx:{color:"fg.default"},text:(0,a.jsx)(x.A,{title:e,maxWidth:"100%",children:e})});case"multi_select":return(0,a.jsx)(a.Fragment,{children:e.map(e=>(0,a.jsx)(h.A,{sx:{color:"fg.default",mr:1},text:(0,a.jsx)(x.A,{title:e,maxWidth:"100%",children:e})},e))});case"string":return(0,a.jsx)(x.A,{title:e,maxWidth:"100%",children:e})}}function W({propertyName:e,required:t}){return`${e}${t?" *":""}`}function R({propertyName:e,required:t,changed:r,showUndo:n=!0,onReset:l,onChange:i}){let s=`Undo ${e} changes`,u=`Reset ${e} to default value`;return(0,a.jsxs)(m.W,{children:[(0,a.jsx)(m.W.Anchor,{children:(0,a.jsx)(f.K,{unsafeDisableTooltip:!0,icon:o.KebabHorizontalIcon,variant:"invisible","aria-label":`Open reset options for ${e}`})}),(0,a.jsx)(m.W.Overlay,{width:"small",children:(0,a.jsxs)(y.l,{children:[n&&(0,a.jsxs)(y.l.Item,{onSelect:l,"aria-label":s,inactiveText:r?void 0:"No change to undo",children:[(0,a.jsx)(y.l.LeadingVisual,{children:(0,a.jsx)(o.UndoIcon,{})}),(0,a.jsx)(d.A,{sx:{fontWeight:"bold",display:"block"},children:"Undo"}),(0,a.jsx)(d.A,{sx:{fontSize:"small",color:"fg.subtle"},children:"Reset to the last used value"})]}),t&&(0,a.jsxs)(y.l.Item,{onSelect:()=>i(""),"aria-label":u,children:[(0,a.jsx)(y.l.LeadingVisual,{children:(0,a.jsx)(o.SyncIcon,{})}),(0,a.jsx)(d.A,{sx:{fontWeight:"bold",display:"block"},children:"Reset to default"}),(0,a.jsx)(d.A,{sx:{fontSize:"small",color:"fg.subtle"},children:"Inherit the value defined by the organization"})]})]})})]})}try{D.displayName||(D.displayName="CustomPropertyValuesTable")}catch{}try{_.displayName||(_.displayName="CustomPropertyReadValueRow")}catch{}try{P.displayName||(P.displayName="CustomPropertyEditValueRow")}catch{}try{T.displayName||(T.displayName="DataTableRow")}catch{}try{I.displayName||(I.displayName="DisplayPropertyValue")}catch{}try{R.displayName||(R.displayName="ResetDropdown")}catch{}},70758:(e,t,r)=>{function n(e){return Array.isArray(e)}function a(e){return!e||0===e.length}function l(e){return"multi_select"===e?[]:""}function i(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,r)=>e===t[r]):e===t}r.d(t,{OD:()=>n,sN:()=>l,sX:()=>a,tE:()=>i})},91931:(e,t,r)=>{r.d(t,{N:()=>l});var n=r(83056),a=r(6117);let l=async(e,t)=>!(e?.length&&t?.length)||await (0,a.O)({pattern:e,value:t},(0,n.yg)())},88360:(e,t,r)=>{r.d(t,{d:()=>i});var n=r(10120),a=r(23549),l=r(96540);let i=(e,t,{leading:r=!1,maxWait:i,trailing:s=!0,onChangeBehavior:o="flush"}={})=>{let u=(0,n.M)(e),d=(0,l.useMemo)(()=>{let e=void 0===i?{leading:r,trailing:s}:{leading:r,trailing:s,maxWait:i};return(0,a.A)((...e)=>u.current(...e),t,e)},[u,t,r,i,s]);return(0,l.useEffect)(()=>()=>{d?.[o]()},[d,o]),d}},10120:(e,t,r)=>{r.d(t,{M:()=>l});var n=r(51012),a=r(96540);function l(e){let t=(0,a.useRef)(e);return(0,n.N)(()=>{t.current=e},[e]),t}},53796:(e,t,r)=>{r.d(t,{r:()=>c});var n=r(74848),a=r(83056),l=r(281),i=r(17909),s=r(69909),o=r(86519),u=r(96540),d=r(93882);let c=(0,u.forwardRef)(({defaultValue:e=null,propertyValue:t,mixed:r=!1,onChange:c,orgName:p="",anchorProps:h={}},x)=>{let m=(0,u.useRef)(r),f=!!e&&""===t,y=`default (${e})`,g=r?d.ON:f?y:t||"Choose an option";return(0,n.jsxs)(l.W,{anchorRef:x,children:[(0,n.jsx)(l.W.Button,{...h,sx:{width:"100%","span[data-component=buttonContent]":{justifyContent:"start"}},children:g}),(0,n.jsx)(l.W.Overlay,{width:e?"medium":"small",children:(0,n.jsxs)(i.l,{selectionVariant:"single",role:"menu","aria-label":"True/false property value selections",children:[m.current&&(0,n.jsx)(i.l.Item,{selected:r,inactiveText:"This property has multiple values",children:"Mixed"}),e&&(0,n.jsxs)(i.l.Item,{onSelect:()=>c(""),selected:f&&!r,children:[(0,n.jsx)(s.A,{sx:{fontWeight:"normal"},children:y}),(0,n.jsxs)(i.l.Description,{variant:"block",children:["Inherited from"," ",(0,n.jsx)(o.A,{inline:!0,href:(0,a.p3)({owner:p}),children:p})]})]}),(m.current||e)&&(0,n.jsx)(i.l.Divider,{}),["true","false"].map(e=>{let r=t===e;return(0,n.jsx)(i.l.Item,{selected:r,onSelect:()=>r?c(""):c(e),children:e},e)})]})})]})});c.displayName="CustomPropertyBooleanSelect"},93882:(e,t,r)=>{r.d(t,{ON:()=>d,az:()=>h,sJ:()=>m,ze:()=>p});var n=r(74848),a=r(70758),l=r(59857),i=r(67269),s=r(55847),o=r(30631),u=r(96540);let d="(Mixed)",c={leadingVisual:l.CircleSlashIcon,text:"No matches",disabled:!0,selected:void 0,key:"no-matches",id:"no-matches"};function p({propertyDefinition:e,propertyValue:t,mixed:r,onChange:a,hideDefaultPlaceholder:l}){let s=x(e,r,t?[t]:[],l),o=s.items.find(e=>e.text&&t===e.text);return(0,n.jsx)(i.X,{...s,onSelectedChange:e=>a(e?.text||""),selected:o})}function h({anchorRef:e,propertyDefinition:t,propertyValue:r,mixed:a,onChange:l,hideDefaultPlaceholder:s}){let o=x(t,a,r,s),u=o.items.filter(e=>e.selected);return(0,n.jsx)(i.X,{...o,anchorRef:e,onSelectedChange:e=>{let{filterValue:t}=o,n=e.map(e=>e.text||"");t?l([...r.filter(e=>!e.toLowerCase().includes(t.toLowerCase())),...n]):l(n)},selected:u})}function x(e,t,r,a){let{propertyName:i,defaultValue:p}=e,[h,x]=(0,u.useState)(!1),[f,y]=(0,u.useState)(""),g=function(e,t){let r=t?e.filter(e=>(e.text||"").toLowerCase().includes(t)):e;return 0===r.length?[c]:r}((0,u.useMemo)(()=>(e.allowedValues||[]).map(e=>({id:e,text:e,selected:r.includes(e)})),[e,r]),f.toLowerCase()),j=g.length>7?"medium":"auto",b=m(r,a?null:p,t);return{items:g,renderAnchor:e=>(0,n.jsx)(s.Q,{block:!0,alignContent:"start","aria-label":t?d:`Select ${i}`,trailingAction:l.TriangleDownIcon,sx:{minWidth:0,'>span[data-component="buttonContent"]':{flex:1}},...e,children:(0,n.jsx)(o.A,{maxWidth:"100%",title:b,children:b})}),placeholderText:"Search for values",filterValue:f,open:h,onFilterChange:y,onOpenChange:e=>{x(e),y("")},overlayProps:{height:j,width:"medium"}}}function m(e,t,r){return r?d:(0,a.sX)(e)?(0,a.sX)(t)?"Choose an option":`default (${f(t||"")})`:f(e)}function f(e){return(0,a.OD)(e)?e.length<=1?e[0]||"":`${e.length} selected`:e}try{p.displayName||(p.displayName="CustomPropertySingleSelectPanel")}catch{}try{h.displayName||(h.displayName="CustomPropertyMultiSelectPanel")}catch{}}}]);
//# sourceMappingURL=ui_packages_custom-properties-editing_index_ts-661e39db9d19.js.map