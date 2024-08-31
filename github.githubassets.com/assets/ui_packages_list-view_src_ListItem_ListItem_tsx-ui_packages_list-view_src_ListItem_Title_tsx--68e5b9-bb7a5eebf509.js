"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_list-view_src_ListItem_ListItem_tsx-ui_packages_list-view_src_ListItem_Title_tsx--68e5b9"],{10026:(e,t,i)=>{i.d(t,{E7:()=>G});var r=i(74848),a=i(96540);let l=(0,a.createContext)({actions:[],staticMenuActions:[],label:"Actions"}),n=({children:e,value:{actions:t=[],staticMenuActions:i,variant:n="toolbar",label:s}})=>{let o=(0,a.useMemo)(()=>({actions:t,staticMenuActions:i,variant:n,label:s}),[t,i,n,s]);return(0,r.jsx)(l.Provider,{value:o,children:e})},s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useActionBarContent must be used with ActionBarContentProvider.");return e};try{l.displayName||(l.displayName="ActionBarContentContext")}catch{}try{n.displayName||(n.displayName="ActionBarContentProvider")}catch{}let o=(0,a.createContext)({outerContainerRef:(0,a.createRef)(),itemContainerRef:(0,a.createRef)()}),c=({value:{anchorRef:e},children:t})=>{let i=(0,a.useRef)(null),l=(0,a.useRef)(null),n=(0,a.useMemo)(()=>({outerContainerRef:i,itemContainerRef:l,anchorRef:e}),[e]);return(0,r.jsx)(o.Provider,{value:n,children:t})},d=()=>{let e=(0,a.useContext)(o);if(!e)throw Error("useActionBarRef must be used with ActionBarRefProvider.");return e};try{o.displayName||(o.displayName="ActionBarRefContext")}catch{}try{c.displayName||(c.displayName="ActionBarRefProvider")}catch{}var u=i(67726),m=i(58748),h=i(45221);let y=e=>{if(!e)return 0;let t=window.getComputedStyle(e);return t?.columnGap?parseInt(t.columnGap,10):0},x=(e,t)=>{let i=2*y(t),r=e.getBoundingClientRect().width,a=window.getComputedStyle(e);return r+(a?.marginLeft?parseInt(a.marginLeft,10):0)+(a?.marginRight?parseInt(a.marginRight,10):0)+i},f=(e,t)=>{let i=p(e,t);if(void 0===i)return;let r=i;return t&&(r-=t.offsetLeft),r},p=(e,t)=>{if(!e)return;let i=e.offsetWidth;return t&&(i-=t.offsetWidth),i},v=e=>"condensed"===e?1:"spacious"===e?3:"none"===e?0:2,N=(0,a.createContext)({visibleChildEndIndex:0,justifySpaceBetween:!1,gap:0,recalculateItemSize:u.l}),g=({children:e,value:{actionKeys:t,gap:i}})=>{let l=t.length,[n,s]=(0,a.useState)(l),{outerContainerRef:o,itemContainerRef:c}=d(),[u,y]=(0,a.useState)(),[v,g]=(0,a.useState)(),[w,C]=(0,a.useState)(new Map(t.map(e=>[e,void 0]))),[b,L]=(0,a.useState)(!1),j=(0,a.useMemo)(()=>t.every(e=>w.has(e)&&"number"==typeof w.get(e)),[t,w]),S=(0,a.useCallback)(e=>{let i=t[e];if(i)return w.get(i)},[t,w]),A=(0,a.useCallback)((e,t)=>{let i=c.current;if(!i)return;let r=x(t,i);C(t=>{if(r===t.get(e)||isNaN(r))return t;let i=new Map(Array.from(t.entries()));return i.set(e,r),i})},[c]),I=(0,a.useCallback)(()=>{if(!j)return;let e=o.current,t=c.current,i=p(e,t);if(void 0===i)return;let r=f(e,t);void 0!==r&&i<=r&&s(Math.max(0,n-1))},[j,n,c,o]),M=(0,a.useCallback)(()=>{let e=o.current,t=c.current,i=p(e,t);if(void 0===i)return;let r=S(n);if(void 0===r)return;let a=f(e,t);void 0!==a&&i>a+r&&s(Math.min(l,n+1))},[S,l,n,o,c]),T=(0,a.useCallback)(()=>{let e=o.current,t=c.current;if(!e||!t)return;let i=e.offsetWidth;i&&(void 0===u||i<=u?I():i>u&&M(),y(i),L(i<=(v??t.offsetWidth)))},[M,I,v,u,o,c]);(0,h.A)(()=>{s(l)},[l]),(0,h.A)(()=>{let e=c.current;if(!e)return;let i=new Map;for(let r of t){let t=e.querySelector(`[data-action-bar-item="${r}"]`);t&&i.set(r,x(t,e))}C(i)},[t,c]),(0,h.A)(()=>{let e=c.current;e&&g(e.offsetWidth)},[c]),(0,h.A)(()=>{T()},[T]),(0,m.w)(T,o);let P=(0,a.useMemo)(()=>({visibleChildEndIndex:n,justifySpaceBetween:b,gap:i,recalculateItemSize:A}),[n,b,i,A]);return(0,r.jsx)(N.Provider,{value:P,children:e})},w=()=>{let e=(0,a.useContext)(N);if(!e)throw Error("useActionBarResize must be used with ActionBarResizeProvider.");return e};try{N.displayName||(N.displayName="ActionBarResizeContext")}catch{}try{g.displayName||(g.displayName="ActionBarResizeProvider")}catch{}var C=i(92240),b=i(94120),L=i(82678),j=i(75177),S=i(59857),A=i(14744),I=i.n(A),M=i(281),T=i(87330),P=i(17909);let _=S.KebabHorizontalIcon,E="invisible",k=({anchorProps:{"aria-label":e,icon:t=_,variant:i=E,...l}={icon:_,variant:E}})=>{let{actions:n,staticMenuActions:o,label:c}=s(),{visibleChildEndIndex:u}=w(),{anchorRef:m}=d(),h=(0,a.useMemo)(()=>I()(l,{"aria-label":e?.trim()||`More ${c}`,icon:t,sx:{flexShrink:0},variant:i}),[e,t,c,i,l]),y=(0,a.useMemo)(()=>n?.slice(u),[n,u]),x=y&&y.length>0,f=o&&o.length>0;return x||f?(0,r.jsxs)(M.W,{anchorRef:m,children:[(0,r.jsx)(M.W.Anchor,{children:(0,r.jsx)(T.K,{...(0,C.G)("overflow-menu-anchor"),...h})}),(0,r.jsx)(M.W.Overlay,{align:"end",children:(0,r.jsxs)(P.l,{children:[f&&o.map(e=>(0,r.jsx)(a.Fragment,{children:e.render()},`${e.key}`)),y?.map(e=>r.jsx(a.Fragment,{children:e.render(!0)},e.key))]})})]}):null};try{k.displayName||(k.displayName="OverflowMenu")}catch{}let B=({children:e,actionKey:t})=>{let i=(0,a.useRef)(null),{recalculateItemSize:l}=w();return(0,h.A)(()=>{i.current&&l(t,i.current)},[i,l,t]),(0,r.jsx)(j.A,{...(0,C.G)(`action-bar-item-${t}`),"data-action-bar-item":t,sx:{display:"inline-flex"},ref:i,children:e})};try{B.displayName||(B.displayName="VisibleItem")}catch{}let R={display:"flex",justifyContent:"flex-end",overflow:"visible",flexDirection:"row",marginLeft:"auto",alignItems:"center",boxSizing:"content-box",flexShrink:0,flexGrow:0},H=({sx:e,...t})=>{let{actions:i}=s(),{gap:a,visibleChildEndIndex:l}=w(),{itemContainerRef:n}=d(),o=i?.slice(0,l);return(0,r.jsx)(j.A,{...(0,C.G)("action-bar"),ref:n,sx:{...R,...e,gap:a},...t,children:o?.map(({key:e,render:t})=>r.jsx(B,{actionKey:e,children:t(!1)},e))})};try{H.displayName||(H.displayName="VisibleItems")}catch{}let V={position:"relative",minWidth:0,display:"flex",overflow:"visible",flexDirection:"row",marginLeft:"auto",alignItems:"center",boxSizing:"content-box",flexShrink:1,flexGrow:1},$=({overflowMenuToggleProps:e,children:t,outerContainerSx:i,...a})=>{let{gap:l,justifySpaceBetween:n}=w(),{outerContainerRef:o}=d(),{label:c,variant:u}=s();return(0,L.G)({containerRef:o,bindKeys:b.z0.ArrowHorizontal|b.z0.HomeAndEnd,focusOutBehavior:"wrap",disabled:"toolbar"!==u},[o]),(0,r.jsxs)(j.A,{ref:o,...(0,C.G)("action-bar-container"),role:"toolbar"===u?"toolbar":void 0,"aria-label":"toolbar"===u?c:void 0,sx:{...V,...i,justifyContent:n?"space-between":"flex-end",gap:l},children:[(0,r.jsx)(H,{...a}),t,(0,r.jsx)(k,{anchorProps:e})]})};try{$.displayName||($.displayName="VisibleAndOverflowContainer")}catch{}let W="normal",G=({actions:e=[],staticMenuActions:t,overflowMenuToggleProps:i,children:l,sx:s,label:o,variant:d,outerContainerSx:u,density:m=W,anchorRef:h,className:y,style:x})=>{let f=(0,a.useMemo)(()=>({actions:e,staticMenuActions:t,variant:d,label:o}),[e,t,d,o]),p=(0,a.useMemo)(()=>({actionKeys:e.map(e=>e.key),gap:v(m)}),[e,m]),N=t&&t.length>0;return e&&e.length>0||N?(0,r.jsx)(c,{value:{anchorRef:h},children:(0,r.jsx)(g,{value:p,children:(0,r.jsx)(n,{value:f,children:(0,r.jsx)($,{outerContainerSx:u,overflowMenuToggleProps:i,sx:s,className:y,style:x,children:l})})})}):null};try{G.displayName||(G.displayName="ActionBar")}catch{}},69238:(e,t,i)=>{i.d(t,{Dy:()=>a,O1:()=>n,QL:()=>c,eX:()=>o,n1:()=>r,tD:()=>l,tp:()=>s});let r=["h1","h2","h3","h4","h5","h6"],a=["list-view","list-view-metadata","listitem"],l="h2",n={"list-view":l,"list-view-metadata":"h3",listitem:"h3"},s="default",o=!1,c="List view"},41094:(e,t,i)=>{i.d(t,{m:()=>n});var r=i(96540),a=i(69238),l=i(79057);function n(e){let{titleHeaderTag:t,hasMetadataTitle:i}=(0,l.t)();return(0,r.useMemo)(()=>{let r=a.Dy.findIndex(t=>t===e),l=a.n1.indexOf(t)+(i?r:r-1);return l>a.n1.length-1?"h6":a.n1[l]||a.O1[e]},[t,i,e])}},92240:(e,t,i)=>{i.d(t,{G:()=>r});let r=e=>({"data-testid":e})},79345:(e,t,i)=>{i.d(t,{L:()=>u});var r=i(74848),a=i(10026),l=i(92240),n=i(75177),s=i(20053),o=i(96540),c=i(2687);let d={container:"ActionBar-module__container--ZVTfi",hasActions:"ActionBar-module__hasActions--cU9tJ"},u=({anchorIcon:e,style:t,sx:i,className:u,label:m="list item action bar",...h})=>{let{setAnyItemsWithActionBar:y,setHasResizableActionsWithActionBar:x}=(0,c.Z)();return(0,o.useEffect)(()=>y(!0),[y]),(0,o.useEffect)(()=>{h.actions&&x(!0)},[h.actions,x]),(0,r.jsx)(n.A,{className:(0,s.$)(d.container,h.actions&&d.hasActions,u),style:t,sx:i,...(0,l.G)("list-view-item-action-bar-container"),children:(0,r.jsx)(a.E7,{...h,label:m,variant:"menu",overflowMenuToggleProps:e?{icon:e}:void 0})})};try{u.displayName||(u.displayName="ListItemActionBar")}catch{}},64135:(e,t,i)=>{i.d(t,{L:()=>s,O:()=>n});var r=i(74848),a=i(96540);let l=(0,a.createContext)(void 0),n=({children:e})=>{let[t,i]=(0,a.useState)(""),n=(0,a.useMemo)(()=>({description:t,setDescription:i}),[t]);return(0,r.jsx)(l.Provider,{value:n,children:e})};n.displayName="ListItemDescriptionProvider";let s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useListItemDescription must be used with DescriptionProvider.");return e};try{l.displayName||(l.displayName="DescriptionContext")}catch{}},30014:(e,t,i)=>{i.d(t,{c:()=>I});var r=i(74848),a=i(67726),l=i(75177),n=i(20053),s=i(96540),o=i(16696),c=i(2687),d=i(57357),u=i(2562),m=i(79345);let h=(0,s.createContext)({actionsOpen:!1,setActionsOpen:a.l}),y=({children:e})=>{let[t,i]=(0,s.useState)(!1),a=(0,s.useMemo)(()=>({actionsOpen:t,setActionsOpen:i}),[t]);return(0,r.jsx)(h.Provider,{value:a,children:e})};y.displayName="ListItemActionsProvider";try{h.displayName||(h.displayName="ActionsContext")}catch{}var x=i(64135);let f=(0,s.createContext)(void 0),p=({children:e})=>{let[t,i]=(0,s.useState)(""),a=(0,s.useMemo)(()=>({leadingBadge:t,setLeadingBadge:i}),[t]);return(0,r.jsx)(f.Provider,{value:a,children:e})};p.displayName="ListItemLeadingBadgeProvider";let v=()=>{let e=(0,s.useContext)(f);if(!e)throw Error("useListItemLeadingBadge must be used with LeadingBadgeProvider.");return e};try{f.displayName||(f.displayName="LeadingBadgeContext")}catch{}let N={listItem:"ListItem-module__listItem--kHali",compact:"ListItem-module__compact--z60S6",hasActionBar:"ListItem-module__hasActionBar--av1aD",selected:"ListItem-module__selected--BaCDB"};var g=i(92240);let w={container:"MetadataContainer-module__container--lj6YE"};function C({style:e,sx:t,className:i,children:a}){return(0,r.jsx)(l.A,{className:(0,n.$)(w.container,i),style:e,sx:t,...(0,g.G)("list-view-item-metadata"),children:a})}try{C.displayName||(C.displayName="ListItemMetadataContainer")}catch{}var b=i(34986),L=i(19075),j=i(37577),S=i(16991);let A=({children:e,isActive:t=!1,title:i,metadata:a,secondaryActions:h,style:y,sx:f,className:p,metadataContainerStyle:g,metadataContainerSx:w,metadataContainerClassName:A,...I})=>{let{idPrefix:M}=(0,o.If)(),{isSelectable:T}=(0,d.v)(),{variant:P}=(0,u.e)(),{anyItemsWithActionBar:_,hasResizableActionsWithActionBar:E}=(0,c.Z)(),k=(0,s.useId)(),{isSelected:B,onSelect:R}=(0,L.r)(),{status:H}=(0,j.x)(),{title:V,titleAction:$}=(0,S.J)(),{description:W}=(0,x.L)(),{leadingBadge:G}=v(),{hasNewActivity:z}=(0,b.I)(),O=(0,s.useRef)(null);(0,s.useEffect)(()=>{O.current&&t&&document.activeElement?.tagName==="BODY"&&O.current.focus()});let D=(0,s.useCallback)(e=>{switch(e.key){case"Enter":$&&$(e);break;case" ":if(!T||O?.current!==document.activeElement)break;e.preventDefault(),R(!B);break;case"Escape":O?.current?.focus()}},[$,T,R,B]),K=(0,s.useCallback)(()=>{let e=B?"Selected":"",t=z?"New activity":"",i=!!h,r=Array.isArray(a)&&a.length>0||a&&!Array.isArray(a),l="";(r||i)&&(l="More information available below");let n=[e,[G,V,H].filter(e=>e.trim()).join(": ").replace(/\.+$/,""),W,t,l].filter(e=>e.trim()).join(". ");return n.endsWith(".")?n:`${n}.`},[h,a,B,z,G,V,H,W]);return(0,r.jsxs)(l.A,{as:"li",ref:O,id:`${M}-list-view-node-${k}`,role:"listitem",className:(0,n.$)(N.listItem,B&&N.selected,"compact"===P&&N.compact,_&&E&&N.hasActionBar,p),tabIndex:-1,"aria-label":K(),style:y,sx:f,onKeyDown:D,...I,children:[i,e,Array.isArray(a)&&a.length>0?(0,r.jsx)(C,{style:g,sx:w,className:A,children:a.map((e,t)=>(0,r.jsx)(s.Fragment,{children:e},t))}):a&&!Array.isArray(a)&&(0,r.jsx)(C,{style:g,sx:w,className:A,children:a}),h??(_&&(0,r.jsx)(m.L,{}))]})},I=({children:e,isSelected:t=!1,onSelect:i=a.l,...l})=>{let{setSelectedCount:n}=(0,d.v)(),o=(0,s.useRef)(t);o.current=t,(0,s.useEffect)(()=>{n(e=>t?e+1:Math.max(0,e-1))},[t,n]),(0,s.useEffect)(()=>()=>{o.current&&n(e=>Math.max(0,e-1))},[n]);let c=(0,s.useMemo)(()=>({isSelected:t,onSelect:i}),[t,i]);return(0,r.jsx)(y,{children:(0,r.jsx)(p,{children:(0,r.jsx)(S.y,{children:(0,r.jsx)(L.W,{value:c,children:(0,r.jsx)(b.t,{children:(0,r.jsx)(x.O,{children:(0,r.jsx)(j.u,{children:(0,r.jsx)(A,{...l,children:e})})})})})})})})};try{A.displayName||(A.displayName="ListItemBase")}catch{}try{I.displayName||(I.displayName="ListItem")}catch{}},34986:(e,t,i)=>{i.d(t,{I:()=>s,t:()=>n});var r=i(74848),a=i(96540);let l=(0,a.createContext)(void 0),n=({children:e})=>{let[t,i]=(0,a.useState)(!1),n=(0,a.useMemo)(()=>({hasNewActivity:t,setHasNewActivity:i}),[t]);return(0,r.jsx)(l.Provider,{value:n,children:e})};n.displayName="ListItemNewActivityProvider";let s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useListItemNewActivity must be used with NewActivityProvider.");return e};try{l.displayName||(l.displayName="NewActivityContext")}catch{}},19075:(e,t,i)=>{i.d(t,{W:()=>c,r:()=>d});var r=i(74848),a=i(7572),l=i(67726),n=i(96540),s=i(16991);let o=(0,n.createContext)({isSelected:!1,onSelect:l.l}),c=({children:e,value:{isSelected:t,onSelect:i}})=>{let{title:l}=(0,s.J)(),c=(0,n.useMemo)(()=>({isSelected:t,onSelect:e=>{(0,a.i)(e?`Selected. ${l}.`:`Unselected. ${l}.`),i(e)}}),[t,i,l]);return(0,r.jsx)(o.Provider,{value:c,children:e})};c.displayName="ListItemSelectionProvider";let d=()=>(0,n.useContext)(o);try{o.displayName||(o.displayName="SelectionContext")}catch{}},37577:(e,t,i)=>{i.d(t,{u:()=>n,x:()=>s});var r=i(74848),a=i(96540);let l=(0,a.createContext)(void 0),n=({children:e})=>{let[t,i]=(0,a.useState)(""),n=(0,a.useMemo)(()=>({status:t,setStatus:i}),[t]);return(0,r.jsx)(l.Provider,{value:n,children:e})};n.displayName="ListItemStatusProvider";let s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useListItemStatus must be used with StatusProvider.");return e};try{l.displayName||(l.displayName="StatusContext")}catch{}},48077:(e,t,i)=>{i.d(t,{a:()=>A});var r,a=i(74848),l=i(92240),n=i(75177),s=i(20053),o=i(96540),c=i(2562),d=i(47553),u=i(57357);let m={container:"Selection-module__container--VTcpJ"};var h=i(19075),y=i(16991);let x=()=>{let{variant:e}=(0,c.e)(),{isSelectable:t}=(0,u.v)(),{isSelected:i,onSelect:r}=(0,h.r)(),{title:n}=(0,y.J)();return t?(0,a.jsx)("div",{className:m.container,...(0,l.G)("list-view-item-selection"),children:(0,a.jsx)(d.A,{sx:{marginTop:"default"===e?"14px":"10px"},checked:i,onChange:()=>r(!i),"aria-label":`Select: ${n}`,"data-listview-component":"selection-input",...(0,l.G)("list-view-item-selection-input")})}):null};try{x.displayName||(x.displayName="ListItemSelection")}catch{}let f={anchor:"Title-module__anchor--SyQM6",markdown:"Title-module__markdown--KiFgL",heading:"Title-module__heading--upUxW",compact:"Title-module__compact--qLTco",container:"Title-module__container--l9xi7",trailingBadgesSpacer:"Title-module__trailingBadgesSpacer--TioiY",trailingBadgesContainer:"Title-module__trailingBadgesContainer--XGsbF"};var p=i(22084),v=i(69909),N=i(86519),g=i(41094);let w={inline:"TitleHeader-module__inline--rL27T"};function C({headingStyle:e,headingClassName:t,headingSx:i,headingRef:r,children:l}){let n=(0,g.m)("listitem");return(0,a.jsx)(v.A,{as:n,className:(0,s.$)("markdown-title",t),style:e,ref:r,sx:i,children:l})}function b({anchorStyle:e,anchorClassName:t,anchorSx:i,linkProps:r,anchorRef:n,children:o,...c}){return(0,a.jsx)(N.A,{...(0,l.G)("listitem-title-link"),style:e,sx:i,ref:n,className:(0,s.$)(w.inline,t),...c,...r,children:o})}function L({markdownValue:e,anchorStyle:t,anchorClassName:i,anchorSx:r,headingStyle:l,headingClassName:n,headingSx:o,headingRef:c,tooltip:d,leadingBadge:u,...m}){return(0,a.jsxs)(C,{headingStyle:l,headingSx:o,headingClassName:n,headingRef:c,children:[u,(0,a.jsx)(p.yx,{style:t,className:(0,s.$)(w.inline,i),html:e,title:d,...m})]})}function j({headingStyle:e,headingSx:t,headingClassName:i,headingRef:r,value:l,tooltip:n,leadingBadge:s,...o}){return(0,a.jsxs)(C,{headingStyle:e,headingSx:t,headingClassName:i,headingRef:r,children:[s,(0,a.jsx)(b,{...o,children:(0,a.jsx)(p.yx,{html:l,title:n})})]})}function S({value:e,headingStyle:t,headingSx:i,headingClassName:r,headingRef:l,tooltip:n,leadingBadge:s}){return(0,a.jsxs)(C,{headingStyle:t,headingSx:i,headingClassName:r,headingRef:l,children:[s,(0,a.jsx)(p.yx,{className:w.inline,html:e,title:n})]})}try{C.displayName||(C.displayName="TitleHeading")}catch{}try{(r=TitleTag).displayName||(r.displayName="TitleTag")}catch{}try{b.displayName||(b.displayName="HeadingLink")}catch{}try{L.displayName||(L.displayName="ListItemMarkdownHeader")}catch{}try{j.displayName||(j.displayName="ListItemLinkHeader")}catch{}try{S.displayName||(S.displayName="ListItemStaticHeader")}catch{}function A({value:e,anchorRef:t,headingRef:i,href:r,target:d,onClick:u,onMouseEnter:m,onMouseLeave:h,children:p,markdownValue:v,containerStyle:N,containerSx:g,containerClassName:w,headingStyle:C,headingSx:b,headingClassName:A,anchorStyle:I,anchorSx:M,anchorClassName:T,linkProps:P={},tooltip:_,leadingBadge:E,trailingBadges:k}){let{variant:B}=(0,c.e)(),{setTitle:R,setTitleAction:H}=(0,y.J)(),V=(0,o.useRef)(null),$=t||V;(0,o.useEffect)(()=>R(e),[R,e]),(0,o.useEffect)(()=>{(r||u)&&"function"!=typeof $&&$?.current&&H(()=>e=>{r&&(e.metaKey||e.ctrlKey)?window.open(r,"_blank"):$?.current?.click()})},[$,r,u,H]);let W={headingStyle:C,headingSx:b,headingClassName:(0,s.$)(f.heading,"compact"===B&&f.compact,A),leadingBadge:E,tooltip:_,headingRef:i};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.A,{...(0,l.G)("list-view-item-title-container"),style:N,sx:g,className:(0,s.$)(f.container,"compact"===B&&f.compact,w),children:[v?(0,a.jsx)(L,{markdownValue:v,anchorStyle:I,anchorSx:M,anchorClassName:(0,s.$)(f.anchor,f.markdown,T),anchorRef:$,onClick:u,onMouseEnter:m,onMouseLeave:h,linkProps:P,...W}):r||u?(0,a.jsx)(j,{value:e,anchorStyle:I,anchorSx:M,anchorClassName:(0,s.$)(f.anchor,T),anchorRef:$,href:r,target:d,onClick:u,onMouseEnter:m,onMouseLeave:h,linkProps:P,...W}):(0,a.jsx)(S,{value:e,...W}),k&&(0,a.jsx)("span",{className:f.trailingBadgesSpacer}),(0,a.jsx)("span",{className:f.trailingBadgesContainer,children:k}),p]}),(0,a.jsx)(x,{})]})}try{A.displayName||(A.displayName="ListItemTitle")}catch{}},16991:(e,t,i)=>{i.d(t,{J:()=>s,y:()=>n});var r=i(74848),a=i(96540);let l=(0,a.createContext)(void 0),n=({children:e})=>{let[t,i]=(0,a.useState)(""),[n,s]=(0,a.useState)(null),o=(0,a.useMemo)(()=>({title:t,setTitle:e=>i(e.trim()),titleAction:n,setTitleAction:s}),[t,n]);return(0,r.jsx)(l.Provider,{value:o,children:e})};n.displayName="ListItemTitleProvider";let s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useListItemTitle must be used with TitleProvider.");return e};try{l.displayName||(l.displayName="TitleContext")}catch{}},16696:(e,t,i)=>{i.d(t,{If:()=>s,JE:()=>n,WJ:()=>o});var r=i(74848),a=i(96540);let l=(0,a.createContext)(void 0),n=({children:e})=>{let t=(0,a.useId)(),i=(0,a.useMemo)(()=>({idPrefix:t}),[t]);return(0,r.jsx)(l.Provider,{value:i,children:e})};n.displayName="ListViewIdProvider";let s=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useListViewId must be used with IdProvider.");return e},o=()=>void 0!==(0,a.useContext)(l);try{l.displayName||(l.displayName="IdContext")}catch{}},2687:(e,t,i)=>{i.d(t,{Z:()=>o,w:()=>s});var r=i(74848),a=i(67726),l=i(96540);let n=(0,l.createContext)({anyItemsWithActionBar:!1,setAnyItemsWithActionBar:a.l,hasResizableActionsWithActionBar:!1,setHasResizableActionsWithActionBar:a.l}),s=({children:e})=>{let[t,i]=(0,l.useState)(!1),[a,s]=(0,l.useState)(!1),o=(0,l.useMemo)(()=>({anyItemsWithActionBar:t,setAnyItemsWithActionBar:i,hasResizableActionsWithActionBar:a,setHasResizableActionsWithActionBar:s}),[t,a]);return(0,r.jsx)(n.Provider,{value:o,children:e})};s.displayName="ListViewItemsProvider";let o=()=>(0,l.useContext)(n);try{n.displayName||(n.displayName="ItemsContext")}catch{}},36861:(e,t,i)=>{i.d(t,{u:()=>j});var r=i(74848),a=i(67726),l=i(92240),n=i(73729),s=i(75177),o=i(20053),c=i(96540),d=i(69238),u=i(94120),m=i(21588),h=i(82678);function y(e,t){let i=e,r=e.closest("[role=listitem]");r&&(i=r);let a=i.closest("[role=list]");if(!a)return;let l=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,e=>e instanceof HTMLElement&&"listitem"===e.getAttribute("role")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP),n=l.firstChild(),s=0;for(;n!==i&&(n=l.nextNode(),!(++s>500)););let o="next"===t?l.nextNode():l.previousNode();for(;o instanceof HTMLElement&&o.parentElement?.closest("[role=listitem][aria-expanded=false]");)o="next"===t?l.nextNode():l.previousNode();return o instanceof HTMLElement?o:void 0}function x(e){let t=e.closest("[role=list]"),i=t?.querySelector("[role=listitem]");return i instanceof HTMLElement?i:void 0}function f(e){let t=e.closest("[role=list]"),i=t?.querySelectorAll("[role=listitem]");if(!i||i.length<1)return;let r=i[i.length-1];if(r instanceof HTMLElement)return r}function p(e,t){let i=[...(0,m.K1)(document.documentElement,{strict:!0,onlyTabbable:!0})],r=i.indexOf(e);return"next"===t?i[r+1]:i[r-1]}var v=i(16696),N=i(2687);let g={ul:"ListView-module__ul--vMLEZ",container:"ListView-module__container--zF6wW"};var w=i(37753),C=i(57357),b=i(79057),L=i(2562);let j=({title:e,titleHeaderTag:t,children:i,totalCount:l,selectedCount:n=0,variant:s=d.tp,singularUnits:o,pluralUnits:u,onVariantChange:m=a.l,isSelectable:h,...y})=>{let[x,f]=(0,c.useState)(s);(0,c.useEffect)(()=>f(s),[s]),(0,c.useEffect)(()=>{m?.(x)},[m,x]);let p=(0,c.useMemo)(()=>c.Children.toArray(i).length,[i]);return(0,r.jsx)(v.JE,{children:(0,r.jsx)(b.y,{title:e,titleHeaderTag:t,children:(0,r.jsx)(L.H,{variant:x,setVariant:f,children:(0,r.jsx)(C.W,{countOnPage:p,selectedCount:n,totalCount:l,singularUnits:o,pluralUnits:u,isSelectable:h,children:(0,r.jsx)(w.e,{children:(0,r.jsx)(N.w,{children:(0,r.jsx)(S,{...y,children:i})})})})})})})},S=({metadata:e,children:t,listRef:i,ariaLabelledBy:a,itemsListClassName:d,itemsListStyle:N,itemsListSx:w,...C})=>{let{idPrefix:L}=(0,v.If)(),{title:j,titleHeaderTag:S}=(0,b.t)(),{containerRef:A}=function(){let{containerRef:e}=(0,h.G)({strict:!0,bindKeys:u.z0.ArrowVertical|u.z0.HomeAndEnd|u.z0.PageUpDown|u.z0.Tab,focusInStrategy:()=>{if(!e.current)return;let t=e.current.querySelector('[tabindex="0"]');return t?.closest("[role=listitem]")||t},focusableElementFilter:e=>"list"!==e.getAttribute("role"),getNextFocusable:(e,t,i)=>{if(t instanceof HTMLElement){if("Tab"===i.key||"Tab"===i.code){if(i.shiftKey&&"listitem"===t.getAttribute("role"))return p(t,"previous");let e=t.closest("[role=listitem]");if(!e)return;let r=[...(0,m.K1)(e,{strict:!0})],a=r.findIndex(e=>e.parentElement?.getAttribute("data-listview-component")==="trailing-badge"),l=r.findIndex(e=>"selection-input"===e.getAttribute("data-listview-component"));a>=0&&l>=0&&(r.splice(a,0,r[l]),r.splice(l+1,1));let n=r.indexOf(i.target);return n!==r.length-1||i.shiftKey?n>0?i.shiftKey?r[n-1]:r[n+1]:void 0:p(t,"next")}if("previous"===e)return y(t,e)||x(t);if("next"===e)return y(t,e)||f(t);if("start"===e)return x(t);if("end"===e)return f(t)}}});return{containerRef:e}}();(0,c.useEffect)(()=>{i&&(i.current=A.current)},[A,i]);let I=a??`${L}-list-view-container-title`;return(0,r.jsxs)("div",{id:`${L}-list-view-container`,className:g.container,children:[!a&&(0,r.jsx)(n.A,{className:"sr-only",as:S,id:I,...(0,l.G)("list-view-title"),children:j}),e,(0,r.jsx)(s.A,{as:"ul",className:(0,o.$)(g.ul,d),style:N,sx:w,ref:A,"aria-labelledby":I,tabIndex:-1,role:"list","data-listview-component":"items-list",...(0,l.G)("list-view-items"),...C,children:t})]})};try{j.displayName||(j.displayName="ListView")}catch{}try{S.displayName||(S.displayName="ListViewContainer")}catch{}},37753:(e,t,i)=>{i.d(t,{P:()=>s,e:()=>n});var r=i(74848),a=i(96540);let l=(0,a.createContext)({multiPageSelectionAllowed:!1}),n=({children:e,multiPageSelectionAllowed:t=!1})=>{let[i,n]=(0,a.useState)(t),s=(0,a.useMemo)(()=>({multiPageSelectionAllowed:i,setMultiPageSelectionAllowed:n}),[i]);return(0,r.jsx)(l.Provider,{value:s,children:e})};n.displayName="ListViewMultiPageSelectionProvider";let s=()=>(0,a.useContext)(l);try{l.displayName||(l.displayName="MultiPageSelectionContext")}catch{}},57357:(e,t,i)=>{i.d(t,{W:()=>d,v:()=>u});var r=i(74848),a=i(67726),l=i(96540),n=i(69238);let s="list item",o="list items",c=(0,l.createContext)({selectedCount:0,setSelectedCount:a.l,countOnPage:0,isSelectAllChecked:!1,anyItemsSelected:!1,singularUnits:s,pluralUnits:o,isSelectable:n.eX}),d=({children:e,countOnPage:t=0,singularUnits:i=s,pluralUnits:a=o,totalCount:d,selectedCount:u=0,isSelectable:m=n.eX}={singularUnits:s,pluralUnits:o,selectedCount:0,countOnPage:0,isSelectable:n.eX})=>{let[h,y]=(0,l.useState)(u);(0,l.useEffect)(()=>y(u),[u]);let x=h>0&&h>=t,f=h>0,p=(0,l.useMemo)(()=>({totalCount:d,countOnPage:t,selectedCount:h,setSelectedCount:y,isSelectAllChecked:x,anyItemsSelected:f,singularUnits:i,pluralUnits:a,isSelectable:m}),[h,x,f,d,t,i,a,m]);return(0,r.jsx)(c.Provider,{value:p,children:e})};d.displayName="ListViewSelectionProvider";let u=()=>(0,l.useContext)(c);try{c.displayName||(c.displayName="SelectionContext")}catch{}},79057:(e,t,i)=>{i.d(t,{t:()=>o,y:()=>s});var r=i(74848),a=i(96540),l=i(69238);let n=(0,a.createContext)(void 0),s=({children:e,title:t,titleHeaderTag:i=l.tD})=>{let[s,o]=(0,a.useState)(!1),c=(0,a.useMemo)(()=>({title:t.trim()||l.QL,titleHeaderTag:i,hasMetadataTitle:s,setHasMetadataTitle:o}),[s,t,i]);return(0,r.jsx)(n.Provider,{value:c,children:e})};s.displayName="ListViewTitleProvider";let o=()=>{let e=(0,a.useContext)(n);if(!e)throw Error("useListViewTitle must be used with TitleProvider.");return e};try{n.displayName||(n.displayName="TitleContext")}catch{}},2562:(e,t,i)=>{i.d(t,{H:()=>o,e:()=>c});var r=i(74848),a=i(67726),l=i(96540),n=i(69238);let s=(0,l.createContext)(void 0),o=({children:e,variant:t=n.tp,setVariant:i=a.l})=>{let o=(0,l.useMemo)(()=>({variant:t,setVariant:i}),[i,t]);return(0,r.jsx)(s.Provider,{value:o,children:e})};o.displayName="ListViewVariantProvider";let c=()=>{let e=(0,l.useContext)(s);if(!e)throw Error("useListViewVariant must be used with VariantProvider.");return e};try{s.displayName||(s.displayName="VariantContext")}catch{}},22084:(e,t,i)=>{i.d(t,{mo:()=>y,oG:()=>u,yx:()=>m});var r,a=i(74848),l=i(75177),n=i(69909),s=i(42838),o=i.n(s),c=i(96540);function d(e){if("html"in e&&void 0!==e.html){let{html:t,...i}=e;return{safeHTML:t,props:i}}let{unverifiedHTML:t,unverifiedHTMLConfig:i,...r}=e,a={...i,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1};return{safeHTML:o().sanitize(t,a),props:r}}let u=h(l.A);u.displayName="SafeHTMLBox";let m=h(n.A);function h(e){return(0,c.forwardRef)((t,i)=>{let{safeHTML:r,props:l}=d(t);return(0,a.jsx)(e,{ref:i,...l,dangerouslySetInnerHTML:r?{__html:r}:void 0})})}m.displayName="SafeHTMLText";let y=(0,c.forwardRef)((e,t)=>{let{safeHTML:i,props:r}=d(e);return(0,a.jsx)("div",{ref:t,...r,dangerouslySetInnerHTML:i?{__html:i}:void 0})});y.displayName="SafeHTMLDiv";try{(r=SafeHTMLComponent).displayName||(r.displayName="SafeHTMLComponent")}catch{}}}]);
//# sourceMappingURL=ui_packages_list-view_src_ListItem_ListItem_tsx-ui_packages_list-view_src_ListItem_Title_tsx--68e5b9-cc3fc764ef58.js.map