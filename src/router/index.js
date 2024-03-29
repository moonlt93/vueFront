import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import BoardList from '@/views/board/BoardList.vue'
import createBoard from '@/views/board/createBoard.vue'
import BoardDetail from '@/views/board/BoardDetail.vue'


const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue')
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  {
    path:'/board',
    name: 'createBoard',
    component: createBoard
  },
  {
    path:'/board/detail',
    name:'BoardDetail',
    component: BoardDetail
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router