<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Scale</header-h1>
  <!-- 使用变换来缩放元素的实用程序 -->
  <paragraph-h2>缩放元素</paragraph-h2>
  <!-- 使用scale-*、scale-x-*和scale-y-*实用程序来缩放元素 -->
  <div class="mx-auto mt-4 flex h-44 max-w-xl place-content-evenly items-center p-6 shadow">
    <div>
      <p class="text-center">scale-75</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 scale-75 border object-contain"
        alt="photo"
      />
    </div>
    <div>
      <p class="text-center">scale-100</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 scale-100 border object-contain"
        alt="photo"
      />
    </div>
    <div class="relative">
      <p class="absolute -top-10 text-center">scale-150</p>
      <img
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
        class="h-24 w-24 scale-150 border object-contain"
        alt="photo"
      />
    </div>
  </div>
  <!-- 使用负值: 要使用负比例值，请在类名前加上破折号以将其转换为负值 -->
  <!-- 删除变换: 要一次删除元素上的所有变换，请使用 transform-none 实用程序 -->
  <!-- 硬件加速: 如果 GPU 渲染时效果更好，则可以通过添加transform-gpu实用程序强制硬件加速 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
