<template>
  <div id="app">
    <spinner :loading="loading"></spinner>
    <router-view name="Header"></router-view>
    <transition name="routing-fade" mode="out-in"> 
      <router-view name="Content"></router-view>
    </transition>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import ProgressBar from '@/components/progressBar.vue';
import bus from '@/components/utils/bus.js'

export default {
  name: 'App',
  components: {
    Spinner,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      this.loading = true;
      // console.log('로딩 시작')
    },
    offProgress() {
      this.loading = false;
      // console.log('로딩 종료')
    }
  },
  created() {
    bus.$on('on:progress', this.onProgress);
    bus.$on('off:progress', this.offProgress);
  }
}
</script>

<style>
#app {
  /*
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  */
}
/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
