<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Align Items</header-h1>
  <!-- 用于控制弹性项目和网格项目沿容器交叉轴的定位 -->
  <p-h2>Stretch</p-h2>
  <!-- 使用 items-stretch 拉伸项目以填充容器的交叉轴 -->
  <div
    class="mx-auto flex h-32 max-w-xl shrink items-stretch border *:mx-3 *:flex-grow *:content-center *:bg-violet-400 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <p-h2>Start</p-h2>
  <!-- 使用 items-start 将项目与容器交叉轴的起点对齐 -->
  <div
    class="mx-auto flex h-32 max-w-xl shrink items-start border *:mx-3 *:h-10 *:flex-grow *:content-center *:bg-violet-400 *:text-center"
  >
    <div class="py-4">1</div>
    <div class="py-12">2</div>
    <div class="py-8">3</div>
  </div>
  <p-h2>Center</p-h2>
  <!-- 使用 items-center 沿容器横轴的中心对齐项目 -->
  <div
    class="mx-auto flex h-32 max-w-xl shrink items-center border *:mx-3 *:h-10 *:flex-grow *:content-center *:bg-violet-400 *:text-center"
  >
    <div class="py-4">1</div>
    <div class="py-12">2</div>
    <div class="py-8">3</div>
  </div>
  <p-h2>End</p-h2>
  <!-- 使用 items-end 将项目与容器横轴的末端对齐 -->
  <div
    class="mx-auto flex h-32 max-w-xl shrink items-end border *:mx-3 *:h-10 *:flex-grow *:content-center *:bg-violet-400 *:text-center"
  >
    <div class="py-4">1</div>
    <div class="py-12">2</div>
    <div class="py-8">3</div>
  </div>
  <p-h2>Baseline</p-h2>
  <!-- 使用 items-baseline 沿容器的横轴对齐项目，使得所有基线对齐 -->
  <div
    class="mx-auto flex h-32 max-w-xl shrink items-baseline border *:mx-3 *:h-10 *:flex-grow *:content-center *:bg-violet-400 *:text-center"
  >
    <div class="py-4">1</div>
    <div class="py-12">2</div>
    <div class="py-8">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
