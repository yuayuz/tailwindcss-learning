<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Line Height</header-h1>
  <!-- 用于控制元素行距（行高） -->
  <p-h2>相对行高</p-h2>
  <!--
  使用 leading-none、leading-tight、leading-snug、leading-normal
  和 leading-relaxed。leading-loose 实用程序根据元素的当前字体大小为其提供相对行高
  -->
  <div class="m-4 mx-auto max-w-xl space-y-3 border bg-slate-50 p-5 shadow-2xl">
    <p class="text-lg leading-normal">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-lg leading-relaxed">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-lg leading-loose">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
  </div>
  <p-h2>固定行高</p-h2>
  <!--
  使用 leading-6 和 leading-7 等实用程序为元素指定固定的行高，而不考虑当前字体大小。
  当需要非常精确地控制元素的最终大小时，这些实用程序非常有用。
  -->
  <div class="m-4 mx-auto max-w-xl space-y-3 border bg-slate-50 p-5 shadow-2xl">
    <p class="text-lg leading-6">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-lg leading-8">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
    <p class="text-lg leading-10">
      于是我开始走进水中。我不会骗你们，孩子们，我当时真的很害怕。
      但我继续往前走，当我穿过防波堤时，一种奇怪的平静笼罩了我。
      我不知道这是神的干预还是所有生物的亲缘关系， 但我告诉你杰瑞， 那一刻，我是一个海洋生物学家。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
