<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>order</header-h1>
  <!-- 用于控制弹性和网格项顺序 -->
  <p-h2>弹性项目和网格项目的排序</p-h2>
  <!-- 使用 order-* 实用程序以与 DOM 中出现的顺序不同的顺序呈现 flex 和 grid 项目。 -->
  <div
    class="mx-auto flex max-w-xl shrink border *:m-3 *:h-14 *:flex-grow *:content-center *:bg-green-400 *:text-center"
  >
    <div class="order-last">1</div>
    <div>2</div>
    <div>3</div>
  </div>

  <p-h2>使用负值</p-h2>
  <!-- 要使用负顺序值，请在类名前加上破折号以将其转换为负值 -->
  <div
    class="mx-auto flex max-w-xl shrink border *:m-3 *:h-14 *:flex-grow *:content-center *:bg-green-400 *:text-center"
  >
    <div>1</div>
    <div class="-order-1">2</div>
    <div>3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
