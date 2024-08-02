<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Container</header-h1>
  <!-- 用于将元素的宽度固定至当前断点的组件 -->
  <!--
  类         断点    特性
  container	没有任何	width: 100%;
  sm (640px)	      max-width: 640px;
  md (768px)	      max-width: 768px;
  lg (1024px)	      max-width: 1024px;
  xl (1280px)	      max-width: 1280px;
  2xl (1536px)	    max-width: 1536px;
  -->
  <!--
  该类container设置max-width元素的以匹配min-width当前断点的。
  如果喜欢针对一组固定的屏幕尺寸进行设计，而不是尝试适应完全流畅的视口，那么这将非常有用
  -->
  <!-- Tailwind 的容器不会自动居中，并且没有任何内置的水平填充。-->

  <p-h2>要使容器居中，请使用 mx-auto 实用程序</p-h2>
  <div class="container mx-auto aspect-square max-w-xs bg-pink-400">mx-auto 使得容器水平居中</div>

  <!--
  响应式变体
  该类container还包括md:container默认情况下的响应式变体，
  允许使某些东西仅在某个断点及以上表现得像一个容器
  -->
  <p-h2>响应式</p-h2>
  <div class="aspect-video bg-sky-400 md:container md:mx-auto">md 及更大分辨率</div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
