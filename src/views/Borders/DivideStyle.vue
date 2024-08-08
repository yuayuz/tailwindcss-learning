<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Divide Style</header-h1>
  <!-- 用于控制元素之间边框样式的实用程序 -->
  <paragraph-h2>设置分隔样式</paragraph-h2>
  <!-- 使用 divide-* 实用程序来控制元素之间的边框样式 -->
  <div
    class="mx-auto mt-4 grid max-w-xs grid-rows-3 divide-y-4 divide-double divide-slate-200 border bg-slate-50 shadow *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
