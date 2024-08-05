<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Space Between</header-h1>
  <!-- 用于控制子元素之间空间 -->
  <p-h2>在子项之间添加水平空间</p-h2>
  <!-- 使用 space-x-* 实用程序来控制元素之间的水平空间 -->
  <div
    class="m-3 mx-auto flex max-w-xs shrink space-x-3 border *:aspect-square *:h-12 *:content-center *:bg-cyan-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>在子项之间添加垂直空间</p-h2>
  <!-- 使用 space-y-* 来控制元素之间的垂直空间 -->
  <div
    class="m-3 mx-auto max-w-xs shrink space-y-5 border *:aspect-square *:h-12 *:content-center *:bg-cyan-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <p-h2>反转子元素顺序</p-h2>
  <!--
  如果元素的顺序相反（使用 flex-row-reverse 或 flex-col-reverse），
  请使用 space-x-reverse 或 space-y-reverse 实用程序确保将空间添加到每个元素的正确一侧。
  -->
  <div
    class="m-3 mx-auto flex max-w-xs shrink flex-row-reverse space-x-3 space-x-reverse border *:aspect-square *:h-12 *:content-center *:bg-cyan-400 *:text-center"
  >
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div>
  <!-- 使用负值: 要使用负空间值，请在类名前加上破折号以将其转换为负值-->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
