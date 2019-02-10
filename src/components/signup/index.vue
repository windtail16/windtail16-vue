<template>
  <div>
    <b-container>
      <h1>SIGN UP</h1>
      <input v-model="email" type="email" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <button @click="SignUp()">SIGN UP</button>
      <br>
      <router-link to="/signin">Sign in</router-link>
    </b-container>
  </div>
</template>

<script>
import { firebaseAuth } from '@/firebase/firebaseAuth'
import { mapGetters } from 'vuex'

export default {
  name: 'Signup',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        //alert(user)
        console.log(user)
        this.$router.replace('/blog')
      })
      .catch((error) => {
        alert('에러 메세지' + error.message)
        console.log(error)
      })
    }
  },
}
</script>

<style>

</style>
