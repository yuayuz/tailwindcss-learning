<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>FontFamily</header-h1>
  <!-- 用于控制元素字体系列 -->
  <p-h2>设置字体系列: 可以使用字体系列实用程序控制文本的字体</p-h2>
  <div class="m-4 mx-auto max-w-xl space-y-3 border-dashed p-4 shadow *:text-lg">
    <div class="bg-blue-400">
      <p>font-sans</p>
      <p class="font-sans">The quick brown fox ...</p>
    </div>
    <div class="bg-pink-400">
      <p>font-serif</p>
      <p class="font-serif">The quick brown fox ...</p>
    </div>
    <div class="bg-green-400">
      <p>font-mono</p>
      <p class="font-mono">The quick brown fox ...</p>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
