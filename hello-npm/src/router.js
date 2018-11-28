import about from './views/about.vue'
import Router from 'vue-router'

export default new Router({
  routes: [
      {
          path: '/about',
          component: about
      }
  ]
})