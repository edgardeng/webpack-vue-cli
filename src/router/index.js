import Vue from 'vue'
import Router from 'vue-router'

const NoFound = r => require.ensure([], () => r(require('@/pages/NotFound.vue')), 'group-none')
const Login = r => require.ensure([], () => r(require('@/pages/Login.vue')), 'group-login')
const Home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'group-home')

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Login', path: '/login', component: Login },
    { name: '404', path: '*', component: NoFound }
  ]
})
