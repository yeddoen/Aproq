//날씨
let weatherIcon = {
  // dayIcon
  '01d' : 'wi wi-day-sunny',
  '02d' : 'wi wi-day-cloudy',
  '03d' : 'wi wi-cloud',
  '04d' : 'wi wi-cloudy',
  '09d' : 'wi wi-day-showers',
  '10d' : 'wi wi-day-rain',
  '11d' : 'wi wi-day-lightning',
  '13d' : 'wi wi-day-snow',
  '50d' : 'wi wi-day-fog',
  // nightIcon
  '01n' : 'fas fa-moon',
  '02n' : 'wi wi-night-alt-cloudy',
  '03n' : 'wi wi-cloud',
  '04n' : 'wi wi-cloudy',
  '09n' : 'wi wi-night-alt-showers',
  '10n' : 'wi wi-night-alt-rain',
  '11n' : 'wi wi-night-alt-lightning',
  '13n' : 'wi wi-night-alt-snow',
  '50n' : 'w1 w1-night-fog'
};
let weatherDescription = {
  '200' : '약한 비를 동반한 천둥번개',
  '201' : '비를 동반한 천둥번개',
  '202' : '폭우를 동반한 천둥번개',
  '210' : '약한 천둥번개',
  '211' : '천둥번개',
  '212' : '강한 천둥번개',
  '221' : '불규칙적인 천둥번개',
  '230' : '번개와 약한 이슬비',
  '231' : '번개를 동반한 이슬비',
  '232' : '번개와 굵은 이슬비',
  '300' : '약한 이슬비',
  '301' : '이슬비',
  '302' : '강한 이슬비',
  '310' : '가벼운 보슬비',
  '311' : '약한 비',
  '312' : '강한 보슬비',
  '313' : '소나기성 안개비',
  '314' : '강한 소나기성 안개비',
  '321' : '소나기',
  '500' : '약한 비',
  '501' : '비',
  '502' : '강한 비',
  '503' : '거센 비',
  '504' : '집중호우',
  '511' : '우박',
  '520' : '약한 소나기',
  '521' : '소나기',
  '522' : '강한 소나기',
  '531' : '불규칙적인 소나기',
  '600' : '가벼운 눈',
  '601' : '눈',
  '602' : '강한 눈',
  '611' : '진눈깨비',
  '612' : '소나기성 진눈깨비',
  '615' : '약한 비와 눈',
  '616' : '비내리고 눈',
  '620' : '약한 소나기성 눈',
  '621' : '소나기성 눈',
  '622' : '강한 소나기성 눈',
  '701' : '안개',
  '711' : '스모그',
  '721' : '옅은 안개',
  '731' : '황사',
  '761' : '먼지낌',
  '762' : '화산재',
  '771' : '돌풍',
  '781' : '토네이도',
  '800' : '맑음',
  '801' : '구름 조금',
  '802' : '구름 많음',
  '803' : '구름 적고 맑음',
  '804' : '구름 많고 흐림',
  '900' : '토네이도',
  '901' : '태풍',
  '902' : '허리케인',
  '903' : '한파',
  '904' : '열대야',
  '905' : '바람 많음',
  '906' : '우박',
  '951' : '바람 없음',
  '952' : '약한 바람',
  '953' : '산들 바람',
  '954' : '바람',
  '955' : '선선한 바람',
  '956' : '강한 바람',
  '957' : '거센 바람',
  '958' : '돌풍',
  '959' : '심한 돌풍',
  '960' : '폭풍',
  '961' : '강한 폭풍',
  '962' : '허리케인'
}
let currentCity = {
  'Yongsan' : '서울특별시 용산구',
  'Pyeongtaek-si' : '경기도 평택시',
  'Seonghwan' : '충청남도 천안시 서북구 성환읍',
  'Tokusan-ri' : '경상남도 창원시 진해구 풍호동',
  'Heunghae' : '경상북도 포항시 북구 흥해읍',
  'Reisui' : '전라남도 여수시',
  'Yeonil' : '경상북도 포항시 남구 연일읍',
  'Neietsu' : '강원도 영월군 영월읍',
  'Yongin' : '경기도 용인시 처인구',
  'Yeonggwang' : '전라남도 영광군',
  'Yeongdong' : '충청북도 영동군',
  'Eisen' : '경상북도 영천시',
  'Yeongam-guncheong' : '전라남도 영암군',
  'Yeoncheon-gun' : '경기도 연천군',
  'Yeoju' : '경기도 여주군',
  'Yesan' : '충청남도 예산군',
  'Yecheon' : '경상북도 예천군',
  'Yangyang' : '강원도 양양군',
  'Yangsan' : '경상남도 양산시',
  'Yangju' : '경기도 양주시',
  'Yanggu' : '강원도 양구군',
  'Wonju' : '강원도 원주시',
  'Wanju' : '전라북도 전주시',
  'Waegwan' : '경상북도 칠곡군 왜관읍',
  'Unsal-li' : '경기도 포천시 창수면 운산리',
  'Umulmok' : '경기도 포천시 영북면',
  'Ulsan' : '울산광역시 중구 다운동',
  'Ulsan' : '울산광역시 남구 달동',
  'Ulchin' : '경상북도 울진군',
  'Uijeongbu-si' : '경기도 의정부시',
  'Tangjin' : '충청남도 당진시',
  'Taesal-li' : '충청남도 서산시',
  'Daejeon' : '대전광역시 중구 은행선화동',
  'Daejeon' : '대전광역시 중구 대흥동',
  'Daegu' : '대구광역시 달서구 도원동',
  'Daegu' : '대구광역시 중구 성내2동',
  'Boryeong' : '충청남도 보령시',
  'Taebaek' : '강원도 태백시',
  'Taian' : '충청남도 태안군',
  'Suwon' : '경기도 수원시',
  'Suncheon' : '전라남도 순천시',
  'Sunchang-chodeunghakgyo' : '전라북도 순창군',
  'Republic of Korea' : '대한민국',
  'Seoul' : '서울특별시 종로구',
  'Seoul' : '서울특별시 중구 태평로1가',
  'Sokcho' : '강원도 속초시',
  'Yongsan' : '서울특별시 용산구 한강로2가',
  'Sinchon-dong' : '서울특별시 송파구 잠실2동',
  'Santyoku' : '강원도 삼척시 ',
  'Pyeongtaek' : '경기도 평택시 통복시장2로',
  'Pyeong' : '평택시 오성면',
  'Buyeo' : '충청남도 부여군',
  'Busan' : '부산광역시 동구 좌천1동',
  'Busan' : '부산광역시 중구 중앙동2가',
  'Bucheon-si' : '경기도 부천시 원미구',
  'Puan' : '전라북도 부안군',
  'Boseong' : '전라남도 보성군',
  'Beolgyo' : '전라남도 보성군 벌교읍',
  'Pohang' : '경상북도 포항시 북구',
  'Osan' : '경기도 오산시',
  'Asan' : '충청남도 아산시 온천동',
  'Okcheon' : '충청북도 옥천군',
  'Kosong' : '강원도 고성군',
  'Nonsan' : '충청남도 논산시 반월동',
  'Namyang' : '경기도 화성시 남양동',
  'Namhae' : '경상남도 남해군',
  'Naju' : '전라남도 나주시',
  'Munsan' : '경기도 파주시 문산읍'
}
var $LatitudeData=37.553828; //초기값 서울역
var $LongitudeData=126.969652;

$.ajax({
  url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&lat="+$LatitudeData+'&lon='+$LongitudeData+" ",
  dataType: 'json',
  type: 'GET',
  success: function(data){
    var $Icon = (data.weather[0].icon).substr(0.3);
    var $Temp = Math.floor(data.main.temp) + '℃';
    var $City = data.name;
    var $Description = data.weather[0].id;
    $('.CurrIcon').prepend('<i class="' + weatherIcon[$Icon] + '"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.CurrCity').append(currentCity[$City]);
    $('.CurrDescription').append(weatherDescription[$Description]);
  }
})
// 위치
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
  }
}
function showPosition(position) {
  $LatitudeData=position.coords.latitude;
  $LongitudeData=position.coords.longitude;

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&lat="+$LatitudeData+'&lon='+$LongitudeData+" ",
    dataType: 'json',
    type: 'GET',
    success: function(data){
      var $Icon = (data.weather[0].icon).substr(0.3);
      var $Temp = Math.floor(data.main.temp) + '℃';
      var $city = data.name;
      var $Description = data.weather[0].id;
      $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.CurrTemp').html($Temp);
      $('.CurrCity').html(currentCity[$city]||$city);
      $('.CurrDescription').html(weatherDescription[$Description]);
    }
  })
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("사용자가 Geolocation 요청을 거부했습니다.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("위치 정보를 사용할 수 없습니다.")
      break;
    case error.TIMEOUT:
      alert("사용자 위치를 가져오는 요청이 시간 초과되었습니다.")
      break;
    case error.UNKNOWN_ERROR:
      alert("알 수 없는 오류가 발생했습니다.")
      break;
  }
}
