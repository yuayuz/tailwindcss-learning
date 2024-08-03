<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>Overflow</header-h1>
  <!-- 用于控制元素如何处理对于容器而言过大的内容 -->
  <p-h2>显示溢出的内容</p-h2>
  <!-- 使用 overflow-visible 可防止元素内的内容被剪裁，任何超出元素边界的内容都将可见。 -->
  <div class="mx-auto flex h-16 max-w-xs overflow-visible border shadow">
    <img src="@/assets/photo.avif" alt="photo" class="h-20 w-20" />
    <div class="py-2 pl-6 *:text-slate-400">
      <div class="pb-1">山</div>
      <div>图片</div>
    </div>
  </div>
  <p-h2>隐藏溢出内容</p-h2>
  <!-- 使用 overflow-hidden 剪辑元素内超出该元素边界的任何内容 -->
  <div class="mx-auto flex h-16 max-w-xs overflow-hidden border shadow">
    <img src="@/assets/photo.avif" alt="photo" class="h-20 w-20" />
    <div class="py-2 pl-6 *:text-slate-400">
      <div class="pb-1">山</div>
      <div>图片</div>
    </div>
  </div>
  <p-h2>滚动</p-h2>
  <!-- 当元素内容超出元素边界时，使用 overflow-auto 向元素添加滚动条,在需要滚动时才显示滚动条 -->
  <div class="mx-auto flex h-48 max-w-xs overflow-auto border p-4 pr-1 shadow">
    <div class="aspect-square h-96">
      <img src="@/assets/photo.avif" alt="photo" class="h-96 w-96 object-cover" />
    </div>
  </div>

  <p-h2>允许水平滚动并始终显示滚动条</p-h2>
  <div class="mx-auto flex max-w-xs overflow-x-scroll border p-4 pb-1 shadow *:p-4">
    <div class="aspect-square h-20 bg-violet-400"></div>
    <div class="aspect-square h-20 bg-pink-400"></div>
    <div class="aspect-square h-20 bg-sky-400"></div>
    <div class="aspect-square h-20 bg-green-400"></div>
    <div class="aspect-square h-20 bg-yellow-400"></div>
  </div>
  <!--
  overflow-x-auto 允许水平滚动
  overflow-y-auto 允许垂直滚动
  overflow-x-scroll 允许水平滚动并始终显示滚动条，除非操作系统禁用始终可见的滚动条。
  overflow-y-scroll 允许垂直滚动并始终显示滚动条，除非操作系统禁用始终可见的滚动条。
  overflow-scroll 向元素添加滚动条
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
