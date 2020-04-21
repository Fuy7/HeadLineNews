import Vue from 'vue'
import VueRouter from 'vue-router'
import TopNews from '../views/TopNews.vue'
import TypeNews from '../views/TypeNews.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TopNews',
    component: TopNews
  },
  {
   path: '/top',
   name: 'TopNews',
   component: TopNews
  },
  {
   path: '/type',
   name: 'TypeNews',
   component: TypeNews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
