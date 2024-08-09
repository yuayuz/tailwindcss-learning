<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Caret Color</header-h1>
  <!-- 用于控制文本输入光标颜色的实用程序 -->
  <paragraph-h2>设置插入符号颜色</paragraph-h2>
  <!-- 使用 caret-* 实用程序更改文本输入光标的颜色 -->
  <textarea
    class="border-slate-100 caret-pink-500 shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
  ></textarea>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
