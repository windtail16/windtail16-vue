<template>
  <b-container>
    <h1>{{ this.$store.state.message }}</h1>
    <div class="mb-3">
      <b-button @click="write">글쓰기</b-button>
    </div>
    <ul>
      <li v-for="(post, idx) in this.$store.state.posts" :key="idx">
        <h5 @click="viewPost(post)">{{ post.title }}</h5>
        <p>{{ post.date | getKorTime }}</p>
      </li>
    </ul>
  </b-container>
</template>

<script>
import moment from '@/moment/'
export default {
  methods: {
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
