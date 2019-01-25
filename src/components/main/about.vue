<template>
  <div class="about-bg text-center" id="about">
    <div class="spacer">
      <b-container>
        <h1>About</h1>
        <hr class="transparent">
        <b-row>
          <b-col lg="6">
            <div class="about-text text-left">
              <h3>
                Bio
              </h3>
              <p>
                HTML5, CSS3, Jquery와 Media query를 활용한 반응형 웹사이트 구축 프로젝트에 다수 참여 하였으며 
                최근에는 Block Chain Marketing(ICO) 웹사이트 운영, Vue.js 암호화폐 거래소 운영/모바일 버전 신규 구축 프로젝트에 참여 하였습니다.
              </p>
              <p>
                영화와 음악, 커피를 사랑하고 운동이 취미 입니다.
                미래, 기술, 자동차, 디자인과 미디어에 관심이 많으며 이것들에 관해 토론 하는것을 좋아합니다.<br>
                술과 담배는 하지 않으며 퇴근 후에는 주로 운동을 하거나 인터넷 강의를 듣고
                기타 여가 시간에는 그림을 그리거나 독서를 하며 때때로 드라이브를 하기도 합니다.
              </p>
              <p>
                성격은 개방적이며 붙임성 있고 밝은 성격 덕분에 누구와도 잘 지내는 편 입니다.
              </p>
              <p>
                <span :key="index" v-for="(environment,index) in environmentList">
                  <b-badge variant="primary">#{{ environment.title }}</b-badge>&nbsp;
                </span>
              </p>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="text-left">
              <h3>Skills</h3>
              <apexchart type="radar" :options="chartOptions" :series="series"></apexchart>
            </div>
            
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      environmentList: [
        {
          title: 'mac',
        },
        {
          title: 'ubuntu',
        },
        {
          title: 'aws',
        },
        {
          title: 'node',
        },
        {
          title: 'npm',
        },
        {
          title: 'php',
        },
        {
          title: 'asp',
        },
        {
          title: 'mysql',
        },
      ],
      series: [{
          name: 'Series 1',
          data: [4, 3, 3, 3, 5],
      }],
      chartOptions: {
        labels: ['HTML/CSS', 'VueJS', 'jQuery', 'Javascript', 'Bootstrap'],
        title: {
          show: false,/*
          text: 'Skills',
          style: {  
            fontSize:  '1.75rem',
            color:  '#ffffff'
          },*/
        },
        chart: {
          width: '100%',
          toolbar: {
            show: false
          }
        },
        markers: {
          size: 0,
        },
        tooltip: {
           enabled: false,
          
        },
        dataLabels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            colors: ['#FF5733', '#41B883', '#7ACEF4', '#F0DB4F', '#ad8fda']
          }
        },
        plotOptions: {
          radar: {
            size: 140,
            offsetX: 0,
            offsetY: 0,
          }
        },
        responsive: [{
          breakpoint: 700,
          options: {
            plotOptions: {
              radar: {
                size: 80,
              }
            }
          }
        }]
      }
      
    }
  }
}
</script>

<style>
  .about-bg {
    background-color: #333748;
    color: #fff;
  }
</style>
