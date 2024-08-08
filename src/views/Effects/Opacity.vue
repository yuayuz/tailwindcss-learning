<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Opacity</header-h1>
  <!-- 用于控制元素不透明度的实用程序 -->
  <paragraph-h2>改变元素的不透明度</paragraph-h2>
  <!-- 使用 opacity-* 实用程序来控制元素的不透明度 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 opacity-25 shadow-lg"></div>
    <div class="aspect-square h-14 bg-indigo-400 opacity-50 shadow-lg"></div>
    <div class="aspect-square h-14 bg-indigo-400 opacity-75 shadow-lg"></div>
    <div class="aspect-square h-14 bg-indigo-400 opacity-95 shadow-lg"></div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
