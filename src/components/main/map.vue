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
import {gmapApi} from 'vue2-google-maps'

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
