import { createRouter, createWebHistory } from 'vue-router'
import TaskOne from '../views/TaskOne'
// import TaskTwo from '../views/TaskTwo'

const routes = [
  {
    path: '/task1',
    name: 'task1',
    component: TaskOne
  },
  {
    path: '/task2',
    name: 'task2',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskTwo/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
