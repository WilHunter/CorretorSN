import{Q as S,a as U}from"./QCardActions.52b7b8b8.js";import{Q as b}from"./QSelect.15477bdc.js";import{Q as x}from"./QInput.c3b6b411.js";import{c as w,V as d,W as h,X as r,f as l,Z as o,a0 as a,m,aC as N,ap as n,Y as u,$ as i,F as A,aq as E,aD as p,a1 as z,a2 as B}from"./index.31ee3d3b.js";import{Q as D}from"./QForm.1e00268e.js";import{Q as f,a as v}from"./QCard.427c9c87.js";import{u as M,_ as G,Q as k}from"./Avatar.5132d9a6.js";import{Q as O}from"./QSpinnerComment.bbc57e5e.js";import{Q as $,a as q}from"./QSpinnerCube.d86f3381.js";import{Q as L}from"./QPage.77629d2f.js";import{_ as W}from"./plugin-vue_export-helper.b4be3b85.js";import"./QChip.604d90e6.js";import"./QItem.1809a241.js";import"./QItemLabel.041cfbbc.js";import"./format.7e1e4078.js";import"./use-prevent-scroll.2c114674.js";import"./axios.bf56c3c5.js";import"./Comp.7a3caa78.js";const c=_=>(z("data-v-d0a5c82e"),_=_(),B(),_),X=c(()=>o("h2",{class:"text-center q-pb-xl"},"Reda\xE7\xE3o",-1)),Y=c(()=>o("span",{class:"text-center q-pb-xl"}," Crie sua ou importe o pdf com seu para avaliar sua reda\xE7\xE3o ",-1)),Z={class:"form-container"},j={class:"file-upload-container q-mt-md"},H={key:0,class:"result-container q-mt-xl"},J=c(()=>o("h2",{class:"text-center"},"Resultado da Avalia\xE7\xE3o",-1)),K={key:0},ee={class:"text-center"},ae={class:"card-results q-ma-xl"},oe={class:"text-caption"},le={style:{color:"#9dd0fae5"}},te={class:"final-score"},se={style:{width:"80%"}},re={key:0},de={key:1,class:"text-center q-pa-md",style:{color:"#9dd0fae5"}},ie={key:1},ne={class:"text-center q-pa-md"},ue={class:"q-pa-md"},ce=c(()=>o("div",{class:"q-mb-xl"},[u(" Identificamos que o texto que voc\xEA entregou tem sinais de pl\xE1gio "),o("br"),u(" Aproveite o tempo de estudo para criar um conte\xFAdo original "),o("br"),u(" Com foco e determina\xE7\xE3o, voc\xEA certamente alcan\xE7ar\xE1 bons resultados! ")],-1)),me=c(()=>o("div",{class:"text-h4"},"Corrigindo...",-1)),pe={key:1,class:"error-modal"},_e=c(()=>o("div",{class:"text-h6"},"Erro",-1)),ve={__name:"IndexPage",setup(_){const e=M(),C=[{label:"ENEM",value:"ENEM"},{label:"Fuvest",value:"Fuvest"},{label:"ITA",value:"ITA"},{label:"Unicamp",value:"Unicamp"}],V=[{label:"Disserta\xE7\xE3o",value:"Disserta\xE7\xE3o"},{label:"Carta aberta",value:"Carta aberta"},{label:"Resenhas",value:"Resenhas"},{label:"Cr\xF4nica reflexiva",value:"Cr\xF4nica reflexiva"},{label:"Poema",value:"Poema"}],y=g=>{e.handleFileUpload(g)},Q=()=>{e.gerarTema()},T=()=>{e.submitRedacao()},F=()=>{e.refazer()},I=()=>{e.toggleCheckPlagiarism()},P=()=>{e.salvarResultados()},R=w(()=>e.isFormValid);return(g,s)=>(d(),h(L,{padding:"",class:"register-page"},{default:r(()=>[l(G,{class:"q-pa-xl",style:{width:"100%"}}),X,Y,o("div",null,[l(S,{"model-value":a(e).checkPlagiarism,"checked-icon":"check","unchecked-icon":"clear",color:"red",label:"Verificar Pl\xE1gio e Conte\xFAdo Gerado por IA",class:"q-mt-md q-mb-xl","onUpdate:modelValue":I},null,8,["model-value"])]),o("div",Z,[l(b,{modelValue:a(e).avaliacaoTipo,"onUpdate:modelValue":s[0]||(s[0]=t=>a(e).avaliacaoTipo=t),options:C,label:"Tipo de Avalia\xE7\xE3o",outlined:"",dark:"",class:"q-ma-md","emit-value":""},null,8,["modelValue"]),l(b,{modelValue:a(e).generoTextual,"onUpdate:modelValue":s[1]||(s[1]=t=>a(e).generoTextual=t),options:V,label:"G\xEAnero Textual",outlined:"",dark:"",class:"q-ma-md","emit-value":""},null,8,["modelValue"]),l(D,{class:"q-pa-md",onSubmit:N(T,["prevent"])},{default:r(()=>[l(x,{dark:"",modelValue:a(e).tema,"onUpdate:modelValue":s[2]||(s[2]=t=>a(e).tema=t),label:"Tema da Reda\xE7\xE3o",outlined:"",class:"q-mt-md",rules:[t=>!!t||"Preenchimento obrigat\xF3rio"],required:""},null,8,["modelValue","rules"]),l(m,{label:"Gerar Tema",color:"secondary",outline:"",class:"q-mt-md full-width",onClick:Q}),l(x,{dark:"",modelValue:a(e).texto,"onUpdate:modelValue":s[3]||(s[3]=t=>a(e).texto=t),label:"Texto da Reda\xE7\xE3o",type:"textarea",outlined:"",class:"q-mt-md",rows:"20",rules:[t=>!!t||"Preenchimento obrigat\xF3rio"],required:""},null,8,["modelValue","rules"]),o("div",j,[o("input",{type:"file",accept:"application/pdf",onChange:y},null,32)]),l(m,{type:"submit",label:"avaliar",color:"primary",outline:"",class:"q-mt-lg full-width",disable:!R.value},null,8,["disable"]),l(m,{label:"Refazer",color:"primary",outline:"",class:"q-mt-md full-width",onClick:F})]),_:1})]),a(e).avaliacaoFeita?(d(),n("div",H,[J,a(e).plagiado?(d(),n("div",ie,[o("div",ne,[o("div",ue,[l(O,{color:"primary",size:"6em"})]),ce])])):(d(),n("div",K,[o("div",ee,[o("span",null,[u(" Sua reda\xE7\xE3o foi avaliada de acordo com as regras "),o("b",null,i(a(e).avaliacaoTipo),1),u(" e no g\xEAnero "),o("b",null,i(a(e).generoTextual),1),u(". ")])]),o("div",ae,[a(e).resultado&&a(e).resultado.competencias?(d(!0),n(A,{key:0},E(a(e).resultado.competencias,t=>(d(),h(f,{key:t.nomeCompetencia,bordered:"",style:{"background-color":"transparent"},class:"q-mr-sm"},{default:r(()=>[l(v,null,{default:r(()=>[o("div",null,[o("b",null,i(t.nomeCompetencia),1)]),o("div",oe,"Nota: "+i(t.notaCompetencia),1)]),_:2},1024),l(k,{dark:"",inset:""}),l(v,null,{default:r(()=>[o("div",le,i(t.comentCompetencia),1)]),_:2},1024)]),_:2},1024))),128)):p("",!0)]),o("div",te,[o("div",se,[a(e).resultado?(d(),n("h3",re,"Nota Final: "+i(a(e).resultado.notaFinal),1)):p("",!0),l(k,{dark:"",inset:""}),a(e).resultado?(d(),n("div",de,[o("span",null,i(a(e).resultado.comentarioFinal),1)])):p("",!0)]),l(m,{label:"salvar",color:"primary",outline:"",class:"q-mt-lg q-mb-lg",onClick:P})])]))])):p("",!0),l(q,{modelValue:a(e).loading,"onUpdate:modelValue":s[4]||(s[4]=t=>a(e).loading=t),style:{"text-align":"center"}},{default:r(()=>[l(f,{flat:"",dark:"",style:{"background-color":"transparent"}},{default:r(()=>[l(v,null,{default:r(()=>[me,l($,{class:"q-mt-md",size:"3em",color:"indigo"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(e).error?(d(),n("div",pe,[l(q,{modelValue:a(e).error,"onUpdate:modelValue":s[6]||(s[6]=t=>a(e).error=t)},{default:r(()=>[l(f,null,{default:r(()=>[l(v,null,{default:r(()=>[_e,o("p",null,i(a(e).errorMessage),1)]),_:1}),l(U,{align:"right"},{default:r(()=>[l(m,{flat:"",label:"Ok",onClick:s[5]||(s[5]=t=>a(e).error=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):p("",!0)]),_:1}))}};var we=W(ve,[["__scopeId","data-v-d0a5c82e"]]);export{we as default};
