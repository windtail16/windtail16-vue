<template>
  <div>
    <b-container>
      <h1>
        Hello world
      </h1>
      <router-link v-if="getUser" to="/write">Write</router-link>
      <ul>
        <li v-for="(Post, idx) in Posts" :key="idx">
          <img :src="Post.imgUrl" alt="">
          {{ Post.title }}
          <span v-html="truncateString(Post.content)"></span>
          <button @click="viewPost(Post)">Read More</button>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>

import { firestore } from '@/firebase/firestore'
import { mapMutations } from 'vuex'
import { mapActions, mapGetters } from 'vuex'

import * as types from '@/vuex/mutation_types'
import _ from 'lodash'

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
      setContent: types.SET_CONTENT,
      setDate: types.SET_DATE,
      setWriter: types.SET_WRITER,
      setImgUrl: types.SET_IMG_URL }),
    viewPost (v) {
      this.setKey(v['.key'])
      this.setTitle(v.title)
      this.setContent(v.content)
      this.setDate(v.date.seconds)
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

<style>

</style>
