<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Animation</header-h1>
  <!-- 使用 CSS 动画为元素添加动画的实用程序 -->
  <paragraph-h2>旋转</paragraph-h2>
  <!-- 添加 animate-spin 实用程序，为加载指示器等元素添加线性旋转动画 -->
  <button type="button" class="flex rounded-full bg-indigo-500 px-3 py-1 text-white">
    <svg class="mr-3 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    Processing...
  </button>
  <paragraph-h2>Ping</paragraph-h2>
  <!-- 添加 animate-ping 实用程序以使元素缩放并像雷达波或水波纹一样消失 - 对于通知徽章等很有用。 -->
  <button type="button" class="relative rounded-md bg-white px-3 py-1 text-sky-500 shadow">
    <span class="absolute right-0 top-0 flex h-3 w-3">
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
      ></span>
      <span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
    </span>
    Ping
  </button>
  <paragraph-h2>脉冲</paragraph-h2>
  <!-- 添加 animate-pulse 实用程序以使元素逐渐淡入淡出 - 对于骨架加载器之类的东西很有用 -->
  <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
    <div class="flex animate-pulse space-x-4">
      <div class="h-10 w-10 rounded-full bg-slate-200"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 rounded bg-slate-200"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 h-2 rounded bg-slate-200"></div>
            <div class="col-span-1 h-2 rounded bg-slate-200"></div>
          </div>
          <div class="h-2 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  </div>
  <paragraph-h2>弹跳</paragraph-h2>
  <!-- 添加 animate-bounce 实用程序以使元素上下弹跳 - 对于“向下滚动”指示器之类的东西很有用 -->
  <div class="mt-4 flex justify-center">
    <div
      class="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white shadow"
    >
      <svg
        class="h-6 w-6 text-violet-500"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
  <!--
  偏好减少运动
  对于用户指定他们喜欢减少运动的情况，
  可以使用 motion-safe 和 motion-reduce 变体有条件地应用动画和过渡
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
