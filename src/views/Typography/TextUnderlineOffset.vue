<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Underline Offset</header-h1>
  <!-- 用于控制文本下划线偏移量 -->
  <paragraph-h2>设置下划线偏移量</paragraph-h2>
  <!-- 使用 underline-offset-* 实用程序来更改文本下划线的偏移量 -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:border *:p-4 *:text-lg">
    <p class="underline decoration-1 underline-offset-1">The quick brown fox...</p>
    <p class="underline decoration-1 underline-offset-4">The quick brown fox...</p>
    <p class="underline decoration-1 underline-offset-8">The quick brown fox...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
