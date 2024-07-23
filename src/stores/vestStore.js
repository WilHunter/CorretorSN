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

  const gerarSimulado = async (vestibular, quantidadeQuestoes) => {
    //${quantidadeQuestoes}
    try {
      const payload = {
        messages: [
          {
            role: 'user',
            content: `Gerar simulado completo para o vestibular: ${vestibular} com 8 questões alternativas e de anos e níveis aleatórios, retornando um json com a seguinte estrutura: 
            simulado:{
              número da questão;
              Ano de referencia: (Ex: ITA-2023);
              pergunta;
              alternativas: [];
              resposta correta;
              comentário da resposta correta;
            };
            *importante, gere o total de questões solicitadas, sem interrupção e retorne somente o json, sem mais comentários`
          }
        ],
        max_tokens: 4000 // Aumentar o número de tokens permitidos na resposta
      };

      //console.log("Payload:", payload);

      const response = await axios.post(API_URL, payload, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      });

      console.log("Response Data:", response.data);

      // Verifique se a resposta é um JSON válido
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(response.data.choices[0].message.content);
        //console.log("Parsed Response:", parsedResponse);
      } catch (e) {
        throw new Error("A resposta da API não é um JSON válido: " + response.data.choices[0].message.content);
      }

      // Verifique se simulado existe e é um array
      if (Array.isArray(parsedResponse.simulado)) {
        simulado.value = parsedResponse.simulado.map((q) => ({
          numero: q["número da questão"],
          ano: q["Ano de referencia"],
          pergunta: q["pergunta"],
          alternativas: q["alternativas"],
          resposta: q["resposta correta"]
          // comentário da resposta correta está excluído
        }));
      } else {
        throw new Error("A resposta da API não contém um array 'simulado'");
      }
    } catch (err) {
      //console.error("Erro ao gerar simulado:", err);
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
