<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Grid Auto Columns</header-h1>
  <!-- 用于控制隐式创建的网格列大小 -->
  <p-h2>隐式创建的网格列的大小</p-h2>
  <!-- 使用 auto-cols-* 实用程序来控制隐式创建的网格列的大小 -->
  <div
    class="mx-auto grid max-w-xl shrink auto-cols-max grid-flow-col gap-5 border *:h-10 *:content-center *:bg-blue-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
