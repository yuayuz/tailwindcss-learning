<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Grid Column Start / End</header-h1>
  <!-- 用于控制元素如何调整大小以及如何在网格列中放置 -->
  <p-h2>跨越列</p-h2>
  <!-- 使用 col-span-* 实用程序使元素跨越 n 列 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-3 gap-5 border bg-slate-50 p-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div class="col-span-2">4</div>
    <div>5</div>
    <div>6</div>
    <div class="col-span-2">7</div>
  </div>
  <p-h2>起始线和结束线</p-h2>
  <!-- 
  使用 col-start-* 和 col-end-* 实用程序使元素在第 n 条网格线上开始或结束。
  它们还可以与 col-span-* 实用程序结合使用，以跨越特定数量的列。
  请注意，CSS 网格线从 1 开始，而不是从 0 开始，
  因此 6 列网格中的全宽元素将从第 1 行开始，到第 7 行结束。 
  -->
  <div
    class="mx-auto grid max-w-xl shrink grid-cols-6 gap-5 border bg-slate-50 p-3 *:h-10 *:content-center *:rounded-full *:bg-blue-400 *:text-center"
  >
    <div class="col-start-2 col-end-6">1</div>
    <div class="col-start-1 col-end-3">2</div>
    <div class="col-start-4 col-end-7">3</div>
    <div class="col-start-1 col-end-7">4</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
