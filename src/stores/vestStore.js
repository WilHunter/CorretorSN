// vestStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useVestStore = defineStore('vestStore', () => {
  const vestibulares = ref(null);
  const simulado = ref([]);
  const error = ref(false);
  const errorMessage = ref('');

  const gerarSimulado = async () => {
    try {
      const response = await axios.post(
        API_URL,
        {
          messages: [
            {
              role: 'user',
              content: `Gerar simulado para o vestibular: ${vestibulares.value}`
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        }
      );

      simulado.value = response.data.choices[0].message.content.split('\n').map((q, index) => {
        const [numero, ...pergunta] = q.split('.');
        return {
          numero: index + 1,
          pergunta: pergunta.join('.').trim()
        };
      });
    } catch (err) {
      errorMessage.value = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
      error.value = true;
    }
  };

  return {
    vestibulares,
    simulado,
    error,
    errorMessage,
    gerarSimulado
  };
});
