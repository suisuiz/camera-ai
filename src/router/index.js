import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Guide',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/Guide.vue')
  },
  {
    // path: '/device/:from',
    path: '/device',
    name: 'DeviceList',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/DeviceList.vue')
  },
  {
    // path: '/scene/:name/:from',
    path: '/scene',
    name: 'Scene',
    component: () => import(/* webpackChunkName: "scene" */ '@/views/scenes/Scene.vue')
  },
  {
    path: '/screenFull',
    name: 'ScreenFull',
    component: () => import(/* webpackChunkName: "scene" */ '@/views/scenes/ScreenFull.vue')
  },
  {
    path: '/file',
    name: 'FileInfo',
    component: () => import(/* webpackChunkName: "file" */ '@/views/scenes/FileInfo.vue')
  },
  {
    path: '/dateil',
    name: 'FileDetail',
    component: () => import(/* webpackChunkName: "file" */ '@/views/scenes/FileDetail.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Guide' || to.name === 'DeviceList') return next()
  if (from.name === 'DeviceList') return next()

  const cameraList = window.sessionStorage.getItem('cameraList')
  if (!cameraList) return next('/')
  next()
})

export default router
