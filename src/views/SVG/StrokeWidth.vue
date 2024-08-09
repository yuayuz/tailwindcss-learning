<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Stroke Width</header-h1>
  <!-- 用于设置 SVG 元素笔触宽度样式的实用程序。 -->
  <paragraph-h2>设置描边宽度</paragraph-h2>
  <!-- 使用 stroke-* 实用程序设置 SVG 的描边宽度 -->
  <svg class="stroke-1"></svg>
  <svg class="stroke-2"></svg>
</template>

<style scoped></style>
