<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Place Self</header-h1>
  <!-- 用于控制如何同时调整和排列单个项目 -->
  <p-h2>Auto</p-h2>
  <!-- place-self-auto 根据容器属性 place-items 的值来对齐项目 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 gap-4 border *:content-center *:bg-green-400 *:text-center"
  >
    <div class="h-12 w-12">01</div>
    <div class="place-self-auto">02</div>
    <div class="h-12 w-12">03</div>
    <div class="h-12 w-12">04</div>
    <div class="h-12 w-12">05</div>
    <div class="h-12 w-12">06</div>
  </div>
  <p-h2>Start</p-h2>
  <!-- place-self-start 将项目与两个轴的起点对齐 -->
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 gap-4 border *:content-center *:bg-green-400 *:text-center"
  >
    <div>01</div>
    <div class="h-12 w-12 place-self-start">02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>Center</p-h2>
  <!-- place-self-center 将项目对齐到两个轴的中心 -->
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 gap-4 border *:content-center *:bg-green-400 *:text-center"
  >
    <div>01</div>
    <div class="h-12 w-12 place-self-center">02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>End</p-h2>
  <!-- place-self-end 将项目与两个轴的末端对齐 -->
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 gap-4 border *:content-center *:bg-green-400 *:text-center"
  >
    <div>01</div>
    <div class="h-12 w-12 place-self-end">02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>stretch</p-h2>
  <!-- place-self-stretch 在两个轴上拉伸项目 -->
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 gap-4 border *:content-center *:bg-green-400 *:text-center"
  >
    <div>01</div>
    <div class="place-self-stretch">02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
