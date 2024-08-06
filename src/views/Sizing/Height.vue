<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Height</header-h1>
  <!-- 用于设置元素高度 -->
  <p-h2>固定高度</p-h2>
  <!-- 使用 h-px、h-1 和 h-64 等将元素设置为固定高度 -->
  <div
    class="mx-auto flex max-w-xl items-end space-x-3 border bg-slate-50 shadow-2xl *:mx-4 *:w-10 *:content-end *:rounded-full *:bg-cyan-500 *:pb-3 *:text-center"
  >
    <div class="h-96">h-96</div>
    <div class="h-80">h-80</div>
    <div class="h-64">h-64</div>
    <div class="h-48">h-48</div>
    <div class="h-40">h-40</div>
    <div class="h-32">h-32</div>
    <div class="h-24">h-24</div>
  </div>
  <!-- 全高: 用于 h-full 将元素的高度设置为其父元素的 100％，只要父元素具有定义的高度。 -->
  <!-- 视口高度: 用于 h-screen 使元素跨越视口的整个高度 -->
  <p-h2
    >动态视口高度: 使用 h-dvh 使元素跨越视口的整个高度，该高度随着浏览器 UI 的扩展或收缩而变化
  </p-h2>
  <div class="mx-auto h-dvh max-w-xs bg-pink-400 text-center">
    高度随着浏览器 UI 的扩展或收缩而变化
  </div>
  <!-- 大视口高度: 用于 h-lvh 将元素的高度设置为视口的最大可能高度。其行为与100vh 相同 -->
  <!-- 小视口高度：用于h-svh将元素的高度设置为视口的最小可能高度 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
