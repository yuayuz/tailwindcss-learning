<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Divide Width</header-h1>
  <!-- 用于控制元素之间边框宽度的实用程序 -->
  <paragraph-h2>在水平子项之间添加边框</paragraph-h2>
  <!-- 使用 divide-x-* 实用程序在水平元素之间添加边框 -->
  <div
    class="mx-auto mt-4 grid max-w-xs grid-cols-3 divide-x divide-slate-200 border bg-slate-50 shadow *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <paragraph-h2>在堆叠的子项之间添加边框</paragraph-h2>
  <!-- 使用 divide-y-* 实用程序在堆叠元素之间添加边框 -->
  <div
    class="mx-auto mt-4 grid max-w-xs grid-rows-3 divide-y divide-slate-200 border bg-slate-50 shadow *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <paragraph-h2>Reversing children order</paragraph-h2>
  <!--
  如果您的元素是按相反顺序排列的（例如，使用 flex-row-reverse 或 flex-col-reverse ），
  请使用 divide-x-reverse 或 divide-y-reverse 实用程序来确保将边框添加到每个元素的正确一侧
  -->
  <div
    class="mx-auto mt-4 flex max-w-xs flex-col-reverse divide-y divide-y-reverse divide-slate-200 border bg-slate-50 shadow *:w-full *:text-center *:leading-10"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
