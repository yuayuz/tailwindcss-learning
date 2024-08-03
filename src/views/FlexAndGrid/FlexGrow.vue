<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Flex Grow</header-h1>
  <!-- 用于控制弹性项目如何增长 -->
  <p-h2>Grow</p-h2>
  <!-- 用于 grow 允许弹性项目扩展以填充任何可用空间 -->
  <div
    class="mx-auto flex max-w-xl border bg-slate-50 shadow *:m-3 *:h-14 *:content-center *:bg-red-400 *:text-center"
  >
    <div class="w-14 flex-none">1</div>
    <div class="flex-grow">2</div>
    <div class="w-14 flex-none">3</div>
  </div>
  <p-h2>Don’t grow</p-h2>
  <!-- 使用 grow-0 防止弹性项目增长 -->
  <div
    class="mx-auto flex max-w-xl border bg-slate-50 shadow *:m-3 *:h-14 *:content-center *:bg-red-400 *:text-center"
  >
    <div class="w-14 grow">1</div>
    <div class="w-14 grow-0">2</div>
    <div class="w-14 grow">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
