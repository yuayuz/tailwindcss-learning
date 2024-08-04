<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Justify Content</header-h1>
  <!-- 用于控制弹性项目和网格项目如何沿容器主轴定位 -->
  <p-h2>Start</p-h2>
  <!-- 用于 justify-start 调整项目相对于容器主轴的起点的对齐 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-start border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>center</p-h2>
  <!-- 用于 justify-center 沿着容器主轴的中心对齐项目 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-center border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>End</p-h2>
  <!-- 使用 justify-end 调整项目相对于容器主轴末端的对齐 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-end border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>Space between</p-h2>
  <!-- 使用 justify-around 沿容器主轴对齐项目，以便每个项目的每一侧都有相同的空间 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-between border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>Space around</p-h2>
  <!-- 使用 justify-around 沿容器主轴对齐项目，以便每个项目的每一侧都有相同的空间 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-around border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>Space evenly</p-h2>
  <!-- 
  使用 justify-evenly 沿容器的主轴对齐项目，使得每个项目周围有相等的空间，
  但也考虑到使用时每个项目之间通常看到的空间加倍 
  -->
  <div
    class="mx-auto flex max-w-xl shrink justify-evenly border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>Stretch</p-h2>
  <!--使用 justify-stretch允许内容项填充容器主轴上的可用空间 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-flow-col justify-stretch border *:m-3 *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>Normal</p-h2>
  <!--使用 justify-normal 将内容项打包在其默认位置，就好像 justify-content 未设置任何值一样 -->
  <div
    class="mx-auto flex max-w-xl shrink justify-normal border *:m-3 *:aspect-square *:h-12 *:content-center *:bg-cyan-500 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
