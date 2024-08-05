<script setup lang="ts">
import router from '@/router'
import HoverFocusAndOtherStates from '@/views/coreConcepts/PseudoClasses.vue'
import PH2 from '@/components/pH2.vue'
import Clear from '@/views/layout/Clear.vue'

const handleRouter = function (page: string) {
  router.push({ name: page })
}
</script>

<template>
  <h1 class="padding bg m-1 bg-sky-400 p-1">Home</h1>

  <p-h2>Core Concepts</p-h2>
  <button
    @click="handleRouter('PseudoClasses')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    PseudoClasses
  </button>
  <button
    @click="handleRouter('PseudoElements')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    PseudoElements
  </button>
  <button
    @click="handleRouter('MediaAndFeatureQueries')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    MediaAndFeatureQueries
  </button>
  <button
    @click="handleRouter('AttributeSelectors')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    AttributeSelectors
  </button>
  <button
    @click="handleRouter('ResponsiveDesign')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    ResponsiveDesign
  </button>
  <p-h2>AspectRatio</p-h2>
  <button
    @click="handleRouter('AspectRatio')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    AspectRatio
  </button>
  <button
    @click="handleRouter('Container')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Container
  </button>
  <button
    @click="handleRouter('Columns')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Columns
  </button>
  <button
    @click="handleRouter('BreakAfter')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    BreakAfter
  </button>
  <button
    @click="handleRouter('BreakBefore')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    BreakBefore
  </button>
  <button
    @click="handleRouter('BreakInside')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    BreakInside
  </button>
  <button
    @click="handleRouter('BoxDecorationBreak')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    BoxDecorationBreak
  </button>
  <button
    @click="handleRouter('BoxSizing')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    BoxSizing
  </button>
  <button
    @click="handleRouter('Display')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Display
  </button>
  <button
    @click="handleRouter('Floats')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Floats
  </button>
  <button
    @click="handleRouter('Clear')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Clear
  </button>
  <button
    @click="handleRouter('Isolation')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Isolation
  </button>
  <button
    @click="handleRouter('ObjectFit')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    ObjectFit
  </button>
  <button
    @click="handleRouter('ObjectPosition')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    ObjectPosition
  </button>
  <button
    @click="handleRouter('Overflow')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Overflow
  </button>
  <button
    @click="handleRouter('OverscrollBehavior')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    OverscrollBehavior
  </button>
  <button
    @click="handleRouter('Position')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Position
  </button>
  <button
    @click="handleRouter('TopRightBottomLeft')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    TopRightBottomLeft
  </button>
  <button
    @click="handleRouter('Visibility')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Visibility
  </button>
  <p-h2>FlexboxGrid</p-h2>
  <button
    @click="handleRouter('FlexBasis')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    FlexBasis
  </button>
  <button
    @click="handleRouter('FlexDirection')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    FlexDirection
  </button>
  <button
    @click="handleRouter('FlexWrap')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Flex Wrap
  </button>
  <button
    @click="handleRouter('Flex')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Flex
  </button>
  <button
    @click="handleRouter('FlexGrow')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    FlexGrow
  </button>
  <button
    @click="handleRouter('FlexShrink')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    FlexShrink
  </button>
  <button
    @click="handleRouter('Order')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Order
  </button>
  <button
    @click="handleRouter('GridTemplateColumns')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridTemplateColumns
  </button>
  <button
    @click="handleRouter('GridColumnStartAndEnd')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridColumnStartAndEnd
  </button>
  <button
    @click="handleRouter('GridTemplateRows')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridTemplateRows
  </button>
  <button
    @click="handleRouter('GridRowStartAndEnd')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridRowStartAndEnd
  </button>
  <button
    @click="handleRouter('GridAutoFlow')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridAutoFlow
  </button>
  <button
    @click="handleRouter('GridAutoColumns')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridAutoColumns
  </button>
  <button
    @click="handleRouter('GridAutoRows')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    GridAutoRows
  </button>
  <button
    @click="handleRouter('Gap')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    Gap
  </button>
  <button
    @click="handleRouter('JustifyContent')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    JustifyContent
  </button>
  <button
    @click="handleRouter('JustifyItems')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    JustifyItems
  </button>
  <button
    @click="handleRouter('AlignContent')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    AlignContent
  </button>
  <button
    @click="handleRouter('AlignItems')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    AlignItems
  </button>
  <button
    @click="handleRouter('AlignSelf')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    AlignSelf
  </button>
  <button
    @click="handleRouter('PlaceContent')"
    class="rounded-full bg-violet-500 text-slate-50 hover:bg-violet-800"
  >
    PlaceContent
  </button>
</template>
<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
