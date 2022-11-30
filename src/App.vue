<script>
import Navbar from './views/Navbar.vue';
import axios from 'axios';
export default {
  data(){
    return {
      staticPage:['/login_admin','/'],
      authenPath:[],
      passFunction:this.loginFunction
    }
  },
  components: {
    Navbar
  },
  methods:{
    async loginFunction(Emp_Mail,pwd,_path){
      console.log('loginFunction()')
      var obj = {
            "Emp_Mail" : Emp_Mail,
            "pwd" : pwd
        }
      // ถามหลังบ้านว่าใช้ path ไหนได้บ้าง
      let response =await axios.post('http://192.168.1.167:3000/qurry',obj)
       
      // ใส่ path ที่ใช้ได้ให้มันใน authenPath
      let i = 0
      let arr = []
      for(let item of response.data){
        let _item = {...item}
        arr[i]= _item.path
        i++
      }
      console.log(arr)
      this.authenPath = [...arr]
      this.$router.push({path:_path})
    }
  }
}
</script>

<template>
<!-- <div v-if="this.staticPage.includes(this.$route.path)">
  <router-view :loginFunction="loginFunction" :listauthenPath="authenPath"/>
</div>
<div v-else>
  <Navbar/>
  <router-view :loginFunction="loginFunction" :listauthenPath="authenPath"/>
</div> -->
<div>
  <Navbar/>
  <router-view :loginFunction="loginFunction" :listauthenPath="authenPath"/>
</div>
</template>

<style>
</style>
