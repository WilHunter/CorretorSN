<template>
  <q-page padding class="register-page">
    <avatar class="q-pa-xl" style="width: 100%;"></avatar>
    <div class="charts-container q-mt-xl">
      <h2 class="text-center q-pb-xl">Dash de Redações</h2>
      <div class="row text-center q-pa-xl">
        <div class="col-12 col-md-4">
          <Bar :data="avaliacaoTipoData" :options="avaliacaoChartOptions" />
        </div>
        <div class="col-12 col-md-4">
          <Doughnut :data="tipoData" :options="tipoChartOptions" style="max-height: 20em;" />
        </div>
        <div class="col-12 col-md-4">
          <Bar :data="mediaNotasData" :options="mediaNotasChartOptions" />
        </div>
      </div>
    </div>
    <h2 class="text-center q-pb-xl">Lista de Redações</h2>
    <div class="row q-ma-md" style="width: 100%;">
      <div class="col-12 col-md-8 q-pa-sm">
        <q-input
          v-model="searchQuery"
          label="Pesquisar por Título"
          outlined
          dark
          dense
          class="full-width"
        >
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-4 q-pa-sm row no-wrap items-center">
        <q-btn label="Limpar" @click="clearFilters" class="col-6 col-md-4" />
        <q-btn label="+ Redação" to="/avaliacao" class="col-6 col-md-4 q-ml-md" />
      </div>
    </div>
    <div class="result-container q-mt-xl">
      <q-list bordered class="text-left">
        <q-item v-for="redacao in filteredRedacoes" :key="redacao.id" clickable @click="goToDetail(redacao.id)">
          <q-item-section>
            <q-item-label>
              <div class="row">
                <div class="col-12 col-md-1">
                  <span class="text-caption">ID</span> <br>
                  {{ redacao.id }}
                </div>
                <div class="col-12 col-md-4">
                  <span class="text-caption">Título</span> <br>
                  {{ redacao.tema }}
                </div>
                <div class="col-12 col-md-2">
                  <span class="text-caption">Tipo de Redação</span> <br>
                  {{ redacao.tipo }}
                </div>
                <div class="col-12 col-md-2">
                  <span class="text-caption">Tipo de Avaliação</span> <br>
                  {{ redacao.avaliacaoTipo }}
                </div>
                <div class="col-12 col-md-2">
                  <span class="text-caption">Nota Final</span> <br>
                  {{ redacao.notaFinal }}
                </div>
                <div class="col-12 col-md-1">
                  <span class="text-caption">Plágio</span> <br>
                  {{ redacao.plagiado ? 'Sim' : 'Não' }}
                </div>
              </div>
            </q-item-label>
          </q-item-section>
          <q-separator spaced inset color="grey-5"/>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, h, defineComponent } from 'vue';
import { useRedacaoStore } from 'stores/redacaoStore';
import Avatar from '../components/Avatar.vue';
import { useRouter } from 'vue-router';
import { Bar, Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const store = useRedacaoStore();
const router = useRouter();
const searchQuery = ref('');
const filterQuery = ref(null);

const filteredRedacoes = computed(() => {
  let redacoes = store.redacoes;

  if (filterQuery.value) {
    if (filterQuery.value.type === 'avaliacaoTipo') {
      redacoes = redacoes.filter(redacao => redacao.avaliacaoTipo === filterQuery.value.value);
    } else if (filterQuery.value.type === 'tipo') {
      redacoes = redacoes.filter(redacao => redacao.tipo === filterQuery.value.value);
    }
  }

  return redacoes.filter(redacao =>
    redacao.tema.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const goToDetail = (id) => {
  router.push(`/redacao/${id}`);
};

const handleChartClick = (event, elements, chartType) => {
  if (elements.length) {
    const element = elements[0];
    const index = element.index;
    const label = chartType === 'bar' ? avaliacaoTipoData.value.labels[index] : tipoData.value.labels[index];

    if (chartType === 'bar') {
      filterQuery.value = { type: 'avaliacaoTipo', value: label };
    } else if (chartType === 'doughnut') {
      filterQuery.value = { type: 'tipo', value: label };
    }
  }
};

const clearFilters = () => {
  filterQuery.value = null;
  searchQuery.value = '';
};

const avaliacaoTipoData = computed(() => {
  const counts = store.redacoes.reduce((acc, redacao) => {
    acc[redacao.avaliacaoTipo] = (acc[redacao.avaliacaoTipo] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Quantidade de Redações',
        data: Object.values(counts),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };
});

const tipoData = computed(() => {
  const counts = store.redacoes.reduce((acc, redacao) => {
    acc[redacao.tipo] = (acc[redacao.tipo] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Quantidade de Redações',
        data: Object.values(counts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
});

const mediaNotasData = computed(() => {
  const counts = store.redacoes.reduce((acc, redacao) => {
    if (!acc[redacao.avaliacaoTipo]) {
      acc[redacao.avaliacaoTipo] = { sum: 0, count: 0 };
    }
    acc[redacao.avaliacaoTipo].sum += redacao.notaFinal;
    acc[redacao.avaliacaoTipo].count += 1;
    return acc;
  }, {});

  const labels = Object.keys(counts);
  const data = labels.map(label => counts[label].sum / counts[label].count);

  return {
    labels,
    datasets: [
      {
        label: 'Média de Notas por Tipo de Avaliação',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
});

const avaliacaoChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  },
  onClick: (event, elements) => handleChartClick(event, elements, 'bar')
};

const tipoChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  },
  onClick: (event, elements) => handleChartClick(event, elements, 'doughnut')
};

const mediaNotasChartOptions = {
  responsive: true,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: true
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.label}: ${context.raw.toFixed(2)}`;
        }
      }
    }
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
