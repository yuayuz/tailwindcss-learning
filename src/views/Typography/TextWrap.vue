<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Text Wrap</header-h1>
  <!-- 用于控制文本在元素内如何换行 -->
  <paragraph-h2>Wrap</paragraph-h2>
  <!-- text-wrap 将溢出的文本在文本中的逻辑点处换行到多行。 -->
  <div class="mx-auto my-5 max-w-xl border shadow">
    <p class="text-wrap p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>No Wrap</paragraph-h2>
  <!-- text-nowrap 防止文本换行，必要时允许文本溢出 -->
  <div class="mx-auto my-5 max-w-xl border shadow">
    <p class="overflow-auto text-nowrap p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Balance</paragraph-h2>
  <!-- text-balance 将文本均匀分布在每一行上 -->
  <div class="mx-auto my-5 max-w-xl border shadow">
    <p class="text-balance text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Pretty</paragraph-h2>
  <!-- text-pretty防止文本块末尾出现孤儿词（单个单词占据一行）。 -->
  <div class="mx-auto my-5 max-w-xl border shadow">
    <p class="text-pretty text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
