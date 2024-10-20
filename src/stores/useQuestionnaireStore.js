// stores/questionnaire.js
import { defineStore } from 'pinia';

export const useQuestionnaireStore = defineStore('questionnaire', {
  state: () => ({
    answers: {
      autoconsciencia: [],
      autogestao: [],
      empatia: [],
      tomadaDecisao: [],
      habilidadesRelacionamento: [],
      conscienciaSocial: [],
      resiliencia: [],
      adaptabilidade: [],
      trabalhoEquipe: [],
      comunicacaoEficaz: [],
    },
  }),
  actions: {
    setAnswer(section, questionIndex, value) {
      this.answers[section][questionIndex] = value;
    },
    calculateResults() {
      const results = {};
      for (const section in this.answers) {
        const sum = this.answers[section].reduce((acc, val) => acc + val, 0);
        results[section] = (sum / this.answers[section].length).toFixed(2);
      }
      return results;
    },
  },
});
