<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Style</header-h1>
  <!-- 用于控制元素边框样式的实用程序 -->
  <paragraph-h2>设置边框样式</paragraph-h2>
  <!-- 使用 border-* 控制元素的边框样式 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3 *:border-2"
  >
    <div class="aspect-square h-14 border-dashed border-sky-300"></div>
    <div class="aspect-square h-14 border-solid border-sky-300"></div>
    <div class="aspect-square h-14 border-dotted border-sky-300"></div>
    <div class="aspect-square h-14 border-double border-sky-300"></div>
  </div>
  <!-- 没有风格： 使用 border-none 从元素中删除现有的边框样式 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
