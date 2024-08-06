<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Vertical Align</header-h1>
  <!-- 用于控制内联或表格单元格框的垂直对齐 -->
  <paragraph-h2>Baseline</paragraph-h2>
  <!-- align-baseline 将元素的基线与其父元素的基线对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-baseline">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
  <paragraph-h2>Top</paragraph-h2>
  <!-- align-top 将元素及其后代的顶部与整行的顶部对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-top">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
  <paragraph-h2>Middle</paragraph-h2>
  <!-- align-middle 将元素的中间与基线加上父元素 x 高度的一半对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-middle">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
  <paragraph-h2>Bottom</paragraph-h2>
  <!-- align-bottom将元素及其后代的底部与整行的底部对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-bottom">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
  <paragraph-h2>Text Top</paragraph-h2>
  <!-- align-text-top 将元素的顶部与父元素字体的顶部对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-text-top">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
  <paragraph-h2>Text Bottom</paragraph-h2>
  <!-- align-text-bottom 将元素的底部与父元素字体的底部对齐 -->
  <div class="relative mx-auto max-w-xl rounded-md border leading-none shadow">
    <span class="inline-block h-8 w-0 align-text-bottom">
      <span
        class="absolute top-0 h-8 w-full border-b border-t border-dashed border-slate-200 dark:border-slate-700"
      ></span>
      <span
        class="absolute top-0 h-4 w-full border-b border-dashed border-slate-200 dark:border-slate-700"
      ></span>
    </span>
    <span class="relative z-10 px-4 font-medium text-slate-700 dark:text-slate-200"
      >The quick brown fox jumps over the lazy dog.</span
    >
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
