<script setup lang="ts">
import PH2 from '@/components/ParagraphH2.vue'
import HeaderH1 from '@/components/HeaderH1.vue'
</script>

<template>
  <header-h1>BreakBefore</header-h1>
  <!--
  使用 break-before-* 实用程序来控制元素前的分栏或分页符的行为方式。
  例如，使用 break-before-column 实用程序来强制在元素前进行分栏
  -->
  <p-h2>使用 break-before-column 强制在该元素前进行分栏</p-h2>
  <div class="columns-2 gap-5 *:bg-pink-400">
    <p>columns-1</p>
    <p>1</p>
    <p class="break-before-column">columns-2</p>
    <p>2</p>
  </div>

  <!--
  Tailwind 允许你使用变体修饰符在不同状态下有条件地应用实用程序类,
  还可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
