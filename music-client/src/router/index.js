import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: () => import('@/pages/404.vue')
  },
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/Main'),
    children: [
      {
        path: '/login-in',
        name: 'login-in',
        component: () => import('@/pages/LoginIn')
      },
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/pages/SignUp')
      },
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home')
      },
      {
        path: '/song-list',
        name: 'song-list',
        component: () => import('@/pages/SongList')
      },
      {
        path: '/my-music',
        name: 'my-music',
        component: () => import('@/pages/MyMusic')
      },
      {
        path: '/song-list-album/:id',
        name: 'song-list-album',
        component: () => import('@/pages/SongListAlbum')
      },
      {
        path: '/singer',
        name: 'singer',
        component: () => import('@/pages/Singer')
      },
      {
        path: '/singer-album/:id',
        name: 'singer-album',
        component: () => import('@/pages/SingerAlbum')
      },
      {
        path: '/lyric/:id',
        name: 'lyric',
        component: () => import('@/pages/Lyric')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/pages/Search')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/pages/Setting')
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: (o, from, savedPosition) => ({ x: 0, y: 0 }),
  routes: constantRoutes
})
