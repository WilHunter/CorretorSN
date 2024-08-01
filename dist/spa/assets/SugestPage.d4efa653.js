import{Q as j}from"./QSelect.5cb6918e.js";import{a as I,Q as $}from"./QSpinnerBars.58a4c0ac.js";import{Q as O}from"./QInput.c83e1a6c.js";import{ar as R,r as s,w as U,V as u,ap as r,f as d,aD as F,W as D,m as w,Z as e,Y as n,$ as i,X as z,F as Q,aq as N,a1 as J,a2 as L}from"./index.7c46ebd4.js";import{Q as Y}from"./QSpinnerCube.f2d999e7.js";import{Q as K}from"./QChip.138e8331.js";import{a as W}from"./axios.bf56c3c5.js";import{_ as X}from"./plugin-vue_export-helper.e4a8a083.js";import"./QItem.2b39f5df.js";import"./QItemLabel.4efb691c.js";import"./format.e3e34e84.js";import"./use-prevent-scroll.5fcfcee8.js";const Z="89180c87ecdf4d6aaa7d23a3fd099b16",ee="https://ath-gpt4-o-dev.openai.azure.com/openai/deployments/gpt-4o-std-240513/chat/completions?api-version=2024-02-15-preview",ae=R("sugestaoStore",{state:()=>({sugestao:{},errorMessage:"",error:!1}),actions:{async gerarSugestao(m,E,_,v){var g,f;console.log("Par\xE2metros recebidos:",m,E,_,v);try{const c={messages:[{role:"user",content:`Sugira uma aula para a s\xE9rie ${m} na disciplina de ${E}. A aula deve ser ${_} e o tema \xE9 "${v}".
              Nos exemplos pr\xE1ticos retorne 5 exerc\xEDcios diferentes, com resolu\xE7\xE3o para serem aplicados em sala;
              Retorne os c\xF3digos das habilidades BNCC envolvidas na aula sugerida;
              Na atividade pr\xE1tica, retornar uma lista de 10 exerc\xEDcios com gabarito e resolu\xE7\xE3o;
              Retorne somente o json, sem demais coment\xE1rios, com a seguinte estrutura:
              {
                "titulo_aula": "",
                "habilidades_bncc":[],
                "objetivo": [
                ],
                "conteudo": [
                ],
                "metodologia": [
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ],
                    "exercicios": [
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      }
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ],
                    "exercicios": [
                      {
                        "exercicio": "",
                        "resolucao": ""
                      }
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ]
                  }
                ],
                "recursos": [
                ],
                "avaliacao": [
                ],
                "plano_aula": {
                  "inicio_aula": [
                  ],
                  "desenvolvimento": [
                  ],
                  "encerramento": [
                  ]
                }
              }`}],max_tokens:4e3},p=(await W.post(ee,c,{headers:{"Content-Type":"application/json","api-key":Z}})).data.choices[0].message.content;let b;try{const x=p.replace(/```json/g,"").replace(/```/g,"").trim();b=JSON.parse(x)}catch(x){throw console.error("Erro ao analisar JSON:",x),new Error("A resposta da API n\xE3o \xE9 um JSON v\xE1lido: "+p)}this.sugestao=b,console.log("Sugest\xE3o de aula:",this.sugestao)}catch(c){console.error("Erro na requisi\xE7\xE3o da API:",c),this.errorMessage=`C\xF3digo: ${((g=c.response)==null?void 0:g.status)||""}
Mensagem: ${((f=c.response)==null?void 0:f.statusText)||c.message}`,this.error=!0}}}});const a=m=>(J("data-v-2f2c0838"),m=m(),L(),m),oe={class:"sugestao-page"},le=a(()=>e("h3",null,"Gerador de Sugest\xF5es de Aula",-1)),se=a(()=>e("br",null,null,-1)),te=a(()=>e("span",null,"Selecione a s\xE9rie:",-1)),ne={key:0},ie=a(()=>e("span",null,"Tipo de aula:",-1)),ue=a(()=>e("span",null,"Tema da aula:",-1)),re={key:2,class:"text-center"},ce={key:0},de=a(()=>e("div",{class:"text-h4"},"Aguarde mais um pouco, est\xE1 quase pronto",-1)),me={key:1},ve=a(()=>e("div",{class:"text-h4"},"Gerando a sugest\xE3o...",-1)),pe={key:3,class:"sugestao-result"},be=a(()=>e("h4",null,"Sugest\xE3o de Aula",-1)),_e=a(()=>e("b",null,"T\xEDtulo da Aula:",-1)),ge={class:"q-mb-md"},he=a(()=>e("span",null,[e("b",null,"Habilidades BNCC:")],-1)),Ee=a(()=>e("b",null,"Objetivo:",-1)),fe=a(()=>e("b",null,"Conte\xFAdo:",-1)),xe=a(()=>e("b",null,"Tipo:",-1)),Fe=a(()=>e("b",null,"Dura\xE7\xE3o:",-1)),Ae=a(()=>e("b",null,"Descri\xE7\xE3o:",-1)),ke={key:0},Se=a(()=>e("b",null,"Exerc\xEDcio:",-1)),Me=a(()=>e("b",null,"Resolu\xE7\xE3o:",-1)),ye=a(()=>e("b",null,"Recursos:",-1)),Ce=a(()=>e("b",null,"Avalia\xE7\xE3o:",-1)),Ve=a(()=>e("h5",null,"Plano de Aula",-1)),Pe=a(()=>e("b",null,"In\xEDcio da Aula:",-1)),qe=a(()=>e("b",null,"Desenvolvimento:",-1)),je=a(()=>e("b",null,"Encerramento:",-1)),Ie={__name:"SugestPage",setup(m){const E=ae(),_=s(null),v=s(null),g=s(!1),f=s(!0),c=s(""),h=s(!1),p=s(!1),b=s([]),x=[{label:"1\xBA Ano do Ensino Fundamental",value:"1EF"},{label:"2\xBA Ano do Ensino Fundamental",value:"2EF"},{label:"3\xBA Ano do Ensino Fundamental",value:"3EF"},{label:"4\xBA Ano do Ensino Fundamental",value:"4EF"},{label:"5\xBA Ano do Ensino Fundamental",value:"5EF"},{label:"6\xBA Ano do Ensino Fundamental",value:"6EF"},{label:"7\xBA Ano do Ensino Fundamental",value:"7EF"},{label:"8\xBA Ano do Ensino Fundamental",value:"8EF"},{label:"9\xBA Ano do Ensino Fundamental",value:"9EF"},{label:"1\xBA Ano do Ensino M\xE9dio",value:"1EM"},{label:"2\xBA Ano do Ensino M\xE9dio",value:"2EM"},{label:"3\xBA Ano do Ensino M\xE9dio",value:"3EM"}],B=t=>{v.value=null;let o=[];switch(t.value){case"1EF":o=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"}];break;case"2EF":o=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"}];break;case"3EF":case"4EF":case"5EF":o=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"}];break;case"6EF":case"7EF":case"8EF":case"9EF":o=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"},{label:"Artes",value:"Artes"},{label:"Educa\xE7\xE3o F\xEDsica",value:"Educa\xE7\xE3o F\xEDsica"}];break;case"1EM":case"2EM":case"3EM":o=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"F\xEDsica",value:"F\xEDsica"},{label:"Qu\xEDmica",value:"Qu\xEDmica"},{label:"Biologia",value:"Biologia"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"},{label:"Filosofia",value:"Filosofia"},{label:"Sociologia",value:"Sociologia"},{label:"Ingl\xEAs",value:"Ingl\xEAs"},{label:"Espanhol",value:"Espanhol"}];break;default:o=[]}b.value=o},G=async()=>{const t=_.value||"",o=v.value||"",l=g.value?"externa":"interna";h.value=!0,p.value=!1,setTimeout(()=>{h.value&&(p.value=!0)},5e3),await E.gerarSugestao(t,o,l,c.value),h.value=!1,p.value=!1},k=s(""),S=s([]),M=s([]),y=s([]),C=s([]),V=s([]),P=s([]),A=s({inicioAula:[],desenvolvimento:[],encerramento:[]});return U(()=>E.sugestao,t=>{t&&(k.value=t.titulo_aula,S.value=t.habilidades_bncc,M.value=t.objetivo,y.value=t.conteudo,C.value=t.metodologia,V.value=t.recursos,P.value=t.avaliacao,A.value=t.plano_aula)}),(t,o)=>(u(),r("div",oe,[le,se,te,d(j,{modelValue:_.value,"onUpdate:modelValue":[o[0]||(o[0]=l=>_.value=l),B],options:x,label:"S\xE9rie",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:""},null,8,["modelValue"]),b.value.length>0?(u(),r("span",ne,"Selecione a mat\xE9ria:")):F("",!0),b.value.length>0?(u(),D(j,{key:1,modelValue:v.value,"onUpdate:modelValue":o[1]||(o[1]=l=>v.value=l),options:b.value,label:"Mat\xE9ria",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:""},null,8,["modelValue","options"])):F("",!0),ie,d(I,{modelValue:g.value,"onUpdate:modelValue":o[2]||(o[2]=l=>g.value=l),label:"Externa",class:"q-mt-md q-mb-xl"},null,8,["modelValue"]),d(I,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=l=>f.value=l),label:"Interna",class:"q-mt-md q-mb-xl"},null,8,["modelValue"]),ue,d(O,{modelValue:c.value,"onUpdate:modelValue":o[4]||(o[4]=l=>c.value=l),label:"Tema",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:""},null,8,["modelValue"]),d(w,{dense:"",class:"q-mb-xl",style:{width:"6em"},onClick:G,label:"Gerar",color:"primary"}),h.value?(u(),r("div",re,[p.value?(u(),r("div",ce,[de,d($,{class:"q-mt-md",size:"3em",color:"indigo"})])):(u(),r("div",me,[ve,d(Y,{class:"q-mt-md",size:"3em",color:"indigo"})]))])):F("",!0),!h.value&&k.value?(u(),r("div",pe,[be,e("p",null,[_e,n(" "+i(k.value),1)]),e("div",ge,[he,d(K,{class:"q-ml-sm",dense:"",icon:"bookmark"},{default:z(()=>[n(i(S.value.join(", ")),1)]),_:1})]),e("p",null,[Ee,n(" "+i(M.value.join(", ")),1)]),e("p",null,[fe,n(" "+i(y.value.join(", ")),1)]),(u(!0),r(Q,null,N(C.value,(l,T)=>(u(),r("div",{key:T},[e("p",null,[xe,n(" "+i(l.tipo),1)]),e("p",null,[Fe,n(" "+i(l.duracao)+" minutos",1)]),e("p",null,[Ae,n(" "+i(l.descricao.join(", ")),1)]),l.exercicios&&l.exercicios.length>0?(u(),r("ul",ke,[(u(!0),r(Q,null,N(l.exercicios,(q,H)=>(u(),r("li",{key:H},[e("p",null,[Se,n(" "+i(q.exercicio),1)]),e("p",null,[Me,n(" "+i(q.resolucao),1)])]))),128))])):F("",!0)]))),128)),e("p",null,[ye,n(" "+i(V.value.join(", ")),1)]),e("p",null,[Ce,n(" "+i(P.value.join(", ")),1)]),Ve,e("p",null,[Pe,n(" "+i(A.value.inicio_aula.join(", ")),1)]),e("p",null,[qe,n(" "+i(A.value.desenvolvimento.join(", ")),1)]),e("p",null,[je,n(" "+i(A.value.encerramento.join(", ")),1)])])):F("",!0)]))}};var ze=X(Ie,[["__scopeId","data-v-2f2c0838"]]);export{ze as default};
