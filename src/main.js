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
import firebase from "firebase";

/*
import store from '@/vuex/store'
*/
import VueFirestore from 'vue-firestore'
import VueDisqus from 'vue-disqus'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/common.css'

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

const config = {
  apiKey: "AIzaSyBOTm7-ITpru-Y9549B8qEbKCqM7qKixaA",
  authDomain: "portfolio-184808.firebaseapp.com",
  databaseURL: "https://portfolio-184808.firebaseio.com",
  projectId: "portfolio-184808",
  storageBucket: "portfolio-184808.appspot.com",
  messagingSenderId: "814298444468"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
