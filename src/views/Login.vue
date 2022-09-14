<script>
import axios from 'axios';
// import router from '../router'
export default {
  data() {
    return {
      Login: {
        Emp_Mail: '',
        pwd: '',
        Emp_ID:''
      }
    }
  },
  mounted() {
    document.body.classList.add('Login_body')
    },
  destroyed () {
    document.body.classList.remove('Login_body')
    },
  methods: {
    // async addLogin() {
        // const response = await axios.put('http://localhost:3000/login', {
        //     email: this.Emp_Mail,
        //     password: this.pwd
        // })
        // console.log(response);
      async addLogin() {
        this.$router.push({name:'Mainadmin'})
    //     await axios.put('http://192.168.1.37:3000/login', this.Employee).then(function (response) {
    //     if(response.data.message == "ok"){
    //         // localStorage.setItem('token', response.data.user_token);
    //         router.push('/main')
    //     } else {
    //         router.push('/login')
    //     }
    //   })
    },
    // เพิ่ม error
    test() {
      console.log(this.Employee)
      // @change="test()"
    }
  }
}

</script>


<template>
    <main class="form-signin d-flex justify-content-center">
        <form>
            <img src="/img/Logo.png" class="Logo">

            <!-- <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
            <h4 class="h4 mb-3 fw-normal">Check Up</h4>

            <input  type="email" 
                    class="form-control" 
                    placeholder="อีเมล์"
                    @change="test()">
                    <!-- v-model="this.Employee.Emp_Mail" -->

            <input  type="password" 
                    class="form-control password" 
                    style="margin-top: 15px;"
                    placeholder="รหัสผ่าน"
                    @change="test()">

            <button style="font-family:kanit;border-radius: 100;" 
                    class="w-100 btn btn-lg btn-signin"
                    @click="addLogin">เข้าสู่ระบบ
            </button>
            <br>
            <button href="" class="text-white forgot">ลืมรหัสผ่านใช่หรือไม่?</button>
        </form>
    </main>
</template>



<style>
/* @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap');
@import url('/css/signin.css'); */

form {
    text-align: center;
}

.Login_body {
    display: flex;
    justify-content: center;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #4fc3f7 !important;
    color: white;
    align-items: center;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(110, 241, 241, 0.1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.Logo {
    height: 155px;
}

input {
    color: rgb(255, 255, 255);
    border-radius: 10px !important;
    text-align: center;
    /* font-family: "kanit"!important; */

}

.btn-signin {
    color: #4fc3f7!important;
    background-color: white !important;
    margin-top: 25px;

}

.password {
    margin-top: 15px !important;
    font-family: "kanit";
}

.forgot {
    text-decoration: none;
    margin-top: 15px !important;
    border: none;

    background-color: transparent;
}

.forgot:hover {
    color: blue !important;
}
</style>`