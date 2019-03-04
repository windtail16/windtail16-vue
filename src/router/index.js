import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/components/main'
import Blog from '@/components/blog'
import Write from '@/components/blog/write'
import Detail from '@/components/blog/detail'

import List from '@/components/portfolio'
import View from '@/components/portfolio/detail'
import boardWrite from '@/components/portfolio/write'

/* Member */
import Signup from '@/components/signup'
import Signin from '@/components/signin'
import Mypage from '@/components/mypage'

/* Layout materials */
import Top from '@/components/layout/top'
import Bottom from '@/components/layout/bottom'

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
      name: 'Blog',
      components: BLOG_LAYOUT(Blog)
    },
    {
      path: '/blog/:key',
      name: 'Detail',
      components: BLOG_LAYOUT(Detail)
    },
    {
      path: '/write',
      name: 'Write',
      components: BLOG_LAYOUT(Write),
      beforeEnter: requireAuth()
    },
    {
      path: '/modify',
      name: 'Modify',
      components: BLOG_LAYOUT(Write),
      beforeEnter: requireAuth()
    },{
      path: '/portfolio',
      name: 'List',
      components: BLOG_LAYOUT(List),
      beforeEnter: (routeTo, routeFrom, next) => {
        store.dispatch('FETCH_POSTS', routeTo.name)
        .then(next())
        .catch((err) => {
          new Error('failed to fetch item details');
        });
        //.catch(err => new Error('failed to fetch item details'))
      }
    },{
      path: '/portfolio/:idx',
      name: 'view',
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
      path: '/portfoliowrite',
      name: 'boardWrite',
      components: BLOG_LAYOUT(boardWrite)
    },
    {
      path: '/portfoliomodify/:idx',
      name: 'portfolioModify',
      components: BLOG_LAYOUT(boardWrite),
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
