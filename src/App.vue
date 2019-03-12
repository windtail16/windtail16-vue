<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <router-view name="Content"></router-view>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
import ProgressBar from '@/components/progressBar.vue';
import bus from '@/components/utils/bus.js'

export default {
  name: 'App',
   methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
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
</style>
