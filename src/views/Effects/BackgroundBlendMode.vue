<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Blend Mode</header-h1>
  <!-- 用于控制元素的背景图像如何与其背景颜色混合的实用程序 -->
  <paragraph-h2>设置背景混合模式</paragraph-h2>
  <!-- 使用 bg-blend-* 实用程序来控制元素的背景图像如何与其背景颜色混合 -->
  <div class="... bg-blend-multiply">
    <!-- ... -->
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
