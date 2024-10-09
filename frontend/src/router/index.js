import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '../auth/authGuard'
import verifyLogin from '../auth/verifyLogin'
import homeTemp from '../views/homeTemp.vue'
import authGoogle from '../views/authGoogle.vue'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeTemp, 
      beforeEnter: authGuard,
    },
    {
      path: '/login',
      name: 'login',
      component: authGoogle, 
      beforeEnter: verifyLogin,
    },
  ]
})

export default router
