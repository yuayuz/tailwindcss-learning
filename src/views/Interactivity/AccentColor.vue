<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Accent Color</header-h1>
  <!-- 用于控制控件强调色的实用程序 -->
  <paragraph-h2>设置强调色</paragraph-h2>
  <!--
  使用 accent-* 实用程序更改元素的强调色。
  通过覆盖浏览器的默认颜色，这有助于设计复选框和单选按钮组等元素的样式
  -->
  <label> <input type="checkbox" checked /> Browser default </label>
  <label> <input type="checkbox" class="accent-pink-500" checked /> Customized </label>
  <!--
  改变不透明度: 虽然可以使用颜色不透明度修改器来控制强调色的不透明度，
  但 rgba() 目前仅 Firefox 支持 alpha 值（上次测试时间为 2021 年 11 月）
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
