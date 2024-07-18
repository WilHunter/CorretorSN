<template>
  <q-page padding class="register-page">
    <avatar class="q-pa-xl" style="width: 100%;"></avatar>
    <h2 class="text-center q-pb-xl">Redação</h2>
    <span class="text-center q-pb-xl"> Crie sua ou importe o pdf com seu para avaliar sua redação </span>
    <div>
      <q-toggle
        :model-value="store.checkPlagiarism"
        checked-icon="check"
        unchecked-icon="clear"
        color="red"
        label="Verificar Plágio e Conteúdo Gerado por IA"
        class="q-mt-md q-mb-xl"
        @update:model-value="toggleCheckPlagiarism"
      />
    </div>
    <div class="form-container">
      <q-select
        v-model="store.avaliacaoTipo"
        :options="avaliacaoOptions"
        label="Tipo de Avaliação"
        outlined
        dark
        class="q-ma-md"
        emit-value
      />
      <q-select
        v-model="store.generoTextual"
        :options="generoTextualOptions"
        label="Gênero Textual"
        outlined
        dark
        class="q-ma-md"
        emit-value
      />
      <q-form class="q-pa-md" @submit.prevent="submitRedacao">
        <q-input
          dark
          v-model="store.tema"
          label="Tema da Redação"
          outlined
          class="q-mt-md"
          :rules="[val => !!val || 'Preenchimento obrigatório']"
          required
        />
        <q-input
          dark
          v-model="store.texto"
          label="Texto da Redação"
          type="textarea"
          outlined
          class="q-mt-md"
          rows="20"
          :rules="[val => !!val || 'Preenchimento obrigatório']"
          required
        />
        <div class="file-upload-container q-mt-md">
          <input
            type="file"
            accept="application/pdf"
            @change="handleFileUpload"
          />
        </div>
        <q-btn
          type="submit"
          label="avaliar"
          color="primary"
          outline
          class="q-mt-lg full-width"
          :disable="!isFormValid"
        />
        <q-btn
          label="Refazer"
          color="primary"
          outline
          class="q-mt-md full-width"
          @click="refazer"
        />
      </q-form>
    </div>
    <div v-if="store.avaliacaoFeita" class="result-container q-mt-xl">
      <h2 class="text-center">Resultado da Avaliação</h2>
      <div v-if="!store.plagiado">
        <div class="text-center"><span> Sua redação foi avaliada de acordo com as regras <b>{{ store.avaliacaoTipo }}</b> e no gênero <b>{{ store.generoTextual }}</b>. </span></div>
        <div class="card-results q-ma-xl">
          <q-card
            v-if="store.resultado && store.resultado.competencias"
            v-for="competencia in store.resultado.competencias"
            :key="competencia.nomeCompetencia"
            bordered
            style="background-color: transparent;"
            class="q-mr-sm"
          >
            <q-card-section>
              <div><b>{{ competencia.nomeCompetencia }}</b></div>
              <div class="text-caption">Nota: {{ competencia.notaCompetencia }}</div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div style="color: #9dd0fae5;">{{ competencia.comentCompetencia }}</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="final-score">
          <div style="width: 80%;">
            <h3 v-if="store.resultado">Nota Final: {{ store.resultado.notaFinal }}</h3>
            <q-separator dark inset />
            <div v-if="store.resultado" class="text-center q-pa-md" style="color: #9dd0fae5;"><span>{{ store.resultado.comentarioFinal }}</span></div>
          </div>
          <q-btn
            label="salvar"
            color="primary"
            outline
            class="q-mt-lg q-mb-lg"
            @click="salvarResultados"
          />
        </div>
      </div>
      <div v-else>
        <div class="text-center q-pa-md">
          <div class="q-pa-md">
            <q-spinner-comment
              color="primary"
              size="6em"
            />
          </div>
          <div class="q-mb-xl">
            Identificamos que o texto que você entregou tem sinais de plágio <br> Aproveite o tempo de estudo para criar um conteúdo original <br> Com foco e determinação, você certamente alcançará bons resultados!
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="store.loading" style="text-align: center;">
      <q-card flat dark style="background-color: transparent;">
        <q-card-section>
          <div class="text-h4">Corrigindo...</div>
          <q-spinner-cube class="q-mt-md" size="3em" color="indigo" />
        </q-card-section>
      </q-card>
    </q-dialog>
    <div v-if="store.error" class="error-modal">
      <q-dialog v-model="store.error">
        <q-card>
          <q-card-section>
            <div class="text-h6">Erro</div>
            <p>{{ store.errorMessage }}</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Ok" @click="store.error = false" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRedacaoStore } from 'stores/redacaoStore';
import Avatar from '../components/Avatar.vue';

const store = useRedacaoStore();

const avaliacaoOptions = [
  { label: 'ENEM', value: 'ENEM' },
  { label: 'Fuvest', value: 'Fuvest' },
  { label: 'ITA', value: 'ITA' },
  { label: 'Unicamp', value: 'Unicamp' }
];

const generoTextualOptions = [
  { label: 'Dissertação', value: 'Dissertação' },
  { label: 'Carta aberta', value: 'Carta aberta' },
  { label: 'Resenhas', value: 'Resenhas' },
  { label: 'Crônica reflexiva', value: 'Crônica reflexiva' },
  { label: 'Poema', value: 'Poema' }
];

const handleFileUpload = (event) => {
  store.handleFileUpload(event);
};

const submitRedacao = () => {
  store.submitRedacao();
};

const refazer = () => {
  store.refazer();
};

const toggleCheckPlagiarism = () => {
  store.toggleCheckPlagiarism();
};

const salvarResultados = () => {
  store.salvarResultados();
};

const isFormValid = computed(() => {
  return store.isFormValid;
});
</script>

<style scoped>
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

.form-container {
  max-width: 800px;
  width: 100%;
  padding: 20px;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.result-container {
  width: 100%;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.card-results {
  color: #0086f3;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
}
.final-score {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.file-upload-container {
  border: 2px dashed #0086f3;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  color: #c3b8e0;
}

.file-upload-container input[type="file"] {
  width: 100%;
  color: #c3b8e0;
}

.file-upload-container input[type="file"]::file-selector-button {
  background: #0086f3;
  color: #141529;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.file-upload-container input[type="file"]::file-selector-button:hover {
  background: #3d1e6d;
  color: #98eb8f;
}

.error-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1c1c3c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color: #c3b8e0;
}

.debug {
  background: #1c1c3c;
  color: #c3b8e0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  overflow: auto;
}

@media (max-width: 768px) {
  .card-results {
    flex-direction: column;
  }
}
</style>
