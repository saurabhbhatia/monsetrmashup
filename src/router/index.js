import Vue from 'vue'
import Router from 'vue-router'
import Submission from '@/components/Submission'
import Contact from '@/components/Contact'
import Guidelines from '@/components/Guidelines'
import ProductionTeam from '@/components/ProductionTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Guidelines',
      component: Guidelines
    },
    {
      path: '/production-team',
      name: 'ProductionTeam',
      component: ProductionTeam
    },
    {
      path: '/submission',
      name: 'Submission',
      component: Submission
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
