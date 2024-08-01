import { defineStore } from 'pinia';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useSugestaoStore = defineStore('sugestaoStore', {
  state: () => ({
    sugestao: {},
    errorMessage: '',
    error: false,
  }),
  actions: {
    async gerarSugestao(serie, materia, tipoAula, tema) {
      console.log('Parâmetros recebidos:', serie, materia, tipoAula, tema);

      if (!API_URL || !API_KEY) {
        this.errorMessage = "API_URL ou API_KEY não está definida.";
        this.error = true;
        console.error(this.errorMessage);
        return;
      }

      try {
        const payload = {
          messages: [
            {
              role: 'user',
              content: `Sugira uma aula para a série ${serie} na disciplina de ${materia}. A aula deve ser ${tipoAula} e o tema é "${tema}".
              Nos exemplos práticos retorne 5 exercícios diferentes, com resolução para serem aplicados em sala;
              Retorne os códigos das habilidades BNCC envolvidas na aula sugerida;
              Na atividade prática, retornar uma lista de 10 exercícios com gabarito e resolução;
              Retorne somente o json, sem demais comentários, com a seguinte estrutura:
              {
                "titulo_aula": "",
                "habilidades_bncc":[],
                "objetivo": [
                ],
                "conteudo": [
                ],
                "metodologia": [
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ],
                    "exercicios": [
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      },
                      {
                        "exercicio": "",
                        "resolucao": ""
                      }
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ],
                    "exercicios": [
                      {
                        "exercicio": "",
                        "resolucao": ""
                      }
                    ]
                  },
                  {
                    "tipo": "",
                    "duracao": em minutos,
                    "descricao": [
                    ]
                  }
                ],
                "recursos": [
                ],
                "avaliacao": [
                ],
                "plano_aula": {
                  "inicio_aula": [
                  ],
                  "desenvolvimento": [
                  ],
                  "encerramento": [
                  ]
                }
              }`
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

        const content = response.data.choices[0].message.content;
        let parsedResponse;
        try {
          const jsonString = content.replace(/```json/g, '').replace(/```/g, '').trim();
          parsedResponse = JSON.parse(jsonString);
        } catch (e) {
          console.error("Erro ao analisar JSON:", e);
          throw new Error("A resposta da API não é um JSON válido: " + content);
        }

        this.sugestao = parsedResponse;
        console.log('Sugestão de aula:', this.sugestao);
      } catch (err) {
        console.error('Erro na requisição da API:', err);
        this.errorMessage = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
        this.error = true;
      }
    }
  }
});
