<script setup lang="ts">
import PH2 from '@/components/ParagraphH2.vue'
import HomeButton from '@/components/HomeButton.vue'
import ParagraphH2 from '@/components/ParagraphH2.vue'
</script>

<template>
  <h1 class="padding bg m-1 bg-sky-400 p-1">Home</h1>

  <p-h2>Core Concepts</p-h2>
  <home-button page="PseudoClasses"></home-button>
  <home-button page="PseudoElements"></home-button>
  <home-button page="MediaAndFeatureQueries"></home-button>
  <home-button page="AttributeSelectors"></home-button>
  <home-button page="ResponsiveDesign"></home-button>
  <p-h2>AspectRatio</p-h2>
  <home-button page="AspectRatio"></home-button>
  <home-button page="Container"></home-button>
  <home-button page="Columns"></home-button>
  <home-button page="BreakAfter"></home-button>
  <home-button page="BreakBefore"></home-button>
  <home-button page="BreakInside"></home-button>
  <home-button page="BoxDecorationBreak"></home-button>
  <home-button page="BoxSizing"></home-button>
  <home-button page="Display"></home-button>
  <home-button page="Floats"></home-button>
  <home-button page="Clear"></home-button>
  <home-button page="Isolation"></home-button>
  <home-button page="ObjectFit"></home-button>
  <home-button page="ObjectPosition"></home-button>
  <home-button page="Overflow"></home-button>
  <home-button page="OverscrollBehavior"></home-button>
  <home-button page="Position"></home-button>
  <home-button page="TopRightBottomLeft"></home-button>
  <home-button page="Visibility"></home-button>
  <p-h2>FlexboxGrid</p-h2>
  <home-button page="FlexBasis"></home-button>
  <home-button page="FlexDirection"></home-button>
  <home-button page="FlexWrap"></home-button>
  <home-button page="Flex"></home-button>
  <home-button page="FlexGrow"></home-button>
  <home-button page="FlexShrink"></home-button>
  <home-button page="Order"></home-button>
  <home-button page="GridTemplateColumns"></home-button>
  <home-button page="GridColumnStartAndEnd"></home-button>
  <home-button page="GridTemplateRows"></home-button>
  <home-button page="GridRowStartAndEnd"></home-button>
  <home-button page="GridAutoFlow"></home-button>
  <home-button page="GridAutoColumns"></home-button>
  <home-button page="GridAutoRows"></home-button>
  <home-button page="Gap"></home-button>
  <home-button page="JustifyContent"></home-button>
  <home-button page="JustifyItems"></home-button>
  <home-button page="AlignContent"></home-button>
  <home-button page="AlignItems"></home-button>
  <home-button page="AlignSelf"></home-button>
  <home-button page="PlaceContent"></home-button>
  <home-button page="PlaceItems"></home-button>
  <home-button page="PlaceSelf"></home-button>
  <p-h2>Padding</p-h2>
  <home-button page="Padding"></home-button>
  <home-button page="Margin"></home-button>
  <home-button page="SpaceBetween"></home-button>
  <p-h2>Sizing</p-h2>
  <home-button page="Width"></home-button>
  <home-button page="MinWidth"></home-button>
  <home-button page="MaxWidth"></home-button>
  <home-button page="Height"></home-button>
  <home-button page="MinHeight"></home-button>
  <home-button page="MaxHeight"></home-button>
  <home-button page="Size"></home-button>
  <p-h2>Sizing</p-h2>
  <home-button page="FontFamily"></home-button>
  <home-button page="FontSize"></home-button>
  <home-button page="FontSmoothing"></home-button>
  <home-button page="FontStyle"></home-button>
  <home-button page="FontWeight"></home-button>
  <home-button page="FontVariantNumeric"></home-button>
  <home-button page="LetterSpacing"></home-button>
  <home-button page="LineClamp"></home-button>
  <home-button page="LineHeight"></home-button>
  <home-button page="ListStyleImage"></home-button>
  <home-button page="ListStylePosition"></home-button>
  <home-button page="ListStyleStyle"></home-button>
  <home-button page="TextAlign"></home-button>
  <home-button page="TextColor"></home-button>
  <home-button page="TextDecoration"></home-button>
  <home-button page="TextDecorationColor"></home-button>
  <home-button page="TextDecorationStyle"></home-button>
  <home-button page="TextDecorationThickness"></home-button>
  <home-button page="TextUnderlineOffset"></home-button>
  <home-button page="TextTransform"></home-button>
  <home-button page="TextOverflow"></home-button>
  <home-button page="TextWrap"></home-button>
  <home-button page="TextIndent"></home-button>
  <home-button page="VerticalAlign"></home-button>
  <home-button page="WordBreak"></home-button>
  <home-button page="Hyphens"></home-button>
  <paragraph-h2>Backgrounds</paragraph-h2>
  <home-button page="BackgroundAttachment"></home-button>
  <home-button page="BackgroundClip"></home-button>
  <home-button page="BackgroundColor"></home-button>
  <home-button page="BackgroundOrigin"></home-button>
  <home-button page="BackgroundPosition"></home-button>
  <home-button page="BackgroundRepeat"></home-button>
  <home-button page="BackgroundSize"></home-button>
  <home-button page="BackgroundImage"></home-button>
  <home-button page="GradientColorStops"></home-button>
  <paragraph-h2>Borders</paragraph-h2>
  <home-button page="BorderRadius"></home-button>
  <home-button page="BorderWidth"></home-button>
  <home-button page="BorderColor"></home-button>
  <home-button page="BorderStyle"></home-button>
  <home-button page="DivideWidth"></home-button>
  <home-button page="DivideColor"></home-button>
  <home-button page="DivideStyle"></home-button>
  <home-button page="OutlineWidth"></home-button>
  <home-button page="OutlineColor"></home-button>
  <home-button page="OutlineStyle"></home-button>
  <home-button page="OutlineOffset"></home-button>
  <home-button page="RingWidth"></home-button>
  <home-button page="RingColor"></home-button>
  <home-button page="RingOffsetWidth"></home-button>
  <home-button page="RingOffsetColor"></home-button>
  <paragraph-h2> Effects</paragraph-h2>
  <home-button page="BoxShadow"></home-button>
  <home-button page="BoxShadowColor"></home-button>
  <home-button page="Opacity"></home-button>
  <home-button page="MixBlendMode"></home-button>
  <paragraph-h2>Filters</paragraph-h2>
  <home-button page="Blur"></home-button>
  <home-button page="Brightness"></home-button>
  <home-button page="Contrast"></home-button>
  <home-button page="DropShadow"></home-button>
  <home-button page="Grayscale"></home-button>
  <home-button page="HueRotate"></home-button>
  <home-button page="Invert"></home-button>
  <home-button page="Saturate"></home-button>
  <home-button page="Sepia"></home-button>
  <home-button page="BackdropBlur"></home-button>
  <home-button page="BackdropBrightness"></home-button>
  <home-button page="BackdropContrast"></home-button>
  <home-button page="BackdropGrayscale"></home-button>
  <home-button page="BackdropHueRotate"></home-button>
  <home-button page="BackdropInvert"></home-button>
  <home-button page="BackdropOpacity"></home-button>
  <home-button page="BackdropSaturate"></home-button>
  <home-button page="BackdropSepia"></home-button>
  <paragraph-h2>Tables</paragraph-h2>
  <home-button page="BorderCollapse"></home-button>
  <home-button page="BorderSpacing"></home-button>
  <home-button page="TableLayout"></home-button>
  <home-button page="CaptionSide"></home-button>
  <paragraph-h2>TransitionsAndAnimation</paragraph-h2>
  <home-button page="TransitionProperty"></home-button>
  <home-button page="TransitionDuration"></home-button>
  <home-button page="TransitionTimingFunction"></home-button>
  <home-button page="TransitionDelay"></home-button>
  <home-button page="AnimationView"></home-button>
  <paragraph-h2>Transforms</paragraph-h2>
  <home-button page="Scale"></home-button>
  <home-button page="Rotate"></home-button>
  <home-button page="Translate"></home-button>
  <home-button page="Skew"></home-button>
  <home-button page="TransformOrigin"></home-button>
  <paragraph-h2>Interactivity</paragraph-h2>
  <home-button page="AccentColor"></home-button>
</template>
<style scoped>
@import 'tailwindcss/tailwind.css';
</style>
