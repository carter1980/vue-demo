import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue' //引入App.Vue组件
import router from './router'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
