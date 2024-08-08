<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Backdrop Invert</header-h1>
  <!-- 用于将背景反转过滤器应用于元素的实用程序 -->
  <paragraph-h2>反转元素的背景</paragraph-h2>
  <!-- 使用 backdrop-invert 和 backdrop-invert-0 实用程序来控制元素是否应以反转的背景颜色或正常方式呈现 -->
  <div class="mx-auto mt-4 flex max-w-xl place-content-around border p-4 shadow">
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center"
    >
      <div
        class="aspect-square h-24 content-center justify-center bg-white/20 text-center backdrop-invert"
      >
        1
      </div>
    </div>
    <div
      class="flex aspect-square h-36 items-center justify-center bg-[url('@/assets/photo.avif')] bg-contain bg-center text-center"
    >
      <div class="aspect-square h-24 content-center justify-center bg-white/20 backdrop-invert-0">
        2
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
