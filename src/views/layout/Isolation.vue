<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Isolation</header-h1>
  <!-- 用于控制元素是否应明确创建新的堆叠上下文的实用程序。 -->
  <!--
  设置堆叠上下文
  使用 isolate 和 isolation-auto 实用程序来控制元素是否应明确创建新的堆叠上下文
  -->
  <p-h2>设置堆叠上下文（未起作用）</p-h2>
  <div class="aspect-square h-48 bg-violet-400">
    <div class="isolation-auto">
      <div class="aspect-square h-24 bg-pink-400">isolation-auto</div>
    </div>
    <div class="isolate hover:isolation-auto">
      <div class="aspect-square h-24 bg-sky-400">isolate</div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
