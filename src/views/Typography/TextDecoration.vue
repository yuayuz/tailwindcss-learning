<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Decoration</header-h1>
  <!-- 用于控制文本装饰 -->
  <p-h2>设置文本装饰</p-h2>
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:border *:p-4 *:text-lg">
    <p class="text-blue-600 underline">The quick brown fox...</p>
    <p class="text-pink-600 overline">The quick brown fox...</p>
    <p class="text-violet-600 line-through">The quick brown fox...</p>
    <p class="text-amber-600 no-underline">The quick brown fox...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
