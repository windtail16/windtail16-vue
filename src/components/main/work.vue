<template>
  <div class="work-bg text-center" id="work">
    <div class="spacer">
      <b-container>
        <h2>Works</h2>
        <hr class="transparent">
        <b-row v-masonry transition-duration="0.3s" item-selector=".col">
          <b-col v-masonry-tile col lg="4" sm="6" :key="index" v-for="(work,index) in workList">
            <!-- <img :src="`http://windtail16.com/images/work/${work.imgSrc}`" alt=""> -->
            <img :src="work.imgSrc" alt="" >
            <div class="overlay-layer">
              <span>
                <b-button v-b-modal="work.id">
                  <i class="fas fa-clone"></i>
                  {{ work.title }}
                </b-button>
                <!-- MODAL//S -->
                <b-modal hide-footer :id="work.id" :title="work.title">
                  <dl class="row text-left"> 
                    <dt class="col-sm-3 text-right">Link</dt>
                    <dd class="col-sm-9"><a v-bind:href="work.linkUrl" target="_blank">{{ work.linkUrl }}</a></dd>
                  </dl>
                </b-modal>
                <!-- MODAL//E -->
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry'

// import Modal from './modal.vue'

Vue.use(VueMasonryPlugin)

export default {
  name: 'work',
  beforeCreate () {
    // console.log('인스턴스 초기화 후, 데이터 관찰/이벤트/감시자 설정 전 호출됩니다.')
  },
  components: {
    // Modal
  },
  data() {
    return {
      workList:[
        {
          id:'32',
          title:'Dexko 모바일',
          imgSrc: require('../../assets/images/work/dexko_m.png'),
          linkUrl:'https://m.dexko.co.kr/',
          info:''
        },
        {
          id:'31',
          title:'Dexko',
          imgSrc: require('../../assets/images/work/dexko_pc.png'),
          linkUrl:'https://dexko.co.kr/',
          info:''
        },
        {
          id:'30',
          title:'Hdac TGE',
          imgSrc: require('../../assets/images/work/hdac.jpg'),
          linkUrl:'https://hdac.io/',
          info:''
        },
        {
          id:'29',
          title:'MILLET 쇼핑몰',
          imgSrc: require('../../assets/images/work/millet.jpg'),
          linkUrl:'http://www.millet.co.kr/',
          info:''
        },
        {
          id:'28',
          title:'여의도투자자문',
          imgSrc: require('../../assets/images/work/yic.jpg'),
          linkUrl:'http://www.여의도투자자문.com',
          info:''
        },
        {
          id:'27',
          title:'오토트레이딩',
          imgSrc: require('../../assets/images/work/autotrading.jpg'),
          linkUrl:'http://xn--o01bl8cuvspib770a9rb.com/',
          info:''
        },
        {
          id:'26',
          title:'UMAX',
          imgSrc: require('../../assets/images/work/umax.jpg'),
          linkUrl:'http://umax.cabletvvod.co.kr/',
          info:''
        },
        {
          id:'25',
          title:'MEAT CLUB',
          imgSrc: require('../../assets/images/work/meatclub.jpg'),
          linkUrl:'http://meatclub.co.kr/',
          info:''
        },
        {
          id:'24',
          title:'LG Display 경영지원시스템',
          imgSrc: require('../../assets/images/work/lgd_ism.jpg'),
          linkUrl:'',
          info:''
        },
        {
          id:'23',
          title:'LG Display 통합안전관리시스템',
          imgSrc: require('../../assets/images/work/lgd_ism.jpg'),
          linkUrl:'',
          info:''
        },
        {
          id:'22',
          title:'이음샘 모바일',
          imgSrc: require('../../assets/images/work/iumsam_m.jpg'),
          linkUrl:'http://m.iumsam.com/',
          info:''
        },
        {
          id:'21',
          title:'나르샤시스템',
          imgSrc: require('../../assets/images/work/narshas.jpg'),
          linkUrl:'http://narshasystem.com',
          info:''
        },
        {
          id:'20',
          title:'성균관대학교 미래도시공학과',
          imgSrc: require('../../assets/images/work/skkucfc.jpg'),
          linkUrl:'http://cfc.skku.edu',
          info:''
        },
        {
          id:'19',
          title:'한국무용학회',
          imgSrc: require('../../assets/images/work/kdes.jpg'),
          linkUrl:'https://www.kdes.or.kr',
          info:''
        },
        {
          id:'18',
          title:'스터프코리아',
          imgSrc: require('../../assets/images/work/stuff.png'),
          linkUrl:'http://www.stuffkorea.com',
          info:''
        },
        {
          id:'17',
          title:'취뽀스터디',
          imgSrc: require('../../assets/images/work/chippo.png'),
          linkUrl:'http://www.chippostudy.com',
          info:''
        },
        {
          id:'16',
          title:'하이컴프 아이엔티',
          imgSrc: require('../../assets/images/work/hicomp_pr.jpg'),
          linkUrl:'http://www.hicompint.com/',
          info:''
        },
        {
          id:'15',
          title:'하이컴프 아이엔티 소개',
          imgSrc: require('../../assets/images/work/hicomp_about.jpg'),
          linkUrl:'http://about.hicompint.com/',
          info:''
        },
        {
          id:'14',
          title:'한국고무산업협회',
          imgSrc: require('../../assets/images/work/krisa_pc.jpg'),
          linkUrl:'http://www.krisa.or.kr/',
          info:''
        },
        {
          id:'13',
          title:'한국고무산업협회 모바일',
          imgSrc: require('../../assets/images/work/krisa_m.jpg'),
          linkUrl:'http://www.krisa.or.kr/',
          info:''
        },
        {
          id:'12',
          title:'피에죠 테크놀로지',
          imgSrc: require('../../assets/images/work/piezotech.jpg'),
          linkUrl:'http://piezo-tech.com',
          info:''
        },
        {
          id:'11',
          title:'한국청소년활동학회',
          imgSrc: require('../../assets/images/work/youth.jpg'),
          linkUrl:'http://www.youth.so/',
          info:''
        },
        {
          id:'10',
          title:'연세대학교 분리분석 연구실',
          imgSrc: require('../../assets/images/work/yschem.jpg'),
          linkUrl:'http://chem.yonsei.ac.kr/~mhmoon/',
          info:''
        },
        {
          id:'09',
          title:'상명대학교 EEEML',
          imgSrc: require('../../assets/images/work/smeeeml.jpg'),
          linkUrl:'http://eeeml.smu.ac.kr',
          info:''
        },
        {
          id:'08',
          title:'한양대학교 경제금융대학',
          imgSrc: require('../../assets/images/work/hyecon.jpg'),
          linkUrl:'http://econ.hanyang.ac.kr',
          info:''
        },
        {
          id:'07',
          title:'성균관대학교 건설환경공학부',
          imgSrc: require('../../assets/images/work/skkace.jpg'),
          linkUrl:'http://ace.skku.edu/',
          info:''
        },
        {
          id:'06',
          title:'Cogeng',
          imgSrc: require('../../assets/images/work/cogeng.jpg'),
          linkUrl:'http://cogeng.hicomp.net',
          info:''
        },
        {
          id:'05',
          title:'SKKU UX ACADEMY',
          imgSrc: require('../../assets/images/work/ux.jpg'),
          linkUrl:'http://ux.hicomp.net',
          info:''
        },
        {
          id:'04',
          title:'HYU MSRC',
          imgSrc: require('../../assets/images/work/hymsrc.jpg'),
          linkUrl:'http://msrc.hanyang.ac.kr',
          info:''
        },
        {
          id:'03',
          title:'HYU Enc Lab',
          imgSrc: require('../../assets/images/work/hyenc.jpg'),
          linkUrl:'http://enclab.hanyang.ac.kr',
          info:''
        },
        {
          id:'02',
          title:'그림숲 필드 연수원',
          imgSrc: require('../../assets/images/work/greemsup.jpg'),
          linkUrl:'http://greemsup.kr/',
          info:''
        },
        {
          id:'01',
          title:'이순신리더십연구소',
          imgSrc: require('../../assets/images/work/yisunsin.jpg'),
          linkUrl:'http://yisunsinleadership.com',
          info:''
        }
      ]
    }
  },
}
</script>

<style scoped>
  .work-bg {
    background-color: #dbdbdb;
  }
  .row {
    margin: 0 -7px;
  }
  .col {
    position: relative;
    padding: 7px;
  }

  img {
    max-width: 100%;
    border: 1px #cccccc solid;
    display: block;
  }

  .overlay-layer {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    margin: 7px;
    transition: all .2s ease-in-out;
  }

  .overlay-layer:hover {
    opacity: 1;
  }

  .overlay-layer span {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 50%;  
  }
  /*
  .overlay-layer span a {
    border: 1px solid #fff;
    width: auto;
    display: inline-block;
    padding: 8px 20px;
    color: #fff;
    background: rgba(0,0,0,0.0);
    letter-spacing: 2px;
    word-spacing: 5px;
    margin-top: -42px;
    transition: all .30s ease-in-out;
    text-decoration: none;
  }
  
  .overlay-layer:hover span a {
    background: rgba(0,0,0,0.6);
  }
  */
</style>
