import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from './views/Cliente/Home'
import Candidato from './views/Candidato/Candidato.vue'
Vue.use(Router)

//lazy load and render at same chunk
const Login = () => import(/* webpackChunkName: "form" */'./views/Cliente/Login')
const SignUp = () => import(/* webpackChunkNme "form" */'./views/Cliente/SignUp')

const LoginAdmin = () => import(/* webpackChunkNme "admin" */'./views/Admin/Login')
const HomeAdmin = () => import(/* webpackChunkNme "admin" */'./views/Admin/Home')
const ListClients = () => import(/* webpackChunkNme "admin" */'./views/Admin/ListClientes.vue')
const ListCandidatos = () => import(/* webpackChunkNme "admin" */'./views/Admin/ListCandidatos.vue')
const CandidatoDetalhe = () => import(/* webpackChunkNme "admin" */'./views/Admin/CandidatoDetalhe.vue')

const EditForm = () => import('./views/Cliente/EditForm')

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
      path: '/loginAdmin',
      name: 'loginAdmin',
      component: LoginAdmin
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/candidato',
      name: 'candidato',
      component: Candidato
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/homeAdmin',
      name: 'homeAdmin',
      component: HomeAdmin,
      meta: { requiresAuth: true }
    },
    {
      path: '/listClients',
      name: 'listClients',
      component: ListClients,
      meta: { requiresAuth: true }
    },
    {
      path: '/listCandidato',
      name: 'listCandidato',
      component: ListCandidatos,
      // meta: { requiresAuth: true },
      children: [
        {
          path: ':id',
          component: CandidatoDetalhe,
          props: true,
          name: 'candidatoDetalhe'
        }
      ]
    },

    {
      path: '/editForm',
      name: 'editForm',
      component: EditForm,
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