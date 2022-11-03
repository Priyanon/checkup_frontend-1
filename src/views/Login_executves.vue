<script>
    import axios from 'axios';
    // import router from '../router'
    export default {
      data() {
        return {
          Login: {
            Emp_Mail: '',
            pwd: ''
          }
        }
      },
      methods: {
        // async addLogin() {
            // const response = await axios.put('http://localhost:3000/login', {
            //     email: this.Emp_Mail,
            //     password: this.pwd
            // })
            // console.log(response);
          async addLoginexecutives() {
            this.$router.push({path:'/main_executives'})
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
        <div id="Login_body">
            <main class="form-signin d-flex justify-content-center">
                <div>
                    <img src="/img/Logo.png" class="Logo">
                        <h4 class="h4 mb-3 fw-normal">Check Up</h4>
                        
                        
                    <div class="frame">   
                        <h5 class="executive">สำหรับผู้บริหาร</h5>
                    </div>
                        
                        <input  type="email" class="w-100 form-control mail" placeholder="อีเมล์" v-model="this.Login.Emp_Mail">
                    
                        <input  type="password" class="w-100 form-control password"  placeholder="รหัสผ่าน" v-model="this.Login.pwd">
    
                        <button class="w-100 btn btn-lg btn-signin" @click="addLoginexecutives">เข้าสู่ระบบ</button>
    
                        <button class="text-white forgot">ลืมรหัสผ่านใช่หรือไม่?</button>
                </div>
            </main>
        </div> 
    </template>
    
    
    
    <style>
    .frame{
        background-color:#A41BBA;
        height: 50px;
        border-radius: 8px;
        /* font-family: "kanit"; */
        
        
    }
    
    
    
    .executive{
        margin-left: 100px;
        color: white;
        padding: 10px;
    }
    
    .mail{
        /* font-family: "kanit"; */
        margin-top: 55px;
        width: 60px;
        height: 50px;
    }
    
    .password {
        margin-top: 15px !important;
 /* font-family: "kanit"; */
        margin-top: 20px !important;
        width: 60px;
        height: 50px;
    }
    
    .btn-signin {
        color: #4fc3f7!important;
        background-color: white !important;
        margin-top: 20px;
        border-radius: 100;
        /* font-family:kanit !important; */
    }
    
    .forgot {
        text-decoration: none;
        margin-top: 15px !important;
        border: none;
        /* font-family: "kanit"; */
        background-color: transparent;
        margin-top: 20px !important;
        margin-left: 100px;
    }
    
    form {
        text-align: center;
        margin-top: 50px;
    }
    
    #Login_body {
        justify-content: center;
        align-items: center;
        background-color: #4fc3f7 !important;
        color: white;
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
        height: 200px !important;
        justify-content: center;
        margin-top: 40px;
        margin-left: 100px;
        
    }
    
    .fw-normal{
        margin-left: 100px;
    }
    
    input {
        color: grey(255, 255, 255);
        border-radius: 10px !important;
        text-align: center;
        /* font-family: "kanit"!important; */
      
    }
    
    .forgot:hover {
        color: blue !important;
    }
    
    </style>