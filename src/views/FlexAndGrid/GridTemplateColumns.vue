<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Grid Template Columns</header-h1>
  <!-- 用于指定网格布局中的列 -->
  <p-h2>指定网格中的列</p-h2>
  <!-- 使用 grid-cols-* 创建具有n 个大小相等的列的网格 -->
  <div
    class="mx-auto grid max-w-xl grid-cols-4 gap-5 *:h-10 *:content-center *:rounded-full *:bg-violet-400 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
  <p-h2>子网格</p-h2>
  <!-- 使用 grid-cols-subgrid 来采用由该项目的父级定义的列轨道 -->
  <div
    class="mx-auto grid max-w-xl grid-cols-4 gap-5 *:h-10 *:content-center *:rounded-full *:text-center"
  >
    <div class="bg-violet-400">1</div>
    <div class="bg-violet-400">2</div>
    <div class="bg-violet-400">3</div>
    <div class="bg-violet-400">4</div>
    <div class="bg-violet-400">5</div>
    <div class="col-span-3 grid grid-cols-subgrid">
      <div class="col-start-2 h-10 content-center rounded-full bg-pink-600 text-center">6</div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
