<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Outline Width</header-h1>
  <!-- 用于控制元素轮廓宽度的实用程序 -->
  <paragraph-h2>设置轮廓宽度</paragraph-h2>
  <!-- 使用outline-*实用程序来改变元素轮廓的宽度 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around divide-sky-500 border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:text-center *:leading-10 *:outline *:outline-red-400"
  >
    <div class="outline-1">01</div>
    <div class="outline-2">02</div>
    <div class="outline-4">03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
