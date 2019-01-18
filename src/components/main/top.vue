<template>
  <div class="header-bg" v-bind:style="headerHeight">
    <div class="header">
      <b-container>
        <div class="absolute-center">
          <h1 class="info animated fadeInDown">
            <a href="/" class="logo">Hi<br>I am <u>Sanghoon Bae</u></a>
            <br>
            <strong>
              I do Website <span>Publishing</span><br>
              Front-end <span>Development</span><br>
              Vue.js &amp; Bootstrap.
            </strong>
          </h1>
          <a href="#" v-scroll-to="'#work'" class="btn scroll animated bounceInUp">View My Works</a>
          <a href="#" v-scroll-to="'#contact'" class="btn scroll animated bounceInDown">Contact</a>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
const windowHeight = window.innerHeight

export default {
  name: 'top',
  data() {
    return {
      headerHeight: {
        height: windowHeight + 'px'
      }
    }
  },
}
</script>

<style scoped>
  .header-bg {
    background-image: url('~@/assets/images/header-bg.jpg');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
  .header {
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .header .container {
    display: table;
    height: 100%;
  }
  .header .absolute-center {
    display: table-cell;
    vertical-align: middle;
  }
  .header h1.info {
    font-size: 60px;
    color: #fff;
    line-height: 70px;
    font-weight: 300;
  }
  .header h1.info a {
    color: #fff;
    text-decoration: none;
  }
  .header h1.info a u {
    text-decoration: none;
  }
  .header h1.info strong {
    opacity: 0.7;
  }
  .header h1.info strong span {
    font-weight: 500;
    opacity: 0.7;
  }
  .header a.btn {
    color: #fff;
    border: 1px solid #fff;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 0;
    margin-top: 25px;
    margin-right: 25px;
    text-transform: uppercase;
    font-size: 16px;
  }
@media (max-width: 1200px){
  .header h1.info {
    font-size: 50px;
    line-height: 70px;
  }
}

@media (max-width: 768px){
  .header h1.info {
    font-size: 40px;
    line-height: 60px;
  }
}

@media (max-width: 767px){
  .header h1.info {
    font-size: 50px;
    line-height: 90px;
  }
  .header a.btn{font-size: 12px;margin-right: 18px;}
	.header a.btn:last-child{margin-right: 0;}
}

@media (max-width: 600px){
	.header h1.info {
    font-size: 27px;
    line-height: 40px;
  }
}
</style>
