<template>
  <div class="form-wrap full-height">
    <b-container>
      <b-form @submit="SignUp" class="form-signup shadow p-3 mb-5 bg-white rounded">
        <h3 class="mb-3 font-weight-normal">SIGN UP</h3>
        <b-form-group>
          <label for="username" class="sr-only">username</label>
            <b-form-input id="username"
                          v-model.trim="username"
                          type="text"
                          :state="usernameState"
                          aria-describedby="usernameFeedback"
                          placeholder="Enter your name"
                          required></b-form-input>
            <b-form-invalid-feedback id="usernameFeedback">
              Enter at least 8 letters
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group>
          <label for="email" class="sr-only">email:</label>
          <b-form-input id="email" 
                        v-model.trim="email" 
                        type="email"
                        :state="emailState"
                        aria-describedby="emailFeedback"
                        placeholder="enter your email address" 
                        required></b-form-input>
          <b-form-invalid-feedback id="emailFeedback">
            Enter at least 8 letters
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
          <label for="password" class="sr-only">password:</label>
          <b-form-input id="password" 
                        v-model.trim="password" 
                        type="password" 
                        :state="passwordState"
                        aria-describedby="passwordFeedback"
                        placeholder="password" 
                        required></b-form-input>
          <b-form-invalid-feedback id="passwordFeedback">
            Enter at least 8 letters
          </b-form-invalid-feedback>
        </b-form-group>
        <b-button type="submit" block variant="primary">SIGN UP</b-button>
        <!-- button @click="SignUp()">SIGN UP</button -->
        <router-link to="/signin">Sign in</router-link>
      </b-form>
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
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    usernameState () {
      return this.username.length > 8 ? true : false
    },
    emailState () {
      return this.email.length > 8 ? true : false
    },
    passwordState () {
      return this.password.length > 8 ? true : false
    }
  },
  methods: {
    SignUp (evt) {
      evt.preventDefault();
      
      firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        //alert(user)
        var user = firebaseAuth.currentUser;
        user.updateProfile({
            displayName: this.username
        }).then(function() {
            // Update successful.
        }, function(error) {
            // An error happened.
        })
        // console.log(user)
        this.$router.replace('/blog')
      })
      .catch((error) => {
        alert('에러 메세지' + error.message)
        console.log(error)
      })
    },
    
  },
}
</script>

<style>

</style>
