<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Drop Shadow</header-h1>
  <!-- 用于将阴影过滤器应用于元素的实用程序 -->
  <paragraph-h2>添加阴影</paragraph-h2>
  <!-- 使用 drop-shadow-* 实用程序为元素添加阴影。 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-indigo-400 drop-shadow-md">1</div>
    <div class="aspect-square h-14 bg-indigo-400 drop-shadow-lg">2</div>
    <div class="aspect-square h-14 bg-indigo-400 drop-shadow-xl">3</div>
    <div class="aspect-square h-14 bg-indigo-400 drop-shadow-2xl">4</div>
  </div>
  <!--
  这对于将阴影应用于不规则形状（如文本和 SVG 元素）非常有用。
  要将阴影应用于常规元素，希望改用框阴影
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
