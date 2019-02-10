import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/components/main'
import Blog from '@/components/blog'
import Write from '@/components/blog/write'

import Signup from '@/components/signup'
import Signin from '@/components/signin'

/* Layout materials */
import Top from '@/components/layout/top'
import Bottom from '@/components/layout/bottom'

/* Store */
import store from '@/vuex/store'

function COMMON_LAYOUT(Content) {
  return {Content, Footer: Bottom }
}

function BLOG_LAYOUT(Content) {
  return {Header: Top, Content, Footer: Bottom }
}

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getUser) return next() // isAuth === true면 페이지 이동
  next('/blog') // isAuth === false면 다시 로그인 화면으로 이동
}

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
      path: '/write',
      name: 'Write',
      components: BLOG_LAYOUT(Write),
      beforeEnter: requireAuth()
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
