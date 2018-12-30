import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import UserAdd from './views/UserAdd.vue'
import UserList from './views/UserList.vue'
import UserPwdEdit from './views/UserPwdEdit.vue'
import GoodsAdd from './views/GoodsAdd.vue'
import classifyadd from './views/classifyadd.vue'
import GoodsManage from './views/GoodsManage.vue'
import StockAdd from './views/StockAdd.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pwdedit',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/UserAdd.vue')
    },
    {
      path: '/account',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/UserList.vue')
    },
    {
      path: '/alter',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/UserPwdEdit.vue')
    },
    {
      path: '/commodityadd',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/GoodsAdd.vue')
    },
    {
      path: '/classify',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/ClassifyGoods.vue')
    },
    {
      path: '/add',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/classifyadd.vue')
    },
    {
      path: '/manage',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/GoodsManage.vue')
    },
    {
      path: '/stock',
      component: () => import(/* webpackChunkName: "UserPwdEdit" */ './views/StockAdd.vue')
    }
    
    // {
      //   path: '/about',
      //   name: 'about',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      // }
  ]
})
