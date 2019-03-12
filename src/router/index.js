import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/components/main'

import List from '@/components/blog'
import View from '@/components/blog/detail'
import Write from '@/components/blog/write'

/* Member */
import Signup from '@/components/signup'
import Signin from '@/components/signin'
import Mypage from '@/components/mypage'

/* Layout materials */
import Top from '@/components/layout/top'
import Bottom from '@/components/layout/bottom'
import bus from '@/components/utils/bus.js'

/* Store */
//import store from '@/vuex/store'
import { store } from '@/store/'

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
      name: 'List',
      components: BLOG_LAYOUT(List),
      beforeEnter: (routeTo, routeFrom, next) => {
        bus.$emit('on:progress')
        store.dispatch('FETCH_POSTS', routeTo.name)
        .then(next())
        .catch((err) => {
          new Error('failed to fetch item details');
        });
        //.catch(err => new Error('failed to fetch item details'))
      }
    },
    {
      path: '/blog/:idx',
      name: 'View',
      components: BLOG_LAYOUT(View),
      beforeEnter: (routeTo, routeFrom, next) => {

        const itemId = routeTo.params.idx;
        // console.log(itemId);
        store.dispatch('FETCH_ITEM', itemId)
        .then(next())
        .catch((err) => {
          new Error('failed to fetch item details', err);
        });
      }
    },
    {
      path: '/write',
      name: 'Write',
      components: BLOG_LAYOUT(Write)
    },
    {
      path: '/modify/:idx',
      name: 'Modify',
      components: BLOG_LAYOUT(Write),
      // beforeEnter: requireAuth()
      
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
      path: '/mypage',
      name: 'Mypage',
      components: BLOG_LAYOUT(Mypage),
      // beforeEnter: requireAuth()
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
