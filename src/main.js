// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import {VueMasonryPlugin} from 'vue-masonry'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueScrollTo from 'vue-scrollto'
import VueApexCharts from 'vue-apexcharts'

import store from '@/vuex/store'
import VueFirestore from 'vue-firestore'
import VueDisqus from 'vue-disqus'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/common.css'

Vue.use(VueFirestore)
Vue.use(VueDisqus)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueMasonryPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDQFGq7aB2YpD0YpT-yYCVPJhuDl6EWnjs',
    libraries: 'places'
  }
})
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
