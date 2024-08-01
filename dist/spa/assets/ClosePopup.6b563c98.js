import{h as t,k as C,as as P,at as w,r as D,c as d,Q as K,R as M,l as R,g as x,L as g,al as q,C as T,a5 as j}from"./index.7c46ebd4.js";import{a as S,b as I}from"./plugin-vue_export-helper.e4a8a083.js";import{o as A,d as E}from"./QSpinnerCube.f2d999e7.js";import{d as O,h as $}from"./QInput.c83e1a6c.js";import{a as F}from"./QSpinnerBars.58a4c0ac.js";import{Q as N}from"./QCardActions.b43c9cb6.js";import{v as U,w as G}from"./use-prevent-scroll.5fcfcee8.js";const H=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var J=C({name:"QRadio",props:{...S,...P,...O,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:l,emit:n}){const{proxy:r}=x(),u=I(e,r.$q),b=w(e,A),c=D(null),{refocusTargetEl:v,refocusTarget:f}=E(e,c),i=d(()=>q(e.modelValue)===q(e.val)),a=d(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(u.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),m=d(()=>{const o=e.color!==void 0&&(e.keepColor===!0||i.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${i.value===!0?"truthy":"falsy"}${o}`}),s=d(()=>(i.value===!0?e.checkedIcon:e.uncheckedIcon)||null),L=d(()=>e.disable===!0?-1:e.tabindex||0),B=d(()=>{const o={type:"radio"};return e.name!==void 0&&Object.assign(o,{".checked":i.value===!0,"^checked":i.value===!0?"checked":void 0,name:e.name,value:e.val}),o}),Q=$(B);function h(o){o!==void 0&&(g(o),f(o)),e.disable!==!0&&i.value!==!0&&n("update:modelValue",e.val,o)}function p(o){(o.keyCode===13||o.keyCode===32)&&g(o)}function z(o){(o.keyCode===13||o.keyCode===32)&&h(o)}return Object.assign(r,{set:h}),()=>{const o=s.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(K,{class:"q-radio__icon",name:s.value})])]:[H];e.disable!==!0&&Q(o,"unshift"," q-radio__native q-ma-none q-pa-none");const k=[t("div",{class:m.value,style:b.value,"aria-hidden":"true"},o)];v.value!==null&&k.push(v.value);const y=e.label!==void 0?M(l.default,[e.label]):R(l.default);return y!==void 0&&k.push(t("div",{class:"q-radio__label q-anchor--skip"},y)),t("div",{ref:c,class:a.value,tabindex:L.value,role:"radio","aria-label":e.label,"aria-checked":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:h,onKeydown:p,onKeyup:z},k)}}});const V={radio:J,checkbox:F,toggle:N},W=Object.keys(V);var ne=C({name:"QOptionGroup",props:{...S,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(l=>"value"in l&&"label"in l)},name:String,type:{type:String,default:"radio",validator:e=>W.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:l,slots:n}){const{proxy:{$q:r}}=x(),u=Array.isArray(e.modelValue);e.type==="radio"?u===!0&&console.error("q-option-group: model should not be array"):u===!1&&console.error("q-option-group: model should be array in your case");const b=I(e,r),c=d(()=>V[e.type]),v=d(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),f=d(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function i(a){l("update:modelValue",a)}return()=>t("div",{class:v.value,...f.value},e.options.map((a,m)=>{const s=n["label-"+m]!==void 0?()=>n["label-"+m](a):n.label!==void 0?()=>n.label(a):void 0;return t("div",[t(c.value,{modelValue:e.modelValue,val:a.value,name:a.name===void 0?e.name:a.name,disable:e.disable||a.disable,label:s===void 0?a.label:null,leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark||b.value,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor,"onUpdate:modelValue":i},s)])}))}});function _(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var te=T({name:"close-popup",beforeMount(e,{value:l}){const n={depth:_(l),handler(r){n.depth!==0&&setTimeout(()=>{const u=U(e);u!==void 0&&G(u,r,n.depth)})},handlerKey(r){j(r,13)===!0&&n.handler(r)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:l,oldValue:n}){l!==n&&(e.__qclosepopup.depth=_(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});export{te as C,ne as Q};