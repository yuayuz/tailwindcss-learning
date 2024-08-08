<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Hue Rotate</header-h1>
  <!-- 用于将背景色调旋转过滤器应用于元素的实用程序 -->
  <paragraph-h2>旋转背景色调</paragraph-h2>
  <!-- 使用 backdrop-hue-rotate-* 实用程序旋转元素背景的色调 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-hue-rotate-30"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-hue-rotate-90"
      >
        2
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-hue-rotate-180"
      >
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
