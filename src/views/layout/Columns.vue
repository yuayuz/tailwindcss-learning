<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Columns</header-h1>
  <!-- 用于控制元素内列数的实用程序。 -->
  <p-h2>columns 根据列数添加;使用 gap-x 指定列之间的宽度</p-h2>
  <!-- 设置列间隙: 要指定列之间的宽度，可以使用gap-x实用程序 -->
  <div class="columns-3 gap-3">
    <div class="aspect-square bg-sky-400">columns-1</div>
    <div class="aspect-square bg-pink-400">columns-2</div>
    <div class="aspect-square bg-violet-400">columns-3</div>
  </div>

  <p-h2>根据列宽添加</p-h2>
  <!-- 根据列宽添加 -->
  <!-- 使用诸如columns-xs和之类的实用程序columns-sm来为元素内的内容设置理想的列宽，列数（计数）会自动调整以适应该值 -->
  <div class="columns-xl">
    <div class="aspect-square bg-sky-400">columns-1</div>
    <div class="aspect-square bg-pink-400">columns-2</div>
    <div class="aspect-square bg-violet-400">columns-3</div>
  </div>

  <!--
  悬停、聚焦和其他状态
  Tailwind 允许使用变体修饰符在不同状态下有条件地应用实用程序类。
  例如，使用 hover:columns-3 仅在悬停时应用 columns-3 实用程序。
  -->
  <p-h2>悬停时应用 columns-3</p-h2>
  <div class="columns-2 hover:columns-3">
    <div class="aspect-square bg-sky-400">columns-1</div>
    <div class="aspect-square bg-pink-400">columns-2</div>
    <div class="aspect-square bg-violet-400">columns-3</div>
  </div>

  <!--
  断点和媒体查询
  可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。
  例如，使用 md:columns-3 仅在中等屏幕尺寸及以上时应用该 columns-3 实用程序。
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
