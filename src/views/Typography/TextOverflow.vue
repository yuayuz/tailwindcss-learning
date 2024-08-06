<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Overflow</header-h1>
  <!-- 用于控制元素中的文本溢出 -->
  <paragraph-h2>截短</paragraph-h2>
  <!-- 用于防止文本换行，在需要时truncate用省略号 ( … ) 截断溢出的文本。 -->
  <div class="mx-auto my-5 max-w-xl border shadow">
    <p class="truncate p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>省略</paragraph-h2>
  <!-- 如果需要，使用 text-ellipsis 省略号 ( … ) 截断溢出的文本。 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="overflow-hidden text-ellipsis p-4 text-lg hover:overflow-auto">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>clip</paragraph-h2>
  <!--使用 text-clip 在内容区域的限制处截断文本。 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="overflow-hidden text-clip p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
