<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Grid Row Start / End</header-h1>
  <!-- 用于控制元素如何调整大小以及如何在网格行中放置 -->
  <p-h2>跨行</p-h2>
  <div
    class="mx-auto grid max-w-xl grid-flow-col grid-rows-3 gap-5 *:content-center *:bg-green-400 *:text-center"
  >
    <div class="row-span-3">1</div>
    <div class="col-span-2">2</div>
    <div class="col-span-2 row-span-2">3</div>
    <div class="h-10">4</div>
    <div>5</div>
    <div>6</div>
  </div>
  <p-h2>起始线和结束线</p-h2>
  <!--
  使用 row-start-* 和 row-end-* 实用程序使元素在第 n 条网格线上开始或结束。
  它们还可以与 row-span-* 实用程序结合使用，以跨越特定数量的行。
  请注意，CSS 网格线从 1 开始，而不是从 0 开始，
  因此 3 行网格中的全高元素将从第 1 行开始，到第 4 行结束。
  -->
  <div
    class="mx-auto grid max-w-xl grid-flow-col grid-rows-3 gap-5 *:content-center *:bg-green-400 *:text-center"
  >
    <div class="row-start-2 row-end-4">1</div>
    <div class="row-start-1 row-end-3">2</div>
    <div class="col-span-2 row-start-1 row-end-4">3</div>
    <div class="h-10">4</div>
    <div>5</div>
    <div>6</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
