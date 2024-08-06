<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Decoration Style</header-h1>
  <!-- 用于控制文本装饰风格 -->
  <p-h2>设置文本装饰样式</p-h2>
  <!-- 使用实用程序来改变元素的文本装饰 decoration-* 样式 -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:border *:p-4 *:text-lg">
    <p class="underline decoration-solid">The quick brown fox...</p>
    <p class="underline decoration-double">The quick brown fox...</p>
    <p class="underline decoration-dotted">The quick brown fox...</p>
    <p class="underline decoration-dashed">The quick brown fox...</p>
    <p class="underline decoration-wavy">The quick brown fox...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
