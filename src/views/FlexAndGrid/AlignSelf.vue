<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Alignself</header-h1>
  <!-- 用于控制如何沿其容器的横轴定位单个弹性或网格项目 -->
  <p-h2>Auto</p-h2>
  <!-- 使用 self-auto 根据容器 align-items 属性的值来对齐项目 -->
  <div
    class="mx-auto flex h-36 max-w-xl shrink border *:m-3 *:aspect-square *:flex-grow *:content-center *:bg-cyan-500 *:text-center"
  >
    <div class="h-12">01</div>
    <div class="self-auto">02</div>
    <div class="h-12">03</div>
  </div>
  <p-h2>Start</p-h2>
  <!-- 使用 self-start 将项目与容器轴的起点对齐，无论容器的 align-items 值如何 -->
  <div
    class="mx-auto flex h-36 max-w-xl shrink items-stretch border *:m-3 *:flex-grow *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div class="h-10 self-start">02</div>
    <div>03</div>
  </div>
  <p-h2>Center</p-h2>
  <!-- 使用 self-center 沿容器交叉轴的中心对齐项目，无论容器的 align-items 值如何 -->
  <div
    class="mx-auto flex h-36 max-w-xl shrink items-stretch border *:m-3 *:flex-grow *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div class="h-10 self-center">02</div>
    <div>03</div>
  </div>
  <p-h2>End</p-h2>
  <!-- 使用 self-end 将项目与容器交叉轴的末端对齐，无论容器的 align-items 值如何 -->
  <div
    class="mx-auto flex h-36 max-w-xl shrink items-stretch border *:m-3 *:flex-grow *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div class="h-10 self-end">02</div>
    <div>03</div>
  </div>
  <p-h2>s Stretch</p-h2>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
