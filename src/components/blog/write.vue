<template>
  <b-container>
    <h3>글쓰기</h3>
    <b-form @submit="savePost">
      <b-form-group>
        <b-input type="text" label="Title" v-model="title" required></b-input>
      </b-form-group>
      <b-form-group>
        <file-uploader v-on:downloadURL="getDownloadUrl" v-bind:oldImgUrl="oldImgUrl"></file-uploader>
      </b-form-group>
      <b-form-group>
        <b-form-select v-model="category" :options="options" />
      </b-form-group>
      <b-form-group>
        <label for="preview">미리보기</label>
        <div id="preview" v-html="content"  class="shadow-sm p-3 bg-white rounded"></div>
      </b-form-group>
      <b-form-group>
        <vue-editor 
          id="writer"
          v-model="content"
          useCustomImageHandler
          @imageAdded="handleImageAdded">
        </vue-editor>
      </b-form-group>
      <div class="text-center mb-3">
        <b-button type="submit">완료</b-button>
        <b-button @click="cancel">취소</b-button>
      </div>
    </b-form>
  </b-container>
</template>

<script>

import { firestore } from '@/firebase/firestore'
import { firestorage } from '@/firebase/firestorage'
import FileUploader from '@/components/fileuploader'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor,
    FileUploader
  },
  data() {
    return {
      oldImgUrl: '',
      editorSettings: {

      },
      category: 'html/css',
      options: [
        { value: 'html/css', text: 'HTML/CSS' },
        { value: 'javascript', text: 'JavaScript' },
        { value: 'jquery', text: 'jQuery' },
        { value: 'vue', text: 'vue' },
        { value: 'linux', text: 'Linux' }
      ]
      /*customToolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image', 'code-block']
          ]
      */
    }
  },
  created() {
    if (this.$route.name === 'Write') this.initArticleData()
    if (this.getKey !== '') this.oldImgUrl = this.getImgUrl
  },
  computed: {
    ...mapGetters(['getKey', 'getTitle', 'getContent', 'getImgUrl', 'getWriter', 'getUser']),
    title: {
      get () {
        return this.getTitle
      },
      set (value) {
        this.updateTitle(value)
      }
    },
    content: {
      get () {
        return this.getContent
      },
      set (value) {
        this.updateContent(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      updateTitle: types.SET_TITLE,
      updateContent: types.SET_CONTENT,
      initArticleData: types.INIT_ARTICLE_DATA
    }),
    savePost (evt) {
      evt.preventDefault()
      firestore
        .collection('Post')
        .doc(this.getKey || new Date().getTime().toString())
        .set({
          title: this.title,
          category: this.category,
          content: this.content,
          date: {
            seconds: new Date().getTime(),
            nanoseconds: 0
          },
          writer: this.getUser.displayName || this.writer,
          imgUrl: this.imgUrl || this.getImgUrl,
          show: true
        })
        .then(() => this.$router.push('/blog'))
        .catch((error) => {
          console.error(`Error adding document: ${error}`)
        })
    },
    getDownloadUrl (v) {
      this.imgUrl = v
    },
    handleImageAdded (file, Editor, cursorLocation) {
      let uploadTask = firestorage.ref('images/' + file.name).put(file)
      uploadTask.on('state_changed', snapshot => {
      }, error => {
        console.error(`Upload error occured: ${error}`)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL)
          Editor.insertEmbed(cursorLocation, 'image', downloadURL)
        })
      })
    },
    cancel () {
      this.$router.push('/blog')
    }
  },
}
</script>

<style>

</style>
