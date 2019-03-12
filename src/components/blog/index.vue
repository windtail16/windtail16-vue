<template>
  <b-container>
    <div v-if="getAdmin" class="mb-3">
      <b-button @click="write">글쓰기</b-button>
    </div>
    <b-row v-masonry class="post-wrap">
      <b-col v-masonry-tile cols="12" sm="6" lg="3" v-for="(post, idx) in postList" :key="idx">
        <router-link :to="`/blog/${post.idx}`">
          <b-card :title="post.title"
                  :img-src="post.imgUrl"
                  :img-alt="post.title + '의 섬네일 이미지'"
                  img-top
                  img-fluid
                  tag="article"
                  class="mb-2">
            <time>{{ post.date|getUsTimeShort }}</time>
            <b-badge variant="secondary">{{ post.category }}</b-badge>
            <p class="card-text" v-html="truncateString(post.content)"></p>
            
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import moment from '@/moment/'
import {VueMasonryPlugin} from 'vue-masonry'
import bus from '../utils/bus.js';

Vue.use(VueMasonryPlugin)
export default {
  created() {
    bus.$emit('off:progress');
  },
  computed: {
    ...mapGetters(['getUser','getAdmin']),
    postList() {
      return this.$store.getters.fetchedPosts;
    }
  },
  methods: {
    truncateString (v) {
      return _.truncate(v, {
        'length': 10
      })
    },
    write() {
      this.$router.push('/write')
    }
  },
}
</script>

<style>
  .post-wrap.row {
    margin-right: -5px;
    margin-left: -5px;
  }
  .post-wrap.row > div {
    padding-left: 5px;
    padding-right: 5px;
  }
  .post-wrap .card-body {
    color: #222;
  }
  .post-wrap a {
    text-decoration: none;
    display: block;
    transition: all .2s ease-in-out;
  }
  .post-wrap a:hover {
    transform: scale(1.02);
    background: rgba(255,255,255,1);
    -webkit-box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);
  }
  .post-wrap .card {
    border-radius: 0;
  }
  .post-wrap a:hover .card {
    
  }
  .post-wrap .card-img-top {
    border-radius: 0;
  }
  .post-wrap .card-title {
    font-size: 1.125rem;
    margin-bottom: 0.2rem;
  }
  .post-wrap .card-body time {
    color: #a5a5a5;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .post-wrap .card-body .badge {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }

</style>
