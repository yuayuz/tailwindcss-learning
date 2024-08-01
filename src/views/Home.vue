<script setup lang="ts">
import router from '@/router'
import HoverFocusAndOtherStates from '@/views/coreConcepts/PseudoClasses.vue'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <h1 class="padding bg m-1 bg-sky-400 p-1">Home</h1>

  <h2 class="m-1 bg-violet-300 p-1">Core Concepts</h2>
  <button
    @click="handleRouter('PseudoClasses')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    PseudoClasses
  </button>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
