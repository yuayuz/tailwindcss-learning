<script setup lang="ts">
import HeaderH1 from '@/components/HeaderH1.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <header-h1>Caption Side</header-h1>
  <!-- 用于控制表格内标题元素对齐的实用程序 -->
  <paragraph-h2>顶部</paragraph-h2>
  <!--  使用 caption-top 将标题元素定位在表格的顶部 -->
  <table>
    <caption class="caption-top">
      Table 3.1: Professional wrestlers and their signature moves.
    </caption>
    <thead>
      <tr>
        <th>Wrestler</th>
        <th>Signature Move(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>"Stone Cold" Steve Austin</td>
        <td>Stone Cold Stunner, Lou Thesz Press</td>
      </tr>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>The Sharpshooter</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Razor's Edge, Fallaway Slam</td>
      </tr>
    </tbody>
  </table>
  <paragraph-h2>底部</paragraph-h2>
  <!-- 用于 caption-bottom 将标题元素定位在表格的底部 -->
  <table>
    <caption class="caption-bottom">
      Table 3.1: Professional wrestlers and their signature moves.
    </caption>
    <thead>
      <tr>
        <th>Wrestler</th>
        <th>Signature Move(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>"Stone Cold" Steve Austin</td>
        <td>Stone Cold Stunner, Lou Thesz Press</td>
      </tr>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>The Sharpshooter</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Razor's Edge, Fallaway Slam</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
