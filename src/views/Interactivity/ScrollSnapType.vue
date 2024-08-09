<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
</script>

<template>
  <header-h1>Scroll Snap Type</header-h1>
  <!-- 用于控制在捕捉容器中强制执行捕捉点的严格程度的实用程序 -->
  <!--
  水平滚动捕捉
  使用 snap-x 实用程序在元素内启用水平滚动捕捉。
  为了使滚动捕捉功能正常工作，还需要在元素内的子元素上设置滚动捕捉对齐方式。
  -->
  <!--
  强制滚动捕捉
  使用 snap-mandatory 实用程序强制捕捉容器始终停留在捕捉点上。
  -->
  <!--
  邻近滚动捕捉
  使用 snap-proximity 实用程序使捕捉容器停留在距离较近的捕捉点上。这是浏览器默认设置。
  -->
</template>

<style scoped></style>
