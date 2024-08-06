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
    }
  ]
})

export default router
