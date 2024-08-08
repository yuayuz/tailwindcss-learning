<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Sepia</header-h1>
  <!-- 用于将棕褐色滤镜应用于元素的实用程序 -->
  <paragraph-h2>添加棕褐色滤镜</paragraph-h2>
  <!-- 使用 sepia 和 sepia-0 实用程序来控制元素是否应呈现为棕褐色或全彩色 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg sepia">1</div>
    <div class="aspect-square h-14 bg-indigo-400 shadow-lg sepia-0">2</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
