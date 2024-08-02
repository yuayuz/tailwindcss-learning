<script setup lang="ts">
import HeaderH1 from '@/components/headerH1.vue'
import PH2 from '@/components/pH2.vue'
</script>

<template>
  <header-h1>floats</header-h1>
  <!-- 用于控制元素周围内容包装的实用程序。 -->
  <p-h2>向左浮动元素</p-h2>
  <!-- 使用 float-left 实用程序将元素浮动到其容器的左侧 -->
  <div class="float-none">
    <div class="float-left aspect-square h-24 bg-pink-400"></div>
    <p>你好，....</p>
  </div>
  <br />
  <br />
  <br />
  <br />
  <div>
    <p-h2>禁用浮动</p-h2>
    <!-- 使用 float-none 实用程序重置应用于元素的任何浮点数,这是浮点属性的默认值。 -->
    <div>
      <div class="float-none aspect-square h-24 bg-sky-400"></div>
      <p>你好</p>
    </div>
  </div>

  <!-- 
  使用逻辑属性： 使用 float-start 或 float-end 实用程序，
  它们使用逻辑属性根据文本方向映射到左侧或右侧 
  -->
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
