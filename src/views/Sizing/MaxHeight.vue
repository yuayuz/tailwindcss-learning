<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Max-Height</header-h1>
  <!-- 用于设置元素最大高度 -->
  <p-h2>设置最大高度</p-h2>
  <!-- 使用 max-h-* 设置元素的最大高度 -->
  <div
    class="mx-auto flex h-96 max-w-xl items-end space-x-3 border bg-slate-50 shadow-2xl *:mx-4 *:h-full *:w-10 *:content-end *:rounded-full *:bg-cyan-500 *:pb-3 *:text-center"
  >
    <div class="max-h-96">max-h-96</div>
    <div class="max-h-80">max-h-80</div>
    <div class="max-h-64">max-h-64</div>
    <div class="max-h-48">max-h-48</div>
    <div class="max-h-40">max-h-40</div>
    <div class="max-h-32">max-h-32</div>
    <div class="max-h-24">max-h-24</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
