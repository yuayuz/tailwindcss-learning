<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Box Decoration Break</header-h1>
  <!-- 用于控制元素片段如何在多行、多列或多页中呈现的实用程序 -->
  <!--
  使用box-decoration-slice和box-decoration-clone实用程序来控制背景、
  边框、边框图像、盒子阴影、剪辑路径、边距和填充等属性是否应将元素呈现为
  一个连续的片段或不同的块
  -->
  <p-h2>box-decoration-slice</p-h2>
  <span
    class="mx-auto max-w-12 bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white"
  >
    你好
    <br />
    世界
  </span>
  <p-h2>box-decoration-clone</p-h2>
  <span
    class="mx-auto max-w-12 bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone px-2 text-white"
  >
    你好
    <br />
    世界
  </span>
  <!-- 
  Tailwind 允许你使用变体修饰符在不同状态下有条件地应用实用程序类,
  还可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。 
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
