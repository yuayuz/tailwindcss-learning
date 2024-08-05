<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Width</header-h1>
  <!-- 用于设置元素宽度 -->
  <p-h2>固定宽度</p-h2>
  <!-- 使用 w-px、w-1 和 w-64 等将元素设置为固定宽度 -->
  <div
    class="mx-auto max-w-xl shrink space-y-3 border p-4 *:m-3 *:h-10 *:content-center *:bg-pink-400 *:text-center"
  >
    <div class="w-12">w-12</div>
    <div class="w-24">w-24</div>
    <div class="w-36">w-36</div>
    <div class="w-64">w-64</div>
  </div>
  <p-h2>百分比宽度</p-h2>
  <!-- 使用 w-full、w-1/2 和 w-2/5 等将元素设置为基于百分比的宽度 -->
  <div class="mx-auto max-w-xl shrink space-y-3 border p-4 *:m-3 *:h-10 *:space-x-3">
    <div class="flex *:content-center *:bg-sky-400 *:text-center">
      <div class="w-1/2">w-1/2</div>
      <div class="w-1/2">w-1/2</div>
    </div>
    <div class="flex *:content-center *:bg-sky-400 *:text-center">
      <div class="w-1/3">w-1/3</div>
      <div class="w-2/3">w-2/3</div>
    </div>
    <div class="flex *:content-center *:bg-sky-400 *:text-center">
      <div class="w-full">w-full</div>
    </div>
  </div>
  <p-h2>视口宽度</p-h2>
  <!-- 使用 w-screen 使元素跨越视口的整个宽度 -->
  <div class="flex h-10 w-screen items-center justify-center bg-green-400">
    <div>w-screen</div>
  </div>
  <!--
  重置宽度: w-auto 如果需要在特定条件下（例如在特定断点处）
  删除元素的指定宽度，则该实用程序会很有用
  -->
</template>
<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
