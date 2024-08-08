<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Invert</header-h1>
  <!-- 用于将反转过滤器应用于元素的实用程序 -->
  <paragraph-h2>反转元素的颜色</paragraph-h2>
  <!-- 使用 invert 和 invert-0 实用程序来控制元素是否应以反转颜色或正常方式呈现 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg invert">1</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg invert-0">2</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
