<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Appearance</header-h1>
  <!-- 用于抑制本机表单控制样式的实用程序 -->
  <paragraph-h2>删除默认元素外观</paragraph-h2>
  <!-- 用于 appearance-none 重置元素上任何特定于浏览器的样式。此实用程序通常在创建自定义表单组件时使用 -->
  <div class="mx-auto my-5 max-w-xl">
    <div class="my-6 flex items-center">
      <select>
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>
      <div class="mx-6 text-sm font-semibold text-slate-900 dark:text-slate-200">
        应用默认浏览器样式
      </div>
    </div>
    <div class="my-6 flex items-center">
      <div class="grid">
        <select
          class="col-start-1 row-start-1 appearance-none rounded-full border bg-slate-50 p-1 dark:bg-slate-800"
        >
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
        <svg
          class="pointer-events-none relative right-1 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="mx-6 text-sm font-semibold text-slate-900 dark:text-slate-200">
        删除默认浏览器样式
      </div>
    </div>
  </div>
  <!--
  恢复默认元素外观: 用于 appearance-auto 恢复元素的默认浏览器特定样式。
  这对于在某些可访问性模式下恢复到标准浏览器控件很有用
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
