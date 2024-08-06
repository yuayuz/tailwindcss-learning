<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Grid Auto Rows</header-h1>
  <!-- 用于控制隐式创建的网格行大小 -->
  <p-h2>隐式创建的网格行的大小</p-h2>
  <!-- 使用 auto-rows-* 来控制隐式创建的网格行的大小 -->
  <div
    class="mx-auto grid max-w-xl shrink grid-flow-row auto-rows-auto grid-cols-2 gap-5 border *:content-center *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
