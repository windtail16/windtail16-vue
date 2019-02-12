<template>
  <div>
    <b-container>
    <b-input v-model="email" type="email" placeholder="email"></b-input>
    <b-input v-model="username" type="text" placeholder="username"></b-input>
    <b-input v-model="password" type="password" placeholder="password"></b-input>
  </b-container>
  </div>
</template>

<script>
import { firebaseAuth } from '@/firebase/firebaseAuth'

var user = firebaseAuth.currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    
  },
  beforeCreate() {
    
  },
  created() {
    
  },
}
</script>

<style>

</style>
