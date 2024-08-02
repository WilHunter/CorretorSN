import{Q as j}from"./QSelect.15477bdc.js";import{a as I,Q as $}from"./QSpinnerBars.92bd00f1.js";import{Q as O}from"./QInput.c3b6b411.js";import{ar as U,r as s,w as D,V as u,ap as c,f as d,aD as A,W as z,Z as e,m as Q,Y as n,$ as i,X as J,F as N,aq as B,a1 as L,a2 as Y}from"./index.31ee3d3b.js";import{Q as K}from"./QSpinnerCube.d86f3381.js";import{Q as W}from"./QChip.604d90e6.js";import{a as X}from"./axios.bf56c3c5.js";import{_ as Z}from"./plugin-vue_export-helper.b4be3b85.js";import"./QItem.1809a241.js";import"./QItemLabel.041cfbbc.js";import"./format.7e1e4078.js";import"./use-prevent-scroll.2c114674.js";const ee="89180c87ecdf4d6aaa7d23a3fd099b16",ae="https://ath-gpt4-o-dev.openai.azure.com/openai/deployments/gpt-4o-std-240513/chat/completions?api-version=2024-02-15-preview",le=U("sugestaoStore",{state:()=>({sugestao:{},errorMessage:"",error:!1}),actions:{async gerarSugestao(v,f,p,m){var b,h;console.log("Par\xE2metros recebidos:",v,f,p,m);try{const r={messages:[{role:"user",content:`Sugira uma aula para a s\xE9rie ${v} na disciplina de ${f}. A aula deve ser ${p} e o tema \xE9 "${m}".
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
              }`}],max_tokens:4e3},_=(await X.post(ae,r,{headers:{"Content-Type":"application/json","api-key":ee}})).data.choices[0].message.content;let g;try{const x=_.replace(/```json/g,"").replace(/```/g,"").trim();g=JSON.parse(x)}catch(x){throw console.error("Erro ao analisar JSON:",x),new Error("A resposta da API n\xE3o \xE9 um JSON v\xE1lido: "+_)}this.sugestao=g,console.log("Sugest\xE3o de aula:",this.sugestao)}catch(r){console.error("Erro na requisi\xE7\xE3o da API:",r),this.errorMessage=`C\xF3digo: ${((b=r.response)==null?void 0:b.status)||""}
Mensagem: ${((h=r.response)==null?void 0:h.statusText)||r.message}`,this.error=!0}}}});const a=v=>(L("data-v-a479aee2"),v=v(),Y(),v),oe={class:"sugestao-page"},se=a(()=>e("h3",null,"Gerador de Sugest\xF5es de Aula",-1)),te=a(()=>e("br",null,null,-1)),ne=a(()=>e("span",null,"Selecione a s\xE9rie:",-1)),ie={key:0},ue=a(()=>e("span",null,"Tipo de aula:",-1)),re=a(()=>e("span",null,"Tema da aula:",-1)),ce={class:"button-container"},de={key:2,class:"text-center"},me={key:0},ve=a(()=>e("div",{class:"text-h4"},"Aguarde mais um pouco, est\xE1 quase pronto",-1)),pe={key:1},be=a(()=>e("div",{class:"text-h4"},"Gerando a sugest\xE3o...",-1)),_e={key:3,class:"sugestao-result"},ge=a(()=>e("h3",null,"Sugest\xE3o de Aula",-1)),he=a(()=>e("b",null,"T\xEDtulo da Aula:",-1)),Ee={class:"q-mb-md"},fe=a(()=>e("span",null,[e("b",null,"Habilidades BNCC:")],-1)),xe=a(()=>e("b",null,"Objetivo:",-1)),Fe=a(()=>e("b",null,"Conte\xFAdo:",-1)),Ae=a(()=>e("b",null,"Tipo:",-1)),ke=a(()=>e("b",null,"Dura\xE7\xE3o:",-1)),ye=a(()=>e("b",null,"Descri\xE7\xE3o:",-1)),Se={key:0},Ce=a(()=>e("b",null,"Exerc\xEDcio:",-1)),Me=a(()=>e("b",null,"Resolu\xE7\xE3o:",-1)),Ve=a(()=>e("b",null,"Recursos:",-1)),qe=a(()=>e("b",null,"Avalia\xE7\xE3o:",-1)),Pe=a(()=>e("h5",null,"Plano de Aula",-1)),je=a(()=>e("b",null,"In\xEDcio da Aula:",-1)),Ie=a(()=>e("b",null,"Desenvolvimento:",-1)),Qe=a(()=>e("b",null,"Encerramento:",-1)),Ne={__name:"SugestPage",setup(v){const f=le(),p=s(null),m=s(null),b=s(!1),h=s(!1),r=s(""),E=s(!1),_=s(!1),g=s([]),x=[{label:"1\xBA Ano do Ensino Fundamental",value:"1EF"},{label:"2\xBA Ano do Ensino Fundamental",value:"2EF"},{label:"3\xBA Ano do Ensino Fundamental",value:"3EF"},{label:"4\xBA Ano do Ensino Fundamental",value:"4EF"},{label:"5\xBA Ano do Ensino Fundamental",value:"5EF"},{label:"6\xBA Ano do Ensino Fundamental",value:"6EF"},{label:"7\xBA Ano do Ensino Fundamental",value:"7EF"},{label:"8\xBA Ano do Ensino Fundamental",value:"8EF"},{label:"9\xBA Ano do Ensino Fundamental",value:"9EF"},{label:"1\xBA Ano do Ensino M\xE9dio",value:"1EM"},{label:"2\xBA Ano do Ensino M\xE9dio",value:"2EM"},{label:"3\xBA Ano do Ensino M\xE9dio",value:"3EM"}],G=t=>{m.value=null;let l=[];switch(t.value){case"1EF":l=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"}];break;case"2EF":l=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"}];break;case"3EF":case"4EF":case"5EF":l=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"}];break;case"6EF":case"7EF":case"8EF":case"9EF":l=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"Ci\xEAncias",value:"Ci\xEAncias"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"},{label:"Artes",value:"Artes"},{label:"Educa\xE7\xE3o F\xEDsica",value:"Educa\xE7\xE3o F\xEDsica"}];break;case"1EM":case"2EM":case"3EM":l=[{label:"Matem\xE1tica",value:"Matem\xE1tica"},{label:"Portugu\xEAs",value:"Portugu\xEAs"},{label:"F\xEDsica",value:"F\xEDsica"},{label:"Qu\xEDmica",value:"Qu\xEDmica"},{label:"Biologia",value:"Biologia"},{label:"Geografia",value:"Geografia"},{label:"Hist\xF3ria",value:"Hist\xF3ria"},{label:"Filosofia",value:"Filosofia"},{label:"Sociologia",value:"Sociologia"},{label:"Ingl\xEAs",value:"Ingl\xEAs"},{label:"Espanhol",value:"Espanhol"}];break;default:l=[]}g.value=l},T=async()=>{const t=p.value||"",l=m.value||"",o=b.value?"externa":"interna";E.value=!0,_.value=!1,setTimeout(()=>{E.value&&(_.value=!0)},5e3),await f.gerarSugestao(t,l,o,r.value),E.value=!1,_.value=!1},w=()=>{p.value=null,m.value=null,b.value=!1,h.value=!1,r.value="",k.value="",y.value=[],S.value=[],C.value=[],M.value=[],V.value=[],q.value=[],F.value={inicioAula:[],desenvolvimento:[],encerramento:[]}},k=s(""),y=s([]),S=s([]),C=s([]),M=s([]),V=s([]),q=s([]),F=s({inicioAula:[],desenvolvimento:[],encerramento:[]});return D(()=>f.sugestao,t=>{t&&(k.value=t.titulo_aula,y.value=t.habilidades_bncc,S.value=t.objetivo,C.value=t.conteudo,M.value=t.metodologia,V.value=t.recursos,q.value=t.avaliacao,F.value=t.plano_aula)}),(t,l)=>(u(),c("div",oe,[se,te,ne,d(j,{modelValue:p.value,"onUpdate:modelValue":[l[0]||(l[0]=o=>p.value=o),G],options:x,label:"S\xE9rie",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:"",style:{"min-width":"15em"}},null,8,["modelValue"]),g.value.length>0?(u(),c("span",ie,"Selecione a mat\xE9ria:")):A("",!0),g.value.length>0?(u(),z(j,{key:1,modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=o=>m.value=o),options:g.value,label:"Mat\xE9ria",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:"",style:{"min-width":"19em"}},null,8,["modelValue","options"])):A("",!0),ue,d(I,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=o=>b.value=o),label:"Externa",class:"q-mt-md q-mb-xl"},null,8,["modelValue"]),d(I,{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=o=>h.value=o),label:"Interna",class:"q-mt-md q-mb-xl"},null,8,["modelValue"]),re,d(O,{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=o=>r.value=o),label:"Tema",class:"q-mt-md q-mb-xl",outlined:"",dark:"",dense:"",style:{"min-width":"19em"}},null,8,["modelValue"]),e("div",ce,[d(Q,{dense:"",class:"q-mb-xl",style:{width:"6em"},onClick:T,label:"Gerar",color:"primary"}),d(Q,{dense:"",class:"q-mb-xl",style:{width:"6em"},onClick:w,label:"Refazer",color:"secondary"})]),E.value?(u(),c("div",de,[_.value?(u(),c("div",me,[ve,d($,{class:"q-mt-md",size:"3em",color:"indigo"})])):(u(),c("div",pe,[be,d(K,{class:"q-mt-md",size:"3em",color:"indigo"})]))])):A("",!0),!E.value&&k.value?(u(),c("div",_e,[ge,e("p",null,[he,n(" "+i(k.value),1)]),e("div",Ee,[fe,d(W,{class:"q-ml-sm",dense:"",icon:"bookmark"},{default:J(()=>[n(i(y.value.join(", ")),1)]),_:1})]),e("p",null,[xe,n(" "+i(S.value.join(", ")),1)]),e("p",null,[Fe,n(" "+i(C.value.join(", ")),1)]),(u(!0),c(N,null,B(M.value,(o,H)=>(u(),c("div",{key:H},[e("p",null,[Ae,n(" "+i(o.tipo),1)]),e("p",null,[ke,n(" "+i(o.duracao)+" minutos",1)]),e("p",null,[ye,n(" "+i(o.descricao.join(", ")),1)]),o.exercicios&&o.exercicios.length>0?(u(),c("ul",Se,[(u(!0),c(N,null,B(o.exercicios,(P,R)=>(u(),c("li",{key:R},[e("p",null,[Ce,n(" "+i(P.exercicio),1)]),e("p",null,[Me,n(" "+i(P.resolucao),1)])]))),128))])):A("",!0)]))),128)),e("p",null,[Ve,n(" "+i(V.value.join(", ")),1)]),e("p",null,[qe,n(" "+i(q.value.join(", ")),1)]),Pe,e("p",null,[je,n(" "+i(F.value.inicio_aula.join(", ")),1)]),e("p",null,[Ie,n(" "+i(F.value.desenvolvimento.join(", ")),1)]),e("p",null,[Qe,n(" "+i(F.value.encerramento.join(", ")),1)])])):A("",!0)]))}};var Le=Z(Ne,[["__scopeId","data-v-a479aee2"]]);export{Le as default};
