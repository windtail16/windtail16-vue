<template>
  <b-container>
    <b-form @submit.prevent="savePost">
      <b-input type="text" label="Title" v-model="title" required></b-input>
      <VueEditor
      id="writer"
      v-model="content"
      useCustomImageHandler
      @imageAdded="handleImageAdded"
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

export default {
  data() {
    return {
      title: '',
      content: '',
    }
  },
  
  components: {
    VueEditor,
    FileUploader
  },
  created() {
    
  },
  computed: {
    
  },
  methods: {
    savePost() {
      this.newPost ()
      /*
      if(this.getKey === '') {
        this.newPost ()
      } else {
        this.updatePost ()
      }*/
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
        date: new Date().getTime(),
        update: '',
        hit: 0,
        writer: this.getUser.displayName || this.writer,
        imgUrl: this.imgUrl || this.getImgUrl,
        show: true
      })
      .then(() => this.$router.push('/blog'))
      .catch((error) => {
        console.error(`Error adding document: ${error}`)
      })
    },
    updatePost () {
      console.log('updatePost')
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
