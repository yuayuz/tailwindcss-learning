<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Color</header-h1>
  <!-- 用于控制元素边框颜色的实用程序 -->
  <paragraph-h2>设置边框颜色</paragraph-h2>
  <!-- 使用 border-* 实用程序来控制元素的边框颜色。 -->
  <div class="aspect-square h-14 border border-indigo-600"></div>
  <paragraph-h2>改变不透明度</paragraph-h2>
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3 *:border"
  >
    <div class="aspect-square h-14 border-sky-600/25"></div>
    <div class="aspect-square h-14 border-sky-600/50"></div>
    <div class="aspect-square h-14 border-sky-600/75"></div>
    <div class="aspect-square h-14 border-sky-600/100"></div>
  </div>
  <paragraph-h2>Individual sides</paragraph-h2>
  <!-- 使用 border-t-*、border-r-*、border-b-* 和 border-l-* 实用程序设置元素一侧的边框颜色 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3 *:border"
  >
    <div class="aspect-square h-14 border-sky-300 border-t-pink-600/25"></div>
    <div class="aspect-square h-14 border-sky-300 border-r-pink-600/50"></div>
    <div class="aspect-square h-14 border-sky-300 border-b-pink-600/75"></div>
    <div class="aspect-square h-14 border-sky-300 border-l-pink-600/100"></div>
  </div>
  <paragraph-h2>Horizontal and vertical sides</paragraph-h2>
  <!-- 使用 border-x-* 和 border-y-* 实用程序同时设置元素两侧的边框颜色 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3 *:border"
  >
    <div class="aspect-square h-14 border-sky-300 border-x-pink-600/25"></div>
    <div class="aspect-square h-14 border-sky-300 border-y-pink-600/50"></div>
  </div>
  <!--
  使用逻辑属性
  使用 border-s-* 和 border-e-* 实用程序设置
  border-inline-start-color 和 border-inline-end-color 逻辑属性，
  它们根据文本方向映射到左边框或右边框
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
