<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Flex Shrink</header-h1>
  <!-- 用于控制弹性项目如何收缩 -->
  <p-h2>Shrink 允许弹性项目收缩</p-h2>
  <!-- 使用 shrink 允许弹性项目收缩 -->
  <div
    class="mx-auto flex max-w-xs border bg-slate-50 shadow *:m-3 *:h-14 *:content-center *:bg-red-400 *:text-center"
  >
    <div class="w-14 flex-none">1</div>
    <div class="w-64 shrink">2</div>
    <div class="w-14 flex-none">3</div>
  </div>
  <p-h2>Don’t shrink</p-h2>
  <!-- 使用 shrink-0 防止弹性项目收缩 -->
  <div
    class="mx-auto flex max-w-xs border bg-slate-50 shadow *:m-3 *:h-14 *:content-center *:bg-red-400 *:text-center"
  >
    <div class="w-14 flex-none">1</div>
    <div class="w-64 shrink-0">2</div>
    <div class="w-14 flex-none">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
