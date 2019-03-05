<template>
  <b-container>
    <div>
      <h3>{{fetchedItem.title}}</h3>
      <div v-if="fetchedItem.imgUrl != ''">
        <img :src="fetchedItem.imgUrl" style="max-width:100%" alt="">
      </div>
      <div v-html="imgResizedContent"></div>
      <p>{{fetchedItem.date | getKorTime}}</p>
      <h5>{{fetchedItem.writer}}</h5>
      <p>{{fetchedItem.email}}</p>
    </div>
    <div class="mb-3">
      <b-button @click="list">목록</b-button>
      <b-button @click="modify" v-if="getUser">수정</b-button>
      <b-button @click="hidePost" v-if="getUser">글삭제</b-button>
    </div>
    <disqus></disqus>
  </b-container>
</template>

<script>
import { firestore } from '@/firebase/firestore'
import Disqus from '@/components/disqus'
import { mapGetters } from 'vuex';

export default {
  components: {
    Disqus,
    // deleteDialog
  },
  computed: {
    imgResizedContent () {
      return _.replace(this.fetchedItem.content, new RegExp('img src', 'g'), 'img style="max-width: 100%" src')
    },
    ...mapGetters([
      'getUser','fetchedItem',
    ])
  },
  methods: {
    list (){
      this.$router.push('/blog')
    },
    modify () {
      const idx = this.$route.params.idx
      // console.log(idx);
      this.$router.push({ name: 'portfolioModify', params: {idx} })
    },
    hidePost () {
      firestore
      .collection('Post')
      .doc(this.$route.params.idx)
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
  },
}
</script>

<style>

</style>
