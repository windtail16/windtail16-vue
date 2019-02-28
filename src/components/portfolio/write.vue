<template>
  <b-container>
    <b-form @submit.prevent="savePost">
      <b-input type="text" label="Title" v-model="title" required class="mb-2"></b-input>
      <b-form-select 
      v-model="category" 
      :options="options"
      class="mb-2">
      </b-form-select>
      <FileUploader 
      v-on:downloadURL="getDownloadUrl"
      v-on:getFileName="getFileName" 
      v-bind:oldImgUrl="oldImgUrl"
      ></FileUploader>
      
      <VueEditor
      id="writer"
      v-model="content"
      useCustomImageHandler
      @imageAdded="handleImageAdded"
      class="mb-2"
      >
      </VueEditor>
      <div class="text-center mb-3">
        <b-button type="submit">완료</b-button>
      </div>
    </b-form>
  </b-container>
  
</template>

<script>
import { firestore } from '@/firebase/firestore'
import { firestorage } from '@/firebase/firestorage'
import FileUploader from '@/components/fileuploader'
import { VueEditor } from 'vue2-editor'

import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: '',
      category: 'html/css',
      options: [
        { value: 'html/css', text: 'HTML/CSS' },
        { value: 'javascript', text: 'JavaScript' },
        { value: 'jquery', text: 'jQuery' },
        { value: 'vue', text: 'vue' },
        { value: 'linux', text: 'Linux' }
      ],
      oldImgUrl: '',
      imgUrl: '',
      fileName: '',
      content: ''
    }
  },
  components: {
    VueEditor,
    FileUploader
  },
  created() {
    // console.log(this.getUser)
    
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    savePost() {
      this.newPost()
      
      console.log('title = ' + this.title)
      console.log('category = ' + this.category)
      console.log('content = ' + this.content)
      console.log('imgUrl = ' + this.imgUrl)
      console.log('fileName = ' + this.fileName)
      console.log('displayName = ' + this.getUser.displayName)
      console.log('email = ' + this.getUser.email)
      console.log('date = ' + new Date().getTime())
      console.log('hit = ' + 0)
      
    },
    getFileName(v) {
      this.fileName = v
    },
    newPost () {
      firestore
      .collection('Post')
      .doc(
        this.getKey || new Date().getTime().toString()
      )
      .set({
        title: this.title,
        category: this.category,
        content: this.content,
        imgUrl: this.imgUrl,
        fileName: this.fileName,
        writer: this.getUser.displayName,
        email: this.getUser.email,
        date: new Date().getTime(),
        update: '',
        hit: 0,
        show: true
      })
      .then(() => this.$router.push('/portfolio'))
      .catch((error) => {
        console.error(`Error adding document: ${error}`)
      })
    },
    updatePost () {
      console.log('updatePost')
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
  },
}
</script>

<style>

</style>
