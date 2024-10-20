import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useRedacaoStore = defineStore('redacaoStore', () => {
  const tema = ref('');
  const texto = ref('');
  const avaliacaoTipo = ref('');
  const generoTextual = ref('');
  const resultado = ref(null);
  const arquivo = ref(null);
  const loading = ref(false);
  const error = ref(false);
  const errorMessage = ref('');
  const plagiado = ref(false);
  const checkPlagiarism = ref(false);
  const avaliacaoFeita = ref(false);
  const savedResults = ref([]);

  const redacoes = ref([
    { id: 1, tema: 'Impacto da Tecnologia na Educação', tipo: 'Dissertação', notaFinal: 95, plagiado: false, avaliacaoTipo: 'ENEM' },
    { id: 2, tema: 'A Crise Climática e Suas Consequências', tipo: 'Carta aberta', notaFinal: 88, plagiado: false, avaliacaoTipo: 'Fuvest' },
    { id: 3, tema: 'O Papel da Arte na Sociedade', tipo: 'Crônica reflexiva', notaFinal: 78, plagiado: true, avaliacaoTipo: 'ITA' },
    { id: 4, tema: 'Desafios da Saúde Pública no Brasil', tipo: 'Resenha', notaFinal: 92, plagiado: false, avaliacaoTipo: 'Unicamp' },
    { id: 5, tema: 'Inclusão Social e Diversidade Cultural', tipo: 'Poema', notaFinal: 85, plagiado: false, avaliacaoTipo: 'ENEM' },
    { id: 6, tema: 'O Papel da Arte na Sociedade', tipo: 'Crônica reflexiva', notaFinal: 78, plagiado: true, avaliacaoTipo: 'ITA' },
    { id: 7, tema: 'Desafios da Saúde Pública no Brasil', tipo: 'Resenha', notaFinal: 92, plagiado: false, avaliacaoTipo: 'Unicamp' },
    { id: 8, tema: 'Impacto da Tecnologia na Educação', tipo: 'Dissertação', notaFinal: 95, plagiado: false, avaliacaoTipo: 'ENEM' },
    { id: 9, tema: 'A Crise Climática e Suas Consequências', tipo: 'Carta aberta', notaFinal: 88, plagiado: false, avaliacaoTipo: 'Fuvest' },
    { id: 10, tema: 'Impacto da Tecnologia na Educação', tipo: 'Dissertação', notaFinal: 95, plagiado: false, avaliacaoTipo: 'ENEM' },
    { id: 11, tema: 'A Crise Climática e Suas Consequências', tipo: 'Carta aberta', notaFinal: 88, plagiado: false, avaliacaoTipo: 'Fuvest' },
  ]);

  const toggleCheckPlagiarism = () => {
    checkPlagiarism.value = !checkPlagiarism.value;
    resultado.value = null;
    plagiado.value = null;
    avaliacaoFeita.value = false;
  };

  const handleFileUpload = (event) => {
    arquivo.value = event.target.files[0];
  };

  const isFormValid = computed(() => {
    return tema.value && texto.value;
  });

  const submitRedacao = async () => {
    loading.value = true;
    error.value = false;
    resultado.value = null;
    plagiado.value = null;
    avaliacaoFeita.value = false;

    try {
      if (checkPlagiarism.value) {
        await checkPlagiarismAndAI();
      }

      if (!plagiado.value) {
        await evaluateRedacao();
      }

      avaliacaoFeita.value = true;
    } catch (err) {
      errorMessage.value = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  const checkPlagiarismAndAI = async () => {
    try {
      const response = await axios.post(API_URL, {
        messages: [
          {
            role: 'user',
            content: `Verifique se a redação abaixo contém plágio ou foi gerado por IA, se houver plágio ou foi gerado por IA, inicie a resposta com o texto (conteúdo plagiado):\nTema: ${tema.value}\nTexto: ${texto.value}`
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      });

      const responseContent = response.data.choices[0].message.content.toLowerCase();
      plagiado.value = responseContent.includes("conteúdo plagiado");
      console.log(responseContent);
    } catch (err) {
      errorMessage.value = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
      error.value = true;
    }
  };

  const gerarTema = async () => {
    try {
      const response = await axios.post(API_URL, {
        messages: [
          {
            role: 'user',
            content: 'Gere um tema para uma redação de vestibular e retorne somente o tema, sem comentários'
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      });

      tema.value = response.data.choices[0].message.content;
    } catch (err) {
      errorMessage.value = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
      error.value = true;
    }
  };

  const evaluateRedacao = async () => {
    const requestData = {
      messages: [
        {
          role: 'user',
          content: `Considerando os critérios de avaliação de redações adotados pelo ${avaliacaoTipo.value}, qual nota seria atribuída para a redação abaixo?
Comente cada um dos itens avaliados e qual a nota para cada item.
Identifique erros de gramática ou semântica e forneça uma versão do texto em HTML com markdown, destacando em cores diferentes onde houver erros de gramática ou semântica.
Tema: ${tema.value}
Texto: ${texto.value}
Responda com um JSON válido com os seguintes campos:
resultado: {
  competencias: [
    {
      nomeCompetencia: "",
      comentCompetencia: "",
      notaCompetencia: ""
    }
  ],
  notaFinal: "",
  comentarioFinal: "",
  textoCorrigidoHtml: ""
}`
        }
      ]
    };

    try {
      const response = await axios.post(API_URL, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      });

      const content = response.data.choices[0].message.content;
      console.log(content);
      const parsedResult = parseApiResponse(content);
      resultado.value = parsedResult;
    } catch (err) {
      errorMessage.value = `Código: ${err.response?.status || ''}\nMensagem: ${err.response?.statusText || err.message}`;
      error.value = true;
    }
  };

  const parseApiResponse = (content) => {
    console.log("Raw content:", content);

    const jsonString = content.replace(/```json/g, '').replace(/```/g, '').trim();

    console.log("Cleaned JSON string:", jsonString);

    try {
      const jsonObject = JSON.parse(jsonString);
      console.log("Parsed JSON object:", jsonObject);

      return jsonObject.resultado;
    } catch (e) {
      console.error("JSON parse error:", e);
      error.value = true;
      errorMessage.value = "Erro ao parsear a resposta da API.";
      return null;
    }
  };

  const salvarResultados = () => {
    if (resultado.value || plagiado.value) {
      const result = {
        id: new Date().getTime(),
        tema: tema.value,
        texto: texto.value,
        avaliacaoTipo: avaliacaoTipo.value,
        generoTextual: generoTextual.value,
        resultado: resultado.value,
        plagiado: plagiado.value
      };
      savedResults.value.push(result);
      showSuccessNotification();
    } else {
      errorMessage.value = "A avaliação deve ser feita antes de salvar.";
      error.value = true;
    }
  };

  const showSuccessNotification = () => {
    alert('Redação salva com sucesso!');
  };

  const refazer = () => {
    resultado.value = null;
    plagiado.value = null;
    avaliacaoFeita.value = false;
    checkPlagiarism.value = false;
  };

  const loadSavedResults = () => {
    // Aqui você pode implementar o carregamento dos resultados salvos, por exemplo, do localStorage ou de uma API.
  };

  return {
    tema,
    texto,
    avaliacaoTipo,
    generoTextual,
    resultado,
    arquivo,
    loading,
    error,
    errorMessage,
    plagiado,
    checkPlagiarism,
    avaliacaoFeita,
    savedResults,
    redacoes,
    toggleCheckPlagiarism,
    handleFileUpload,
    isFormValid,
    submitRedacao,
    salvarResultados,
    refazer,
    loadSavedResults,
    gerarTema
  };
});
