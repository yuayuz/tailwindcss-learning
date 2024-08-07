<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Border Width</header-h1>
  <!-- 用于控制元素边框宽度的实用程序 -->
  <paragraph-h2>所有边</paragraph-h2>
  <!-- 使用border、border-0、border-2、border-4 或 border-8 实用程序设置元素所有边的边框宽度。 -->
  <div class="mx-auto flex max-w-xl place-content-around border p-3 shadow *:aspect-square *:h-14">
    <div class="border border-indigo-600"></div>
    <div class="border-2 border-indigo-600"></div>
    <div class="border-4 border-indigo-600"></div>
    <div class="border-8 border-indigo-600"></div>
  </div>
  <paragraph-h2>单边</paragraph-h2>
  <!-- 使用 border-*、border-*-0、border-*-2、border-*-4 或 border-*-8 实用程序设置元素一侧的边框宽度 -->
  <div
    class="mx-auto flex max-w-xl place-content-around border p-3 shadow *:aspect-square *:h-14 *:bg-slate-400"
  >
    <div class="border-t-4 border-indigo-600"></div>
    <div class="border-r-4 border-indigo-600"></div>
    <div class="border-b-4 border-indigo-600"></div>
    <div class="border-l-4 border-indigo-600"></div>
  </div>
  <paragraph-h2>水平和垂直边</paragraph-h2>
  <!-- 使用 border-x-* 和 border-y-* 实用程序同时设置元素两侧的边框宽度 -->
  <div
    class="mx-auto flex max-w-xl place-content-around border p-3 shadow *:aspect-square *:h-14 *:bg-slate-400"
  >
    <div class="border-y-4 border-indigo-600"></div>
    <div class="border-x-4 border-indigo-600"></div>
  </div>
  <paragraph-h2>元素之间</paragraph-h2>
  <!-- 可以使用宽度 divide-x-* 和 divide-y-*实用程序以及 divide-* 颜色实用程序在子元素之间添加边框。 -->
  <div
    class="mx-auto mt-4 max-w-xs divide-y divide-slate-200 border bg-slate-50 shadow *:pl-4 *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <!--
  使用逻辑属性
  使用 border-s-* 和 border-e-* 实用程序设置 border-inline-start-width
  和 border-inline-end-width 逻辑属性，它们根据文本方向映射到左边框或右边框
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
