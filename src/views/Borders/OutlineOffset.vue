<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Outline Offset</header-h1>
  <!-- 用于控制元素轮廓偏移的实用程序 -->
  <paragraph-h2>设置轮廓偏移</paragraph-h2>
  <!-- 使用 outline-* 实用程序来改变元素轮廓的偏移量 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-offset-0 outline-red-400/25">01</div>
    <div class="outline-dashed outline-2 outline-offset-1 outline-green-400/50">02</div>
    <div class="outline-dotted outline-2 outline-offset-2 outline-sky-400/75">03</div>
    <div class="outline-double outline-2 outline-offset-4 outline-amber-400/75">04</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
