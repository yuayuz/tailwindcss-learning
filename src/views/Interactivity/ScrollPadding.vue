<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Scroll Padding</header-h1>
  <!-- 用于控制捕捉容器内元素滚动偏移的实用程序 -->
  <paragraph-h2>设置滚动填充</paragraph-h2>
  <!-- 使用 scroll-pt-*、scroll-pr-*、scroll-pb-* 和 scroll-pl-* 实用程序设置捕捉容器内元素的滚动偏移 -->
  <div class="not-prose relative overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/25">
    <div
      class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
      style="background-position: 10px 10px"
    ></div>
    <div class="relative overflow-auto rounded-xl">
      <div class="bg-stripes-pink absolute bottom-0 left-0 top-0 w-6 rounded-l-lg"></div>
      <div class="flex w-full snap-x scroll-pl-6 gap-8 overflow-x-auto py-14">
        <div class="shrink-0 snap-start first:pl-6 last:pr-[calc(100%-21.5rem)]">
          <img
            class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div class="shrink-0 snap-start first:pl-6 last:pr-[calc(100%-21.5rem)]">
          <img
            class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div class="shrink-0 snap-start first:pl-6 last:pr-[calc(100%-21.5rem)]">
          <img
            class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
            src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div class="shrink-0 snap-start first:pl-6 last:pr-[calc(100%-21.5rem)]">
          <img
            class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div class="shrink-0 snap-start first:pl-6 last:pr-[calc(100%-21.5rem)]">
          <img
            class="h-40 w-80 shrink-0 rounded-lg bg-white shadow-xl"
            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"
    ></div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
