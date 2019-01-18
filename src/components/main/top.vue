<template>
  <div class="header-bg" v-bind:style="headerHeight">
    <div class="header">
      <b-container>
        <div class="absolute-center">
          <div class="row">
            <div class="col-sm-7">
              <h1 class="info animated fadeInDown">
                  <a href="" class="logo">Hi<br>I am <u>Sanghoon Bae</u></a>
                  <br>
                  <b>I do Website <span>Publishing</span>
                  <br>Frontend <span>Development</span><br>
                  &amp; Bootstrap.</b>
              </h1>
              <a href="#works" class="btn scroll animated bounceInUp">View My Works</a>
              <a href="#contact" class="btn scroll animated bounceInDown">Contact</a>
            </div>
            <!--<div class="col-sm-4 col-sm-offset-1">
                <div class="connect-icon">
                    <div class="prof-links clearfix animated bounceInUp">
                        <a href="#"><img alt="portfolio" src="images/linked.png" height="48"></a>
                        <a href="#"><img alt="portfolio" src="images/dribbble.png" height="48"></a>
                        <a href="#" class="behance"><img alt="portfolio" src="images/behance.png"></a>
                    </div>
                    <div class="social  clearfix  animated bounceInDown">
                        <a href="http://facebook.com/sanghoon.bae.16" target="_blank"><img alt="Face book" src="images/facebook.png" width="32"></a>
                        <a href="#"><img alt="portfolio" src="images/twitter.png"  width="32"></a>
                        <a href="#"><img alt="portfolio" src="images/instagram.png"  width="32"></a>
                        <a href="#"><img alt="portfolio" src="images/pinterest.png" width="32"></a>
                    </div>
                </div>
            </div>-->
          </div>
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
    font-size: 50px;
    font-family: Lato;
    color: #fff;
    line-height: 70px;
        font-weight: 300;
  }
  .header h1.info a {
    color: #fff;
    text-decoration: none;
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
</style>
