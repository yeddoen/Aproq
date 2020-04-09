Parse.serverURL = 'https://parseapi.back4app.com';  //Server URL
Parse.initialize(
  '3UWKUkNz8AG4kUXJkrPS2Mx9PyAH7fsDb6zzzMmm', // Application ID
  'VlNWxxTAOoN9XMMb7Ie7V9VSkTitDneJA9JrVWei', // Javascript key
  '0R0NyNF8L4hIwfbBzJE0duPxo6mkSsI73N5LRCRu'  //Master key
);

let MyCurrData = Parse.Object.extend('crawl_data'); //past_data의 하위클래스
let query = new Parse.Query(MyCurrData);

//query.equalTo("date", "2020-04-01 01:00"); //key,value 일치하는거 찾아옴
query.limit(8); //최근 6시간 [0]이 가장 최신
query.addDescending("date"); //날짜 내림차순 정렬
query.find().then((results) => {
  if (typeof document !== 'undefined'){
    // document.write("날짜:"+results[0].get("date")+", 미세먼지:"+results[0].get("pm10")+", 초미세먼지:"+results[0].get("pm25"));
    var currGrade = `${results[0].get("grade")}`; //`${value}`템플릿 리터럴
    currGrade = currGrade.replace("['","");
    currGrade = currGrade.replace("']","");
    var currDate = `${results[0].get("date")}`;
    currDate = currDate.substring(5,currDate.length-2);
    currDate = currDate.replace(":","시");
    currDate = currDate.replace(".","월");
    currDate = currDate.replace(" ","일 ");
    var classdate = document.getElementsByClassName("Cdate")
    for (var i = 0; i < classdate.length; i++) {
      classdate[i].innerHTML = "["+currDate+"]";
    }
    var currPM10 = `${results[0].get("pm10")}`,
    currPM25 = `${results[0].get("pm25")}`,
    currO3 = `${results[0].get("o3")}`,
    currNO2 = `${results[0].get("no2")}`,
    currCO = `${results[0].get("co")}`,
    currSO2 = `${results[0].get("so2")}`;

    document.getElementById("Cgrade").innerHTML = currGrade;
    //AQIgrade
    if(currGrade == "좋음"){
      $('.i-great').css({
        color: "##2A6BF6",
        fontSize: "90px"
      });
    }else if (currGrade == "보통") {
      $('.i-good').css({
        color: "#33cc33",
        fontSize: "90px"
      });
    }else if (currGrade == "나쁨") {
      $('.i-bad').css({
        color: "#eb862c",
        fontSize: "90px"
      });
    }else if (currGrade == "매우나쁨") {
      $('.i-danger').css({
        color: "#fd3535",
        fontSize: "90px"
      });
    }else {
      document.getElementById("Cgrade").innerHTML = "현재 등급을 표시할 수 없습니다.";
    }
    //PM10
    if (0<=currPM10 && currPM10<=30) {  //좋음
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (31<=currPM10 && currPM10<=80) { //보통
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (81<=currPM10 && currPM10<=150) { //나쁨
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (151<=currPM10) { //매우나쁨
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //PM2.5
    if (0<=currPM25 && currPM25<=15) {  //좋음
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (16<=currPM25 && currPM25<=35) { //보통
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (36<=currPM25 && currPM25<=75) { //나쁨
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (76<=currPM25) { //매우나쁨
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //O3
    if (0<=currO3 && currO3<=0.03) {  //좋음
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.031<=currO3 && currO3<=0.09) { //보통
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.091<=currO3 && currO3<=0.15) { //나쁨
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currO3) { //매우나쁨
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //NO2
    if (0<=currNO2 && currNO2<=0.03) {  //좋음
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.031<=currNO2 && currNO2<=0.06) { //보통
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.061<=currNO2 && currNO2<=0.15) { //나쁨
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currNO2) { //매우나쁨
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //CO
    if (0<=currCO && currCO<=2) {  //좋음
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (2.01<=currCO && currCO<=9) { //보통
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (9.01<=currCO && currCO<=15) { //나쁨
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (15.01<=currCO) { //매우나쁨
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //SO2
    if (0<=currSO2 && currSO2<=0.02) {  //좋음
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.021<=currSO2 && currSO2<=0.05) { //보통
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.051<=currSO2 && currSO2<=0.15) { //나쁨
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currSO2) { //매우나쁨
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //bar-Chart PM10
    var ctx = document.getElementById('chart10').getContext('2d');
    var times = new Array(), barpm10= new Array(), color10 = new Array();
    for (var i = 0; i < results.length; i++) {
      times[i]=`${results[i].get("date")}`;
      barpm10[i]=`${results[i].get("pm10")}`;

      if (0<=barpm10[i] && barpm10[i]<=30) {  //좋음
        color10[i] = '#5870fe';
      }else if (31<=barpm10[i] && barpm10[i]<=80) { //보통
        color10[i] = '#6fdc6f';
      }else if (81<=barpm10[i] && barpm10[i]<=150) { //나쁨
        color10[i] = '#f0a058';
      }else if (151<=barpm10[i]) { //매우나쁨
        color10[i] = '#fd6060';
      }
    }
    times[0] = times[0].substr(2,times[0].length); times[7] = times[7].substr(2,times[7].length);
    times[1] = times[1].substr(11,times[1].length); times[2] = times[2].substr(11,times[2].length);
    times[3] = times[3].substr(11,times[3].length); times[4] = times[4].substr(11,times[4].length);
    times[5] = times[5].substr(11,times[5].length); times[6] = times[6].substr(11,times[6].length);
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'PM10 ',
                backgroundColor: [color10[7],color10[6],color10[5],color10[4],color10[3],color10[2],color10[1],color10[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barpm10[7],barpm10[6],barpm10[5],barpm10[4],barpm10[3],barpm10[2],barpm10[1],barpm10[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart PM2.5
    var ctx1 = document.getElementById('chart25').getContext('2d');
    var barpm25= new Array(), color25 = new Array();
    for (var i = 0; i < results.length; i++) {
      barpm25[i]=`${results[i].get("pm25")}`;

      if (0<=barpm25[i] && barpm25[i]<=15) {  //좋음
        color25[i] = '#5870fe';
      }else if (16<=barpm25[i] && barpm25[i]<=35) { //보통
        color25[i] = '#6fdc6f';
      }else if (36<=barpm25[i] && barpm25[i]<=75) { //나쁨
        color25[i] = '#f0a058';
      }else if (76<=barpm25[i]) { //매우나쁨
        color25[i] = '#fd6060';
      }
    }
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'PM25 ',
                backgroundColor: [color25[7],color25[6],color25[5],color25[4],color25[3],color25[2],color25[1],color25[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barpm25[7],barpm25[6],barpm25[5],barpm25[4],barpm25[3],barpm25[2],barpm25[1],barpm25[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart O3
    var ctx2 = document.getElementById('charto3').getContext('2d');
    var baro3= new Array(), coloro3 = new Array();
    for (var i = 0; i < results.length; i++) {
      baro3[i]=`${results[i].get("o3")}`;

      if (0<=baro3[i] && baro3[i]<=0.03) {  //좋음
        coloro3[i] = '#5870fe';
      }else if (0.031<=baro3[i] && baro3[i]<=0.09) { //보통
        coloro3[i] = '#6fdc6f';
      }else if (0.091<=baro3[i] && baro3[i]<=0.15) { //나쁨
        coloro3[i] = '#f0a058';
      }else if (0.151<=baro3[i]) { //매우나쁨
        coloro3[i] = '#fd6060';
      }
    }
    var chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'O3 ',
                backgroundColor: [coloro3[7],coloro3[6],coloro3[5],coloro3[4],coloro3[3],coloro3[2],coloro3[1],coloro3[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [baro3[7],baro3[6],baro3[5],baro3[4],baro3[3],baro3[2],baro3[1],baro3[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart NO2
    var ctx3 = document.getElementById('chartno2').getContext('2d');
    var barno2= new Array(), colorno2 = new Array();
    for (var i = 0; i < results.length; i++) {
      barno2[i]=`${results[i].get("no2")}`;

      if (0<=barno2[i] && barno2[i]<=0.03) {  //좋음
        colorno2[i] = '#5870fe';
      }else if (0.031<=barno2[i] && barno2[i]<=0.06) { //보통
        colorno2[i] = '#6fdc6f';
      }else if (0.061<=barno2[i] && barno2[i]<=0.15) { //나쁨
        colorno2[i] = '#f0a058';
      }else if (0.151<=barno2[i]) { //매우나쁨
        colorno2[i] = '#fd6060';
      }
    }
    var chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'NO2 ',
                backgroundColor: [colorno2[7],colorno2[6],colorno2[5],colorno2[4],colorno2[3],colorno2[2],colorno2[1],colorno2[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barno2[7],barno2[6],barno2[5],barno2[4],barno2[3],barno2[2],barno2[1],barno2[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart CO
    var ctx4 = document.getElementById('chartco').getContext('2d');
    var barco= new Array(), colorco = new Array();
    for (var i = 0; i < results.length; i++) {
      barco[i]=`${results[i].get("co")}`;

      if (0<=barco[i] && barco[i]<=2) {  //좋음
        colorco[i] = '#5870fe';
      }else if (2.01<=barco[i] && barco[i]<=9) { //보통
        colorco[i] = '#6fdc6f';
      }else if (9.01<=barco[i] && barco[i]<=15) { //나쁨
        colorco[i] = '#f0a058';
      }else if (15.01<=barco[i]) { //매우나쁨
        colorco[i] = '#fd6060';
      }
    }
    var chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'CO ',
                backgroundColor: [colorco[7],colorco[6],colorco[5],colorco[4],colorco[3],colorco[2],colorco[1],colorco[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barco[7],barco[6],barco[5],barco[4],barco[3],barco[2],barco[1],barco[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart SO2
    var ctx5 = document.getElementById('chartso2').getContext('2d');
    var barso2= new Array(), colorso2 = new Array();
    for (var i = 0; i < results.length; i++) {
      barso2[i]=`${results[i].get("so2")}`;

      if (0<=barso2[i] && barso2[i]<=0.02) {  //좋음
        colorso2[i] = '#5870fe';
      }else if (0.021<=barso2[i] && barso2[i]<=0.05) { //보통
        colorso2[i] = '#6fdc6f';
      }else if (0.051<=barso2[i] && barso2[i]<=0.15) { //나쁨
        colorso2[i] = '#f0a058';
      }else if (0.151<=barso2[i]) { //매우나쁨
        colorso2[i] = '#fd6060';
      }
    }
    var chart5 = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'SO2 ',
                backgroundColor: [colorso2[7],colorso2[6],colorso2[5],colorso2[4],colorso2[3],colorso2[2],colorso2[1],colorso2[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barso2[7],barso2[6],barso2[5],barso2[4],barso2[3],barso2[2],barso2[1],barso2[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
  }
  console.log('ParseObjects found:', results);
}, (error) => {
  if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
  console.error('Error while fetching ParseObjects', error);
});

//
function showhide(i){
  if(document.all["currD"+i].style.display == "none"){
    document.all["currD"+i].style.display = "block";
  }else {
    document.all["currD"+i].style.display = "none";
  }
};
