import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Login_admin from "@/views/Login_admin.vue"
import Login_employee from "@/views/Login_employee.vue"
import Login_executves from "@/views/Login_executves.vue"
import Navbar from "@/views/Navbar.vue"
import Regist from "@/views/Regist.vue"
import Leave from "@/views/Leave.vue"
import Status from "@/views/Status.vue"
import Alert from "@/views/Alert.vue"
import Main_admin from "@/views/Main_admin.vue"
import Checkout from "@/views/Checkout.vue"
import Checkin from "@/views/Checkin.vue"
import Checkinyear from "@/views/Checkinyear.vue"
import Calendar from "@/views/Calendar.vue"
import Edituser from "@/views/Edituser.vue"
import Test from "@/views/Test.vue"
import EdituserNext from "@/views/EdituserNext.vue"
import Forgotpassword from "@/views/Forgotpassword.vue"
import Main_executives from "@/views/Main_executives.vue"
import Main_employee from "@/views/Main_employee.vue"
import Upscan from "@/views/Upscan.vue"
import User from "@/views/User.vue"
import Setting from "@/views/Setting.vue"

import axios from 'axios';

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
        // meta:{requiresAuth: false}
    },
    {
        path: "/login_admin",
        name:"Login_admin",
        component: Login_admin,
        // meta:{requiresAuth: false}
    },
    {
        path: "/regist",
        name:"Regist",
        component: Regist,
        // meta:{requiresAuth: false}
    },
    {
        path: "/leave",
        name:"Leave",
        component: Leave,
        // meta:{requiresAuth: false}
    },
    {
        path: "/login_executves",
        name:"Login_executves",
        component: Login_executves,
        // meta:{requiresAuth: false}
    },
    {
        path: "/navbar",
        name:"Navbar",
        component: Navbar,
        // meta:{requiresAuth: false}
    },
    {
        path: "/status",
        name:"Status",
        component: Status,
        // meta:{requiresAuth: false}
    },
    {
        path: "/alert",
        name:"Alert",
        component: Alert,
        // meta:{requiresAuth: false}
    },
    {
        path: "/main_admin",
        name:"Main_admin",
        component: Main_admin,
        // meta:{requiresAuth: false}
    },
    {
        path: "/checkout",
        name:"Checkout",
        component: Checkout,
        // meta:{requiresAuth: false}
    },
    {
        path: "/checkin",
        name:"Checkin",
        component: Checkin,
        // meta:{requiresAuth: false}
    },
    {
        path: "/checkinyear",
        name:"Checkinyear",
        component: Checkinyear,
        meta:{requiresAuth: false}
    },
    {
        path: "/calendar",
        name:"Calendar",
        component: Calendar,
        // meta:{requiresAuth: false}
    },
    {
        path: "/edituser",
        name:"Edituser",
        component: Edituser,
        // meta:{requiresAuth: false}
    },
    {
        path: "/test",
        name:"Test",
        component: Test,
        // meta:{requiresAuth: false}
    },
    {
        path: "/main_employee",
        name:"Main_employee",
        component: Main_employee,
        // meta:{requiresAuth: false}
    },
    {
        path: "/login_employee",
        name:"Login_employee",
        component: Login_employee,
        // meta:{requiresAuth: false}
    },
    {
        path: "/main_executives",
        name:"Main_executives",
        component: Main_executives,
        // meta:{requiresAuth: false}
    },
    {
        path: "/forgotpassword",
        name:"Forgotpassword",
        component: Forgotpassword,
        // meta:{requiresAuth: false}
    },
    {
        path: "/edituserNext/:id?",
        name:"EdituserNext",
        component: EdituserNext,
        // params:true
        // meta:{requiresAuth: false}
    },
    {
        path: "/upscan",
        name:"Upscan",
        component: Upscan,
        // meta:{requiresAuth: false}
    },
    {
        path: "/user",
        name:"User",
        component: User,
        // meta:{requiresAuth: false}
    },
    {
        path: "/setting",
        name:"Setting",
        component: Setting,
        // meta:{requiresAuth: false}
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from,next) => {
//     // alert(to.path)
//     // {
//     //     isLogin:true
//     // }
//     if(to.meta.requiresAuth){
//         var obj = {
//             "token" :localStorage.getItem("token"),
//             "path" : to.path
//         }
//         axios.post('http://10.99.178.208:3000/checkauthen',obj)
//         .then(function(response){
//           console.log('response',response)
//           if(response.data.isLogin == true ){
//             // alert('kooooooook')
//             next()
//           } else {
//             // alert('uuuuuuuuuu')
//             next()
//           }
//         }).catch(error => {
//             // do something with error
//             // next({path:"/login"})
//         })
//     }else{
//         // alert('hooooooo')
//         next();
//     }
    
   
// })

export default router;








// function isLoggedIn(){
//    var obj = {
//     "Emp_ID":localStorage.getItem("Emp_ID"),
//     "token" :localStorage.getItem("token")
//    }
//    axios.get('http://192.168.43.120:3000/checkauthen',obj).then(function(response){
//           if(response.message=='ok'){
//             return true;
//           } else {
//             return false;
//           }
    
//     })
// }

// function checkAuthen(path){
//     // alert(localStorage.getItem("token"))
//     var obj = {
//         "token" :localStorage.getItem("token"),
//         "path" : path
//     }
//     axios.post('http://10.99.178.208:3000/checkauthen',obj)
//     .then(function(response){
//       console.log('response',response)
//       if(response.data.isLogin == true){
//         return true
//       } else {
//         return false
//       }
//     })
// }