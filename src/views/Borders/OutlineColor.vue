<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Outline Color</header-h1>
  <!-- 用于控制元素轮廓颜色的实用程序 -->
  <paragraph-h2>设置轮廓颜色</paragraph-h2>
  <!-- 使用 outline-* 实用程序来改变元素轮廓的颜色 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around divide-sky-500 border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:text-center *:leading-10 *:outline"
  >
    <div class="outline-2 outline-red-400">01</div>
    <div class="outline-2 outline-green-400">02</div>
    <div class="outline-2 outline-sky-400">03</div>
  </div>
  <paragraph-h2>改变不透明度</paragraph-h2>
  <!-- 使用颜色不透明度修饰符来控制元素轮廓颜色的不透明度 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around divide-sky-500 border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:text-center *:leading-10 *:outline"
  >
    <div class="outline-2 outline-red-400/25">01</div>
    <div class="outline-2 outline-green-400/50">02</div>
    <div class="outline-2 outline-sky-400/75">03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
