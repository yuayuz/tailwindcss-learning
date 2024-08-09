<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Resize</header-h1>
  <!-- 使用控制如何调整元素大小的实用程序 -->
  <paragraph-h2>在所有方向上调整大小</paragraph-h2>
  <!-- 使用 resize使元素在水平和垂直方向上可调整大小 -->
  <textarea class="resize rounded-md border"></textarea>
  <paragraph-h2>垂直调整大小</paragraph-h2>
  <!-- 使用 resize-y 使元素垂直方向可调整大小 -->
  <textarea class="resize-y rounded-md border"></textarea>
  <paragraph-h2>水平调整大小</paragraph-h2>
  <!-- 使用 resize-x 使元素可水平调整大小 -->
  <textarea class="resize-x rounded-md border"></textarea>
  <paragraph-h2>防止调整大小</paragraph-h2>
  <!-- 使用 resize-none 防止元素被调整大小 -->
  <textarea class="resize-none rounded-md border"></textarea>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
