<template>
  <b-container>
    <div>
      <h3>{{title}}</h3>
      <div v-if="imgUrl != ''">
        <img :src="imgUrl" style="max-width:100%" alt="">
      </div>
      <div v-html="imgResizedContent"></div>
      <p>{{date | getKorTime}}</p>
      {{writer}}
    </div>
    <div class="mb-3">
      <b-button @click="list">목록</b-button>
    </div>
  </b-container>
  
</template>

<script>
import { firestore } from '@/firebase/firestore'

export default {
  data() {
    return {
      title: '',
      category: '',
      content: '',
      imgUrl: '',
      date: '',
      update: '',
      writer: ''
    }
  },
  beforeCreate(){
    
  },
  created() {
    
  },
  beforeMount() {
    this.getPost()
  },
  computed: {
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
        // console.log(post);
        this.title = post.title
        this.content = post.content
        this.date = post.date
        this.update = post.update 
        this.imgUrl = post.imgUrl
        this.writer = post.writer
        
      }).catch((err) => {
        console.error(`getPost error: ${err}`)
      });
    },
    list (){
      this.$router.push('/board')
    },
  },
}
</script>

<style>

</style>
