<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Transform</header-h1>
  <!-- 用于控制文本转换 -->
  <paragraph-h2>转换文本</paragraph-h2>
  <!--
  uppercase 和 lowercase 分别将文本转换为大写和小写，
  而 capitalize 实用程序将文本转换为标题大小写。
  normal-case 实用程序可用于保留原始大小写 — 通常用于在不同的断点重置大写。
  -->
  <div class="mx-auto max-w-xl space-y-3 border p-4 shadow *:border *:p-4 *:text-lg">
    <p class="normal-case">The quick brown fox ...</p>
    <p class="uppercase">The quick brown fox ...</p>
    <p class="lowercase">The quick brown fox ...</p>
    <p class="capitalize">The quick brown fox ...</p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
