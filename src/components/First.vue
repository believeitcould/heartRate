<template>
  <div class="first unit">
    <div class="unit content">
      <p style="margin: 0; text-align: center">
        <img src="./../assets/images/2.png" style="width: 90%">
      </p>
      <p style="margin: 0; text-align: center">
        <img src="./../assets/images/3.png" style="width: 90%">
      </p>
      <!-- 性别 -->
      <div class="flex-left" style="height: 1rem; margin-top: .4rem">
        <div class="unit-1-3">
          <img src="./../assets/images/4.png" style="width: 80%">
        </div>
        <div class="unit-2-3" style="text-align: right; white-space: nowrap">
            <div v-if="gender === 0" class="flex-left">
              <span class="unit" style="margin-right: .3rem"><img src="./../assets/images/5-2.png"></span>
              <span class="unit"><img src="./../assets/images/6-1.png" @click="gender = 1"></span>
            </div>
            <div v-if="gender === 1" class="flex-left">
              <span class="unit" style="margin-right: .3rem"><img src="./../assets/images/5-1.png" @click="gender = 0"></span>
              <span class="unit"><img src="./../assets/images/6-2.png"></span>
              
            </div>
        </div>
      </div>
      <!-- 年龄 -->
      <div class="flex-left" style="height: 1.2rem; border-bottom: 0.02rem solid white">
        <span class="unit-1-3">
          <img src="./../assets/images/7.png" style="width: 80%">
        </span>
        <span class="unit-2-3">
          <input v-model="age" class="input-age unit" type="text">
        </span>
      </div>
      <p style="margin-top: .3rem;">
      <img src="./../assets/images/8.png">
      </p>
      <p style="margin-top: 0; line-height: 1">
        <img src="./../assets/images/9.png" style="width: 50%">
      </p>
      <!-- submit -->
      <div @click="submit" class="text-center">
        <img src="./../assets/images/10.png" style="width: 70%">
      </div>
    </div>
    <img src="./../assets/images/13.png" style="position: absolute; top: 1.6rem">
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      gender: 0,
      age: ''
    }
  },
  methods: {
    submit () {
      if (isNaN(this.age) || this.age === '') {
        alert('请输入年龄')
      } else {
        this.$router.push({name: 'Second', params: {age: this.age, gender: this.gender}})
      }
    }
  }
}
</script>

<style scoped>
.first {
  position: relative;
  background-image: url(./../assets/images/1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
.content {
  height: 100%;
  padding: .1rem .4rem;
  background-color: rgba(184, 76, 9, .2);
}
.input-age {
  padding-right: .3rem;
  background: none;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  font-size: .8rem;
  font-style: italic;
}
.select {
  display: inline-block;
  border: .1rem solid rgb(255, 87, 0);
}
</style>
