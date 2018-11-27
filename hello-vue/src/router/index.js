import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TreeGridDemo from '@/components/TreeGridDemo'

Vue.use(Router)

const User = {
  template: '<div>User</div>'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grid',
      name: 'TreeGrid',
      component: TreeGridDemo
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
