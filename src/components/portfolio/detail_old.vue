<template>
  <b-container>
    <div>
      <h3>{{title}}</h3>
      
      <div v-if="imgUrl != ''">
        <img :src="imgUrl" style="max-width:100%" alt="">
      </div>
      <div v-html="imgResizedContent"></div>
      <p>{{date | getKorTime}}</p>
      <h5>{{writer}}</h5>
      <p>{{email}}</p>
    </div>
    <div class="mb-3">
      <b-button @click="list">목록</b-button>
      <b-button @click="modify" v-if="getUser">수정</b-button>
      <b-button @click="hidePost" v-if="getUser">글삭제</b-button>
    </div>
  </b-container>
  
</template>

<script>
import { firestore } from '@/firebase/firestore'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: '',
      category: '',
      content: '',
      imgUrl: '',
      date: '',
      update: '',
      writer: '',
      email: '',
    }
  },
  beforeCreate(){
    
  },
  created() {
    this.getPost()
  },
  beforeMount() {
    
  },
  computed: {
    ...mapGetters(['getUser']),
    imgResizedContent () {
      return _.replace(this.content, new RegExp('img src', 'g'), 'img style="max-width: 100%" src')
    }
  },
  methods: {
    getPost() {
      firestore
      .collection('Post')
      .doc(this.$route.params.idx)
      .get()
      .then((result) => {
        let post = result.data()
        this.title = post.title
        this.content = post.content
        this.date = post.date
        this.update = post.update 
        this.imgUrl = post.imgUrl
        this.writer = post.writer
        this.email = post.email
      }).catch((err) => {
        console.error(`getPost error: ${err}`)
      });
    },
    list (){
      this.$router.push('/portfolio')
    },
    modify (post) {
      const idx = this.$route.params.idx
      // this.$router.push('/portfoliomodify')
      this.$router.push({ name: 'portfolioModify', params: {idx} })
    },
    hidePost () {}
  },
}
</script>

<style>

</style>
