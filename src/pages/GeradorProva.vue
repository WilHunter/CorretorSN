<template>
  <div class="register-page">
    <h3>Gerador de Provas</h3>
    <br>
    <span>Selecione a série do aluno:</span>
    <q-select
      v-model="serie"
      :options="seriesOptions"
      label="Série"
      class="q-mt-md q-mb-xl"
      outlined
      dark
      dense
      @update:model-value="onSerieChange"
    />
    <span v-if="materiasOptions.length > 0">Selecione a matéria:</span>
    <q-select
      v-model="materia"
      :options="materiasOptions"
      label="Matéria"
      class="q-mt-md q-mb-xl"
      outlined
      dark
      dense
      v-if="materiasOptions.length > 0"
    />
    <span>Escolha um nível:</span>
    <q-option-group
      v-model="nivel"
      :options="nivelOptions"
      type="radio"
      class="q-mt-md q-mb-xl"
      inline
    />
    <span>Quantidade de questões:</span>
    <q-input
      v-model="quantidadeQuestoes"
      type="number"
      class="q-mt-md q-mb-xl"
      label="Quantidade de Questões"
      outlined
      dark
      dense
    />
    <q-btn
      dense
      class="q-mb-xl"
      style="width: 6em;"
      @click="gerarProva"
      label="Gerar"
      color="primary"
    />

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

    <div v-if="prova.length > 0 && !loading">
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
            <q-chip class="q-mt-md q-mb-md" dense outline color="primary" size="md"><b>BNCC:</b> {{ questao.codigoBNCC.join(', ') }}</q-chip>
            <div><b>{{ questao.numero }}.</b> {{ questao.pergunta }}</div>
            <q-option-group
              v-model="respostas[index]"
              :options="questao.alternativas.map(alt => ({ label: alt, value: alt }))"
              type="radio"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="isDialogOpen">
      <q-card style="background-color: #0E2741;color: #0086f3;">
        <q-card-section class="text-center">
          <div class="text-h5">Gabarito</div>
          <div class="text-subtitle1">Acertos: {{ acertos }} / {{ prova.length }}</div>
          <div class="text-subtitle1"><b>Nota: {{ nota.toFixed(1) }}</b></div>
        </q-card-section>
        <q-card-section v-for="(questao, index) in gabarito" :key="index">
          <div>
            <b>Questão {{ questao.numero }}: {{ questao.resposta }}</b>
            <div v-if="questao.erro">
              <b>Comentário:</b> {{ questao.comentario }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Imprimir" @click="imprimirGabarito" color="primary" />
          <q-btn flat label="Fechar" v-close-popup color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
    const isDialogOpen = ref(false);
    const gabarito = ref([]);
    const loading = ref(false);
    const showAlternativeSpinner = ref(false);
    const acertos = ref(0);
    const nota = ref(0);

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
      loading.value = true;
      showAlternativeSpinner.value = false;

      setTimeout(() => {
        if (loading.value) {
          showAlternativeSpinner.value = true;
        }
      }, 5000); // Altera para o spinner alternativo após 5 segundos

      await provaStore.gerarProva(serieValue, materiaValue, nivel.value, quantidadeQuestoes.value);
      prova.value = provaStore.prova;
      respostas.value = Array(quantidadeQuestoes.value).fill(null);

      loading.value = false;
      showAlternativeSpinner.value = false;
    };

    const corrigirProva = () => {
      let correctAnswers = 0;
      gabarito.value = prova.value.map((questao, index) => {
        const respostaAluno = respostas.value[index];
        const correta = questao.resposta;
        const isCorrect = respostaAluno === correta;
        if (isCorrect) correctAnswers++;
        return {
          numero: questao.numero,
          resposta: correta,
          erro: !isCorrect,
          comentario: !isCorrect ? questao.comentario : ''
        };
      });
      acertos.value = correctAnswers;
      nota.value = (correctAnswers / prova.value.length) * 10;
      isDialogOpen.value = true;
    };

    const imprimirGabarito = () => {
      const printContent = document.querySelector('.q-dialog .q-card').innerHTML;
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
      imprimirGabarito,
      isDialogOpen,
      gabarito,
      loading,
      showAlternativeSpinner,
      acertos,
      nota,
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
