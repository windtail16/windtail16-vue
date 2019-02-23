<template>
  <div>
    <b-button @click="selectFile"
    v-if="!uploadEnd && !uploading">
    커버 이미지 업로드
    </b-button>
    <input
      id="files"
      type="file"
      name="file"
      ref="uploadInput"
      accept="image/*"
      :multiple="false"
      @change="detectFiles($event)" />
    <b-progress-bar 
      :value="progressUpload" 
      :max="max" 
      class="mb-2"
      v-if="!uploadEnd">
      {{ progressUpload }}%
    </b-progress-bar>
    <b-img
      v-if="uploadEnd"
      :src="downloadURL"
      class="mb-2"
      fluid
    />
    <div v-if="uploadEnd" class="mb-2">
      <b-button @click="deleteImage()">커버 이미지 삭제</b-button>
    </div>
  </div>
</template>

<script>
import { firestorage } from '@/firebase/firestorage'
export default {
  props: ['oldImgUrl'],
  data() {
    return {
      progressUpload: 0,
      max: 100,
      fileName: '',
      uploadTask: '',
      uploading: false,
      uploadEnd: false,
      downloadURL: ''
    }
  },
  created () {
    if (this.oldImgUrl) this.setCoverImgOnUpdate()
  },
  methods: {
    selectFile () {
      console.log('up');
      this.$refs.uploadInput.click()
    },
    detectFiles (e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      this.fileName = file.name
      this.uploading = true
      this.uploadTask = firestorage.ref('images/' + file.name).put(file)
      this.$emit('getFileName', this.fileName)
    },
    deleteImage () {
      this.progressUpload = 0
      if (this.oldImgUrl === '') {
        this.deleteImgOnFirebase()
      } else {
        this.deleteImgOnUpdate()
      }
    },
    setCoverImgOnUpdate () {
      this.uploadEnd = true
      this.downloadURL = this.oldImgUrl
    },
    deleteImgOnFirebase () {
      firestorage
      .ref('images/' + this.fileName)
      .delete()
      .then(() => {
        this.uploading = false
        this.uploadEnd = false
        this.downloadURL = ''
        this.fileName = ''
        this.$emit('getFileName', this.fileName)
      })
      .catch((error) => {
        console.error(`file delete error occured: ${error}`)
      })
    },
    deleteImgOnUpdate () {
      this.uploading = false
      this.uploadEnd = false
      this.downloadURL = ''
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      },
      null,
      () => {
        this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.uploadEnd = true
          this.downloadURL = downloadURL   
          this.$emit('downloadURL', downloadURL)
        })
      })
    }
  }
}
</script>

<style>
input[type="file"] {
  position: absolute;
  clip: rect(0,0,0,0);
}
</style>
