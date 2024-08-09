<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Translate</header-h1>
  <!-- Utilities for translating elements with transform -->
  <paragraph-h2>Translating an element</paragraph-h2>
  <!-- Use the translate-x-* and translate-y-* utilities to translate an element. -->
  <div class="mx-auto mt-4 flex h-44 max-w-xl place-content-evenly items-center p-6 shadow">
    <div class="border">
      <p class="text-center">translate-y-6</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-75"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 translate-y-6 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">-translate-x-6</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 -translate-x-6 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">translate-x-6</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="absolute h-24 w-24 border object-contain opacity-50"
        alt="photo"
      />
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="relative h-24 w-24 translate-x-6 border object-contain"
        alt="photo"
      />
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
