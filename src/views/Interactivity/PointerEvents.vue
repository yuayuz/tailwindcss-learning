<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Pointer Events</header-h1>
  <!-- 用于控制元素是否响应指针事件的实用程序 -->
  <paragraph-h2>控制指针事件行为</paragraph-h2>
  <!--
  用于 pointer-events-auto 恢复指针事件的默认浏览器行为（如 :hover 和 click）。
  用于 pointer-events-none 使元素忽略指针事件。指针事件仍将在子元素上触发并传递到目标“下方”的元素。
  -->
  <div class="relative m-4 flex">
    <div class="pointer-events-auto absolute">
      <svg class="h-7 w-7 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input type="text" placeholder="pointer-events-auto" class="h-7 border pl-8" />
  </div>

  <div class="relative m-4 flex">
    <div class="pointer-events-none absolute">
      <svg class="h-7 w-7 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input type="text" placeholder="pointer-events-none" class="h-7 border pl-8" />
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
