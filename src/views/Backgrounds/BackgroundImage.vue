<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Image</header-h1>
  <!-- 用于控制元素背景图像的实用程序 -->
  <paragraph-h2>线性渐变</paragraph-h2>
  <!-- 使用 bg-gradient-* 这些实用程序与渐变颜色停止实用程序结合，为元素提供线性渐变背景。 -->
  <div class="m-5 mx-auto max-w-xl space-y-3 border p-4 shadow *:rounded-full">
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
    <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
