<template>
  <b-container>
    <div class="shadow-lg p-3 mb-5 bg-white rounded board-view">
      <h3 class="bd-title">{{fetchedItem.title}}</h3>
      <p>{{fetchedItem.date | getKorTime}}</p>
      <picture v-if="fetchedItem.imgUrl != ''">
      <source :srcset="fetchedItem.imgUrl" type="image/svg+xml">
        <img :src="fetchedItem.imgUrl" class="img-fluid mx-auto d-block img-thumbnail mb-5" alt="">
      </picture>
      <div class="mb-5" v-html="ResizedContent"></div>
      <hr>
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
import bus from '../utils/bus.js';

export default {
  components: {
    Disqus,
    // deleteDialog
  },
  created() {
    bus.$emit('off:progress');
  },
  computed: {
    ResizedContent () {
      return _.replace(
        this.fetchedItem.content, 
        new RegExp('img src', 'g'), 'img style="max-width: 100%" src',
        // new RegExp('iframe class="ql-video"', 'g'), 'iframe class="embed-responsive-item"',
      )
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
      this.$router.push({ name: 'Modify', params: {idx} })
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
.board-view {
  color: #212529;
}
.bd-title {
  margin-top: 0rem;
  margin-bottom: .5rem;
  font-weight: 300;
  font-size: 3rem;
  
}

.board-view pre {
  display: block;
    unicode-bidi: embed;
    font-family: monospace;
    white-space: pre;
    background-color: #212529;
    color: chartreuse;
    padding: 10px;
    border-radius: 5px;
}
</style>
