<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Outline Style</header-h1>
  <!-- 用于控制元素轮廓样式的实用程序 -->
  <paragraph-h2>设置轮廓样式</paragraph-h2>
  <!-- 使用 outline-* 实用程序来改变元素轮廓的样式 -->
  <div
    class="mx-auto mt-4 flex max-w-xs place-content-around border bg-slate-50 p-4 shadow *:aspect-square *:h-14 *:content-center *:rounded-md *:border *:border-slate-200 *:text-center *:leading-10"
  >
    <div class="outline outline-2 outline-red-400/25">01</div>
    <div class="outline-dashed outline-2 outline-green-400/50">02</div>
    <div class="outline-dotted outline-2 outline-sky-400/75">03</div>
    <div class="outline-double outline-2 outline-amber-400/75">04</div>
  </div>
  <!--
  移除轮廓: 使用 outline-none 隐藏聚焦元素上的默认浏览器轮廓。
  强烈建使用此实用程序时应用自己的焦点样式以实现可访问性
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
