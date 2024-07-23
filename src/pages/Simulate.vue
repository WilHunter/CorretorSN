<template>
    <div class="register-page">
      <div class="charts-container">
        <q-form>
          <q-radio-group
              v-model="vestibulares"
              :options="options"
              type="radio"
              checked-icon="task_alt" 
              unchecked-icon="panorama_fish_eye"
              inline
          />
          <q-btn @click="gerarSimulado" label="Gerar" color="primary" />
          <q-btn @click="gerarSimuladoAleatorio" label="Gerar Aleatório" color="secondary" />
        </q-form>
      </div>
      <div class="result-container">
        <span>Simulado Gerado:</span>
        <div v-if="loading">
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
          <q-card v-for="(questao, index) in simulado" :key="index" class="q-ma-md">
            <q-card-section>
              <div>{{ questao.numero }}. {{ questao.pergunta }}</div>
              <div v-if="questao.alternativas">
                <q-radio-group v-model="respostas[index]">
                  <q-radio v-for="(alternativa, idx) in questao.alternativas" :key="idx" :val="alternativa" :label="alternativa" />
                </q-radio-group>
              </div>
              <div v-else>
                <q-input filled v-model="respostasDissertativas[index]" type="textarea" rows="5" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-btn v-if="simulado.length > 0" @click="corrigirSimulado" label="Corrigir Simulado" color="primary" />
      <q-btn v-if="simulado.length > 0" @click="imprimirSimulado" label="Imprimir Simulado" color="secondary" />
      <q-dialog v-model="mostrarGabarito">
        <q-card>
          <q-card-section>
            <div v-for="(questao, index) in simulado" :key="index">
              <div>{{ questao.numero }}. {{ questao.pergunta }}</div>
              <div>Resposta correta: {{ questao.resposta }}</div>
              <div>Comentário: {{ questao.comentario }}</div>
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
      const vestibulares = ref(null);  // Mudança para aceitar apenas um valor
      const simulado = ref([]);
      const respostas = ref([]);
      const respostasDissertativas = ref([]);
      const mostrarGabarito = ref(false);
      const loading = ref(false);
      const showAlternativeSpinner = ref(false);
  
      const options = [
        { label: 'ENEM', value: 'ENEM' },
        { label: 'ITA', value: 'ITA' },
        { label: 'AFA', value: 'AFA' },
        { label: 'IME', value: 'IME' },
        { label: 'Fuvest', value: 'Fuvest' },
        { label: 'Unicamp', value: 'Unicamp' },
        { label: 'UFPR', value: 'UFPR' },
        { label: 'UFRGS', value: 'UFRGS' }
      ];
  
      const gerarSimulado = async () => {
        loading.value = true;
        showAlternativeSpinner.value = false;
        setTimeout(() => {
          showAlternativeSpinner.value = true;
        }, 5000);
        vestStore.vestibulares = vestibulares.value;  // Ajuste para refletir a seleção única
        await vestStore.gerarSimulado();
        simulado.value = vestStore.simulado;
        loading.value = false;
      };
  
      const gerarSimuladoAleatorio = async () => {
        loading.value = true;
        showAlternativeSpinner.value = false;
        setTimeout(() => {
          showAlternativeSpinner.value = true;
        }, 5000);
        await vestStore.gerarSimuladoAleatorio();
        vestibulares.value = vestStore.vestibulares;  // Atualiza a seleção com o valor aleatório
        simulado.value = vestStore.simulado;
        loading.value = false;
      };
  
      const corrigirSimulado = () => {
        mostrarGabarito.value = true;
      };
  
      const imprimirSimulado = () => {
        window.print();
      };
  
      const imprimirGabarito = () => {
        // Lógica para imprimir o gabarito
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
        gerarSimuladoAleatorio,
        corrigirSimulado,
        imprimirSimulado,
        imprimirGabarito
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
    background: transparent;
    border-radius: 8px;
    padding: 20px;
  }
  
  .result-container {
    width: 100%;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
  }
  </style>
  