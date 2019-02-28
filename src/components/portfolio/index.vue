<template>
  <b-container>
    <div v-if="getAdmin" class="mb-3">
      <b-button @click="write">글쓰기</b-button>
    </div>
    <div class="post-wrap">
      <b-row>
        <b-col cols="12" sm="6" lg="3" v-for="(post, idx) in postList" :key="idx">
          <router-link :to="`/portfolio/${post.idx}`">
            <b-card :title="post.title"
                    :img-src="post.imgUrl"
                    :img-alt="post.title + '의 섬네일 이미지'"
                    img-top
                    img-fluid
                    tag="article"
                    class="mb-2">
              <p class="card-text" v-html="truncateString(post.content)"></p>
              <p>{{ post.date|getKorTime }}</p>
              <p>{{ post.date|getUsTime }}</p>
              <span>{{post.category}}</span>
            </b-card>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from '@/moment/'

export default {
  computed: {
    ...mapGetters(['getUser','getAdmin']),
    postList() {
      return this.$store.getters.fetchedPosts;
    }
  },
  methods: {
    truncateString (v) {
      return _.truncate(v, {
        'length': 80
      })
    },
    viewPost(post) {
      const idx = post.idx
      this.$router.push({ name: 'view', params: { idx } })
    },
    write() {
      this.$router.push('/portfoliowrite')
    }
  },
}
</script>

<style>

</style>
