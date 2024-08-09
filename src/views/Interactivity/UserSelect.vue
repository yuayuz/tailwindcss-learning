<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>User Select</header-h1>
  <!-- 用于控制用户是否可以选择元素中的文本的实用程序 -->
  <paragraph-h2>禁用文本选择</paragraph-h2>
  <!-- 使用 select-none 防止选择元素及其子元素中的文本 -->
  <div class="mx-auto max-w-xl select-none shadow">
    The quick brown fox jumps over the lazy dog.
  </div>
  <paragraph-h2>允许选择文本</paragraph-h2>
  <!-- 使用 select-text 允许选择元素及其子元素中的文本 -->
  <div class="mx-auto max-w-xl select-text shadow">
    The quick brown fox jumps over the lazy dog.
  </div>
  <paragraph-h2>单击一次即可选择所有文本</paragraph-h2>
  <!-- 使用 select-all 在用户点击时自动选择元素中的所有文本 -->
  <div class="mx-auto max-w-xl select-all shadow">The quick brown fox jumps over the lazy dog.</div>
  <paragraph-h2>使用自动选择</paragraph-h2>
  <!-- 使用 select-auto 使用默认浏览器行为来选择文本。对于撤消其他类（例如 select-none 在不同断点处）很有用 -->
  <div class="mx-auto max-w-xl select-auto shadow">
    The quick brown fox jumps over the lazy dog.
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
