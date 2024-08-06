<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Place Content (出错）</header-h1>
  <!-- 用于控制如何同时调整和排列内容 -->
  <p-h2>Center</p-h2>
  <!-- 使用 place-content-center 在交叉轴的中心打包物品 -->
  <div class="mx-auto h-48 max-w-xl place-content-center border shadow">
    <div
      class="grid h-28 w-28 grid-cols-2 gap-4 bg-slate-50 *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>Start</p-h2>
  <div class="mx-auto h-48 max-w-xl place-content-start border shadow">
    <div
      class="grid h-28 w-28 grid-cols-2 gap-4 bg-slate-50 *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>End</p-h2>
  <div class="mx-auto h-48 max-w-xl place-content-end border shadow">
    <div
      class="grid h-28 w-28 grid-cols-2 gap-4 bg-slate-50 *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>between</p-h2>
  <div class="mx-auto h-48 max-w-xl border shadow">
    <div
      class="grid h-28 w-28 grid-cols-2 place-content-between gap-4 bg-slate-50 *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>around</p-h2>
  <div class="mx-auto h-48 max-w-xl border shadow">
    <div
      class="grid h-28 w-28 grid-cols-2 place-content-around gap-4 bg-slate-50 *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>evenly</p-h2>
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-2 place-content-evenly gap-4 border *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
  <p-h2>stretch</p-h2>
  <div
    class="mx-auto grid h-48 max-w-xl shrink grid-cols-2 place-content-stretch gap-4 border *:h-12 *:w-12 *:content-center *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
