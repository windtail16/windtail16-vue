<template>
  <div>
    <Slide right>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a href="#" v-scroll-to="'#top'">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" v-scroll-to="'#about'">About</a>
        </li>
        <li class="nav-item">
          <a href="#" v-scroll-to="'#work'">Works</a>
        </li>
        <li class="nav-item">
          <a href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
        <li class="nav-item">
          <router-link to="/blog">Blog</router-link>
        </li>
      </ul>
    </Slide>
    <Top></Top>
    <About></About>
    <Work></Work>   
    <Contact></Contact>
    <Map></Map>
    <a href="#" class="topgo" v-scroll-to="'#top'">
      <i class="fa fa-angle-up fa-3x"></i>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

import Top from './top.vue'
import Work from './work.vue'
import About from './about.vue'
import Contact from './contact.vue'
import Map from './map.vue'

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

export default {
  data() {
    return {
      
    }
  },
  components: {
    Top,
    Work,
    About,
    Contact,
    Map,
    Slide
  }
}
</script>

<style>
  .topgo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #fff;
    padding: 0 10px;
    display: inline-block;
    background: rgba(0,0,0,0.5);
  }
  .topgo:hover {
    opacity: 0.5;
    color: #fff;
    transition: all 0.5s ease;
  }
  .bm-burger-button {
    z-index: 1;
    position: fixed !important;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #fff !important;
  }
  .line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: rgb(63, 63, 65); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list a{
    font-weight: 700;
    color: white !important;
  }
</style>
