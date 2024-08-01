import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PseudoClasses from '@/views/coreConcepts/PseudoClasses.vue'

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
    }
  ]
})

export default router
