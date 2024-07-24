import{u as w,a as P}from"./plugin-vue_export-helper.85c36af5.js";import{k as D,c,h as b,g as E,aq as L,r as s,ar as J,as as K,K as U,Y as y,at as Y,au as W,I as G,Q as H,ag as X,f as R,S as A,W as Z,V as N}from"./index.712e047d.js";import{a as F}from"./axios.bf56c3c5.js";import{_ as ee}from"./Comp.7a3caa78.js";const ae={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},k={xs:2,sm:4,md:8,lg:16,xl:24};var me=D({name:"QSeparator",props:{...w,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const v=E(),r=P(e,v.proxy.$q),m=c(()=>e.vertical===!0?"vertical":"horizontal"),n=c(()=>` q-separator--${m.value}`),C=c(()=>e.inset!==!1?`${n.value}-${ae[e.inset]}`:""),f=c(()=>`q-separator${n.value}${C.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?" q-separator--dark":"")),u=c(()=>{const i={};if(e.size!==void 0&&(i[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const l=e.spaced===!0?`${k.md}px`:e.spaced in k?`${k[e.spaced]}px`:e.spaced,g=e.vertical===!0?["Left","Right"]:["Top","Bottom"];i[`margin${g[0]}`]=i[`margin${g[1]}`]=l}return i});return()=>b("hr",{class:f.value,style:u.value,"aria-orientation":m.value})}});const B="89180c87ecdf4d6aaa7d23a3fd099b16",I="https://ath-gpt4-o-dev.openai.azure.com/openai/deployments/gpt-4o-std-240513/chat/completions?api-version=2024-02-15-preview",ge=L("redacaoStore",()=>{const e=s(""),v=s(""),r=s(""),m=s(""),n=s(null),C=s(null),f=s(!1),u=s(!1),i=s(""),l=s(!1),g=s(!1),p=s(!1),q=s([]),_=s([{id:1,tema:"Impacto da Tecnologia na Educa\xE7\xE3o",tipo:"Disserta\xE7\xE3o",notaFinal:95,plagiado:!1,avaliacaoTipo:"ENEM"},{id:2,tema:"A Crise Clim\xE1tica e Suas Consequ\xEAncias",tipo:"Carta aberta",notaFinal:88,plagiado:!1,avaliacaoTipo:"Fuvest"},{id:3,tema:"O Papel da Arte na Sociedade",tipo:"Cr\xF4nica reflexiva",notaFinal:78,plagiado:!0,avaliacaoTipo:"ITA"},{id:4,tema:"Desafios da Sa\xFAde P\xFAblica no Brasil",tipo:"Resenha",notaFinal:92,plagiado:!1,avaliacaoTipo:"Unicamp"},{id:5,tema:"Inclus\xE3o Social e Diversidade Cultural",tipo:"Poema",notaFinal:85,plagiado:!1,avaliacaoTipo:"ENEM"},{id:6,tema:"O Papel da Arte na Sociedade",tipo:"Cr\xF4nica reflexiva",notaFinal:78,plagiado:!0,avaliacaoTipo:"ITA"},{id:7,tema:"Desafios da Sa\xFAde P\xFAblica no Brasil",tipo:"Resenha",notaFinal:92,plagiado:!1,avaliacaoTipo:"Unicamp"},{id:8,tema:"Impacto da Tecnologia na Educa\xE7\xE3o",tipo:"Disserta\xE7\xE3o",notaFinal:95,plagiado:!1,avaliacaoTipo:"ENEM"},{id:9,tema:"A Crise Clim\xE1tica e Suas Consequ\xEAncias",tipo:"Carta aberta",notaFinal:88,plagiado:!1,avaliacaoTipo:"Fuvest"},{id:10,tema:"Impacto da Tecnologia na Educa\xE7\xE3o",tipo:"Disserta\xE7\xE3o",notaFinal:95,plagiado:!1,avaliacaoTipo:"ENEM"},{id:11,tema:"A Crise Clim\xE1tica e Suas Consequ\xEAncias",tipo:"Carta aberta",notaFinal:88,plagiado:!1,avaliacaoTipo:"Fuvest"}]),x=()=>{g.value=!g.value,n.value=null,l.value=null,p.value=!1},T=o=>{C.value=o.target.files[0]},a=c(()=>e.value&&v.value),S=async()=>{var o,d;f.value=!0,u.value=!1,n.value=null,l.value=null,p.value=!1;try{g.value&&await z(),l.value||await O(),p.value=!0}catch(t){i.value=`C\xF3digo: ${((o=t.response)==null?void 0:o.status)||""}
Mensagem: ${((d=t.response)==null?void 0:d.statusText)||t.message}`,u.value=!0}finally{f.value=!1}},z=async()=>{var o,d;try{const h=(await F.post(I,{messages:[{role:"user",content:`Verifique se a reda\xE7\xE3o abaixo cont\xE9m pl\xE1gio ou foi gerado por IA, se houver pl\xE1gio ou foi gerado por IA, inicie a resposta com o texto (conte\xFAdo plagiado):
Tema: ${e.value}
Texto: ${v.value}`}]},{headers:{"Content-Type":"application/json","api-key":B}})).data.choices[0].message.content.toLowerCase();l.value=h.includes("conte\xFAdo plagiado"),console.log(h)}catch(t){i.value=`C\xF3digo: ${((o=t.response)==null?void 0:o.status)||""}
Mensagem: ${((d=t.response)==null?void 0:d.statusText)||t.message}`,u.value=!0}},O=async()=>{var d,t;const o={messages:[{role:"user",content:`Considerando os crit\xE9rios de avalia\xE7\xE3o de reda\xE7\xF5es adotados pelo ${r.value}, qual nota seria atribu\xEDda para a reda\xE7\xE3o abaixo?
Comente cada um dos itens avaliados e qual a nota para cada item.
Tema: ${e.value}
Texto: ${v.value}
Responda com um JSON v\xE1lido com a seguintes campos resultado: competencias: [{nomeCompetencia:"",comentCompetencia:"",notaCompetencia:""}], notaFinal:"", comentarioFinal:""`}]};console.log("Request Data: ",o);try{const $=(await F.post(I,o,{headers:{"Content-Type":"application/json","api-key":B}})).data.choices[0].message.content;console.log($);const Q=j($);n.value=Q}catch(h){i.value=`C\xF3digo: ${((d=h.response)==null?void 0:d.status)||""}
Mensagem: ${((t=h.response)==null?void 0:t.statusText)||h.message}`,u.value=!0}},j=o=>{console.log("Raw content:",o);const d=o.replace(/```json/g,"").replace(/```/g,"").trim();console.log("Cleaned JSON string:",d);try{const t=JSON.parse(d);return console.log("Parsed JSON object:",t),t.resultado}catch(t){return console.error("JSON parse error:",t),u.value=!0,i.value="Erro ao parsear a resposta da API.",null}},M=()=>{if(n.value||l.value){const o={id:new Date().getTime(),tema:e.value,texto:v.value,avaliacaoTipo:r.value,generoTextual:m.value,resultado:n.value,plagiado:l.value};q.value.push(o),V()}else i.value="A avalia\xE7\xE3o deve ser feita antes de salvar.",u.value=!0},V=()=>{alert("Reda\xE7\xE3o salva com sucesso!")};return{tema:e,texto:v,avaliacaoTipo:r,generoTextual:m,resultado:n,arquivo:C,loading:f,error:u,errorMessage:i,plagiado:l,checkPlagiarism:g,avaliacaoFeita:p,savedResults:q,redacoes:_,toggleCheckPlagiarism:x,handleFileUpload:T,isFormValid:a,submitRedacao:S,salvarResultados:M,refazer:()=>{n.value=null,l.value=null,p.value=!1,g.value=!1},loadSavedResults:()=>{}}}),te={xs:8,sm:10,md:14,lg:20,xl:24};var oe=D({name:"QChip",props:{...w,...J,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:v,emit:r}){const{proxy:{$q:m}}=E(),n=P(e,m),C=K(e,te),f=c(()=>e.selected===!0||e.icon!==void 0),u=c(()=>e.selected===!0?e.iconSelected||m.iconSet.chip.selected:e.icon),i=c(()=>e.iconRemove||m.iconSet.chip.remove),l=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),g=c(()=>{const a=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(a?` text-${a} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(l.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(n.value===!0?" q-chip--dark q-dark":"")}),p=c(()=>{const a=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},S={...a,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||m.lang.label.remove};return{chip:a,remove:S}});function q(a){a.keyCode===13&&_(a)}function _(a){e.disable||(r("update:selected",!e.selected),r("click",a))}function x(a){(a.keyCode===void 0||a.keyCode===13)&&(G(a),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function T(){const a=[];l.value===!0&&a.push(b("div",{class:"q-focus-helper"})),f.value===!0&&a.push(b(y,{class:"q-chip__icon q-chip__icon--left",name:u.value}));const S=e.label!==void 0?[b("div",{class:"ellipsis"},[e.label])]:void 0;return a.push(b("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Y(v.default,S))),e.iconRight&&a.push(b(y,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&a.push(b(y,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:i.value,...p.value.remove,onClick:x,onKeyup:x})),a}return()=>{if(e.modelValue===!1)return;const a={class:g.value,style:C.value};return l.value===!0&&Object.assign(a,p.value.chip,{onClick:_,onKeyup:q}),U("div",a,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[W,e.ripple]])}}});const le={class:"q-gutter-sm"},se=N("img",{src:ee,alt:""},null,-1),ie=N("b",null,"Fulana de Tal",-1),pe=Object.assign({name:"Avatar"},{__name:"Avatar",setup(e){return(v,r)=>(H(),X("div",le,[R(oe,{size:"1em",style:{color:"#0086f3",opacity:"0.85","background-color":"transparent"}},{default:A(()=>[R(Z,null,{default:A(()=>[se]),_:1}),ie]),_:1})]))}});export{me as Q,pe as _,oe as a,ge as u};