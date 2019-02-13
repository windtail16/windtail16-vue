import Vue from 'vue'
import moment from 'moment'

Vue.filter('getKorTime', function(value) {
  if (value) {
    return moment(value).locale('ko').format('YYYY년 MM월 DD일 dddd, a hh시 mm분');
  }
})

Vue.filter('getUsTime', function(value) {
  if (value) {
    return moment(value).format('dddd, DD MMMM YYYY, hh:mm A')
  }
})

export default moment