<template>
  <div class="top">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/blog">
          <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV"> -->
          WINDTAIL16
        </b-navbar-brand>
        
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Portfolio</b-nav-item>
            <b-nav-item href="/blog">Blog</b-nav-item>
            
            <!-- <div>
              {{this.$store.state.user}}
            </div> -->
            
            <b-nav-item v-if="!getUser" href="/signin">Sign in</b-nav-item>
            <b-nav-item v-if="getUser" @click="signOut">Sign out</b-nav-item>
            <!-- <b-nav-item v-if="getUser" href="/mypage">Mypage</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'top',
  computed: {
    ...mapGetters(['getUser','getAdmin'])
  },
  methods: {
    ...mapActions(['logout']),
    signOut () {
      this.logout()
      this.$router.replace('/')
    }
  }
}
</script>

<style scopted>
  /*
  .top {
    margin-bottom: 15px;
  }
  */
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .navbar-nav .nav-link {
    /*
    font-size: 1.4rem;
    */
  }
</style>
