<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
</script>

<template>
  <header-h1>Will Change</header-h1>
  <!-- 用于优化即将发生改变的元素的动画的实用程序 -->

  <!--
  优化将会改变
  使用 will-change-scroll、will-change-contents 和 will-change-transform
  来优化预计在不久的将来会发生变化的元素，通过指示浏览器在动画实际开始之前准备必要的动画
  -->

  <!--
  建议在元素发生变化之前应用这些 will-change-auto 实用程序，然后在使用完成后立即将其删除。
  will-change 属性旨在作为处理已知性能问题时的最后手段。
  避免过多使用这些实用程序，或仅仅为了预期性能问题而使用这些实用程序，因为这实际上可能会导致页面性能下降
  -->
</template>

<style scoped></style>
