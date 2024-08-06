<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Text Color</header-h1>
  <!-- 用于控制元素文本颜色 -->
  <p-h2>设置文本颜色</p-h2>
  <!-- 使用 text-* 实用程序来控制元素的文本颜色。 -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:text-lg">
    <p class="text-blue-600">The quick brown fox...</p>
    <p class="text-pink-600">The quick brown fox...</p>
    <p class="text-violet-600">The quick brown fox...</p>
    <p class="text-amber-600">The quick brown fox...</p>
  </div>
  <p-h2>改变不透明度</p-h2>
  <!-- 使用颜色不透明度修饰符来控制元素文本颜色的不透明度。 -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:text-lg">
    <p class="text-blue-600/100">The quick brown fox...</p>
    <p class="text-pink-600/75">The quick brown fox...</p>
    <p class="text-violet-600/50">The quick brown fox...</p>
    <p class="text-amber-600/25">The quick brown fox...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
