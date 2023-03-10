<!-- PageHome.vue -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HellowYourWorld msg="Welcome to Your Vue.js App jinsu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HellowYourWorld from '@/components/HelloWorld.vue'


export default {
  name: 'PageHome', // 여기 작성한 내용을 보여주는 것 . 변수명 바꿔주면 그대로 가져오네
  components: {
    HellowYourWorld
  }
}
</script>