<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Grid Template Rows</header-h1>
  <!-- 用于指定网格布局中的行的实用程序。 -->
  <p-h2>指定网格中的行</p-h2>
  <!-- 使用 grid-rows-* 实用程序创建具有 n 个大小相等的行的网格 -->
  <div
    class="mx-auto grid max-w-xl grid-flow-col grid-rows-3 gap-5 *:h-10 *:content-center *:rounded-full *:bg-green-400 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
  <p-h2>子网格</p-h2>
  <!-- 使用 grid-rows-subgrid 来采用由该项目的父级定义的行轨道 -->
  <div
    class="mx-auto grid max-w-xl grid-flow-col grid-rows-3 gap-5 *:h-10 *:content-center *:rounded-full *:text-center"
  >
    <div class="bg-green-400">1</div>
    <div class="bg-green-400">2</div>
    <div class="bg-green-400">3</div>
    <div class="bg-green-400">4</div>
    <div class="bg-green-400">5</div>
    <div class="bg-green-400">6</div>
    <div class="bg-green-400">7</div>
    <div class="bg-green-400">8</div>
    <div class="bg-green-400">9</div>
    <div class="row-span-3 grid grid-rows-subgrid bg-white">
      <div class="row-start-2 content-center rounded-full bg-green-400 text-center">10</div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
