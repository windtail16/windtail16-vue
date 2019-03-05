import Vue from 'vue'
import moment from 'moment'

Vue.filter('getUniTime', function(value) {
  if (value) {
    return moment(value).format('YYYY-MM-DD dddd, hh:mm');
  }
})

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

Vue.filter('getUsTimeShort', function(value) {
  if (value) {
    return moment(value).format('MMMM DD, YYYY')
  }
})

export default moment