<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Rotate</header-h1>
  <!-- 用于通过变换来旋转元素的实用程序 -->
  <paragraph-h2>旋转元素</paragraph-h2>
  <!-- 使用 rotate-* 实用程序来旋转元素 -->
  <div class="mx-auto mt-4 flex h-44 max-w-xl place-content-evenly items-center p-6 shadow">
    <div class="border">
      <p class="text-center">rotate-45</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 rotate-45 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">rotate-90</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 rotate-90 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div class="border">
      <p class="text-center">rotate-180</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 rotate-180 scale-75 border object-contain"
        alt="photo"
      />
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
