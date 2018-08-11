import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Guidelines from '@/components/Guidelines'
import ProductionTeam from '@/components/ProductionTeam'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/submission-guidelines',
      name: 'Guidelines',
      component: Guidelines
    },
    {
      path: '/production-team',
      name: 'ProductionTeam',
      component: ProductionTeam
    }
  ]
})
