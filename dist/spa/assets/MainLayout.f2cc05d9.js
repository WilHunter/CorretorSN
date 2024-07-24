import{k as Q,c as f,h as z,l as oe,r as T,m as _e,o as U,n as N,p as Ce,q as te,g as R,t as pe,i as ne,u as P,w,v as ot,x as j,y as nt,z as Y,A as lt,B as J,C as ve,D as Le,E as he,G as we,H as me,I as it,J as rt,K as ke,L as De,M as ut,N as Fe,O as Z,a as st,P as ct,Q as dt,R as ft,S as B,f as k,U as vt,V as F,W as ht,X as $e,Y as mt,Z as gt,_ as yt,$ as bt,a0 as pt}from"./index.712e047d.js";import{Q as wt,a as Be}from"./QItem.454828ce.js";import{Q as _t}from"./QList.a592ce3a.js";import{u as Ct,a as qt,b as xt,c as St,d as zt,e as Tt,s as Lt,g as kt,f as $t,h as Bt,i as ge}from"./use-timeout.3c631f6b.js";import{u as Ot,a as Pt,_ as Et}from"./plugin-vue_export-helper.85c36af5.js";import{c as Vt,b as ee}from"./format.f1843f07.js";import{_ as Qt}from"./Comp.7a3caa78.js";var Oe=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>z("div",{class:l.value},oe(n.default))}}),Pe=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>z("div",{class:l.value,role:"toolbar"},oe(n.default))}});function Ht(){const e=T(!_e.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const Re=typeof ResizeObserver!="undefined",Ee=Re===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ae=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,r,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==t.width||u!==t.height)&&(t={width:c,height:u},n("resize",t))}}const{proxy:h}=R();if(h.trigger=a,Re===!0){let c;const u=i=>{r=h.$el.parentNode,r?(c=new ResizeObserver(a),c.observe(r),s()):i!==!0&&te(()=>{u(!0)})};return U(()=>{u()}),N(()=>{l!==null&&clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),Ce}else{let i=function(){l!==null&&(clearTimeout(l),l=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,pe.passive),u=void 0)},_=function(){i(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",a,pe.passive),s())};const{isHydrated:c}=Ht();let u;return U(()=>{te(()=>{r=h.$el,r&&_()})}),N(i),()=>{if(c.value===!0)return z("object",{class:"q--avoid-card-border",style:Ee.style,tabindex:-1,type:"text/html",data:Ee.url,"aria-hidden":"true",onLoad:_})}}}}),Mt=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=ne(j,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=T(parseInt(e.heightHint,10)),s=T(!0),h=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),u=f(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),i=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),_=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=f(()=>{const v=t.rows.value.top,L={};return v[0]==="l"&&t.left.space===!0&&(L[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(L[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function m(v,L){t.update("header",v,L)}function g(v,L){v.value!==L&&(v.value=L)}function S({height:v}){g(a,v),m("size",v)}function x(v){i.value===!0&&g(s,!0),l("focusin",v)}w(()=>e.modelValue,v=>{m("space",v),g(s,!0),t.animate()}),w(c,v=>{m("offset",v)}),w(()=>e.reveal,v=>{v===!1&&g(s,e.modelValue)}),w(s,v=>{t.animate(),l("reveal",v)}),w(t.scroll,v=>{e.reveal===!0&&g(s,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const v=ot(n.default,[]);return e.elevated===!0&&v.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(z(ae,{debounce:0,onResize:S})),z("header",{class:_.value,style:C.value,onFocusin:x},v)}}});const qe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Dt=Object.keys(qe);qe.all=!0;function Ve(e){const n={};for(const l of Dt)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?qe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Ft=["INPUT","TEXTAREA"];function Qe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Ft.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ye(e,n,l){const r=we(e);let t,a=r.left-n.event.x,s=r.top-n.event.y,h=Math.abs(a),c=Math.abs(s);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",h>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",h>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",h<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",h<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,i=!0,t==="left"||t==="right"?(r.left-=a,h=0,a=0):(r.top-=s,c=0,s=0)}return{synthetic:i,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:h,y:c},offset:{x:a,y:s},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let Rt=0;var be=nt({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&Y.has.touch!==!0)return;function r(a,s){l.mouse===!0&&s===!0?it(a):(l.stop===!0&&he(a),l.prevent===!0&&Le(a))}const t={uid:"qvtp_"+Rt++,handler:n,modifiers:l,direction:Ve(l),noop:Ce,mouseStart(a){Qe(a,t)&&lt(a)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Qe(a,t)){const s=a.target;J(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(Y.is.firefox===!0&&ve(e,!0),t.lastEvt=a,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Le(u),a.cancelBubble===!0&&he(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}he(a)}const{left:h,top:c}=we(a);t.event={x:h,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:c}},move(a){if(t.event===void 0)return;const s=we(a),h=s.left-t.event.x,c=s.top-t.event.y;if(h===0&&c===0)return;t.lastEvt=a;const u=t.event.mouse===!0,i=()=>{r(a,u);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{S(),g()},50):S()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:m,synthetic:g}=ye(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=g===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const _=Math.abs(h),C=Math.abs(c);_!==C&&(t.direction.horizontal===!0&&_>C||t.direction.vertical===!0&&_<C||t.direction.up===!0&&_<C&&c<0||t.direction.down===!0&&_<C&&c>0||t.direction.left===!0&&_>C&&h<0||t.direction.right===!0&&_>C&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(me(t,"temp"),Y.is.firefox===!0&&ve(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ye(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=ye(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=Ve(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),me(n,"main"),me(n,"temp"),Y.is.firefox===!0&&ve(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const He=150;var At=Q({name:"QDrawer",inheritAttrs:!1,props:{...Ct,...Ot,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:r}){const t=R(),{proxy:{$q:a}}=t,s=Pt(e,a),{preventBodyScroll:h}=Tt(),{registerTimeout:c,removeTimeout:u}=xt(),i=ne(j,P);if(i===P)return console.error("QDrawer needs to be child of QLayout"),P;let _,C=null,m;const g=T(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),S=f(()=>e.mini===!0&&g.value!==!0),x=f(()=>S.value===!0?e.miniWidth:e.width),p=T(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),v=f(()=>e.persistent!==!0&&(g.value===!0||We.value===!0));function L(o,b){if(E(),o!==!1&&i.animate(),O(0),g.value===!0){const $=i.instances[K.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),H(1),i.isContainer.value!==!0&&h(!0)}else H(0),o!==!1&&ce(!1);c(()=>{o!==!1&&ce(!0),b!==!0&&l("show",o)},He)}function y(o,b){I(),o!==!1&&i.animate(),H(0),O(A.value*x.value),de(),b!==!0?c(()=>{l("hide",o)},He):u()}const{show:d,hide:q}=St({showing:p,hideOnRouteChange:v,handleShow:L,handleHide:y}),{addToHistory:E,removeFromHistory:I}=zt(p,q,v),D={belowBreakpoint:g,hide:q},V=f(()=>e.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),xe=T(0),W=T(!1),ie=T(!1),Se=T(x.value*A.value),K=f(()=>V.value===!0?"left":"right"),re=f(()=>p.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),ue=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(V.value?"R":"L")!==-1||a.platform.is.ios===!0&&i.isContainer.value===!0),X=f(()=>e.overlay===!1&&p.value===!0&&g.value===!1),We=f(()=>e.overlay===!0&&p.value===!0&&g.value===!1),Ne=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&W.value===!1?" hidden":"")),Ie=f(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),ze=f(()=>V.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Xe=f(()=>V.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ye=f(()=>{const o={};return i.header.space===!0&&ze.value===!1&&(ue.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&Xe.value===!1&&(ue.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),Ue=f(()=>{const o={width:`${x.value}px`,transform:`translateX(${Se.value}px)`};return g.value===!0?o:Object.assign(o,Ye.value)}),je=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=f(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(ue.value===!0||X.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ze.value===!0?" q-drawer--top-padding":""))),Ge=f(()=>{const o=a.lang.rtl===!0?e.side:K.value;return[[be,tt,void 0,{[o]:!0,mouse:!0}]]}),Je=f(()=>{const o=a.lang.rtl===!0?K.value:e.side;return[[be,Te,void 0,{[o]:!0,mouse:!0}]]}),Ze=f(()=>{const o=a.lang.rtl===!0?K.value:e.side;return[[be,Te,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function se(){at(g,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}w(g,o=>{o===!0?(_=p.value,p.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(p.value===!0?(O(0),H(0),de()):d(!1))}),w(()=>e.side,(o,b)=>{i.instances[b]===D&&(i.instances[b]=void 0,i[b].space=!1,i[b].offset=0),i.instances[o]=D,i[o].size=x.value,i[o].space=X.value,i[o].offset=re.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&se()}),w(()=>e.behavior+e.breakpoint,se),w(i.isContainer,o=>{p.value===!0&&h(o!==!0),o===!0&&se()}),w(i.scrollbarWidth,()=>{O(p.value===!0?0:void 0)}),w(re,o=>{M("offset",o)}),w(X,o=>{l("onLayout",o),M("space",o)}),w(V,()=>{O()}),w(x,o=>{O(),fe(e.miniToOverlay,o)}),w(()=>e.miniToOverlay,o=>{fe(o,x.value)}),w(()=>a.lang.rtl,()=>{O()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(et(),i.animate())}),w(S,o=>{l("miniState",o)});function O(o){o===void 0?te(()=>{o=p.value===!0?0:x.value,O(A.value*o)}):(i.isContainer.value===!0&&V.value===!0&&(g.value===!0||Math.abs(o)===x.value)&&(o+=A.value*i.scrollbarWidth.value),Se.value=o)}function H(o){xe.value=o}function ce(o){const b=o===!0?"remove":i.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function et(){C!==null&&clearTimeout(C),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,C=setTimeout(()=>{C=null,ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(o){if(p.value!==!1)return;const b=x.value,$=ee(o.distance.x,0,b);if(o.isFinal===!0){$>=Math.min(75,b)===!0?d():(i.animate(),H(0),O(A.value*b)),W.value=!1;return}O((a.lang.rtl===!0?V.value!==!0:V.value)?Math.max(b-$,0):Math.min(0,$-b)),H(ee($/b,0,1)),o.isFirst===!0&&(W.value=!0)}function Te(o){if(p.value!==!0)return;const b=x.value,$=o.direction===e.side,G=(a.lang.rtl===!0?$!==!0:$)?ee(o.distance.x,0,b):0;if(o.isFinal===!0){Math.abs(G)<Math.min(75,b)===!0?(i.animate(),H(1),O(0)):q(),W.value=!1;return}O(A.value*G),H(ee(1-G/b,0,1)),o.isFirst===!0&&(W.value=!0)}function de(){h(!1),ce(!0)}function M(o,b){i.update(e.side,o,b)}function at(o,b){o.value!==b&&(o.value=b)}function fe(o,b){M("size",o===!0?e.miniWidth:b)}return i.instances[e.side]=D,fe(e.miniToOverlay,x.value),M("space",X.value),M("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),U(()=>{l("onLayout",X.value),l("miniState",S.value),_=e.showIfAbove===!0;const o=()=>{(p.value===!0?L:y)(!1,!0)};if(i.totalWidth.value!==0){te(o);return}m=w(i.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&g.value===!1?d(!1):o()})}),N(()=>{m!==void 0&&m(),C!==null&&(clearTimeout(C),C=null),p.value===!0&&de(),i.instances[e.side]===D&&(i.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(rt(z("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ge.value)),o.push(ke("div",{ref:"backdrop",class:Ne.value,style:Ie.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>Ze.value)));const b=S.value===!0&&n.mini!==void 0,$=[z("div",{...r,key:""+b,class:[je.value,r.class]},b===!0?n.mini():oe(n.default))];return e.elevated===!0&&p.value===!0&&$.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(ke("aside",{ref:"content",class:Ke.value,style:Ue.value},$,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Je.value)),z("div",{class:"q-drawer-container"},o)}}}),Wt=Q({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=R(),r=ne(j,P);if(r===P)return console.error("QPageContainer needs to be child of QLayout"),P;De(ut,!0);const t=f(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>z("div",{class:"q-page-container",style:t.value},oe(n.default))}}),Nt=Q({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=ne(j,P);if(t===P)return console.error("QFooter needs to be child of QLayout"),P;const a=T(parseInt(e.heightHint,10)),s=T(!0),h=T(_e.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||r.platform.is.ios&&t.isContainer.value===!0),u=f(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),i=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return s.value===!0?a.value:0;const d=t.scroll.value.position+u.value+a.value-t.height.value;return d>0?d:0}),_=f(()=>e.modelValue!==!0||c.value===!0&&s.value!==!0),C=f(()=>e.modelValue===!0&&_.value===!0&&e.reveal===!0),m=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(_.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),g=f(()=>{const d=t.rows.value.bottom,q={};return d[0]==="l"&&t.left.space===!0&&(q[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(q[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function S(d,q){t.update("footer",d,q)}function x(d,q){d.value!==q&&(d.value=q)}function p({height:d}){x(a,d),S("size",d)}function v(){if(e.reveal!==!0)return;const{direction:d,position:q,inflectionPoint:E}=t.scroll.value;x(s,d==="up"||q-E<100||t.height.value-u.value-q-a.value<300)}function L(d){C.value===!0&&x(s,!0),l("focusin",d)}w(()=>e.modelValue,d=>{S("space",d),x(s,!0),t.animate()}),w(i,d=>{S("offset",d)}),w(()=>e.reveal,d=>{d===!1&&x(s,e.modelValue)}),w(s,d=>{t.animate(),l("reveal",d)}),w([a,t.scroll,t.height],v),w(()=>r.screen.height,d=>{t.isContainer.value!==!0&&x(h,d)});const y={};return t.instances.footer=y,e.modelValue===!0&&S("size",a.value),S("space",e.modelValue),S("offset",i.value),N(()=>{t.instances.footer===y&&(t.instances.footer=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const d=Fe(n.default,[z(ae,{debounce:0,onResize:p})]);return e.elevated===!0&&d.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),z("footer",{class:m.value,style:g.value,onFocusin:L},d)}}});const{passive:Me}=pe,It=["both","horizontal","vertical"];var Xt=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>It.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Lt},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;w(()=>e.scrollTarget,()=>{c(),h()});function s(){r!==null&&r();const _=Math.max(0,$t(t)),C=Bt(t),m={top:_-l.position.top,left:C-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const g=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:_,left:C},l.directionChanged=l.direction!==g,l.delta=m,l.directionChanged===!0&&(l.direction=g,l.inflectionPoint=l.position),n("scroll",{...l})}function h(){t=kt(a,e.scrollTarget),t.addEventListener("scroll",u,Me),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Me),t=void 0)}function u(_){if(_===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[C,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{m(C),r=null}}}const{proxy:i}=R();return w(()=>i.$q.lang.rtl,s),U(()=>{a=i.$el.parentNode,h()}),N(()=>{r!==null&&r(),c()}),Object.assign(i,{trigger:u,getPosition:()=>l}),Ce}}),Yt=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:r}}=R(),t=T(null),a=T(r.screen.height),s=T(e.container===!0?0:r.screen.width),h=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),u=T(_e.value===!0?0:ge()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=f(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),C=f(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=f(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};h.value=d,e.onScroll!==void 0&&l("scroll",d)}}function S(y){const{height:d,width:q}=y;let E=!1;a.value!==d&&(E=!0,a.value=d,e.onScrollHeight!==void 0&&l("scrollHeight",d),p()),s.value!==q&&(E=!0,s.value=q),E===!0&&e.onResize!==void 0&&l("resize",y)}function x({height:y}){c.value!==y&&(c.value=y,p())}function p(){if(e.container===!0){const y=a.value>c.value?ge():0;u.value!==y&&(u.value=y)}}let v=null;const L={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:u,totalWidth:f(()=>s.value+u.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:h,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,d,q){L[y][d]=q}};if(De(j,L),ge()>0){let q=function(){y=null,d.classList.remove("hide-scrollbar")},E=function(){if(y===null){if(d.scrollHeight>r.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(q,300)},I=function(D){y!==null&&D==="remove"&&(clearTimeout(y),q()),window[`${D}EventListener`]("resize",E)},y=null;const d=document.body;w(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),st(()=>{I("remove")})}return()=>{const y=Fe(n.default,[z(Xt,{onScroll:g}),z(ae,{onResize:S})]),d=z("div",{class:i.value,style:_.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?z("div",{class:"q-layout-container overflow-hidden",ref:t},[z(ae,{onResize:x}),z("div",{class:"absolute-full",style:C.value},[z("div",{class:"scroll",style:m.value},[d])])]):d}}}),Ae="/assets/logoSN.a5a19f9c.png";const le=e=>(bt("data-v-20f015c0"),e=e(),pt(),e),Ut=le(()=>F("img",{src:Ae,alt:"Logo",height:"60"},null,-1)),jt={class:"q-ma-md"},Kt=le(()=>F("img",{src:Qt,alt:""},null,-1)),Gt=le(()=>F("b",null,"Fulano de Tal",-1)),Jt=le(()=>F("img",{class:"q-mt-sm",src:Ae,alt:"Logo",height:"60"},null,-1)),Zt={class:"text-caption text-grey-5"},ea={__name:"MainLayout",setup(e){const n=T(!1);T(getComputedStyle(document.documentElement).getPropertyValue("--logo-url").trim());const l=()=>{n.value=!n.value},r=new Date().getFullYear();return(t,a)=>{const s=ct("router-view");return dt(),ft(Yt,{view:"hHh lpR fFf"},{default:B(()=>[k(Mt,{elevated:"",style:{background:"linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828)"}},{default:B(()=>[k(Pe,null,{default:B(()=>[k(Oe,null,{default:B(()=>[Ut]),_:1}),k(vt,{flat:"",round:"",dense:"",icon:"menu",onClick:l})]),_:1})]),_:1}),k(At,{style:{"font-size":"medium",background:"linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828)",color:"#0086f3"},"show-if-above":"",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=h=>n.value=h),side:"left"},{default:B(()=>[F("div",jt,[k(ht,null,{default:B(()=>[Kt]),_:1}),$e(" Ol\xE1, "),Gt]),k(_t,null,{default:B(()=>[k(wt,{to:"/"},{default:B(()=>[k(Be,{avatar:""},{default:B(()=>[k(mt,{name:"home"})]),_:1}),k(Be,null,{default:B(()=>[$e("Home")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),k(Wt,null,{default:B(()=>[k(s)]),_:1}),k(Nt,{class:"text-center",style:{background:"linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828)"}},{default:B(()=>[k(Pe,null,{default:B(()=>[k(Oe,null,{default:B(()=>[Jt,F("div",Zt,[F("b",null,"Copyrigth\xA9"+gt(yt(r)),1)])]),_:1})]),_:1})]),_:1})]),_:1})}}};var sa=Et(ea,[["__scopeId","data-v-20f015c0"]]);export{sa as default};