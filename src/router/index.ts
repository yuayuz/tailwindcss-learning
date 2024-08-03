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
import FlexBasis from '@/views/FlexboxGrid /FlexBasis.vue'
import FlexDirection from '@/views/FlexboxGrid /FlexDirection.vue'

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
    }
  ]
})

export default router
