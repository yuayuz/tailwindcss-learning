<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Mix Blend Mode</header-h1>
  <!-- 用于控制元素如何与背景混合的实用程序 -->
  <paragraph-h2>设置元素的混合模式</paragraph-h2>
  <!-- 使用 mix-blend-* 实用程序来控制元素的内容如何与背景混合 -->
  <div class="m-5 mx-auto flex h-40 max-w-xl justify-center -space-x-14 bg-slate-50 p-4">
    <div
      class="aspect-square content-center rounded-full bg-blue-400 text-center mix-blend-multiply"
    >
      blue
    </div>
    <div
      class="aspect-square content-center rounded-full bg-pink-400 text-center mix-blend-multiply"
    >
      pink
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
