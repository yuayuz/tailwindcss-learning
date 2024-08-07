<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Repeat</header-h1>
  <!-- 用于控制元素背景图像重复的实用程序 -->
  <paragraph-h2>重复</paragraph-h2>
  <!-- 使用 bg-repeat 垂直和水平重复背景图像 -->
  <div
    class="mx-auto h-64 max-w-xl border bg-[url('@/assets/photo.avif')] bg-contain bg-repeat shadow"
  ></div>
  <paragraph-h2>无重复</paragraph-h2>
  <!-- 当不想重复背景图像时使用 bg-no-repeat -->
  <div
    class="mx-auto h-64 max-w-xl border bg-[url('@/assets/photo.avif')] bg-contain bg-no-repeat shadow"
  ></div>
  <paragraph-h2>水平重复</paragraph-h2>
  <!-- 使用 bg-repeat-x 仅水平重复背景图像 -->
  <div
    class="mx-auto h-64 max-w-xl border bg-[url('@/assets/photo.avif')] bg-contain bg-repeat-x shadow"
  ></div>
  <paragraph-h2>垂直重复</paragraph-h2>
  <!-- 用于 bg-repeat-y 仅垂直重复背景图像 -->
  <div
    class="mx-auto h-96 max-w-xl border bg-[url('@/assets/photo.avif')] bg-contain bg-repeat-y shadow"
  ></div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
