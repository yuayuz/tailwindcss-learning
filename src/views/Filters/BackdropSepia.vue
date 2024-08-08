<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Sepia</header-h1>
  <!-- 用于将背景棕褐色滤镜应用于元素的实用程序 -->
  <paragraph-h2>添加背景棕褐色滤镜</paragraph-h2>
  <!-- 使用 backdrop-sepia 和 backdrop-sepia-0 实用程序来控制元素的背景是否应呈现为棕褐色或全彩色 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-sepia"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-sepia-0">
        2
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
