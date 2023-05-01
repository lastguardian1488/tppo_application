import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPage from '../components/AboutPage.vue'
import FeedbackForm from '../components/FeedbackForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: FeedbackForm
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]

const router = new VueRouter({
  routes
})

export default router
