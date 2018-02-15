import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Category from './views/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post/:guid',
      component: Post,
      props: true
    },
    {
      path: '/category/:slug',
      component: Category,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
