<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Contrast</header-h1>
  <!-- 用于将对比过滤器应用于元素的实用程序 -->
  <paragraph-h2>改变元素对比度</paragraph-h2>
  <!-- 使用 contrast-* 实用程序来控制元素的对比度 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg contrast-50">1</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg contrast-100">2</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg contrast-125">3</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg contrast-200">4</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
