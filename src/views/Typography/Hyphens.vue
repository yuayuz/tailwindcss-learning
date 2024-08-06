<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Hyphens</header-h1>
  <!-- 用于控制单词如何使用连字符 -->
  <paragraph-h2>None</paragraph-h2>
  <!-- 即使使用了换行建议 &shy;,hyphens-none 也可以防止单词被连字符连接 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="overflow-hidden text-clip hyphens-none p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovoca&shy;noconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Manual</paragraph-h2>
  <!-- 使用 hyphens-manual 设置建议的连字点在换行建议 &shy; 处 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="overflow-hidden text-clip hyphens-manual p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovoca&shy;noconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Auto</paragraph-h2>
  <!-- 使用 hyphens-auto 允许浏览器根据语言自动选择连字点。换行建议 &shy; 优先级将高于自动 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="overflow-hidden text-clip hyphens-auto p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovocanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
