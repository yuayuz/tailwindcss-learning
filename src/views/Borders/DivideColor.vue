<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Divide Color</header-h1>
  <!-- 用于控制元素之间边框颜色的实用程序 -->
  <paragraph-h2>设置分隔颜色</paragraph-h2>
  <!-- 使用 divide-* 实用程序控制元素之间的边框颜色 -->
  <div
    class="mx-auto mt-4 grid max-w-xs grid-rows-3 divide-y divide-sky-500 border bg-slate-50 shadow *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <paragraph-h2>改变不透明度</paragraph-h2>
  <div
    class="mx-auto mt-4 grid max-w-xs grid-rows-3 divide-y divide-sky-500/[.50] border bg-slate-50 shadow *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
