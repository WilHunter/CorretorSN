<template>
  <div class="register-page">
    <h3>Gerador de Conteúdos</h3>
    <q-form class="q-mt-lg charts-container text-center">
      <div class="q-mb-md">
        <q-select
          dark
          v-model="quantidadeDesafios"
          :options="opcoesDesafios"
          label="Quantidade de Desafios"
        />
      </div>
      <div class="q-mb-md">
        <q-select
          dark
          v-model="quantidadeQuestoes"
          :options="opcoesQuestoes"
          label="Quantidade de Questões"
        />
      </div>
      <div class="q-mb-md">
        <q-select
          dark
          v-model="anoSelecionado"
          :options="anosEscolares"
          label="Ano Escolar"
        />
      </div>
      <div class="q-mb-md">
        <q-select
          dark
          v-model="bnccSelecionado"
          :options="opcoesBncc"
          label="BNCC"
          use-input
          input-debounce="300"
          fill-input
          emit-value
          map-options
        />
      </div>
      <div class="q-mb-md">
        <q-select
          dark
          v-model="mecanica"
          :options="opcoesMecanica"
          label="Mecânica"
        />
      </div>
      <div class="q-mt-md simuladoAcao">
        <q-btn
          dense
          outline
          label="Limpar"
          color="negative"
          @click="limparFormulario"
          class="q-mr-md"
        />
        <q-btn
          dense
          label="Gerar"
          color="primary"
          @click="gerarDesafio"
        />
      </div>
    </q-form>

    <!-- Exibir as atividades geradas aqui -->
    <div v-if="atividades.length > 0" class="resultados">
      <h4><u>Atividades Geradas</u>:</h4>
      <div v-for="(atividade, index) in atividades" :key="index" class="atividade">
        <h5>{{ atividade.titulo }}</h5>
        <p><strong>Objetivo Pedagógico:</strong> {{ atividade.objPedag }}</p>
        <p><strong>Tempo (em segundos):</strong> {{ atividade.tempo }}s</p>
        <p><strong>Nível de Dificuldade:</strong> {{ atividade.dificuldade }}</p>
        <p><strong>Texto Base:</strong> {{ atividade.textoBase }}</p>
        <p><strong>Código BNCC:</strong> {{ atividade.codigoBNCC }}</p>
        <p><strong>Palavras-chave:</strong></p>
        <div>
          <q-chip
            v-for="(palavra, idx) in atividade.palavrasChave"
            :key="idx"
            class="q-mr-md"
            dense
            color="primary"
            text-color="white"
          >
            {{ palavra }}
          </q-chip>
        </div>

        <!-- Renderizar questões dependendo da mecânica -->
        <div v-if="mecanica.value === 'basico'">
          <h6>Questões de Múltipla Escolha:</h6>
          <div v-for="(questao, idx) in atividade.questoes" :key="idx">
            <p><strong>Pergunta {{ idx + 1 }}:</strong> {{ questao.pergunta }}</p>
            <ul>
              <li v-for="(alternativa, altIdx) in questao.alternativas" :key="altIdx">
                {{ alternativa.indice }}: {{ alternativa.texto }}
              </li>
            </ul>
            <p><strong>Resolução:</strong> {{ questao.resposta }}</p>
          </div>
        </div>

        <div v-if="mecanica.value === 'verdadeiroFalso'">
          <h6>Questões de Verdadeiro ou Falso:</h6>
          <div v-for="(questao, idx) in atividade.questoes" :key="idx">
            <p><strong>Afirmativa {{ idx + 1 }}:</strong> {{ questao.texto }} - Resposta: {{ questao.resposta }}</p>
          </div>
        </div>

        <div v-if="mecanica.value === 'palavras'">
          <h6>Questões com Resposta Única:</h6>
          <div v-for="(questao, idx) in atividade.questoes" :key="idx">
            <p><strong>Pergunta {{ idx + 1 }}:</strong> {{ questao.pergunta }}</p>
            <p><strong>Resposta:</strong> {{ questao.resposta }}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useContStore } from '../stores/contStore';

// Instância da store
const contStore = useContStore();

// Referências para os campos do formulário
const quantidadeDesafios = ref(null);
const quantidadeQuestoes = ref(null);
const anoSelecionado = ref(null);  // Referência para o ano escolar (value será usado)
const bnccSelecionado = ref(null);
const mecanica = ref(null);  // Referência para a mecânica (value será usado)

// Inicializando com arrays vazios
const opcoesDesafios = Array.from({ length: 21 }, (_, i) => i);
const opcoesQuestoes = Array.from({ length: 20 }, (_, i) => i + 1);
const opcoesMecanica = ref([]);
const anosEscolares = ref([]);
const opcoesBncc = ref([{ label: 'Aleatória', value: 'aleatoria' }]);

// Função para carregar as variáveis da store
onMounted(() => {
  if (Array.isArray(contStore.opcoesMecanica)) {
    opcoesMecanica.value = [...contStore.opcoesMecanica];
  }

  if (Array.isArray(contStore.anosEscolares)) {
    anosEscolares.value = [...contStore.anosEscolares];
  }
});

// Função para limpar o formulário
const limparFormulario = () => {
  quantidadeDesafios.value = null;
  quantidadeQuestoes.value = null;
  anoSelecionado.value = null;
  bnccSelecionado.value = null;
  mecanica.value = null;
};

// Função para gerar o desafio, passando apenas os valores corretos
const gerarDesafio = () => {
  contStore.gerarDesafio(
    quantidadeDesafios.value,
    quantidadeQuestoes.value,
    anoSelecionado.value,  // Passando apenas o value
    bnccSelecionado.value,
    mecanica.value  // Passando apenas o value
  );
};

// Computed property para acessar as atividades da store
const atividades = computed(() => contStore.atividades);

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

.resultados {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  background: transparent;
  padding: 20px;
  border-radius: 8px;
  color: #0086f3;
}

.atividade {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.q-mb-md {
  margin-bottom: 16px;
}

.q-mr-md {
  margin-right: 16px;
}

.q-mt-md {
  margin-top: 16px;
}

@media (max-width: 600px) {
  .register-page {
    padding: 10px;
    font-size: medium;
  }

  .charts-container {
    padding: 10px;
  }
}
</style>
