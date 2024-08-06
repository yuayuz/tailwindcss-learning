<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <!-- 用于控制程序长宽比 -->
  <header class="flex w-full items-center justify-center">
    <h1 class="m-2 bg-violet-900 p-2 text-slate-100">用于控制程序长宽比</h1>
  </header>

  <!--
      类             特性
  aspect-auto	  aspect-ratio: auto;
  aspect-square	aspect-ratio: 1 / 1;
  aspect-video	aspect-ratio: 16 / 9;
  -->
  <p class="m-1 bg-violet-300 p-1">示例</p>
  <div class="aspect-auto w-1/4 bg-sky-400">auto</div>
  <div class="aspect-square w-1/4 bg-pink-400">1/1</div>
  <div class="aspect-video w-1/4 bg-violet-400">16/9</div>

  <p class="m-1 bg-violet-300 p-1">Hover, focus, and other states</p>
  <!--
  Tailwind 允许使用变体修饰符在不同状态下有条件地应用实用程序类。
  例如，使用 hover:aspect-square 仅在悬停时应用 aspect-square 实用程序。
  -->
  <div class="aspect-square w-1/4 bg-sky-400 hover:aspect-video">
    悬停时变为1/1,其他时间变为16/9
  </div>

  <p class="m-1 bg-violet-300 p-1">断点和媒体查询</p>
  <!--
  断点和媒体查询
  还可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。
  例如，使用仅在中等屏幕尺寸及以上时 md:aspect-square 应用该 aspect-square 实用程序。
  -->
  <div class="aspect-video w-1/4 bg-pink-400 md:aspect-square">
    中等屏幕以上变为1/1.其他时间变为16/9
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
