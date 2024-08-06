<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Decoration Thickness</header-h1>
  <!-- 用于控制文本装饰粗细 -->
  <p-h2>设置文本装饰粗细</p-h2>
  <!-- 使用 decoration-* 实用程序来改变元素文本装饰的粗细。 -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:border *:p-4 *:text-lg">
    <p class="underline decoration-1">The quick brown fox...</p>
    <p class="underline decoration-2">The quick brown fox...</p>
    <p class="underline decoration-4">The quick brown fox...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
