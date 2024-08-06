<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Clear</header-h1>
  <!-- 用于控制元素周围内容包装的实用程序。 -->
  <p-h2>清除左浮动元素</p-h2>
  <div class="mx-auto max-w-xs border shadow">
    <div class="float-left aspect-square h-24 bg-sky-400"></div>
    <div class="float-right aspect-square h-36 bg-pink-400"></div>
    <p class="clear-left">你好</p>
  </div>

  <p-h2>清除所有浮动元素</p-h2>
  <!-- 使用该clear-both实用程序将元素定位在所有先前的浮动元素下方 -->
  <div class="mx-auto max-w-xs border shadow">
    <div class="float-left aspect-square h-24 bg-sky-400"></div>
    <div class="float-right aspect-square h-36 bg-pink-400"></div>
    <p class="clear-both">你好</p>
  </div>

  <p-h2>禁用已应用的清除</p-h2>
  <!-- 使用 clear-none 实用程序重置应用于元素的任何清除,这是 clear 属性的默认值 -->
  <div class="mx-auto max-w-xs border shadow">
    <div class="float-left aspect-square h-24 bg-sky-400"></div>
    <div class="float-right aspect-square h-36 bg-pink-400"></div>
    <p class="clear-none">你好</p>
  </div>

  <!--
  使用逻辑属性： 使用 clear-start 或 clear-end 逻辑属性，
  根据文本方向映射到左侧或右侧。
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
