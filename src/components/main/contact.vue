<template>
  <div class="contact-bg text-center" id="contact">
    <div class="contact spacer">
      <b-container>
        <h2>Contact</h2>
        <p>I am available for Freelancing work and collaboration.</p>
        <hr class="transparent">
        <b-row class="justify-content-md-center">
          <b-col col lg="2" :key="index" v-for="(contact,index) in contactMeans">
            <a v-bind:href="contact.link" target="_blank">
              <i v-bind:class="contact.icon"></i>
              <p>{{contact.text}}</p>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
    <!-- Google map//S -->
    <!-- Google map//E -->
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      contactMeans:[
        {
          icon: 'far fa-envelope fa-3x',
          link: 'mailto:windtail16@naver.com',
          text: 'email'
        },
        {
          icon: 'fab fa-instagram fa-3x',
          link: 'https://www.instagram.com/windtail16/',
          text: 'Instaram'
        },
        {
          icon: 'fab fa-github fa-3x',
          link: 'https://github.com/windtail16',
          text: 'Github'
        }
      ]
    }
  },
}
</script>

<style scoped>
  .contact-bg {
    background-image: url('~@/assets/images/contact-bg.jpg');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
  .contact {
    background: rgba(0,0,0,0.4);
    color: #fff;
  }
  .contact a {
    color: #fff;
  }
</style>
