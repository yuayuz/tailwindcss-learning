<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Justify Items</header-h1>
  <!-- 用于控制网格项如何沿其内联轴对齐 -->
  <p-h2>Start</p-h2>
  <!--使用 justify-items-start 调整网格项相对于其内联轴的起点的对齐方式 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-2 justify-items-start gap-5 border *:m-3 *:h-12 *:w-12 *:content-center *:bg-pink-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>End</p-h2>
  <!-- justify-items-end调整网格项相对于其内联轴末端的对齐 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-2 justify-items-end gap-5 border *:m-3 *:h-12 *:w-12 *:content-center *:bg-pink-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>Center</p-h2>
  <!--使用 justify-items-center 沿行内轴对齐网格项 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-2 justify-items-center gap-5 border *:m-3 *:h-12 *:w-12 *:content-center *:bg-pink-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>Stretch</p-h2>
  <!--使用 justify-items-stretch 沿其内联轴拉伸项目 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 grid-rows-2 justify-items-stretch gap-5 border *:m-3 *:h-12 *:content-center *:bg-pink-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
