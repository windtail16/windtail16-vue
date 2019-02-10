import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Blog from '@/components/blog'
import Signup from '@/components/signup'
import Signin from '@/components/signin'

/* Layout materials */
import Top from '@/components/layout/top'
import Bottom from '@/components/layout/bottom'

function COMMON_LAYOUT(Content) {
  return {Content, Footer: Bottom }
}

function BLOG_LAYOUT(Content) {
  return {Header: Top, Content, Footer: Bottom }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: COMMON_LAYOUT(Main)
    },
    {
      path: '/blog',
      name: 'Blog',
      components: BLOG_LAYOUT(Blog)
    },
    {
      path: '/signup',
      name: 'Signup',
      components: BLOG_LAYOUT(Signup)
    },
    {
      path: '/signin',
      name: 'Signin',
      components: BLOG_LAYOUT(Signin)
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
