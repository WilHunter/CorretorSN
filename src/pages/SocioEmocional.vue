<template>
    <q-page class="register-page">
      <div class="text-left">
        <h2>Se conhecer</h2>
        <span>
          Nesse espaço temos a oportunidade de entender o nosso momento de vida, ter auto conhecimento e corrigir rotas para o objetivo de vida. <br>
          Não existe resposta certa ou errada!
        </span>
        <br>
        <span class="text-caption">As resposta devem ser dadas com a escala de 0-5, onde 0 é o que menos me identifico e 5 o que mais me identifico</span>
      </div>
      <q-form @submit.prevent="submitForm" class="charts-container">
        <div v-for="(section, index) in sections" :key="index" class="q-pa-md">
          <q-card class="q-mb-md" dark="" flat bordered style="color: #0086f3;background-color: transparent;">
            <q-card-section>
              <q-card-title>
                <span class="text-h4"><u>{{ section.title }}</u></span>
              </q-card-title>
              <q-list bordered separator class="q-mt-md q-mb-md">
                <q-item v-for="(question, qIndex) in section.questions" :key="qIndex">
                  <q-item-section>
                    <span style="color: #0086f3;">{{ question }}</span>
                  </q-item-section>
                  <q-item-section side>
                    <q-select
                      v-model="answers[section.key][qIndex]"
                      :options="[1, 2, 3, 4, 5]"
                      dense
                      dark
                      outlined
                      @update:model-value="store.setAnswer(section.key, qIndex, $event)"
                      color="blue"
                      style="color: white;"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        <q-btn type="submit" label="Enviar" color="primary" />
      </q-form>
      
      <div v-if="results" class="result-container q-gutter-md">
        <div style="width: 100%;"><h2>Painel de Resultados</h2></div>
        <q-card v-for="(result, section) in results" :key="section" class="q-mt-md" flat bordered style="background-color: transparent;min-width: 17em;">
          <q-card-section>
            <q-card-title>
              <span>{{ sectionsMap[section].title }}</span>
            </q-card-title>
            <div style="color: #0086f3;">Pontos: <b>{{ result }}</b></div>
          </q-card-section>
        </q-card>
      </div>
      
      <!-- Heatmap Section -->
      <div v-if="results" class="q-mt-md" style="width: 100%;">
        <h2>Mapa de Calor dos Resultados</h2>
        <heatmap-chart :data="heatmapData" />
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useQuestionnaireStore } from 'src/stores/useQuestionnaireStore.js';
  import { useQuasar } from 'quasar';
  import HeatmapChart from '../components/HeatmapChart.vue'; // Heatmap component
  
  const sections = [
    {
      key: 'autoconsciencia',
      title: 'Autoconsciência',
      questions: [
        'Eu consigo identificar quando estou triste ou chateado.',
        'Eu entendo o que geralmente me faz sentir feliz ou animado.',
        'Quando estou nervoso(a), sei o que causou esse sentimento.',
        'Sou capaz de descrever meus pontos fortes e fracos.',
      ],
    },
    // Adicione as outras seções da mesma forma
    {
      key: 'autogestao',
      title: 'Autogestão',
      questions: [
        'Eu consigo me acalmar quando estou bravo(a) ou frustrado(a).',
        'Eu posso me concentrar nas minhas tarefas, mesmo quando estou distraído(a).',
        'Eu consigo manter a calma em situações estressantes.',
        'Eu estabeleço metas para mim mesmo(a) e trabalho para alcançá-las.',
      ],
    },
    {
      key: 'empatia',
      title: 'Empatia',
      questions: [
        'Eu me preocupo com o que os outros estão sentindo.',
        'Eu sou bom(boa) em perceber quando alguém está triste ou chateado(a), mesmo que não diga nada.',
        'Eu tento entender as perspectivas dos outros, mesmo que sejam diferentes das minhas.',
        'Eu gosto de ajudar as pessoas quando elas estão com problemas.',
      ],
    },
    {
      key: 'tomadaDecisao',
      title: 'Tomada de Decisão Responsável',
      questions: [
        'Eu penso nas consequências das minhas ações antes de agir.',
        'Eu faço escolhas que são boas para mim e para os outros ao meu redor.',
        'Eu sei distinguir o certo do errado em situações difíceis.',
        'Eu considero como minhas decisões podem afetar outras pessoas.',
      ],
    },
    {
      key: 'habilidadesRelacionamento',
      title: 'Habilidades de Relacionamento',
      questions: [
        'Eu me sinto confortável em iniciar conversas com novas pessoas.',
        'Eu sei trabalhar bem em equipe.',
        'Eu consigo resolver conflitos de forma pacífica e eficaz.',
        'Eu peço ajuda quando preciso e ofereço ajuda quando posso.',
      ],
    },
    {
      key: 'conscienciaSocial',
      title: 'Consciência Social',
      questions: [
        'Eu respeito as regras e normas da minha comunidade escolar.',
        'Eu me esforço para entender diferentes culturas e perspectivas.',
        'Eu participo de atividades que ajudam a minha comunidade.',
        'Eu me sinto responsável por fazer a minha escola e comunidade um lugar melhor.',
      ],
    },
    {
      key: 'resiliencia',
      title: 'Resiliência',
      questions: [
        'Eu não desisto facilmente quando enfrento desafios.',
        'Eu vejo os erros como oportunidades para aprender.',
        'Eu sou capaz de lidar com críticas de maneira construtiva.',
        'Eu me recupero rapidamente de decepções e frustrações.',
      ],
    },
    {
      key: 'adaptabilidade',
      title: 'Adaptabilidade',
      questions: [
        'Eu me sinto confortável em situações novas e desconhecidas.',
        'Eu consigo mudar meus planos quando as circunstâncias mudam.',
        'Eu estou disposto(a) a tentar novas abordagens quando necessário.',
        'Eu vejo as mudanças como oportunidades de crescimento.',
      ],
    },
    {
      key: 'trabalhoEquipe',
      title: 'Trabalho em Equipe',
      questions: [
        'Eu gosto de trabalhar com outras pessoas para alcançar objetivos comuns.',
        'Eu sou um(a) bom(boa) ouvinte em discussões em grupo.',
        'Eu aceito bem as ideias dos outros, mesmo quando são diferentes das minhas.',
        'Eu contribuo de forma ativa para as atividades em grupo.',
      ],
    },
    {
      key: 'comunicacaoEficaz',
      title: 'Comunicação Eficaz',
      questions: [
        'Eu consigo expressar minhas ideias e sentimentos de forma clara.',
        'Eu sou assertivo(a) ao comunicar minhas necessidades e desejos.',
        'Eu sou capaz de ouvir e entender as opiniões dos outros.',
        'Eu posso resolver mal-entendidos de forma eficaz através da comunicação.',
      ],
    },
  ];
  
  const store = useQuestionnaireStore();
  const answers = ref({});
  
  sections.forEach(section => {
    answers.value[section.key] = new Array(section.questions.length).fill(null);
  });
  
  const sectionsMap = Object.fromEntries(sections.map(section => [section.key, section]));
  
  const results = ref(null);
  const heatmapData = ref(null); // Data for heatmap chart
  const $q = useQuasar();
  
  const submitForm = () => {
    const incomplete = Object.values(answers.value).some(sectionAnswers =>
      sectionAnswers.some(answer => answer === null)
    );
    if (incomplete) {
      $q.notify({
        type: 'negative',
        message: 'Por favor, responda todas as perguntas antes de enviar.',
      });
      return;
    }
  
    results.value = store.calculateResults();
    generateHeatmapData();
  };
  
  const generateHeatmapData = () => {
    heatmapData.value = {
      labels: sections.map(section => section.title),
      datasets: [
        {
          label: 'Pontos por Seção',
          data: Object.values(results.value),
          backgroundColor: context => {
            const value = context.dataset.data[context.dataIndex];
            return `rgba(${255 - value * 25}, ${255 - value * 50}, ${255 - value * 50}, 0.8)`;
          },
        },
      ],
    };
  };
  </script>
  
  <style scoped>
  span {
    font-weight: bold;
    color: rgb(175, 175, 175);
  }
  .register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(235deg, #081828, #0d2741, #0d2741, #081828);
    padding: 20px;
    color: #0086f3;
    font-size: large;
  }
  
  .charts-container {
    width: 100%;
    background: transparent;
    border-radius: 8px;
    padding: 20px;
    color: #0086f3;
  }
  
  .result-container {
    width: 100%;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    color: #0086f3;
  }
  
  @media (max-width: 768px) {
    .charts-container .row {
      flex-direction: column;
    }
  
    .result-container .row {
      flex-direction: column;
    }
  
    .result-container .col-1,
    .result-container .col {
      width: 100%;
    }
  }
  </style>
  