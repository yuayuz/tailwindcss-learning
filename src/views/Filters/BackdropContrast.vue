<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Contrast</header-h1>
  <!-- 用于将背景对比过滤器应用于元素的实用程序 -->
  <paragraph-h2>控制背景对比度</paragraph-h2>
  <!-- 使用 backdrop-contrast-* 实用程序来控制元素的背景对比度 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-contrast-50"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-contrast-100"
      >
        2
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-contrast-150"
      >
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
