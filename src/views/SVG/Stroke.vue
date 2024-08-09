<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Stroke</header-h1>
  <!-- 用于设置 SVG 元素笔触样式的实用程序 -->
  <paragraph-h2>设置描边颜色</paragraph-h2>
  <!-- 使用 stroke-* 实用程序来改变 SVG 的描边颜色 -->
  <svg class="stroke-cyan-500">
    <!-- ... -->
  </svg>
</template>

<style scoped></style>
