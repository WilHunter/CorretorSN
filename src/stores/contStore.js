import { defineStore } from 'pinia';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useContStore = defineStore('contStore', {
  state: () => ({
    atividades: [],
    opcoesMecanica: [
      { label: 'Palavras/Digitar', value: 'palavras' },
      { label: 'Básico', value: 'basico' },
      { label: 'Verdadeiro ou Falso', value: 'verdadeiroFalso' },
    ],
    anosEscolares: [
      { label: '1º Ano - Ensino Fundamental', value: 'EF1' },
      { label: '2º Ano - Ensino Fundamental', value: 'EF2' },
      { label: '3º Ano - Ensino Fundamental', value: 'EF3' },
      { label: '4º Ano - Ensino Fundamental', value: 'EF4' },
      { label: '5º Ano - Ensino Fundamental', value: 'EF5' },
      { label: '6º Ano - Ensino Fundamental', value: 'EF6' },
      { label: '7º Ano - Ensino Fundamental', value: 'EF7' },
      { label: '8º Ano - Ensino Fundamental', value: 'EF8' },
      { label: '9º Ano - Ensino Fundamental', value: 'EF9' },
      { label: '1º Ano - Ensino Médio', value: 'EM1' },
      { label: '2º Ano - Ensino Médio', value: 'EM2' },
      { label: '3º Ano - Ensino Médio', value: 'EM3' },
    ],
    errorMessage: '',
    error: false,
  }),
  actions: {
    async gerarDesafio(quantidadeDesafios, quantidadeQuestoes, anoSelecionado, bnccSelecionado, mecanica) {
      console.log('Parâmetros recebidos:', quantidadeDesafios, quantidadeQuestoes, anoSelecionado, bnccSelecionado, mecanica);

      if (!API_URL || !API_KEY) {
        this.errorMessage = "API_URL ou API_KEY não está definida.";
        this.error = true;
        console.error(this.errorMessage);
        return;
      }

      // Criar o prompt com base na mecânica
      let prompt = '';

      if (mecanica.value === 'basico') {
        prompt = `Gere ${quantidadeDesafios} atividades de múltipla escolha, com ${quantidadeQuestoes} questões cada, para o ano escolar ${anoSelecionado.label}, com a BNCC ${bnccSelecionado}.
        Cada atividade deve conter:
        - Título (máximo de 50 caracteres),
        - Objetivo pedagógico (até 400 caracteres),
        - Estimativa de tempo (em segundos),
        - Nível de dificuldade (Fácil, Médio, Difícil),
        - Texto base (vinculado à taxonomia de Bloom),
        - Código de habilidade BNCC,
        - Palavras-chave (mínimo de 5),
        - Questões de múltipla escolha com alternativas e uma resolução.

        O formato de saída deve ser um JSON estruturado como este:
        {
          "titulo": "Título da atividade",
          "objPedag": "Objetivo pedagógico da atividade",
          "tempo": 300,
          "dificuldade": "Médio",
          "textoBase": "Texto base da atividade",
          "codigoBNCC": "BNCC-Código",
          "palavrasChave": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
          "questoes": [
            {
              "pergunta": "Texto da pergunta",
              "alternativas": [
                { "indice": "a", "texto": "Texto da alternativa a" },
                { "indice": "b", "texto": "Texto da alternativa b" },
                { "indice": "c", "texto": "Texto da alternativa c" },
                { "indice": "d", "texto": "Texto da alternativa d" }
              ],
              "resposta": "Texto com a resolução da questão"
            }
          ]
        }`;
      } else if (mecanica.value === 'verdadeiroFalso') {
        prompt = `Gere ${quantidadeDesafios} atividades do tipo Verdadeiro ou Falso, com ${quantidadeQuestoes} questões cada, para o ano escolar ${anoSelecionado.label}, com a BNCC ${bnccSelecionado}.
        Cada atividade deve conter:
        - Título (máximo de 50 caracteres),
        - Objetivo pedagógico (até 400 caracteres),
        - Estimativa de tempo (em segundos),
        - Nível de dificuldade (Fácil, Médio, Difícil),
        - Texto base (vinculado à taxonomia de Bloom),
        - Código de habilidade BNCC,
        - Palavras-chave (mínimo de 5),
        - Questões de verdadeiro ou falso.

        O formato de saída deve ser um JSON estruturado como este:
        {
          "titulo": "Título da atividade",
          "objPedag": "Objetivo pedagógico da atividade",
          "tempo": 300,
          "dificuldade": "Fácil",
          "textoBase": "Texto base da atividade",
          "codigoBNCC": "BNCC-Código",
          "palavrasChave": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
          "questoes": [
            { "texto": "Texto da afirmação", "resposta": "V" },
            { "texto": "Texto da afirmação", "resposta": "F" }
          ]
        }`;
      } else if (mecanica.value === 'palavras') {
        prompt = `Gere ${quantidadeDesafios} atividades com respostas curtas, com ${quantidadeQuestoes} questões cada, para o ano escolar ${anoSelecionado.label}, com a BNCC ${bnccSelecionado}.
        Cada atividade deve conter:
        - Título (máximo de 50 caracteres),
        - Objetivo pedagógico (até 400 caracteres),
        - Estimativa de tempo (em segundos),
        - Nível de dificuldade (Fácil, Médio, Difícil),
        - Texto base (vinculado à taxonomia de Bloom),
        - Código de habilidade BNCC,
        - Palavras-chave (mínimo de 5),
        - Questões com respostas curtas (uma única palavra).

        O formato de saída deve ser um JSON estruturado como este:
        {
          "titulo": "Título da atividade",
          "objPedag": "Objetivo pedagógico da atividade",
          "tempo": 300,
          "dificuldade": "Difícil",
          "textoBase": "Texto base da atividade",
          "codigoBNCC": "BNCC-Código",
          "palavrasChave": ["palavra1", "palavra2", "palavra3", "palavra4", "palavra5"],
          "questoes": [
            { "pergunta": "Texto da pergunta", "resposta": "Palavra única" }
          ]
        }`;
      }

      try {
        const payload = {
          messages: [
            {
              role: 'user',
              content: prompt,
            }
          ],
          max_tokens: 4000
        };

        console.log('Enviando payload para a API:', payload);

        const response = await axios.post(API_URL, payload, {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        });

        const content = response.data.choices[0]?.message?.content;

        if (!content) {
          throw new Error('A resposta da API não contém dados válidos.');
        }

        // Verifica se a resposta contém um JSON válido
        let parsedResponse;
        try {
          const jsonString = content.replace(/```json/g, '').replace(/```/g, '').trim();
          parsedResponse = JSON.parse(jsonString);
        } catch (e) {
          console.error("Erro ao analisar JSON:", e);
          console.log("Resposta da API:", content); // Log para depuração
          throw new Error("A resposta da API não é um JSON válido.");
        }

        this.atividades = parsedResponse;
        console.log('Atividades geradas:', this.atividades);
      } catch (err) {
        console.error('Erro na requisição da API:', err);
        this.errorMessage = `Erro na API: ${err.message}`;
        this.error = true;
      }
    }
  }
});
