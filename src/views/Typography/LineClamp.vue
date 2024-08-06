<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Line Clamp</header-h1>
  <!-- 用于将文本限制为特定行数 -->
  <p-h2>截断多行文本</p-h2>
  <!-- 使用 line-clamp-* 实用程序在特定行数后截断文本块 -->
  <div class="mx-auto line-clamp-3 max-w-xl border shadow-2xl">
    硬塞知识的办法经常引起人对书籍的厌恶；
    这样就无法使人得到合理的教育所培养的那种自学能力，反而会使这种能力不断地退步。——斯宾塞<br />
    硬塞知识的办法经常引起人对书籍的厌恶；
    这样就无法使人得到合理的教育所培养的那种自学能力，反而会使这种能力不断地退步。——斯宾塞
  </div>
  <!-- 解除截断： line-clamp-none 撤消先前应用的截断实用程序 -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
