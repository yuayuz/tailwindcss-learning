<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import PH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Font Variant Numeric</header-h1>
  <!-- 用于控制数字变体 -->
  <!--
  使用 font-variant-numeric 实用程序为数字、分数和序数标记启用附加字形（在支持它们的字体中）。
  这些实用程序是可组合的，因此可以 font-variant-numeric 通过组合 HTML 中的多个类来启用多项功能
  -->
  <!--
  请注意，许多字体不支持这些功能（例如，堆叠分数支持尤其罕见），
  因此其中一些实用程序可能对您正在使用的字体系列不起作用
  -->
  <p-h2>Ordinal 序数</p-h2>
  <!-- 使用 ordinal 实用程序为序数标记启用特殊字形 -->
  <p class="text-lg ordinal">1st</p>
  <p-h2>Slashed Zero</p-h2>
  <!-- 使用 slashed-zero 实用程序强制将 0 替换为斜线；当需要明确区分 O 和 0 时，这很有用 -->
  <p class="text-lg slashed-zero">0</p>
  <p-h2>Lining figures</p-h2>
  <!--
   使用该 lining-nums 实用程序使用按基线对齐的数字字形。这对应于 'lnum' OpenType 功能。
   这是大多数字体的默认设置。
  -->
  <p class="text-lg lining-nums">1234567890</p>
  <p-h2>Oldstyle figures</p-h2>
  <!-- 使用 oldstyle-nums 实用程序在某些数字有降部的地方使用数字字形。这对应于 'onum' OpenType 功能 -->
  <p class="text-lg oldstyle-nums">1234567890</p>
  <p-h2>Proportional figures</p-h2>
  <!--
   使用 proportional-nums 实用程序使用具有比例宽度（而不是统一/表格）的数字字形。
   这对应于 'pnum' OpenType 功能。
  -->
  <p class="text-lg proportional-nums">12121</p>
  <p class="text-lg proportional-nums">90909</p>
  <p-h2>Tabular figures</p-h2>
  <!--
  使用 tabular-nums 实用程序使用具有统一/表格宽度（而不是比例）的数字字形。
  这对应于'tnum' OpenType 功能。
  -->
  <p class="text-lg tabular-nums">12121</p>
  <p class="text-lg tabular-nums">90909</p>
  <p-h2>Diagonal fractions</p-h2>
  <!--
  使用 diagonal-fractions 实用程序将斜线分隔的数字替换为常见的对角线分数。
  这对应于 'frac' OpenType 功能。
  -->
  <p class="text-lg diagonal-fractions">1/2 3/4 5/6</p>
  <p-h2>Stacked fractions</p-h2>
  <!--
  使用 stacked-fractions 实用程序将斜线分隔的数字替换为常见的堆叠分数。
  这对应于 'afrc' OpenType 功能。很少有字体似乎支持此功能
  -->
  <p class="text-lg stacked-fractions">1/2 3/4 5/6</p>
  <p-h2>重置数字字体变体</p-h2>
  <!--
  使用 normal-nums 属性可重置数字字体变体。这通常对于在特定断点处重置字体功能很有用
  -->
  <p class="text-lg slashed-zero tabular-nums md:normal-nums">12345</p>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
