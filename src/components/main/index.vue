<template>
  <div>
    <Top></Top>
    <!-- <About></About> -->
    <Work></Work>   
    <Contact></Contact>
    <Map></Map>
    <Bottom></Bottom>
    <a href="#" class="topgo" v-scroll-to="'#top'">
      <i class="fa fa-angle-up fa-3x"></i>
    </a>
  </div>
</template>

<script>
import Top from './top.vue'
import Work from './work.vue'
import About from './about.vue'
import Contact from './contact.vue'
import Map from './map.vue'
import Bottom from '../layout/Bottom.vue'

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
    Bottom
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
</style>
