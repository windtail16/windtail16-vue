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
      <b-tabs content-class="mt-3 mb-3">
        <b-tab title="Editor" active>
          <!-- EDITOR//S -->
          <VueEditor
          id="writer"
          v-model="content"
          useCustomImageHandler
          @imageAdded="handleImageAdded"
          >
          </VueEditor>
          <!-- EDITOR//E -->
        </b-tab>
        <b-tab title="HTML">
          <!-- HTML//S -->
          <b-form-textarea
            id="textarea1"
            v-model="content"
            placeholder="Enter something"
            rows="3"
            max-rows="6"
          />
          <!-- HTML//E -->
        </b-tab>
        <b-tab title="Preview">
          <!-- PREVIEW//S -->
          <div v-html="content"></div>
          <!-- PREVIEW//E -->
        </b-tab>
      </b-tabs>

      
      
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
import { VueEditor, Quill } from 'vue2-editor'

import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title:'',
      category: null,
      options: [
        { value: null, text:'Please select an option', disabled: true},
        { value: 'Development', text: 'Development' },
        { value: 'Tech', text: 'Tech' },
        { value: 'Game', text: 'Game' },
        { value: 'Music', text: 'Music' },
        { value: 'Fashion', text: 'Fashion' },
        { value: 'Car', text: 'Car' },
        { value: 'Humor', text: 'Humor'}
      ],
      content: '',
      imgUrl: '',
      oldImgUrl: '',
      fileName: ''
    }
  },
  components: {
    VueEditor,
    FileUploader
  },
  created() {
    if (this.$route.name === 'Modify') {
      this.getOriginalContent()
    }
  },
  computed: {
    ...mapGetters(['getUser','fetchedItem']),
  },
  methods: {
    savePost() {
      if(this.$route.name === 'Modify') {
        this.updatePost ()
      } else {
        this.newPost ()
      }
    },
    getFileName(v) {
      this.fileName = v
    },
    getDownloadUrl (v) {
      this.imgUrl = v
    },
    getOriginalContent () {
      this.title = this.fetchedItem.title
      this.category = this.fetchedItem.category
      this.content = this.fetchedItem.content
      this.oldImgUrl = this.fetchedItem.imgUrl
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
      .then(() => this.$router.push('/blog'))
      .catch((error) => {
        console.error(`Error adding document: ${error}`)
      })
    },
    updatePost () {
      firestore
      .collection('Post')
      .doc(this.$route.params.idx)
      .update({
        title: this.title,
        category: this.category,
        content: this.content,
        update: new Date().getTime(),
        imgUrl: this.imgUrl || this.fetchedItem.imgUrl,
        show: true
      })
      .then((result) => {
        this.$router.push('/blog')
      })
      .catch((error) => {
        console.error(`Error adding document: ${error}`)
      })
    },
    
  },
}
</script>

<style>

</style>
