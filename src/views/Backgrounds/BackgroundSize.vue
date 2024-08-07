<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Size</header-h1>
  <!-- 用于控制元素背景图像的背景大小的实用程序 -->
  <paragraph-h2>Auto</paragraph-h2>
  <!-- 使用 bg-auto 以默认大小显示背景图像 -->
  <div class="mx-auto my-5 aspect-square h-44 border p-4 shadow">
    <div class="aspect-square">
      <div
        class="aspect-square h-36 bg-[url('@/assets/photo.avif')] bg-auto bg-left-top bg-no-repeat bg-origin-content"
      ></div>
    </div>
  </div>
  <paragraph-h2>Cover</paragraph-h2>
  <!-- 使用 bg-cover 缩放背景图像直到其填充背景层 -->
  <div class="mx-auto my-5 aspect-square h-44 border p-4 shadow">
    <div class="aspect-square">
      <div
        class="aspect-square h-36 bg-[url('@/assets/photo.avif')] bg-cover bg-left-top bg-no-repeat bg-origin-content"
      ></div>
    </div>
  </div>
  <paragraph-h2>contain</paragraph-h2>
  <!-- 使用 bg-contain 将背景图像缩放至外边缘而不裁剪或拉伸 -->
  <div class="mx-auto my-5 aspect-square h-44 border p-4 shadow">
    <div class="aspect-square">
      <div
        class="aspect-square h-36 bg-[url('@/assets/photo.avif')] bg-contain bg-left-top bg-no-repeat bg-origin-content"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
