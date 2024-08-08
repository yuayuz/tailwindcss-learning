<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Box Shadow</header-h1>
  <!-- 用于控制元素的框阴影的实用程序 -->
  <paragraph-h2>添加外阴影</paragraph-h2>
  <!--
  使用 shadow-sm、shadow、shadow-md、shadow-lg、shadow-xl
  或 shadow-2xl 实用程序将不同大小的外框阴影应用于元素
  -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border p-4 shadow *:space-y-3 *:bg-slate-50"
  >
    <div class="aspect-square h-14 shadow-md"></div>
    <div class="aspect-square h-14 shadow-lg"></div>
    <div class="aspect-square h-14 shadow-xl"></div>
    <div class="aspect-square h-14 shadow-2xl"></div>
  </div>
  <paragraph-h2>添加内阴影</paragraph-h2>
  <!-- 使用 shadow-inner 实用程序将细微的插入框阴影应用于元素。这对于表单控件或井等非常有用 -->
  <div
    class="mx-auto my-5 flex max-w-xl place-content-around space-x-5 border bg-slate-50 p-4 shadow *:space-y-3"
  >
    <div class="aspect-square h-14 bg-white shadow-inner"></div>
  </div>
  <!-- 去除阴影：使用 shadow-none 从元素中删除现有的框阴影。这最常用于删除在较小断点处应用的阴影 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
