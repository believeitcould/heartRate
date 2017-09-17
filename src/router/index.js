import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path: '/result',
      name: 'Second',
      component: Second
    }
  ]
})
