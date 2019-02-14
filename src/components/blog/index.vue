<template>
  <div>
    <b-container>
      <h1>
        Post
      </h1>
      <div class="text-right" v-if="getUser">
        <b-button to="/write">글쓰기</b-button>
      </div>
      
      <div class="post-wrap">
        <b-row>
          <b-col col lg="3" sm="6" v-for="(Post, idx) in Posts" :key="idx" @click="viewPost(Post)">
            <b-card :title="Post.title"
                    :img-src="Post.imgUrl"
                    :img-alt="Post.title + '의 섬네일 이미지'"
                    img-top
                    img-fluid
                    tag="article"
                    class="mb-2">
              <p class="card-text" v-html="truncateString(Post.content)"></p>
              <p>{{ Post.date|getKorTime }}</p>
              <p>{{ Post.date|getUsTime }}</p>
              <span>{{Post.category}}</span>
            </b-card>
          </b-col>
        </b-row>
      </div>
      
  
    </b-container>
  </div>
</template>

<script>

import { firestore } from '@/firebase/firestore'
import { mapMutations } from 'vuex'
import { mapActions, mapGetters } from 'vuex'

import * as types from '@/vuex/mutation_types'
import _ from 'lodash'

import moment from '@/moment/'

export default {
  firestore () {
    return {
      Posts: firestore
      .collection('Post')
      .where('show', '==', true)
      .orderBy('date', 'desc')
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapMutations({ setKey: types.SET_KEY,
      setTitle: types.SET_TITLE,
      setCategory: types.SET_CATEGORY,
      setContent: types.SET_CONTENT,
      setHit: types.SET_HIT,
      setDate: types.SET_DATE,
      setUpdate: types.SET_UPDATE,
      setWriter: types.SET_WRITER,
      setImgUrl: types.SET_IMG_URL }),
    viewPost (v) {
      this.setKey(v['.key'])
      this.setTitle(v.title)
      this.setCategory(v.category)
      this.setContent(v.content)
      this.setHit(v.hit)
      this.setDate(v.date)
      this.setUpdate(v.update)
      this.setWriter(v.writer)
      this.setImgUrl(v.imgUrl)
      this.$router.push({ name: 'Detail', params: { key: v['.key'] } })
    },
    truncateString (v) {
      return _.truncate(v, {
        'length': 80
      })
    }
  }
  
}
</script>

<style scoped>
  .post-wrap .col {
    cursor: pointer;
  }
  .post-wrap .col:hover .card {
    background-color: #efefef;
    transition: background-color 100ms linear;
  }

  .post-wrap .card-img-top {
    
  }

</style>
