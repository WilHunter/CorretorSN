<template>
    <div class="register-page">
      <h3>Gerador de Provas</h3>
      <br>
      <span>Selecione a série do aluno:</span>
      <q-select
        v-model="serie"
        :options="seriesOptions"
        label="Série"
        class="q-mb-xl"
        @update:model-value="onSerieChange"
      />
      <span v-if="materiasOptions.length > 0">Selecione a matéria:</span>
      <q-select
        v-model="materia"
        :options="materiasOptions"
        label="Matéria"
        class="q-mb-xl"
        v-if="materiasOptions.length > 0"
      />
      <span>Escolha um nível:</span>
      <q-option-group
        v-model="nivel"
        :options="nivelOptions"
        type="radio"
        class="q-mb-xl"
        inline
      />
      <span>Quantidade de questões:</span>
      <q-input
        v-model="quantidadeQuestoes"
        type="number"
        class="q-mb-xl"
        label="Quantidade de Questões"
      />
      <q-btn
        dense
        class="q-mb-xl"
        style="width: 6em;"
        @click="gerarProva"
        label="Gerar"
        color="primary"
      />
      <div v-if="prova.length > 0">
        <div class="simuladoAcao">
          <q-btn
            dense
            outline
            class="q-mb-xl q-mr-md"
            @click="corrigirProva"
            label="Corrigir"
            color="primary"
          />
          <q-btn
            dense
            outline
            class="q-mb-xl"
            @click="imprimirProva"
            label="Imprimir"
            color="secondary"
          />
        </div>
        <div class="provaPrint">
          <q-card
            v-for="(questao, index) in prova"
            :key="index"
            class="q-ma-md"
            style="background-color: transparent;"
          >
            <q-card-section>
              <div><b>{{ questao.numero }}.</b> {{ questao.pergunta }}</div>
              <q-chip dense size="xs" icon="event"><b>Códigos BNCC:</b> {{ questao.codigoBNCC.join(', ') }}</q-chip>
              <div><b>Comentário:</b> {{ questao.comentario }}</div>
              <q-option-group
                v-model="respostas[index]"
                :options="questao.alternativas.map(alt => ({ label: alt, value: alt }))"
                type="radio"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, toRefs } from 'vue';
  import { useProvaStore } from '../stores/provaStore';
  
  export default {
    setup() {
      const provaStore = useProvaStore();
      const serie = ref(null);
      const materia = ref(null);
      const nivel = ref(null);
      const quantidadeQuestoes = ref(10); // Valor padrão
      const respostas = ref([]);
  
      const state = reactive({
        materiasOptions: []
      });
  
      const seriesOptions = [
        { label: '1º Ano do Ensino Fundamental', value: '1EF' },
        { label: '2º Ano do Ensino Fundamental', value: '2EF' },
        { label: '3º Ano do Ensino Fundamental', value: '3EF' },
        { label: '4º Ano do Ensino Fundamental', value: '4EF' },
        { label: '5º Ano do Ensino Fundamental', value: '5EF' },
        { label: '6º Ano do Ensino Fundamental', value: '6EF' },
        { label: '7º Ano do Ensino Fundamental', value: '7EF' },
        { label: '8º Ano do Ensino Fundamental', value: '8EF' },
        { label: '9º Ano do Ensino Fundamental', value: '9EF' },
        { label: '1º Ano do Ensino Médio', value: '1EM' },
        { label: '2º Ano do Ensino Médio', value: '2EM' },
        { label: '3º Ano do Ensino Médio', value: '3EM' }
      ];
  
      const nivelOptions = [
        { label: 'Fácil', value: 'Fácil' },
        { label: 'Médio', value: 'Médio' },
        { label: 'Difícil', value: 'Difícil' },
        { label: 'Aleatório', value: 'Aleatório' }
      ];
  
      const prova = ref([]);
  
      const onSerieChange = (newSerie) => {
        console.log('Série selecionada:', newSerie.value);
        materia.value = null; // Resetar a matéria ao selecionar uma nova série
  
        let options = [];
  
        switch (newSerie.value) {
          case '1EF':
            options = [
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Português', value: 'Português' }
            ];
            break;
          case '2EF':
            options = [
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Português', value: 'Português' },
              { label: 'Ciências', value: 'Ciências' }
            ];
            break;
          case '3EF':
          case '4EF':
          case '5EF':
            options = [
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Português', value: 'Português' },
              { label: 'Ciências', value: 'Ciências' },
              { label: 'Geografia', value: 'Geografia' },
              { label: 'História', value: 'História' }
            ];
            break;
          case '6EF':
          case '7EF':
          case '8EF':
          case '9EF':
            options = [
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Português', value: 'Português' },
              { label: 'Ciências', value: 'Ciências' },
              { label: 'Geografia', value: 'Geografia' },
              { label: 'História', value: 'História' },
              { label: 'Artes', value: 'Artes' },
              { label: 'Educação Física', value: 'Educação Física' }
            ];
            break;
          case '1EM':
          case '2EM':
          case '3EM':
            options = [
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Português', value: 'Português' },
              { label: 'Física', value: 'Física' },
              { label: 'Química', value: 'Química' },
              { label: 'Biologia', value: 'Biologia' },
              { label: 'Geografia', value: 'Geografia' },
              { label: 'História', value: 'História' },
              { label: 'Filosofia', value: 'Filosofia' },
              { label: 'Sociologia', value: 'Sociologia' },
              { label: 'Inglês', value: 'Inglês' },
              { label: 'Espanhol', value: 'Espanhol' }
            ];
            break;
          default:
            options = [];
        }
  
        state.materiasOptions = options;
        console.log('Matérias disponíveis:', state.materiasOptions);
      };
  
      const gerarProva = async () => {
        const serieValue = serie.value?.value || '';
        const materiaValue = materia.value?.value || '';
        console.log(serieValue, materiaValue, nivel.value, quantidadeQuestoes.value);
        await provaStore.gerarProva(serieValue, materiaValue, nivel.value, quantidadeQuestoes.value);
        prova.value = provaStore.prova;
        respostas.value = Array(quantidadeQuestoes.value).fill(null);
      };
  
      const corrigirProva = () => {
        // Lógica de correção da prova
      };
  
      const imprimirProva = () => {
        const printContent = document.querySelector('.provaPrint').innerHTML;
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`
          <html>
            <head>
              <title>Imprimir Prova</title>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      };
  
      return {
        serie,
        materia,
        nivel,
        quantidadeQuestoes,
        seriesOptions,
        ...toRefs(state),
        nivelOptions,
        prova,
        respostas,
        gerarProva,
        corrigirProva,
        imprimirProva,
        onSerieChange
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
  