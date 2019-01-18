<template>
  <div>
    <Top></Top>
    <Work></Work>
    <Contact></Contact>
    <Map></Map>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './top.vue'
import Work from './work.vue'
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
    Contact,
    Map,
    Bottom
  }
}
</script>

<style>

</style>
