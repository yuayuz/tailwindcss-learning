<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Opacity</header-h1>
  <!-- 用于将背景不透明度过滤器应用于元素的实用程序 -->
  <paragraph-h2>控制背景滤镜的不透明度</paragraph-h2>
  <!-- 使用 backdrop-opacity-* 实用程序来控制应用于元素的其他背景过滤器的不透明度 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/30 text-center backdrop-opacity-10"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/30 backdrop-opacity-50">
        2
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/30 backdrop-opacity-80">
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
