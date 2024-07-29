<template>
  <div class="q-gutter-sm">
    <q-chip size="1.2em" style="color:#0086f3;opacity: 0.85;background-color: transparent;">
      <q-avatar>
        <img src="../assets/Comp.png" alt="">
      </q-avatar>
      <b>
        Fulana de Tal
      </b>
    </q-chip> <br>
    <q-badge align="bottom"  rounded color="primary" text-color="black" :label="(progress *100)+40">
      <b class="q-ml-sm">XP</b>
    </q-badge>
    <q-linear-progress rounded size="15px" :value="progress" class="q-mt-md" style="width: 10%;">
      <div class="absolute-full flex flex-center">
        <q-badge class="text-bold" color="transparent" text-color="black" :label="progress*100">%</q-badge>
      </div>
    </q-linear-progress>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const progress = ref(0.6)

defineOptions({
  name: 'Avatar'
});
</script>
