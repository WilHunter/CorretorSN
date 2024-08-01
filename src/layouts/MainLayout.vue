<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="background: linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828);">
      <q-toolbar>
        <q-toolbar-title>
          <img src="../assets/logoSN.png" alt="Logo" height="60">
        </q-toolbar-title>
        <q-btn-dropdown class="q-mr-md" flat round dense dropdown-icon="notifications" >
          // implementar notificações
        </q-btn-dropdown>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer style="font-size: medium;background: linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828);color: #0086f3;" show-if-above v-model="leftDrawerOpen" side="left" >
      <div class="q-ma-md">
        <q-avatar><img src="../assets/Comp.png" alt=""></q-avatar>
        Olá, <b>Fulana de Tal</b>
      </div>
      <q-list>
        <q-item to="/">
          <q-item-section avatar>
            <q-icon name="home"></q-icon>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/provas">
          <q-item-section avatar>
            <q-icon name="receipt_long"></q-icon>
          </q-item-section>
          <q-item-section>Prova</q-item-section>
        </q-item>
        <q-item to="/avaliacao">
          <q-item-section avatar>
            <q-icon name="library_books"></q-icon>
          </q-item-section>
          <q-item-section>Redação</q-item-section>
        </q-item>
        <q-item to="/simulados">
          <q-item-section avatar>
            <q-icon name="inventory"></q-icon>
          </q-item-section>
          <q-item-section>Simulado</q-item-section>
        </q-item>
        <q-item to="/sugestao">
          <q-item-section avatar>
            <q-icon name="inventory"></q-icon>
          </q-item-section>
          <q-item-section>Sugestão de Aulas</q-item-section>
        </q-item>
        <!--
        <q-item to="/customization">
          <q-item-section avatar>
            <q-icon name="settings"></q-icon>
          </q-item-section>
          <q-item-section>Configurações</q-item-section>
        </q-item>-->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center" style="background: linear-gradient(235deg, #081828, #0d2741, #0d2741,#081828);">
      <q-toolbar>
        <q-toolbar-title>
          <img class="q-mt-sm" src="../assets/logoSN.png" alt="Logo" height="60">
          <div class="text-caption text-grey-5">
            <b>Copyrigth©{{ currentYear }}</b>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
const logoUrl = ref(getComputedStyle(document.documentElement).getPropertyValue('--logo-url').trim());

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const currentYear = new Date().getFullYear();
</script>

<style scoped>
q-layout {
  background-color: var(--background-color);
  color: var(--text-color);
}

q-toolbar-title img {
  content: var(--logo-url);
}

q-btn {
  color: var(--text-color);
}

q-drawer {
  background-color: var(--background-color);
}

q-list {
  background-color: var(--background-color);
}

q-item {
  color: var(--text-color);
}
</style>
