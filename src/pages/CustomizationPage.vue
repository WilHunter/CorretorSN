<template>
  <q-page padding class="customization-page">
    <div class="form-container">
      <h2 class="text-center">Customizar CSS</h2>
      <q-form @submit="submitCustomization">
        <q-input
          v-model="logo"
          label="URL do Logo"
          outlined
          class="q-mt-md"
        />
        <q-input
          v-model="backgroundColor"
          label="Cor do Background"
          type="color"
          outlined
          class="q-mt-md"
        />
        <q-input
          v-model="textColor"
          label="Cor do Texto"
          type="color"
          outlined
          class="q-mt-md"
        />
        <q-input
          v-model="buttonColor"
          label="Cor dos Botões"
          type="color"
          outlined
          class="q-mt-md"
        />
        <q-input
          v-model="borderColor"
          label="Cor das Bordas"
          type="color"
          outlined
          class="q-mt-md"
        />
        <q-btn
          type="submit"
          label="Salvar"
          color="primary"
          class="q-mt-lg full-width"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const logo = ref('');
const backgroundColor = ref('#141529');
const textColor = ref('#c3b8e0');
const buttonColor = ref('#98eb8f');
const borderColor = ref('#3d1e6d');

const submitCustomization = () => {
  document.documentElement.style.setProperty('--logo-url', `url(${logo.value})`);
  document.documentElement.style.setProperty('--background-color', backgroundColor.value);
  document.documentElement.style.setProperty('--text-color', textColor.value);
  document.documentElement.style.setProperty('--button-color', buttonColor.value);
  document.documentElement.style.setProperty('--border-color', borderColor.value);
};
</script>

<style scoped>
.customization-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.form-container {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: #1c1c3c;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.customization-page {
  --logo-url: url('../assets/logoSN.png');
  --background-color: #141529;
  --text-color: #c3b8e0;
  --button-color: #98eb8f;
  --border-color: #3d1e6d;
}
</style>
