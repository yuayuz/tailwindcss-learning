<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Grid Auto Flow</header-h1>
  <!-- 用于控制如何自动放置网格中的元素 -->
  <p-h2>控制网格元素放置</p-h2>
  <!-- 使用 grid-flow-* 来控制自动放置算法如何针对网格布局进行工作 -->
  <div
    class="mx-auto grid max-w-xl grid-flow-row-dense grid-cols-4 gap-5 *:h-10 *:content-center *:rounded-full *:bg-violet-400 *:text-center"
  >
    <div>1</div>
    <div class="col-span-2">2</div>
    <div class="col-span-3">3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
