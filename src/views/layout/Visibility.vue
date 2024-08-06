<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Visibility</header-h1>
  <!-- 用于控制元素可见性 -->
  <p-h2>使元素不可见</p-h2>
  <!-- 使用 invisible 隐藏元素，但仍保持其在 DOM 中的位置，从而影响其他元素的布局 -->
  <div class="mx-auto grid max-w-xs grid-cols-3 gap-4 rounded-full *:bg-sky-600 *:text-center">
    <div>01</div>
    <div class="invisible">02</div>
    <div>03</div>
  </div>

  <!--
  折叠元素
  使用 collapse 可以隐藏表格行、行组、列和列组，
  就像它们被设置为一样display: none，但不会影响其他行和列的大小。
  这使得可以动态切换行和列而不影响表格布局
  -->

  <!-- 使元素可见： 使用 visible 使元素可见。这最适用于 invisible 在不同屏幕尺寸下撤消实用程序 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
