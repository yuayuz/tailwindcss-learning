<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Word Break</header-h1>
  <!-- 用于控制元素中的单词中断 -->
  <paragraph-h2>Normal 仅在正常的单词断点处添加换行符</paragraph-h2>
  <!-- break-normal 仅在正常的单词断点处添加换行符 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="text-clip break-normal p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Break Words 在单词中间添加换行符</paragraph-h2>
  <!-- 如果需要，可以使用 break-words 在单词中间添加换行符 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="text-clip break-words p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Break All 不尝试保留整个单词</paragraph-h2>
  <!-- 在必要时添加 break-all 换行符，而不尝试保留整个单词 -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="text-clip break-all p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
  <paragraph-h2>Break Keep 防止对中文/日文/韩文 (CJK) 文本应用换行符</paragraph-h2>
  <!--
  使用 break-keep 防止对中文/日文/韩文 (CJK) 文本应用换行符。
  对于非 CJK 文本，break-keep 其行为与 break-normal 相同
  -->
  <div class="mx-auto my-5 max-w-xs border shadow">
    <p class="text-clip break-keep p-4 text-lg">
      牛津英语辞典中所收录最长的单词是由45个字母组成的pneumonoultramicroscopicsilicovolcanoconiosis，意为“因肺部沉积火山硅质微粒所引起的疾病”，通称火山矽肺病。其中
      pneumono- 表示“肺”，ultra-为“超”，micro为“细小”,-scopic表示“观看” ，silico- 表示“硅”，volcano
      指“火山”，coni- 意为“尘土”，而 –osis 为表示疾病的字尾。
    </p>
  </div>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
