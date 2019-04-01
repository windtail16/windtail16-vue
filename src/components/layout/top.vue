<template>
  <div class="top">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <router-link class="navbar-brand" to="/blog">
          <!-- <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV"> -->
          WINDTAIL16
        </router-link>
        
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <!-- <div>
              {{this.$store.state.user}}
            </div> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item" v-if="!getUser">
              <router-link class="nav-link" to="/signin">Sign in</router-link>
            </li>
            <li class="nav-item" v-if="getUser">
              <router-link class="nav-link" to="#" v-on:click.native="signOut">Sign out</router-link>
            </li>
            
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
