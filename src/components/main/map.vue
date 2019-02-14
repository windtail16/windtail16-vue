<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%;  height: 400px;"
    >
    </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDQFGq7aB2YpD0YpT-yYCVPJhuDl6EWnjs',
    libraries: 'places',
  }
})

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { 
        lat: 37.722460879769194, 
        lng: 126.74539591579249 
      }
    }
  }
}
</script>

<style>

</style>
