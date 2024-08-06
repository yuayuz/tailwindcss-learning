<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>List Style Image</header-h1>
  <!-- 用于控制列表项标记图像 -->
  <p-h2>设置列表样式图像</p-h2>
  <!--
  使用 list-image-* 实用程序来控制列表项的标记图像。
  开箱即用，list-image-none 是唯一可用的预配置列表样式图像实用程序。
  虽然可以通过自定义主题添加其他实用程序，但也可以使用方括号符号动态生成任意值。
  -->
  <ul
    class="mx-auto max-w-xs list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')] space-y-3 border shadow-2xl"
  >
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
