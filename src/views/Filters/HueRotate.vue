<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Hue Rotate</header-h1>
  <!-- 用于将色调旋转滤镜应用于元素的实用程序 -->
  <paragraph-h2>旋转元素的色调</paragraph-h2>
  <!-- 使用 hue-rotate-* 实用程序旋转元素的色调 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 hue-rotate-15">1</div>
    <div class="aspect-square h-14 bg-indigo-400 hue-rotate-60">2</div>
    <div class="aspect-square h-14 bg-indigo-400 hue-rotate-90">3</div>
    <div class="aspect-square h-14 bg-indigo-400 hue-rotate-180">4</div>
  </div>
  <!-- 使用负值: 要使用负的色调旋转值，请在类名前加上破折号以将其转换为负值 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
