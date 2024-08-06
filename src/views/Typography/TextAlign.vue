<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Align</header-h1>
  <!-- 用于控制文本对齐 -->
  <p-h2>设置文本对齐方式</p-h2>
  <!-- 使用text-left、text-center、text-right和text-justify实用程序来控制元素的文本对齐方式。 -->
  <div class="m-4 mx-auto max-w-xl space-y-5 border p-4 shadow *:border *:bg-amber-400 *:shadow">
    <p class="text-left text-base">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系，但我告诉你杰瑞，那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-center text-base">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系，但我告诉你杰瑞，那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-right text-base">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系，但我告诉你杰瑞，那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-justify text-base">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系，但我告诉你杰瑞，那一刻，我是一个海洋生物学家。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
