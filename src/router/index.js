import Vue from 'vue'
import Router from 'vue-router'
import configRoutes from "./modules";

Vue.use(Router)

const commonRoutes = [
  {path: '/404', component: ()=>import('@/views/notFound/index')},
  {path: '*',redirect: '/404'}
]
const router = new Router({routes: [...configRoutes, ...commonRoutes]})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'element-admin'
  next()
})

export default router