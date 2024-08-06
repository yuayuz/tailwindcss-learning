<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Box sizing</header-h1>
  <!-- 用于控制浏览器如何计算元素总大小的实用程序。 -->

  <div class="flex">
    <div>
      <p-h2>盒子包括边框和填充</p-h2>
      <!--
      使用 box-border 实用程序将元素的设置 box-sizing 为 border-box，
      告诉浏览器在指定元素的高度或宽度时包含元素的边框和填充。
      这意味着一个 100px × 100px 的元素，如果四周都有 2px 的边框和 4px 的填充，
      那么它将被渲染为 100px × 100px，内部内容区域为 88px × 88px。
      Tailwind 将其作为预检基本样式中所有元素的默认样式。
      -->
      <div class="m-10 box-border aspect-square w-56 bg-sky-400 p-10">box-border</div>
    </div>
    <div>
      <p-h2>盒子不包括边框和填充</p-h2>
      <!--
      使用 box-content 实用程序将元素的设置 box-sizing 为 content-box，
      告诉浏览器在元素指定的宽度或高度上添加边框和填充。
      这意味着一个 100px × 100px 的元素，
      如果四周都有 2px 的边框和 4px 的填充，
      那么它实际上会被渲染为 112px × 112px，其内部内容区域为 100px × 100px。
      -->
      <div class="m-10 box-content aspect-square w-56 bg-pink-400 p-10">box-content</div>
    </div>
  </div>

  <!--
  Tailwind 允许你使用变体修饰符在不同状态下有条件地应用实用程序类,
  还可以使用变体修饰符来定位媒体查询，例如响应式断点、暗模式、首选减少运动等。
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
