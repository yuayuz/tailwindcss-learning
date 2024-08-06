<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Min-Height</header-h1>
  <!-- 用于设置元素最小高度 -->
  <p-h2>设置最小高度</p-h2>
  <div
    class="mx-auto flex max-w-xl items-end space-x-3 border bg-slate-50 shadow-2xl *:mx-4 *:h-min *:w-10 *:content-end *:rounded-full *:bg-cyan-500 *:pb-3 *:text-center"
  >
    <div class="min-h-96">min-h-96</div>
    <div class="min-h-80">min-h-80</div>
    <div class="min-h-64">min-h-64</div>
    <div class="min-h-48">min-h-48</div>
    <div class="min-h-40">min-h-40</div>
    <div class="min-h-32">min-h-32</div>
    <div class="min-h-24">min-h-24</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
