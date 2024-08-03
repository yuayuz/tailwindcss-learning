<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>ObjectPosition</header-h1>
  <!--用于控制元素在其容器内位置的实用程序。  -->
  <p-h2>object-* 未起作用</p-h2>
  <div
    class="mx-auto grid max-w-xl grid-cols-3 grid-rows-3 gap-10 border bg-slate-50 p-6 shadow *:h-32 *:object-cover"
  >
    <!-- 左上 -->
    <div class="group w-auto border shadow">
      <p class="text-center">左上</p>
      <img
        src="@/assets/photo.avif"
        alt="photo"
        class="h-24 w-24 object-left-top group-hover:hidden"
      />
      <img
        src="@/assets/photo.avif"
        alt="photo"
        class="h-full w-full object-right-top opacity-0 group-hover:opacity-75"
      />
    </div>
    <!-- 上 -->
    <div class="group w-auto border shadow">
      <p class="text-center">上</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-top group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 右上 -->
    <div class="group w-auto border shadow">
      <p class="text-center">右上</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-right-top group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 左 -->
    <div class="group w-auto border shadow">
      <p class="text-center">左</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-left group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 中 -->
    <div class="group w-auto border shadow">
      <p class="text-center">中</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-center group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 右 -->
    <div class="group w-auto border shadow">
      <p class="text-center">右</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-right group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 左下 -->
    <div class="group w-auto border shadow">
      <p class="text-center">左下</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-left-bottom group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 下 -->
    <div class="group w-auto border shadow">
      <p class="text-center">下</p>
      <div class="h-full w-full">
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-24 w-24 object-bottom group-hover:hidden"
        />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
    <!-- 右下 -->
    <div class="group w-auto border shadow">
      <p class="text-center">右下</p>
      <div class="a h-full w-full">
        <img src="@/assets/photo.avif" alt="photo" class="h-24 w-24 bg-top group-hover:hidden" />
        <img
          src="@/assets/photo.avif"
          alt="photo"
          class="h-full w-full opacity-0 group-hover:opacity-75"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
