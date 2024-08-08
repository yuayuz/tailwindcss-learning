<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1> Backdrop Brightness</header-h1>
  <!-- 用于将背景亮度过滤器应用于元素的实用程序 -->
  <paragraph-h2>控制背景亮度</paragraph-h2>
  <!-- 使用 backdrop-brightness-* 实用程序来控制元素的背景亮度 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center backdrop-blur-sm"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-brightness-50"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center backdrop-blur-md"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-brightness-100"
      >
        2
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center backdrop-blur-xl"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-brightness-150"
      >
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
