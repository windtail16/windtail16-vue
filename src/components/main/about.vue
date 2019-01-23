<template>
  <div class="about-bg text-center" id="about">
    <div class="spacer">
      <b-container>
        <h1>About</h1>
        <b-row>
          <b-col lg="4" sm="6">
            Bio
            <p>
              HTML5, CSS3, Jquery와 Media query를 활용한 반응형 웹사이트 구축 프로젝트에 다수 참여 하였으며 
              최근에는 Block Chain Marketing 과 암호화폐 거래소 운영/신규 구축 프로젝트에 참여 하였습니다.
            </p>
            <p>
              영화와 음악을 사랑하고 드라이브가 취미 입니다.
              미래 사회와 기술 발전, 자동차 그리고 디자인과 미디어에 관심이 많으며 
              이것들에 관해 토론 하는것을 좋아합니다.
            </p>
            <p>
              술과 담배는 하지 않으며 여가 시간에는 주로 운동과 게임을 하고 한적한 교외로 드라이브를 합니다.
            </p>
            <p>
              조용하지만 깊고, 침착하지만 유쾌하게 주변과 어울려 사는것이 삶의 모토 입니다.
            </p>
          </b-col>
          <b-col col sm="6">
            Skills
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      
    }
  },
}
</script>

<style>
  .about-bg {
    background-color: #333748;
    color: #fff;
  }
</style>
