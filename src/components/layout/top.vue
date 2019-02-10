<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
          WINDTAIL16
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/blog">Blog</b-nav-item>
            <b-nav-item href="/">Portfolio</b-nav-item>
            <b-nav-item href="/signin">Sign in</b-nav-item>
            <a href="#" @click="SignOut()">Sign Out</a>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'top',
  methods: {
    SignOut () {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('로그아웃');
        
      }).catch(function(error) {
        // An error happened.
        console.log('로그아웃실패');
      })
    }
  },
}
</script>

<style>

</style>
