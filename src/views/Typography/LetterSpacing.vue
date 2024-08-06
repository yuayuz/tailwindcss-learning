<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Letter Spacing</header-h1>
  <!-- 用于控制元素的跟踪（字母间距） -->
  <p-h2>Setting the letter spacing</p-h2>
  <!-- 使用tracking-*实用程序来控制元素的字母间距。 -->
  <p class="text-lg tracking-tight">tracking-tight: The quick brown fox ...</p>
  <p class="text-lg tracking-normal">tracking-normal: The quick brown fox ...</p>
  <p class="text-lg tracking-wide">tracking-wide: The quick brown fox ...</p>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
