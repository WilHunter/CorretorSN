<template>
  <q-page padding class="register-page">
    <avatar class="q-pa-xl" style="width: 100%;"></avatar>
    <h2 class="text-center q-pb-xl">Detalhes da Redação</h2>
    <div class="form-container">
      <q-input
        dark
        v-model="redacao.tema"
        label="Tema da Redação"
        outlined
        class="q-mt-md"
        readonly
      />
      <q-input
        dark
        v-model="redacao.texto"
        label="Texto da Redação"
        type="textarea"
        outlined
        class="q-mt-md"
        rows="20"
        readonly
      />
    </div>
    <div class="result-container q-mt-xl">
      <h2 class="text-center">Resultado da Avaliação</h2>
      <div v-if="!redacao.plagiado">
        <div class="text-center"><span> Sua redação foi avaliada de acordo com as regras <b>{{ redacao.tipo }}</b>. </span></div>
        <div class="card-results q-ma-xl">
          <q-card class="q-mr-sm" bordered style="background-color: transparent;" v-for="competencia in redacao.resultado.competencias" :key="competencia.nomeCompetencia">
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
            <h3>Nota Final: {{ redacao.resultado.notaFinal }}</h3>
            <q-separator dark inset />
            <div class="text-center q-pa-md" style="color: #9dd0fae5;"><span>{{ redacao.resultado.comentarioFinal }}</span></div>
          </div>
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
    <q-btn label="Voltar" @click="goBack" class="q-mt-xl" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRedacaoStore } from 'stores/redacaoStore';
import Avatar from '../components/Avatar.vue';

const route = useRoute();
const router = useRouter();
const store = useRedacaoStore();

const redacao = store.redacoes.find(r => r.id === parseInt(route.params.id));

const goBack = () => {
  router.back();
};
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
</style>
