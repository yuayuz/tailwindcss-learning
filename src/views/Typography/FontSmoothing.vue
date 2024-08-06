<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Font Smoothing</header-h1>
  <!-- 用于控制元素字体平滑 -->
  <p-h2> 应用字体平滑</p-h2>
  <!--
  使用 subpixel-antialiased 使用子像素抗锯齿渲染文本，
  并使用 antialiased 使用灰度抗锯齿渲染文本
  -->
  <p class="text-lg subpixel-antialiased">子像素抗锯齿:The quick brown fox ...</p>
  <p class="text-lg antialiased">抗锯齿:The quick brown fox ...</p>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
