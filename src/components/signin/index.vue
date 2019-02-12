<template>
  <div class="form-wrap full-height">
    <b-container>
      <b-form @submit="SignIn" class="form-signup shadow p-3 mb-5 bg-white rounded">
        <h3 class="mb-3 font-weight-normal">SIGN IN</h3>
        <b-form-group>
          <label for="email" class="sr-only">email:</label>
          <b-form-input id="email" v-model="email" type="email" placeholder="email"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label for="password" class="sr-only">email:</label>
          <b-form-input id="password" v-model="password" type="password" placeholder="password"></b-form-input>
        </b-form-group>
        <b-button type="submit" block variant="primary">SIGN IN</b-button>
        <!-- <button @click="SignIn()">SIGN IN</button> -->
        <router-link to="/signup">Sign up</router-link>
      </b-form>
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
    SignIn (evt) {
      evt.preventDefault();
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
