<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Blur</header-h1>
  <!-- 用于将模糊过滤器应用于元素的实用程序 -->
  <paragraph-h2>模糊元素</paragraph-h2>
  <!-- 使用 blur-* 实用程序来模糊元素。 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg">1</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg blur-sm">2</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg blur-lg">3</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg blur-2xl">4</div>
  </div>
  <!-- 移除过滤器： 要一次删除元素上的所有过滤器，请使用以下 filter-none 实用程序 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
