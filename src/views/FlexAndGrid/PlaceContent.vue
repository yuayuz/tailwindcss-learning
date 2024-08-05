<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Place Content (出错）</header-h1>
  <!-- 用于控制如何同时调整和排列内容 -->
  <p-h2>Center</p-h2>
  <!-- 使用 place-content-center 在交叉轴的中心打包物品 -->
  <div class="mx-auto h-48 max-w-xl place-content-center shadow border ">
    <div
      class="grid grid-cols-2 w-28 h-28 gap-4 bg-slate-50 *:w-12 *:h-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>Start</p-h2>
  <div class="mx-auto h-48 max-w-xl place-content-start shadow border ">
    <div
      class="grid grid-cols-2 w-28 h-28 gap-4 bg-slate-50 *:w-12 *:h-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>End</p-h2>
  <div class="mx-auto h-48 max-w-xl place-content-end shadow border ">
    <div
      class="grid grid-cols-2 w-28 h-28 gap-4 bg-slate-50 *:w-12 *:h-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>between</p-h2>
  <div class="mx-auto h-48 max-w-xl shadow border ">
    <div
      class="grid grid-cols-2 w-28 place-content-between h-28 gap-4 bg-slate-50 *:w-12 *:h-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>around</p-h2>
  <div class="mx-auto h-48 max-w-xl shadow border ">
    <div
      class="grid grid-cols-2 w-28 place-content-around h-28 gap-4 bg-slate-50 *:w-12 *:h-12 *:content-center *:bg-blue-400 *:text-center"
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
    </div>
  </div>
  <p-h2>evenly</p-h2>
  <div class="grid grid-cols-2 gap-4 place-content-evenly h-48 mx-auto max-w-xl border shrink *:bg-blue-400 *:h-12 *:w-12 *:content-center *:text-center">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
  <p-h2>stretch</p-h2>
  <div class="grid grid-cols-2 gap-4 place-content-stretch h-48 mx-auto max-w-xl border shrink *:bg-blue-400 *:h-12 *:w-12 *:content-center *:text-center">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
