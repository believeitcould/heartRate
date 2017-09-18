<template>
   <div class="second unit flex-left">
    <div class="unit content">
      <p style="margin: 0; text-align: center">
        <img src="./../assets/images/2.png" style="width: 90%">
      </p>
      <p style="margin: 0; text-align: center">
        <img src="./../assets/images/11.png" style="width: 90%">
      </p>
      <div class="result flex-vertical" style="margin-bottom: 2rem">
        <div class="result-top flex-left">
          <div class="flex-center flex-middle unit-1-3">
            <img src="./../assets/images/12.png" style="width: 1.2rem">
          </div>
          <div class="unit-2-3 flex-middle flex-vertical">
            <p class="font-1"><b>Average Maximum Heart Rate</b></p>
            <p class="font-1" style="font-size: .26rem; letter-spacing: .08rem"><b>平均最高心率值</b></p>
          </div>
        </div>
        <div class="result-bottom flex-verticle">
          <div class="flex-left" style="padding: .2rem">
            <div class="unit-1-3 flex-middle flex-center flex-vertical">
              <p class="font-3">
                <b>Age/年龄</b>
              </p>
              <p class="font-3" style="font-size: .5rem">
                <b>{{ age }}</b>
              </p>
            </div>
            <div class="unit-2-3 flex-vertical flex-middle">
              <p class="font-2" style="white-space: nowrap"><b>{{ average }} beats / minute</b></p>
              <p class="font-2" style="font-size: .45rem; letter-spacing: .04rem; white-space: nowrap"><b>{{ average }} 跳 / 分钟</b></p>
            </div>
          </div>
          <!-- <div class="unit-2-3" style="padding-right: .3rem">
            <p class="font-4">
              Target HR Zone
            </p>
            <p class="font-4" style="letter-spacing: .12rem">
              目标心率区
            </p>
            <p class="font-5" style="margin-top: .2rem">
              {{ zone }} beats/minute
            </p>
            <p class="font-5" style="font-size: .28rem; letter-spacing: .04rem">
              {{ zone }}跳/分钟
            </p>
          </div> -->
          <div class="flex-left interval flex-middle" style="background-color: #bfbfbf">
            <span class="unit" style="font-size: .3rem"><b>1区 散步</b></span>
            <span class="unit">最大心率的50%~60%</span>
          </div>
          <div class="flex-left interval flex-middle" style="background-color: #2db2eb">
            <span class="unit" style="font-size: .3rem"><b>2区 热身运动</b></span>
            <span class="unit">最大心率的61%~70%</span>
          </div>
          <div class="flex-left interval flex-middle" style="background-color: #74aa51">
            <span class="unit" style="font-size: .3rem"><b>3区 舒适、轻松</b></span>
            <span class="unit">最大心率的71%~83%</span>
          </div>
          <div class="flex-left interval flex-middle" style="background-color: #fc6020">
            <span class="unit" style="font-size: .3rem"><b>4区 橙色效应</b></span>
            <span class="unit">最大心率的84%~91%</span>
          </div>
          <div class="flex-left interval flex-middle" style="background-color: #f81628">
            <span class="unit" style="font-size: .3rem"><b>5区 精疲力尽</b></span>
            <span class="unit">最大心率的92%~100%</span>
          </div>
        </div>
        <p class="dots flex-left">
          <span v-for="(i, index) in 30" :key="index" class="dot"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      age: this.$route.params.age,
      gender: this.$route.params.gender,
      zone: '',
      average: ''
    }
  },
  mounted () {
    if (this.gender === 0) {
      this.average = parseInt(214 - 0.8 * this.age)
    } else {
      this.average = parseInt(209 - 0.9 * this.age)
    }
    setTimeout(() => {
      window.location.href = 'https://h5.qiaomukeji.com/201708/OTFGym/indexc.html'
    }, 5 * 1000)
  }
}
</script>

<style scoped>
.second {
  background-image: url(./../assets/images/1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content {
  padding: .1rem .4rem;
  background-color: rgba(184, 76, 9, .2);
}
.result {
  position: relative;
  margin-top: 1rem;
  border-radius: .12rem;
  overflow: hidden;
}
.result-top {
  height: 2rem;
  padding: .2rem;
  background-color: rgb(255, 98, 0);
}
.result-bottom {
  /* padding: .2rem; */
  /* height: 2rem; */
  background-color: white;
}
.dots {
  position: absolute;
  top: 2rem;
  left: 0;
  margin-top: -.08rem;
}
.dot {
  display: block;
  margin-right: .15rem;
  width: .16rem;
  height: .16rem;
  border-radius: .08rem;
  background-color: white;
}
.font-1 {
  margin: 0;
  color: white;
  font-size: .22rem;
  font-style: italic;
  text-align: right;
}
.font-2 {
  margin: 0;
  color: rgb(255, 98, 0);;
  font-style: italic;
  font-size: .36rem;
  text-align: right;
}
.font-3 {
  margin: 0;
  color: rgb(255, 98, 0);
  font-style: italic;
  font-size: .32rem;
  text-align: center;
}
.font-4 {
  line-height: 1.2;
  font-weight: bold;
  margin: 0;
  color: rgb(255, 98, 0);
  font-size: .28rem;
  font-style: italic;
  text-align: right;
}
.font-5 {
  line-height: 1.2;
  font-weight: bold;
  margin: 0;
  color: rgb(255, 98, 0);
  font-style: italic;
  font-size: .24rem;
  text-align: right;
}
.interval {
  padding: .1rem .4rem;
  font-size: .24rem;
  color: white;
  white-space: nowrap;
}
</style>
