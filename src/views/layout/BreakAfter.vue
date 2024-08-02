<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Break After Break Before And Break Inside</header-h1>
  <!-- 用于控制元素之后列或页面如何分页的实用程序 -->

  <!-- 使用 break-after-* 实用程序控制元素后的分栏或分页符的行为方式 -->
  <p-h2>使用 break-after-column 强制在该元素后进行分栏</p-h2>
  <div class="columns-2 gap-5 *:bg-sky-400">
    <p>columns-1</p>
    <p class="break-after-column">1</p>
    <p>columns-2</p>
    <p>2</p>
  </div>

  <!--
  悬停、聚焦和其他状态
  Tailwind 允许使用变体修饰符在不同状态下有条件地应用实用程序类。
  例如，使用 hover:break-after-column 仅在悬停时应用 break-after-column 实用程序
  -->
  <!--
  断点和媒体查询
  可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。
  例如，使用 break-after-column 仅在中等屏幕尺寸及以上时
  应用 md:break-after-column 该实用程序。
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
