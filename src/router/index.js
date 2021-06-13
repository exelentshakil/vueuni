import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Study from '../views/Study.vue'
import Research from '../views/Research.vue'
import VirtualCampus from '../views/VirtualCampus.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/virtual-campus',
    name: 'VirtualCampus',
    component: VirtualCampus
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
