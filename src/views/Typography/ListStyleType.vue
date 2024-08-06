<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>List Style Type</header-h1>
  <!-- 用于控制列表的项目符号/数字样式 -->
  <p-h2>设置列表样式类型</p-h2>
  <!-- 要创建项目符号列表或数字列表，请使用 list-disc 和 list-decimal 实用程序。 -->
  <div
    class="m-4 mx-auto max-w-xl border p-4 shadow *:m-6 *:shrink *:list-inside *:space-y-3 *:border *:bg-green-400"
  >
    <ul class="list-disc">
      <li>符号列表</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <ul class="list-decimal">
      <li>数字列表</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <ul class="list-none">
      <li>列表无</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
