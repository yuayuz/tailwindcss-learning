import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PseudoClasses from '@/views/coreConcepts/PseudoClasses.vue'
import PseudoElements from '@/views/coreConcepts/PseudoElements.vue'
import MediaAndFeatureQueries from '@/views/coreConcepts/MediaAndFeatureQueries.vue'
import AttributeSelectors from '@/views/coreConcepts/AttributeSelectors.vue'
import ResponsiveDesign from '@/views/coreConcepts/ResponsiveDesign.vue'
import AspectRatio from '@/views/layout/AspectRatio.vue'
import Container from '@/views/layout/Container.vue'
import Columns from '@/views/layout/Columns.vue'
import BreakAfter from '@/views/layout/BreakAfter.vue'
import BreakBefore from '@/views/layout/BreakBefore.vue'
import BreakInside from '@/views/layout/BreakInside.vue'
import BoxDecorationBreak from '@/views/layout/BoxDecorationBreak.vue'
import BoxSizing from '@/views/layout/BoxSizing.vue'
import Display from '@/views/layout/Display.vue'
import Floats from '@/views/layout/Floats.vue'
import Clear from '@/views/layout/Clear.vue'
import Isolation from '@/views/layout/Isolation.vue'
import ObjectFit from '@/views/layout/ObjectFit.vue'
import ObjectPosition from '@/views/layout/ObjectPosition.vue'
import Overflow from '@/views/layout/Overflow.vue'
import OverscrollBehavior from '@/views/layout/OverscrollBehavior.vue'
import Position from '@/views/layout/Position.vue'
import TopRightBottomLeft from '@/views/layout/TopRightBottomLeft.vue'
import Visibility from '@/views/layout/Visibility.vue'
import FlexBasis from '@/views/FlexAndGrid/FlexBasis.vue'
import FlexDirection from '@/views/FlexAndGrid/FlexDirection.vue'
import FlexWrap from '@/views/FlexAndGrid/FlexWrap.vue'
import Flex from '@/views/FlexAndGrid/Flex.vue'
import FlexGrow from '@/views/FlexAndGrid/FlexGrow.vue'
import FlexShrink from '@/views/FlexAndGrid/FlexShrink.vue'
import Order from '@/views/FlexAndGrid/Order.vue'
import GridTemplateColumns from '@/views/FlexAndGrid/GridTemplateColumns.vue'
import GridColumnStartAndEnd from '@/views/FlexAndGrid/GridColumnStartAndEnd.vue'
import GridTemplateRows from '@/views/FlexAndGrid/GridTemplateRows.vue'
import GridRowStartAndEnd from '@/views/FlexAndGrid/GridRowStartAndEnd.vue'
import GridAutoFlow from '@/views/FlexAndGrid/GridAutoFlow.vue'
import GridAutoColumns from '@/views/FlexAndGrid/GridAutoColumns.vue'
import GridAutoRows from '@/views/FlexAndGrid/GridAutoRows.vue'
import Gap from '@/views/FlexAndGrid/Gap.vue'
import JustifyContent from '@/views/FlexAndGrid/JustifyContent.vue'
import JustifyItems from '@/views/FlexAndGrid/JustifyItems.vue'
import AlignContent from '@/views/FlexAndGrid/AlignContent.vue'
import AlignItems from '@/views/FlexAndGrid/AlignItems.vue'
import AlignSelf from '@/views/FlexAndGrid/AlignSelf.vue'
import PlaceContent from '@/views/FlexAndGrid/PlaceContent.vue'
import PlaceItems from '@/views/FlexAndGrid/PlaceItems.vue'
import PlaceSelf from '@/views/FlexAndGrid/PlaceSelf.vue'
import Padding from '@/views/Spacing/Padding.vue'
import Margin from '@/views/Spacing/Margin.vue'
import SpaceBetween from '@/views/Spacing/SpaceBetween.vue'
import Width from '@/views/Sizing/Width.vue'
import MinWidth from '@/views/Sizing/MinWidth.vue'
import MaxWidth from '@/views/Sizing/MaxWidth.vue'
import Height from '@/views/Sizing/Height.vue'
import MinHeight from '@/views/Sizing/MinHeight.vue'
import MaxHeight from '@/views/Sizing/MaxHeight.vue'
import Size from '@/views/Sizing/Size.vue'
import FontFamily from '@/views/Typography/FontFamily.vue'
import FontSize from '@/views/Typography/FontSize.vue'
import FontSmoothing from '@/views/Typography/FontSmoothing.vue'
import FontStyle from '@/views/Typography/FontStyle.vue'
import FontWeight from '@/views/Typography/FontWeight.vue'
import FontVariantNumeric from '@/views/Typography/FontVariantNumeric.vue'
import LetterSpacing from '@/views/Typography/LetterSpacing.vue'
import LineClamp from '@/views/Typography/LineClamp.vue'
import LineHeight from '@/views/Typography/LineHeight.vue'
import ListStyleImage from '@/views/Typography/ListStyleImage.vue'
import ListStylePosition from '@/views/Typography/ListStylePosition.vue'
import ListStyleType from '@/views/Typography/ListStyleType.vue'
import TextAlign from '@/views/Typography/TextAlign.vue'
import TextColor from '@/views/Typography/TextColor.vue'
import TextDecoration from '@/views/Typography/TextDecoration.vue'
import TextDecorationColor from '@/views/Typography/TextDecorationColor.vue'
import TextDecorationStyle from '@/views/Typography/TextDecorationStyle.vue'
import TextDecorationThickness from '@/views/Typography/TextDecorationThickness.vue'
import TextUnderlineOffset from '@/views/Typography/TextUnderlineOffset.vue'
import TextTransform from '@/views/Typography/TextTransform.vue'
import TextOverflow from '@/views/Typography/TextOverflow.vue'
import TextWrap from '@/views/Typography/TextWrap.vue'
import TextIndent from '@/views/Typography/TextIndent.vue'
import VerticalAlign from '@/views/Typography/VerticalAlign.vue'
import WordBreak from '@/views/Typography/WordBreak.vue'
import Hyphens from '@/views/Typography/Hyphens.vue'
import BackgroundAttachment from '@/views/Backgrounds/BackgroundAttachment.vue'
import BackgroundClip from '@/views/Backgrounds/BackgroundClip.vue'
import BackgroundColor from '@/views/Backgrounds/BackgroundColor.vue'
import BackgroundOrigin from '@/views/Backgrounds/BackgroundOrigin.vue'
import BackgroundPosition from '@/views/Backgrounds/BackgroundPosition.vue'
import BackgroundRepeat from '@/views/Backgrounds/BackgroundRepeat.vue'
import BackgroundSize from '@/views/Backgrounds/BackgroundSize.vue'
import BackgroundImage from '@/views/Backgrounds/BackgroundImage.vue'
import GradientColorStops from '@/views/Backgrounds/GradientColorStops.vue'
import BorderRadius from '@/views/Borders/BorderRadius.vue'
import BorderWidth from '@/views/Borders/BorderWidth.vue'
import BorderColor from '@/views/Borders/BorderColor.vue'
import BorderStyle from '@/views/Borders/BorderStyle.vue'
import DivideWidth from '@/views/Borders/DivideWidth.vue'
import DivideColor from '@/views/Borders/DivideColor.vue'
import DivideStyle from '@/views/Borders/DivideStyle.vue'
import OutlineWidth from '@/views/Borders/OutlineWidth.vue'
import OutlineColor from '@/views/Borders/OutlineColor.vue'
import OutlineStyle from '@/views/Borders/OutlineStyle.vue'
import OutlineOffset from '@/views/Borders/OutlineOffset.vue'
import RingWidth from '@/views/Borders/RingWidth.vue'
import RingColor from '@/views/Borders/RingColor.vue'
import RingOffsetWidth from '@/views/Borders/RingOffsetWidth.vue'
import RingOffsetColor from '@/views/Borders/RingOffsetColor.vue'
import BoxShadow from '@/views/Effects/BoxShadow.vue'
import BoxShadowColor from '@/views/Effects/BoxShadowColor.vue'
import Opacity from '@/views/Effects/Opacity.vue'
import MixBlendMode from '@/views/Effects/MixBlendMode.vue'
import Blur from '@/views/Filters/Blur.vue'
import Brightness from '@/views/Filters/Brightness.vue'
import Contrast from '@/views/Filters/Contrast.vue'
import DropShadow from '@/views/Filters/DropShadow.vue'
import Grayscale from '@/views/Filters/Grayscale.vue'
import HueRotate from '@/views/Filters/HueRotate.vue'
import Invert from '@/views/Filters/Invert.vue'
import Saturate from '@/views/Filters/Saturate.vue'
import Sepia from '@/views/Filters/Sepia.vue'
import BackdropBlur from '@/views/Filters/BackdropBlur.vue'
import BackdropBrightness from '@/views/Filters/BackdropBrightness.vue'
import BackdropContrast from '@/views/Filters/BackdropContrast.vue'
import BackdropGrayscale from '@/views/Filters/BackdropGrayscale.vue'
import BackdropHueRotate from '@/views/Filters/BackdropHueRotate.vue'
import BackdropInvert from '@/views/Filters/BackdropInvert.vue'
import BackdropOpacity from '@/views/Filters/BackdropOpacity.vue'
import BackdropSaturate from '@/views/Filters/BackdropSaturate.vue'
import BackdropSepia from '@/views/Filters/BackdropSepia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/PseudoClasses',
      name: 'PseudoClasses',
      component: PseudoClasses
    },
    {
      path: '/PseudoElements',
      name: 'PseudoElements',
      component: PseudoElements
    },
    {
      path: '/MediaAndFeatureQueries',
      name: 'MediaAndFeatureQueries',
      component: MediaAndFeatureQueries
    },
    {
      path: '/AttributeSelectors',
      name: 'AttributeSelectors',
      component: AttributeSelectors
    },
    {
      path: '/ResponsiveDesign ',
      name: 'ResponsiveDesign',
      component: ResponsiveDesign
    },
    {
      path: '/AspectRatio',
      name: 'AspectRatio',
      component: AspectRatio
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    },
    {
      path: '/Columns',
      name: 'Columns',
      component: Columns
    },
    {
      path: '/BreakAfter',
      name: 'BreakAfter',
      component: BreakAfter
    },
    {
      path: '/BreakBefore',
      name: 'BreakBefore',
      component: BreakBefore
    },
    {
      path: '/BreakInside',
      name: 'BreakInside',
      component: BreakInside
    },
    {
      path: '/BoxDecorationBreak',
      name: 'BoxDecorationBreak',
      component: BoxDecorationBreak
    },
    {
      path: '/BoxSizing',
      name: 'BoxSizing',
      component: BoxSizing
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    },
    {
      path: '/Floats',
      name: 'Floats',
      component: Floats
    },
    {
      path: '/Clear',
      name: 'Clear',
      component: Clear
    },
    {
      path: '/Isolation',
      name: 'Isolation',
      component: Isolation
    },
    {
      path: '/ObjectFit',
      name: 'ObjectFit',
      component: ObjectFit
    },
    {
      path: '/ObjectPosition',
      name: 'ObjectPosition',
      component: ObjectPosition
    },
    {
      path: '/Overflow',
      name: 'Overflow',
      component: Overflow
    },
    {
      path: '/OverscrollBehavior',
      name: 'OverscrollBehavior',
      component: OverscrollBehavior
    },
    {
      path: '/Position',
      name: 'Position',
      component: Position
    },
    {
      path: '/TopRightBottomLeft',
      name: 'TopRightBottomLeft',
      component: TopRightBottomLeft
    },
    {
      path: '/Visibility',
      name: 'Visibility',
      component: Visibility
    },
    {
      path: '/FlexBasis',
      name: 'FlexBasis',
      component: FlexBasis
    },
    {
      path: '/FlexDirection',
      name: 'FlexDirection',
      component: FlexDirection
    },
    {
      path: '/FlexWrap',
      name: 'FlexWrap',
      component: FlexWrap
    },
    {
      path: '/Flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/FlexGrow',
      name: 'FlexGrow',
      component: FlexGrow
    },
    {
      path: '/FlexShrink',
      name: 'FlexShrink',
      component: FlexShrink
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/GridTemplateColumns',
      name: 'GridTemplateColumns',
      component: GridTemplateColumns
    },
    {
      path: '/GridColumnStartAndEnd',
      name: 'GridColumnStartAndEnd',
      component: GridColumnStartAndEnd
    },
    {
      path: '/GridTemplateRows',
      name: 'GridTemplateRows',
      component: GridTemplateRows
    },
    {
      path: '/GridRowStartAndEnd',
      name: 'GridRowStartAndEnd',
      component: GridRowStartAndEnd
    },
    {
      path: '/GridAutoFlow',
      name: 'GridAutoFlow',
      component: GridAutoFlow
    },
    {
      path: '/GridAutoColumns',
      name: 'GridAutoColumns',
      component: GridAutoColumns
    },
    {
      path: '/GridAutoRows',
      name: 'GridAutoRows',
      component: GridAutoRows
    },
    {
      path: '/Gap',
      name: 'Gap',
      component: Gap
    },
    {
      path: '/JustifyContent',
      name: 'JustifyContent',
      component: JustifyContent
    },
    {
      path: '/JustifyItems',
      name: 'JustifyItems',
      component: JustifyItems
    },
    {
      path: '/AlignContent',
      name: 'AlignContent',
      component: AlignContent
    },
    {
      path: '/AlignItems',
      name: 'AlignItems',
      component: AlignItems
    },
    {
      path: '/AlignSelf',
      name: 'AlignSelf',
      component: AlignSelf
    },
    {
      path: '/PlaceContent',
      name: 'PlaceContent',
      component: PlaceContent
    },
    {
      path: '/PlaceItems',
      name: 'PlaceItems',
      component: PlaceItems
    },
    {
      path: '/PlaceSelf',
      name: 'PlaceSelf',
      component: PlaceSelf
    },
    {
      path: '/Padding',
      name: 'Padding',
      component: Padding
    },
    {
      path: '/Margin',
      name: 'Margin',
      component: Margin
    },
    {
      path: '/SpaceBetween',
      name: 'SpaceBetween',
      component: SpaceBetween
    },
    {
      path: '/Width',
      name: 'Width',
      component: Width
    },
    {
      path: '/MinWidth',
      name: 'MinWidth',
      component: MinWidth
    },
    {
      path: '/MaxWidth',
      name: 'MaxWidth',
      component: MaxWidth
    },
    {
      path: '/Height',
      name: 'Height',
      component: Height
    },
    {
      path: '/MinHeight',
      name: 'MinHeight',
      component: MinHeight
    },
    {
      path: '/MaxHeight',
      name: 'MaxHeight',
      component: MaxHeight
    },
    {
      path: '/Size',
      name: 'Size',
      component: Size
    },
    {
      path: '/FontFamily',
      name: 'FontFamily',
      component: FontFamily
    },
    {
      path: '/FontSize',
      name: 'FontSize',
      component: FontSize
    },
    {
      path: '/FontSmoothing',
      name: 'FontSmoothing',
      component: FontSmoothing
    },
    {
      path: '/FontStyle',
      name: 'FontStyle',
      component: FontStyle
    },
    {
      path: '/FontWeight',
      name: 'FontWeight',
      component: FontWeight
    },
    {
      path: '/FontVariantNumeric',
      name: 'FontVariantNumeric',
      component: FontVariantNumeric
    },
    {
      path: '/LetterSpacing',
      name: 'LetterSpacing',
      component: LetterSpacing
    },
    {
      path: '/LineClamp',
      name: 'LineClamp',
      component: LineClamp
    },
    {
      path: '/LineHeight',
      name: 'LineHeight',
      component: LineHeight
    },
    {
      path: '/ListStyleImage',
      name: 'ListStyleImage',
      component: ListStyleImage
    },
    {
      path: '/ListStylePosition',
      name: 'ListStylePosition',
      component: ListStylePosition
    },
    {
      path: '/ListStyleStyle',
      name: 'ListStyleStyle',
      component: ListStyleType
    },
    {
      path: '/TextAlign',
      name: 'TextAlign',
      component: TextAlign
    },
    {
      path: '/TextColor',
      name: 'TextColor',
      component: TextColor
    },
    {
      path: '/TextDecoration',
      name: 'TextDecoration',
      component: TextDecoration
    },
    {
      path: '/TextDecorationColor',
      name: 'TextDecorationColor',
      component: TextDecorationColor
    },
    {
      path: '/TextDecorationStyle',
      name: 'TextDecorationStyle',
      component: TextDecorationStyle
    },
    {
      path: '/TextDecorationThickness',
      name: 'TextDecorationThickness',
      component: TextDecorationThickness
    },
    {
      path: '/TextUnderlineOffset',
      name: 'TextUnderlineOffset',
      component: TextUnderlineOffset
    },
    {
      path: '/TextTransform',
      name: 'TextTransform',
      component: TextTransform
    },
    {
      path: '/TextOverflow',
      name: 'TextOverflow',
      component: TextOverflow
    },
    {
      path: '/TextWrap',
      name: 'TextWrap',
      component: TextWrap
    },
    {
      path: '/TextIndent',
      name: 'TextIndent',
      component: TextIndent
    },
    {
      path: '/VerticalAlign',
      name: 'VerticalAlign',
      component: VerticalAlign
    },
    {
      path: '/WordBreak',
      name: 'WordBreak',
      component: WordBreak
    },
    {
      path: '/Hyphens',
      name: 'Hyphens',
      component: Hyphens
    },
    {
      path: '/BackgroundAttachment',
      name: 'BackgroundAttachment',
      component: BackgroundAttachment
    },
    {
      path: '/BackgroundClip',
      name: 'BackgroundClip',
      component: BackgroundClip
    },
    {
      path: '/BackgroundColor',
      name: 'BackgroundColor',
      component: BackgroundColor
    },
    {
      path: '/BackgroundOrigin',
      name: 'BackgroundOrigin',
      component: BackgroundOrigin
    },
    {
      path: '/BackgroundPosition',
      name: 'BackgroundPosition',
      component: BackgroundPosition
    },
    {
      path: '/BackgroundRepeat',
      name: 'BackgroundRepeat',
      component: BackgroundRepeat
    },
    {
      path: '/BackgroundSize',
      name: 'BackgroundSize',
      component: BackgroundSize
    },
    {
      path: '/BackgroundImage',
      name: 'BackgroundImage',
      component: BackgroundImage
    },
    {
      path: '/GradientColorStops',
      name: 'GradientColorStops',
      component: GradientColorStops
    },
    {
      path: '/BorderRadius',
      name: 'BorderRadius',
      component: BorderRadius
    },
    {
      path: '/BorderWidth',
      name: 'BorderWidth',
      component: BorderWidth
    },
    {
      path: '/BorderColor',
      name: 'BorderColor',
      component: BorderColor
    },
    {
      path: '/BorderStyle',
      name: 'BorderStyle',
      component: BorderStyle
    },
    {
      path: '/DivideWidth',
      name: 'DivideWidth',
      component: DivideWidth
    },
    {
      path: '/DivideColor',
      name: 'DivideColor',
      component: DivideColor
    },
    {
      path: '/DivideStyle',
      name: 'DivideStyle',
      component: DivideStyle
    },
    {
      path: '/OutlineWidth',
      name: 'OutlineWidth',
      component: OutlineWidth
    },
    {
      path: '/OutlineColor',
      name: 'OutlineColor',
      component: OutlineColor
    },
    {
      path: '/OutlineStyle',
      name: 'OutlineStyle',
      component: OutlineStyle
    },
    {
      path: '/OutlineOffset',
      name: 'OutlineOffset',
      component: OutlineOffset
    },
    {
      path: '/RingWidth',
      name: 'RingWidth',
      component: RingWidth
    },
    {
      path: '/RingColor',
      name: 'RingColor',
      component: RingColor
    },
    {
      path: '/RingOffsetWidth',
      name: 'RingOffsetWidth',
      component: RingOffsetWidth
    },
    {
      path: '/RingOffsetColor',
      name: 'RingOffsetColor',
      component: RingOffsetColor
    },
    {
      path: '/BoxShadow',
      name: 'BoxShadow',
      component: BoxShadow
    },
    {
      path: '/BoxShadowColor',
      name: 'BoxShadowColor',
      component: BoxShadowColor
    },
    {
      path: '/Opacity',
      name: 'Opacity',
      component: Opacity
    },
    {
      path: '/MixBlendMode',
      name: 'MixBlendMode',
      component: MixBlendMode
    },
    {
      path: '/Blur',
      name: 'Blur',
      component: Blur
    },
    {
      path: '/Brightness',
      name: 'Brightness',
      component: Brightness
    },
    {
      path: '/Contrast',
      name: 'Contrast',
      component: Contrast
    },
    {
      path: '/DropShadow',
      name: 'DropShadow',
      component: DropShadow
    },
    {
      path: '/Grayscale',
      name: 'Grayscale',
      component: Grayscale
    },
    {
      path: '/HueRotate',
      name: 'HueRotate',
      component: HueRotate
    },
    {
      path: '/Invert',
      name: 'Invert',
      component: Invert
    },
    {
      path: '/Saturate',
      name: 'Saturate',
      component: Saturate
    },
    {
      path: '/Sepia',
      name: 'Sepia',
      component: Sepia
    },
    {
      path: '/BackdropBlur',
      name: 'BackdropBlur',
      component: BackdropBlur
    },
    {
      path: '/BackdropBrightness',
      name: 'BackdropBrightness',
      component: BackdropBrightness
    },
    {
      path: '/BackdropContrast',
      name: 'BackdropContrast',
      component: BackdropContrast
    },
    {
      path: '/BackdropGrayscale',
      name: 'BackdropGrayscale',
      component: BackdropGrayscale
    },
    {
      path: '/BackdropHueRotate',
      name: 'BackdropHueRotate',
      component: BackdropHueRotate
    },
    {
      path: '/BackdropInvert',
      name: 'BackdropInvert',
      component: BackdropInvert
    },
    {
      path: '/BackdropOpacity',
      name: 'BackdropOpacity',
      component: BackdropOpacity
    },
    {
      path: '/BackdropSaturate',
      name: 'BackdropSaturate',
      component: BackdropSaturate
    },
    {
      path: '/BackdropSepia',
      name: 'BackdropSepia',
      component: BackdropSepia
    }
  ]
})

export default router
