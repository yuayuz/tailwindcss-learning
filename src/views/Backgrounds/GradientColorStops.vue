<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Gradient Color Stops</header-h1>
  <!-- 用于控制背景渐变中颜色停止的实用程序 -->
  <paragraph-h2>起始颜色与結束颜色</paragraph-h2>
  <!-- 使用 from-* 实用程序设置渐变的起始颜色,使用 to-* 实用程序设置渐变的结束颜色 -->
  <div class="m-5 mx-auto max-w-xl space-y-3 border p-4 shadow *:rounded-full">
    <div class="h-14 bg-gradient-to-r from-cyan-500"></div>
    <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <!-- 默认情况下，渐变不会从透明淡入。要从透明淡入，请反转渐变方向并使用from-*实用程序。-->
    <div class="h-14 bg-gradient-to-l from-violet-500"></div>
    <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
  <paragraph-h2>中间色</paragraph-h2>
  <!-- 使用 via-* 实用程序为渐变添加中间颜色 -->
  <div class="m-5 mx-auto max-w-xl space-y-3 border p-4 shadow *:rounded-full">
    <div class="h-14 bg-gradient-to-r from-cyan-500"></div>
    <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <!-- 默认情况下，渐变不会从透明淡入。要从透明淡入，请反转渐变方向并使用from-*实用程序。-->
    <div class="h-14 bg-gradient-to-l from-violet-500"></div>
    <div class="h-14 bg-gradient-to-r from-purple-500 via-amber-500 to-pink-500"></div>
  </div>
  <paragraph-h2>指定停止位置</paragraph-h2>
  <!-- 为了更好地控制渐变颜色停止位置，请将渐变颜色实用程序与渐变位置实用程序（如from-10%、via-30%和 ）结合起来to-90% -->
  <div class="m-5 mx-auto max-w-xl space-y-3 border p-4 shadow *:rounded-full">
    <div class="h-14 bg-gradient-to-r from-cyan-500"></div>
    <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
    <!-- 默认情况下，渐变不会从透明淡入。要从透明淡入，请反转渐变方向并使用from-*实用程序。-->
    <div class="h-14 bg-gradient-to-l from-violet-500"></div>
    <div
      class="h-14 bg-gradient-to-r from-purple-500 from-10% via-amber-500 via-30% to-pink-500 to-80%"
    ></div>
  </div>
  <!--
  褪色为透明: 渐变默认淡出为透明，无需 to-transparent 明确添加。
  Tailwind 会根据起始颜色智能计算要使用的正确“透明”值
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
