<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Fill</header-h1>
  <!-- 用于设置 SVG 元素填充样式的实用程序 -->
  <paragraph-h2>设置填充颜色</paragraph-h2>
  <!-- 使用 fill-* 实用程序来改变 SVG 的填充颜色 -->
  <svg class="fill-blue-500">
    <!-- ... -->
  </svg>
</template>

<style scoped></style>
