<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>FontWeight</header-h1>
  <!-- 用于控制元素字体粗细 -->
  <p-h2>设置字体粗细</p-h2>
  <!-- font-* 来控制元素的字体粗细 -->
  <p class="text-lg font-light">The quick brown fox ...</p>
  <p class="text-lg font-normal">The quick brown fox ...</p>
  <p class="text-lg font-medium">The quick brown fox ...</p>
  <p class="text-lg font-semibold">The quick brown fox ...</p>
  <p class="text-lg font-bold">The quick brown fox ...</p>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
