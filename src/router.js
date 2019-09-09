import Vue from 'vue'
import Router from 'vue-router'
//import Login from './views/Cliente/Login.vue'
import Home from './views/Cliente/Home.vue'
// import SignUp from './views/Cliente/SignUp.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

//lazy load and render at same chunk
const Login = () => import(/* webpackChunkName: "form" */'./views/Cliente/Login')
const SignUp = () => import(/* webpackChunkNme "form" */'./views/Cliente/SignUp')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
  ]
})



router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next();
})

export default router;