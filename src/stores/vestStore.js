import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;


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


  return{
    
  }