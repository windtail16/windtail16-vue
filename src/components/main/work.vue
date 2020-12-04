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
                    <dt class="col-sm-4 text-right">Project</dt>
                    <dd class="col-sm-8">{{work.project}}</dd>
                    <dt class="col-sm-4 text-right">Client</dt>
                    <dd class="col-sm-8">{{work.client}}</dd>
                    <dt class="col-sm-4 text-right">Information</dt>
                    <dd class="col-sm-8">{{work.info}}</dd>
                    <dt class="col-sm-4 text-right">Tech Stack</dt>
                    <dd class="col-sm-8">{{work.stack}}</dd>
                    <dt class="col-sm-4 text-right">contribution rate</dt>
                    <dd class="col-sm-8">
                      {{work.cont}}%
                    </dd>
                    <dt class="col-sm-4 text-right">Link</dt>
                    <dd class="col-sm-8"><a v-bind:href="work.linkUrl" target="_blank">{{ work.linkUrl }}</a></dd>
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
          id:'34',
          title:'Samsung Care +',
          project: 'SamsungCare',
          client: 'Samsung Electronics',
          imgSrc: require('../../assets/images/work/scp.png'),
          linkUrl:'https://stg-www.samsungcareplus.com/se#!/',
          info:'SCP Online Store Renewal',
          stack: 'HTML5, CSS3, jQuery',
          cont: 100
        },
        {
          id:'33',
          title:'Samsung Care +',
          project: '삼성케어플러스',
          client: '삼성전자',
          imgSrc: require('../../assets/images/work/scp.png'),
          linkUrl:'https://www.samsungcareplus.com/',
          info:'SCP 운영, AR Dashboard 구축, 한국총판구축(ing)',
          stack: 'jQuery, Vue.js, Git',
          cont: 100
        },
        {
          id:'32',
          title:'Dexko Mobile',
          project: 'Dexko 모바일 구축',
          client: '한국디지털거래소',
          imgSrc: require('../../assets/images/work/dexko_m.png'),
          linkUrl:'https://m.dexko.co.kr/',
          info:'암호화폐 거래소 사이트 퍼블리싱',
          stack: 'Vue.js',
          cont: 100
        },
        {
          id:'31',
          title:'Dexko',
          project: 'Dexko PC 리뉴얼',
          client: '한국디지털거래소',
          imgSrc: require('../../assets/images/work/dexko_pc.png'),
          linkUrl:'https://dexko.co.kr/',
          info:'암호화폐 거래소 사이트 퍼블리싱',
          stack: 'Vue.js',
          cont: 100
        },
        {
          id:'30',
          title:'Hdac TGE',
          project: 'Hdac TGE 운영',
          client: 'Hyundai Pay',
          imgSrc: require('../../assets/images/work/hdac.jpg'),
          linkUrl:'https://hdac.io/',
          info:'암호화폐 Hdac 이벤트 웹사이트 퍼블리싱',
          stack: 'HTML/jQuery/CSS',
          cont: 100
        },
        {
          id:'29',
          title:'MILLET',
          project: 'MILLET 쇼핑몰 구축',
          client: '밀레에델바이스홀딩스',
          imgSrc: require('../../assets/images/work/millet.jpg'),
          linkUrl:'http://www.millet.co.kr/',
          info:'등산복 쇼핑몰 웹사이트 퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'28',
          title:'여의도투자자문',
          project: '여의도투자자문 웹사이트 구축',
          client: '여의도증권미디어그룹',
          imgSrc: require('../../assets/images/work/yic.jpg'),
          linkUrl:'http://www.여의도투자자문.com',
          info:'투자자문업 웹사이트 퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'27',
          title:'오토트레이딩',
          project: '오토트레이딩 웹사이트 리뉴얼',
          client: '여의도증권미디어그룹',
          imgSrc: require('../../assets/images/work/autotrading.jpg'),
          linkUrl:'http://xn--o01bl8cuvspib770a9rb.com/',
          info:'주식투자정보 제공 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'26',
          title:'UMAX',
          project: 'UMAX 반응형 웹사이트 구축',
          client: '홈초이스',
          imgSrc: require('../../assets/images/work/umax.jpg'),
          linkUrl:'http://umax.cabletvvod.co.kr/',
          info:'케이블 방송사 채널 페이지 웹퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'25',
          title:'MEAT CLUB',
          project: 'MEAT CLUB 쇼핑몰 구축',
          client: '미트클럽',
          imgSrc: require('../../assets/images/work/meatclub.jpg'),
          linkUrl:'http://meatclub.co.kr/',
          info:'육류/육가공품 쇼핑몰 웹퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'24',
          title:'LG Display',
          project: 'LG Display 출입관리 시스템 유지보수',
          client: 'LG Display 경영지원팀',
          imgSrc: require('../../assets/images/work/lgd_ism.jpg'),
          linkUrl:'https://partner.lgdisplay.com:8443/partner.main.login.dev',
          info:'LGD 출입관리 시스템 웹표준화 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'23',
          title:'LG Display',
          project: 'LG Display 통합안전관리시스템 구축',
          client: 'LG Display',
          imgSrc: require('../../assets/images/work/lgd_ism.jpg'),
          linkUrl:'https://safety.lgdisplay.com',
          info:'내부 포털 시스템 구축 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'22',
          title:'이음샘일',
          project: '이음샘 모바일 구축',
          client: '이음솔',
          imgSrc: require('../../assets/images/work/iumsam_m.jpg'),
          linkUrl:'http://m.iumsam.com/',
          info:'인터넷 과외 모바일 사이트 퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'21',
          title:'나르샤시스템',
          project: '나르샤시스템 반응형 웹사이트 구축',
          client: 'Narsha System',
          imgSrc: require('../../assets/images/work/narshas.jpg'),
          linkUrl:'http://narshasystem.com',
          info:'웹에이젼시 홈페이지 개발 및 퍼블리싱',
          stack: 'Codeigniter(PHP)/html/css/jqery',
          cont: 100
        },
        {
          id:'20',
          title:'SKKU 미래도시공학과',
          project: '성균관대학교 미래도시공학과 웹사이트 구축',
          client: '성균관대학교 일반대학원 미래도시융합공학과',
          imgSrc: require('../../assets/images/work/skkucfc.jpg'),
          linkUrl:'http://cfc.skku.edu',
          info:'성균관대학교 대학원 미래도시융합공학과 홈페이지 웹퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'19',
          title:'한국무용학회',
          project: '한국무용학회 웹사이트 구축',
          client: '한국무용학회',
          imgSrc: require('../../assets/images/work/kdes.jpg'),
          linkUrl:'https://www.kdes.or.kr',
          info:'한국무용학회 홈페이지, 저널 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        /*
        {
          id:'18',
          title:'스터프코리아',
          project: '스터프코리아',
          client: 'Stuff korea',
          imgSrc: require('../../assets/images/work/stuff.png'),
          linkUrl:'http://www.stuffkorea.com',
          info:'남성잡지 [스터프]의 한국판 웹진 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        */
        {
          id:'17',
          title:'취뽀스터디',
          project: '취뽀스터디 웹사이트 리뉴얼',
          client: '취업뽀개기',
          imgSrc: require('../../assets/images/work/chippo.png'),
          linkUrl:'http://www.chippostudy.com',
          info:'대학생 인기 취업 커뮤니티 [취뽀스터디] 웹퍼블리싱',
          stack: 'bootstrap2/html/css/jqery',
          cont: 100
        },
        {
          id:'16',
          title:'Hicomp int',
          project: '하이컴프 아이엔티 웹사이트 리뉴얼',
          client: '하이컴프 아이엔티',
          imgSrc: require('../../assets/images/work/hicomp_pr.jpg'),
          linkUrl:'http://www.hicompint.com/',
          info:'웹에이젼시 웹사이트 반응형 퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'15',
          title:'Hicomp int About',
          project: '하이컴프 아이엔티 소개 웹사이트 구축',
          client: '하이컴프 아이엔티',
          imgSrc: require('../../assets/images/work/hicomp_about.jpg'),
          linkUrl:'http://about.hicompint.com/',
          info:'웹에이젼시 회사소개 미니 페이지 퍼블리싱',
          stack: 'bootstrap3/html/css/jqery',
          cont: 100
        },
        {
          id:'14',
          title:'한국고무산업협회',
          project: '한국고무산업협회 웹사이트 구축',
          client: '한국고무산업협회',
          imgSrc: require('../../assets/images/work/krisa_pc.jpg'),
          linkUrl:'http://www.krisa.or.kr/',
          info:'사단법인 한국고무산업협회 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'13',
          title:'한국고무산업협회',
          project: '한국고무산업협회 모바일 웹사이트 구축',
          client: '한국고무산업협회',
          imgSrc: require('../../assets/images/work/krisa_m.jpg'),
          linkUrl:'http://www.krisa.or.kr/',
          info:'사단법인 한국고무산업협회 모바일 버전 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'12',
          title:'피에죠 테크놀로지',
          project: '피에죠 테크놀로지 웹사이트 구축',
          client: '피에죠 테크놀로지',
          imgSrc: require('../../assets/images/work/piezotech.jpg'),
          linkUrl:'http://piezo-tech.com',
          info:'초음파 모터 외 제조업체 피에죠 테크놀로지 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'11',
          title:'한국청소년활동학회',
          project: '한국청소년활동학회 웹사이트 구축',
          client: '한국청소년활동학회',
          imgSrc: require('../../assets/images/work/youth.jpg'),
          linkUrl:'http://www.youth.so/',
          info:'한국청소년활동학회 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'10',
          title:'연세대학교 분리분석',
          project: '연세대학교 분리분석 연구실 웹사이트 구축',
          client: '연세대학교 분리분석 연구실',
          imgSrc: require('../../assets/images/work/yschem.jpg'),
          linkUrl:'http://chem.yonsei.ac.kr/~mhmoon/',
          info:'연세대학교 분리분석 연구실 웹사이트 퍼블리싱',
          stack: 'html/css/jqery/flash',
          cont: 100
        },
        /*
        {
          id:'09',
          title:'상명대학교 EEEML',
          client: '',
          imgSrc: require('../../assets/images/work/smeeeml.jpg'),
          linkUrl:'http://eeeml.smu.ac.kr',
          info:'',
          stack: '',
          cont: ''
        },
        */
        {
          id:'08',
          title:'한양대학교 경제금융대학',
          project: '한양대학교 경제금융대학 웹사이트 구축',
          client: '한양대학교 경제금융대학',
          imgSrc: require('../../assets/images/work/hyecon.jpg'),
          linkUrl:'http://econ.hanyang.ac.kr',
          info:'한양대학교 경제금융대학 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'07',
          title:'성균관대학교 건설환경공학부',
          project: '성균관대학교 건설환경공학부 웹사이트 구축',
          client: '성균관대학교 건축공학전공',
          imgSrc: require('../../assets/images/work/skkace.jpg'),
          linkUrl:'http://ace.skku.edu/',
          info:'성균관대학교 건설환경공학부 국/영 버전 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        /*{
          id:'06',
          title:'Cogeng',
          client: '',
          imgSrc: require('../../assets/images/work/cogeng.jpg'),
          linkUrl:'http://cogeng.hicomp.net',
          info:'',
          stack: '',
          cont: ''
        },
        {
          id:'05',
          title:'SKKU UX ACADEMY',
          client: '',
          imgSrc: require('../../assets/images/work/ux.jpg'),
          linkUrl:'http://ux.hicomp.net',
          info:'',
          stack: '',
          cont: ''
        },
        {
          id:'04',
          title:'HYU MSRC',
          client: '',
          imgSrc: require('../../assets/images/work/hymsrc.jpg'),
          linkUrl:'http://msrc.hanyang.ac.kr',
          info:'',
          stack: '',
          cont: ''
        },
        {
          id:'03',
          title:'HYU Enc Lab',
          client: '',
          imgSrc: require('../../assets/images/work/hyenc.jpg'),
          linkUrl:'http://enclab.hanyang.ac.kr',
          info:'',
          stack: '',
          cont: ''
        },
        */
        {
          id:'02',
          title:'그림숲 필드 연수원',
          project:'그림숲 필드 연수원 웹사이트 구축',
          client: '그림숲 필드 연수원',
          imgSrc: require('../../assets/images/work/greemsup.jpg'),
          linkUrl:'http://greemsup.kr/',
          info:'그림숲 필드 연수원 홈페이지 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
        },
        {
          id:'01',
          title:'이순신리더십연구회',
          project: '이순신리더십연구회 웹사이트 구축',
          client: '사단법인 이순신 리더십 연구회',
          imgSrc: require('../../assets/images/work/yisunsin.jpg'),
          linkUrl:'http://yisunsinleadership.com',
          info:'충무공 이순신을 연구하고 홍보하는 연구 협회 웹사이트 퍼블리싱',
          stack: 'html/css/jqery',
          cont: 100
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
