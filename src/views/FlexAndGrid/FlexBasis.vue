<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>FlexBasis</header-h1>
  <!-- 用于控制弹性项目初始大小 -->
  <p-h2>使用 basis-* 设置弹性项目的初始大小</p-h2>
  <div class="flex flex-row *:m-3 *:bg-pink-300">
    <div class="basis-1/4">1</div>
    <div class="basis-1/4">2</div>
    <div class="basis-1/2">3</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
