<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Blur</header-h1>
  <!-- 用于将背景模糊滤镜应用于元素的实用程序 -->
  <paragraph-h2>元素背后的模糊</paragraph-h2>
  <!-- 使用 backdrop-blur-* 实用程序来控制元素的背景模糊 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center backdrop-blur-sm"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-blur-sm"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center backdrop-blur-md"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-blur-md">
        2
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center backdrop-blur-xl"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-blur-xl">
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
