<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Origin</header-h1>
  <!-- 用于控制元素背景相对于边框、填充和内容的定位方式的实用程序 -->
  <paragraph-h2>设置背景原点</paragraph-h2>
  <!--
  使用 bg-origin-border、bg-origin-padding 和 bg-origin-content
  来控制元素背景的渲染位置
  -->
  <div
    class="mx-auto mt-5 flex h-64 max-w-lg items-center justify-center space-x-5 overflow-hidden border shadow"
  >
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-border</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-[url('@/assets/photo.avif')] bg-cover bg-center bg-no-repeat bg-origin-border p-3 text-center"
      >
        1
      </div>
    </div>
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-padding</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-[url('@/assets/photo.avif')] bg-cover bg-center bg-no-repeat bg-origin-padding p-3 text-center"
      >
        2
      </div>
    </div>
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-content</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-[url('@/assets/photo.avif')] bg-contain bg-center bg-no-repeat bg-origin-content p-3 text-center"
      >
        3
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
