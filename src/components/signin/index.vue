<template>
  <div>
    <b-container>
      <h1>SIGN IN</h1>
      <input v-model="email" type="email" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <button @click="SignIn()">SIGN IN</button>
      <br>
      <router-link to="/signup">Sign up</router-link>
    </b-container>
  </div>
</template>

<script>
import { firebaseAuth } from '@/firebase/firebaseAuth'
import { mapGetters } from 'vuex'

export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({user: 'getUser'})
  },
  methods: {
    SignIn () {
      firebaseAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        console.log(user)
        // this.$router.replace('/')
      })
      .catch((error) => {
        alert('에러 메세지' + error.message)
        console.log(error)
      })
    }
  },
  watch: {
    user (user) {
      if (user) this.$router.replace('/blog')
    }
  },
}
</script>

<style>

</style>
