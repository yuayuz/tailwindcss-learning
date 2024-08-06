<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Font Style</header-h1>
  <!-- 用于控制文本样式 -->
  <p-h2>斜体文本</p-h2>
  <!--
  italic 可用于将文本变为斜体。同样，not-italic 可用于正常显示文本 —
  通常用于在不同的断点处重置斜体文本
  -->
  <p class="text-lg italic">斜体：敏捷的棕色狐狸跳过了懒狗。</p>
  <p class="text-lg not-italic">非斜体：敏捷的棕色狐狸跳过了懒狗。</p>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
