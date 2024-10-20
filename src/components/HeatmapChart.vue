<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  const props = defineProps({
    data: Object,
  });
  
  const canvas = ref(null);
  let chartInstance = null;
  
  const createChart = () => {
    chartInstance = new Chart(canvas.value, {
      type: 'bar', // usando um gráfico de barras como heatmap
      data: props.data,
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };
  
  onMounted(() => {
    createChart();
  });
  
  watch(props.data, (newData) => {
    if (chartInstance) {
      chartInstance.data = newData;
      chartInstance.update();
    }
  });
  </script>
  
  <style scoped>
  canvas {
    max-width: 100%;
    height: auto;
  }
  </style>
  