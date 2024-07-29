import { defineStore } from 'pinia';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useProvaStore = defineStore('provaStore', {
  state: () => ({
    prova: [],
    errorMessage: '',
    error: false,
  }),
  actions: {
    async gerarProva(serie, materia, nivel, quantidadeQuestoes) {
      try {
        const payload = {
          messages: [
            {
              role: 'user',
              content: `Gere uma prova para alunos da ${serie}, da disciplina ${materia} com ${quantidadeQuestoes} questões alternativas de nível ${nivel}. A resposta deve conter somente o JSON com a seguinte estrutura:
              {
                "prova": [
                  {
                    "número da questão": número,
                    "código BNCC": ["código"],
                    "pergunta": "pergunta",
                    "alternativas": ["A) alternativa", "B) alternativa", "C) alternativa", "D) alternativa"],
                    "resposta correta": "letra",
                    "comentário da resposta correta": "comentário"
                  }
                ]
              }
              *importante, gere o total de questões solicitadas, sem interrupção e retorne somente o json, sem mais comentários`
            }
          ],
          max_tokens: 4000 // Aumentar o número de tokens permitidos na resposta
        };

        const response = await axios.post(API_URL, payload, {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        });
        console.log(response);
        let parsedResponse;
        try {
          const content = response.data.choices[0].message.content;
          const jsonString = content.replace(/```json/g, '').replace(/```/g, '').trim();
          parsedResponse = JSON.parse(jsonString);
        } catch (e) {
          throw new Error("A resposta da API não é um JSON válido: " + response.data.choices[0].message.content);
        }
        console.log(parsedResponse);
        if (Array.isArray(parsedResponse.prova)) {
          this.prova = parsedResponse.prova.map((q) => ({
            numero: q["número da questão"],
            codigoBNCC: q["código BNCC"],
            pergunta: q["pergunta"],
            alternativas: q["alternativas"],
            resposta: q["resposta correta"],
            comentario: q["comentário da resposta correta"]
          }));
          console.log(this.prova);
        } else {
          throw new Error("A resposta da API não contém um array 'prova'");
        }
      } catch (err) {
        this.errorMessage = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
        this.error = true;
      }
    }
  }
});
