import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotExist from '../views/NotExist.vue'
import BlogsView from '../views/BlogsView.vue'
import AuthorsView from '../views/AuthorsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView,
    },
    {
      path: '/not-exist',
      name: 'not-exist',
      component: NotExist,
    },
  ],
})

export default router
