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
    }
  ]
})

export default router
