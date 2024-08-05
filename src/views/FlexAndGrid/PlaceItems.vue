<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Place Items</header-h1>
  <!-- 用于控制如何同时调整和排列项目 -->
  <p-h2>Start: place-items-start 将网格项放置在两个轴上的网格区域的开始处</p-h2>
  <!-- 使用 place-items-start 将网格项放置在两个轴上的网格区域的开始处 -->
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 place-items-start gap-4 border *:h-12 *:w-12 *:content-center *:bg-violet-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>End: place-items-end 将网格项放置在两个轴上的网格区域的末端</p-h2>
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 place-items-end gap-4 border *:h-12 *:w-12 *:content-center *:bg-violet-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>Center: place-items-center 将网格项放置在两个轴上的网格区域的中心</p-h2>
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 place-items-center gap-4 border *:h-12 *:w-12 *:content-center *:bg-violet-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
  </div>
  <p-h2>Stretch: place-items-stretch 在两个轴上沿网格区域拉伸项目</p-h2>
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-3 place-items-stretch gap-4 border *:content-center *:bg-violet-400 *:text-center"
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
