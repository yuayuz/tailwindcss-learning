<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Background Position 不起作用</header-h1>
  <!-- 用于控制元素背景图像位置的实用程序 -->
  <paragraph-h2>设置背景位置</paragraph-h2>
  <!-- 使用 bg-center、bg-right 和 bg-left-top 等实用程序来调整元素背景图像的位置 -->
  <div
    class="m-5 mx-auto grid aspect-square max-w-xl grid-cols-3 grid-rows-3 gap-4 border bg-slate-50 p-3 shadow *:border *:border-violet-600"
  >
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-left-top</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-left-top bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-top</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-top bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-right-top</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-right-top bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-left</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-left bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-center</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-center bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-right</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-right bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-left-bottom</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-left-bottom bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-bottom</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-bottom bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
    <div class="relative px-3 pb-3">
      <p class="text-center text-slate-500">bg-right-bottom</p>
      <div class="aspect-square">
        <div
          class="aspect-square h-1/3 bg-[url('@/assets/photo.avif')] bg-cover bg-right-bottom bg-no-repeat bg-origin-content"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
