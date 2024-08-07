<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Clip</header-h1>
  <!-- 用于控制元素背景边界框的实用程序。 -->
  <paragraph-h2>Setting the background clip</paragraph-h2>
  <!-- 使用 bg-clip-* 实用程序来控制元素背景的边界框 -->
  <div
    class="mx-auto mt-5 flex h-64 max-w-lg items-center justify-center space-x-5 overflow-hidden border shadow"
  >
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-border</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-green-400 bg-clip-border p-3 text-center"
        style="
          background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
          background-position: center -80px;
        "
      >
        1
      </div>
    </div>
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-padding</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-clip-padding p-3 text-center"
        style="
          background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
          background-position: center -80px;
        "
      >
        2
      </div>
    </div>
    <div class="space-y-3">
      <p class="content-center text-center text-lg">bg-clip-content</p>
      <div
        class="h-24 w-24 content-center border-4 border-dashed border-violet-600 bg-clip-content p-3 text-center"
        style="
          background-image: url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80');
          background-position: center -80px;
        "
      >
        3
      </div>
    </div>
  </div>
  <paragraph-h2>Cropping to text</paragraph-h2>
  <!--
  使用 bg-clip-text 裁剪元素的背景以匹配文本的形状。
  对于希望背景图像透过文本可见的效果很有用。
  -->
  <div
    class="mx-auto mt-5 flex h-64 max-w-lg items-center justify-center space-x-5 overflow-hidden border text-5xl shadow"
  >
    <span class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
      Hello world
    </span>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
