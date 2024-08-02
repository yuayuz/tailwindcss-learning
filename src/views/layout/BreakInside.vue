<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>BreakInside</header-h1>
  <!--
  使用 break-inside-* 实用程序来控制元素中列或分页符的行为方式。
  例如，使用 break-inside-avoid-column 实用程序来避免元素中的列分页符
  -->
  <p-h2>使用 break-inside-avoid-column 实用程序来避免元素中的列分页符</p-h2>
  <div class="columns-2 gap-5 *:bg-violet-400">
    <p class="">columns-1</p>
    <p class="break-inside-avoid-column">1</p>
    <p>columns-2</p>
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
