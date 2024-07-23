<template>
    <div class="register-page">
      <h3>Gerador de Simulados</h3>
      <br>
      <span>Selecione a prova que deseja:</span>
      <div class="charts-container text-center">
        <q-form>
          <q-option-group
            v-model="vestibulares"
            :options="options"
            type="radio"
            class="q-mb-xl"
            inline
          />
          <q-btn
            dense
            class="q-mr-md q-mb-xl"
            style="width: 6em;"
            @click="gerarSimulado"
            label="Gerar"
            color="primary"
          />
        </q-form>
      </div>
      <h5 v-if="simulado.length > 0">Simulado <b>{{ vestibulares }}</b>:</h5>
      <div class="result-container q-mt-xl">
        <div class="simuladoAcao">
          <q-btn
            dense
            outline
            class="q-mb-xl q-mr-md"
            v-if="simulado.length > 0"
            @click="corrigirSimulado"
            label="Corrigir Simulado"
            color="primary"
          />
          <q-btn
            dense
            outline
            class="q-mb-xl"
            v-if="simulado.length > 0"
            @click="imprimirSimulado"
            label="Imprimir Simulado"
            color="secondary"
          />
        </div>
        <div v-if="loading" class="text-center">
          <div v-if="showAlternativeSpinner">
            <div class="text-h4">Aguarde mais um pouco, está quase pronto</div>
            <q-spinner-bars class="q-mt-md" size="3em" color="indigo" />
          </div>
          <div v-else>
            <div class="text-h4">Gerando o simulado...</div>
            <q-spinner-cube class="q-mt-md" size="3em" color="indigo" />
          </div>
        </div>
        <div v-else-if="simulado.length > 0">
          <div class="simuladoPrint">
            <q-card
              v-for="(questao, index) in simulado"
              :key="index"
              class="q-ma-md"
              style="background-color: transparent;"
            >
              <q-card-section>
                <div><b>{{ questao.numero }}. ({{ questao.ano }})</b> {{ questao.pergunta }}</div>
                <div class="alternativas" v-if="questao.alternativas">
                  <q-option-group
                    v-model="respostas[index]"
                    :options="questao.alternativas.map(alt => ({ label: alt, value: alt }))"
                    type="radio"
                    :color="getOptionColor(index, alt)"
                  />
                </div>
                <div v-else>
                  <q-input filled v-model="respostasDissertativas[index]" type="textarea" rows="5" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <q-dialog v-model="mostrarGabarito">
        <q-card class="gabaritoPrint" style="background-color: #0E2741;color: #0086f3;">
          <q-card-section class="text-center">
            <h5>Gabarito</h5>
            <div v-if="acertos !== null">Você acertou {{ acertos }} de {{ simulado.length }} questões (Nota: {{ ((acertos / simulado.length) * 10).toFixed(1) }})</div>
          </q-card-section>
          <q-card-section>
            <div v-for="(questao, index) in simulado" :key="index">
              <div class="q-mt-md"><b>{{ questao.numero }}.</b> {{ questao.pergunta }}</div>
              <div>Resposta correta: <b>{{ questao.resposta }}</b></div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Fechar" v-close-popup />
            <q-btn flat label="Imprimir Gabarito" @click="imprimirGabarito" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useVestStore } from '../stores/vestStore';
  
  export default {
    setup() {
      const vestStore = useVestStore();
      const vestibulares = ref(null);
      const simulado = ref([]);
      const respostas = ref([]);
      const respostasDissertativas = ref([]);
      const mostrarGabarito = ref(false);
      const loading = ref(false);
      const showAlternativeSpinner = ref(false);
      const acertos = ref(null);
  
      const options = [
        { label: 'ENEM', value: 'ENEM' },
        { label: 'ITA', value: 'ITA' },
        { label: 'AFA', value: 'AFA' },
        { label: 'IME', value: 'IME' },
        { label: 'Fuvest', value: 'Fuvest' },
        { label: 'Unicamp', value: 'Unicamp' }
      ];
  
      const questoesPorVestibular = {
        'ENEM': 180,
        'ITA': 70,
        'AFA': 64,
        'IME': 80,
        'Fuvest': 90,
        'Unicamp': 72
      };
  
      const gerarSimulado = async () => {
        loading.value = true;
        showAlternativeSpinner.value = false;
        setTimeout(() => {
          showAlternativeSpinner.value = true;
        }, 60000);
  
        const quantidadeQuestoes = questoesPorVestibular[vestibulares.value];
  
        await vestStore.gerarSimulado(vestibulares.value, quantidadeQuestoes);
        simulado.value = vestStore.simulado;
        respostas.value = Array(quantidadeQuestoes).fill(null); // Inicializa o array de respostas
        loading.value = false;
      };
  
      const corrigirSimulado = () => {
        let totalAcertos = 0;
  
        simulado.value.forEach((questao, index) => {
          if (respostas.value[index] === questao.resposta) {
            totalAcertos++;
          }
        });
  
        acertos.value = totalAcertos;
        mostrarGabarito.value = true;
      };
  
      const getOptionColor = (index, alt) => {
        if (mostrarGabarito.value) {
          if (respostas.value[index] === alt) {
            return alt === simulado.value[index].resposta ? 'cyan' : 'red';
          }
          return alt === simulado.value[index].resposta ? 'cyan' : null;
        }
        return null;
      };
  
      const imprimirSimulado = () => {
        const printContent = document.querySelector('.simuladoPrint').innerHTML;
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
          <html>
            <head>
              <title>Imprimir Simulado</title>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      };
  
      const imprimirGabarito = () => {
        const printContent = document.querySelector('.gabaritoPrint').innerHTML;
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
          <html>
            <head>
              <title>Imprimir Gabarito</title>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      };
  
      onMounted(() => {
        vestibulares.value = vestStore.vestibulares;
        simulado.value = vestStore.simulado;
      });
  
      return {
        vestibulares,
        simulado,
        respostas,
        respostasDissertativas,
        mostrarGabarito,
        loading,
        showAlternativeSpinner,
        options,
        gerarSimulado,
        corrigirSimulado,
        imprimirSimulado,
        imprimirGabarito,
        acertos,
        getOptionColor
      };
    }
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
    max-width: 600px;
    margin: auto;
    background: transparent;
    border-radius: 8px;
    padding: 20px;
  }
  
  .simuladoAcao {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .result-container {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  
  .simuladoPrint {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  @media (max-width: 600px) {
    .register-page {
      padding: 10px;
      font-size: medium;
    }
  
    .charts-container,
    .result-container {
      padding: 10px;
    }
  }
  
  @media print {
    .simuladoPrint {
      display: block;
    }
    .register-page,
    .charts-container,
    .simuladoAcao,
    .result-container,
    .q-dialog,
    .q-btn {
      display: none !important;
    }
  }
  </style>
  