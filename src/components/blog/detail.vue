<template>
  <b-container>
    <div class="shadow-sm p-3 mb-3 bg-white rounded">
      <img :src="getImgUrl" style="max-width:100%" alt="">
      <h1 class="post-title">{{ getTitle }}</h1>
      <h3>{{ getCategory }}</h3></h3>
      <span v-html="imgResizedContent"></span>
      <!-- <p>
        <b>Date: </b>
        <span>{{ new Date(getDate) }}</span>
      </p> -->
      <p>
        <b>Date: </b>
        <span>{{ getDate | getKorTime }}</span>
      </p>
      <p>
        <b>Writer: </b>
        <span>{{ getWriter }}</span>
      </p>
    </div>
    
    <div class="text-right" v-if="getUser">
      <b-button @click="list">목록</b-button>
      <b-button @click="modify">수정</b-button>
      <!-- button @click="showDelDialog(true)">delete</button -->
      <b-button @click="hidePost">글삭제</b-button>
    </div>
    <disqus></disqus>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import { firestore } from '@/firebase/firestore'
import _ from 'lodash'
import Disqus from '@/components/disqus'
import moment from '@/moment/'

export default {
  
  components: {
    Disqus,
    // deleteDialog
  },
  computed: {
    
    ...mapGetters([
      'getKey',
      'getTitle',
      'getCategory',
      'getContent',
      'getDate',
      'getWriter',
      'getImgUrl',
      'getUser'
    ]),
    imgResizedContent () {
      return _.replace(this.getContent, new RegExp('img src', 'g'), 'img style="max-width: 100%" src')
    }
  },
  data () {
    return {
      // openDelDialog: false
    }
  },
  created () {
    if (this.getKey === '') this.getPost()
  },
  methods: {
    ...mapMutations({ setKey: types.SET_KEY,
      setTitle: types.SET_TITLE,
      setCategory: types.SET_CATEGORY,
      setContent: types.SET_CONTENT,
      setDate: types.SET_DATE,
      setWriter: types.SET_WRITER,
      setImgUrl: types.SET_IMG_URL 
    }),
    list (){
      this.$router.push('/blog')
    },
    modify () {
      this.$router.push('/modify')
    },
    getPost () {
      firestore
      .collection('Post')
      .doc(this.$route.params.key)
      .get()
      .then(doc => {
        let post = doc.data()
        this.setKey(this.$route.params.key)
        this.setTitle(post.title)
        this.setTitle(post.category)
        this.setContent(post.content)
        this.setDate(post.date.seconds)
        this.setWriter(post.writer)
        this.setImgUrl(post.imgUrl)
      })
      .catch(error => {
        console.error(`getPost error: ${error}`)
      })
    },
    showDelDialog (v) {
      // this.openDelDialog = v
    },
    hidePost () {
      firestore
      .collection('Post')
      .doc(this.getKey)
      .update({
        show: false
      })
      .then(() => {
        this.$router.push('/blog')
      })
      .catch((error) => {
        console.error('Error on remove: ', error)
      })
    }
  }
}
</script>

<style>

</style>
