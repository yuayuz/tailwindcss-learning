<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>MinWidth</header-h1>
  <!-- 用于设置元素最小宽度 -->
  <p-h2>设置最小宽度</p-h2>
  <!-- 使用 min-w-* 设置元素的最小宽度 -->
  <div
    class="m-4 mx-auto max-w-xl shrink space-y-3 border p-4 *:h-9 *:w-min *:shrink *:content-center *:rounded-full *:border *:bg-violet-400 *:text-center"
  >
    <div class="min-w-80">min-w-80</div>
    <div class="min-w-64">min-w-64</div>
    <div class="min-w-48">min-w-48</div>
    <div class="min-w-40">min-w-40</div>
    <div class="min-w-32">min-w-32</div>
    <div class="min-w-24">min-w-24</div>
    <div class="min-w-full">min-w-full</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
