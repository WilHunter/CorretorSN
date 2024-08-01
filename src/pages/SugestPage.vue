<template>
  <div class="sugestao-page">
    <h3>Gerador de Sugestões de Aula</h3>
    <br />
    <span>Selecione a série:</span>
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
    <span>Tipo de aula:</span>
    <q-checkbox v-model="tipoAulaExterna" label="Externa" class="q-mt-md q-mb-xl" />
    <q-checkbox v-model="tipoAulaInterna" label="Interna" class="q-mt-md q-mb-xl" />
    <span>Tema da aula:</span>
    <q-input
      v-model="tema"
      label="Tema"
      class="q-mt-md q-mb-xl"
      outlined
      dark
      dense
    />
    <q-btn
      dense
      class="q-mb-xl"
      style="width: 6em;"
      @click="gerarSugestao"
      label="Gerar"
      color="primary"
    />

    <div v-if="loading" class="text-center">
      <div v-if="showAlternativeSpinner">
        <div class="text-h4">Aguarde mais um pouco, está quase pronto</div>
        <q-spinner-bars class="q-mt-md" size="3em" color="indigo" />
      </div>
      <div v-else>
        <div class="text-h4">Gerando a sugestão...</div>
        <q-spinner-cube class="q-mt-md" size="3em" color="indigo" />
      </div>
    </div>

    <div v-if="!loading && tituloAula" class="sugestao-result">
      <h4>Sugestão de Aula</h4>
      <p><b>Título da Aula:</b> {{ tituloAula }}</p>
      <div class="q-mb-md">
        <span><b>Habilidades BNCC:</b></span>
        <q-chip class="q-ml-sm" dense icon="bookmark">{{ habilidadesBNCC.join(', ') }}</q-chip>
      </div>
      <p><b>Objetivo:</b> {{ objetivo.join(', ') }}</p>
      <p><b>Conteúdo:</b> {{ conteudo.join(', ') }}</p>
      <div v-for="(metodo, index) in metodologia" :key="index">
        <p><b>Tipo:</b> {{ metodo.tipo }}</p>
        <p><b>Duração:</b> {{ metodo.duracao }} minutos</p>
        <p><b>Descrição:</b> {{ metodo.descricao.join(', ') }}</p>
        <ul v-if="metodo.exercicios && metodo.exercicios.length > 0">
          <li v-for="(exercicio, eIndex) in metodo.exercicios" :key="eIndex">
            <p><b>Exercício:</b> {{ exercicio.exercicio }}</p>
            <p><b>Resolução:</b> {{ exercicio.resolucao }}</p>
          </li>
        </ul>
      </div>
      <p><b>Recursos:</b> {{ recursos.join(', ') }}</p>
      <p><b>Avaliação:</b> {{ avaliacao.join(', ') }}</p>
      <h5>Plano de Aula</h5>
      <p><b>Início da Aula:</b> {{ planoAula.inicio_aula.join(', ') }}</p>
      <p><b>Desenvolvimento:</b> {{ planoAula.desenvolvimento.join(', ') }}</p>
      <p><b>Encerramento:</b> {{ planoAula.encerramento.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useSugestaoStore } from '../stores/sugestaoStore';

const sugestaoStore = useSugestaoStore();
const serie = ref(null);
const materia = ref(null);
const tipoAulaExterna = ref(false);
const tipoAulaInterna = ref(true);
const tema = ref('');
const loading = ref(false);
const showAlternativeSpinner = ref(false);

const materiasOptions = ref([]);

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

const onSerieChange = (newSerie) => {
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

  materiasOptions.value = options;
};

const gerarSugestao = async () => {
  const serieValue = serie.value || '';
  const materiaValue = materia.value || '';
  const tipoAula = tipoAulaExterna.value ? 'externa' : 'interna';

  loading.value = true;
  showAlternativeSpinner.value = false;

  setTimeout(() => {
    if (loading.value) {
      showAlternativeSpinner.value = true;
    }
  }, 5000); // Altera para o spinner alternativo após 5 segundos

  await sugestaoStore.gerarSugestao(serieValue, materiaValue, tipoAula, tema.value);

  loading.value = false;
  showAlternativeSpinner.value = false;
};

const tituloAula = ref('');
const habilidadesBNCC = ref([]);
const objetivo = ref([]);
const conteudo = ref([]);
const metodologia = ref([]);
const recursos = ref([]);
const avaliacao = ref([]);
const planoAula = ref({
  inicioAula: [],
  desenvolvimento: [],
  encerramento: []
});

watch(
  () => sugestaoStore.sugestao,
  (newSugestao) => {
    if (newSugestao) {
      tituloAula.value = newSugestao.titulo_aula;
      habilidadesBNCC.value = newSugestao.habilidades_bncc;
      objetivo.value = newSugestao.objetivo;
      conteudo.value = newSugestao.conteudo;
      metodologia.value = newSugestao.metodologia;
      recursos.value = newSugestao.recursos;
      avaliacao.value = newSugestao.avaliacao;
      planoAula.value = newSugestao.plano_aula;
    }
  }
);
</script>

<style scoped>
span {
  font-weight: bold;
  color: rgb(175, 175, 175);
}
.sugestao-page {
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

.sugestao-result {
  width: 100%;
  max-width: 600px;
  margin: auto;
  background: transparent;
  border-radius: 8px;
  padding: 20px;
}

.q-mt-md {
  margin-top: 1em;
}

.q-mb-xl {
  margin-bottom: 2em;
}

@media (max-width: 600px) {
  .sugestao-page {
    padding: 10px;
    font-size: medium;
  }

  .sugestao-result {
    padding: 10px;
  }
}

@media print {
  .sugestao-page,
  .sugestao-result,
  .q-btn {
    display: none !important;
  }
}
</style>
