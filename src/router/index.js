import { createRouter, createWebHistory } from "vue-router"
// import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Navbar from "@/views/Navbar.vue"
import Regist from "@/views/Regist.vue"
import Leave from "@/views/Leave.vue"
import Leaveend from "@/views/Leaveend.vue"
import Attendancestatus from "@/views/Attendancestatus.vue"
import Attendancestatusnext from "@/views/Attendancestatusnext.vue"
import Mainadmin from "@/views/Mainadmin.vue"
import Checkout from "@/views/Checkout.vue"
import Checkin from "@/views/Checkin.vue"
import Checkinyear from "@/views/Checkinyear.vue"
import Calendar from "@/views/Checkinyear.vue"
import Edituser from "@/views/Edituser.vue"
import Test from "@/views/Test.vue"
import axios from 'axios';

const routes = [
    // {
    //     path: "/",
    //     name:"Home",
    //     component: Home,
    //     meta:{requiresAuth: true}
    // },
    {
        path: "/",
        name:"Login",
        component: Login,
        meta:{requiresAuth: false}
    },
    {
        path: "/regist",
        name:"Regist",
        component: Regist,
        meta:{requiresAuth: false}
    },
    {
        path: "/leave",
        name:"Leave",
        component: Leave,
        meta:{requiresAuth: false}
    },
    {
        path: "/leaveend",
        name:"Leaveend",
        component: Leaveend,
        meta:{requiresAuth: false}
    },
    {
        path: "/navbar",
        name:"Navbar",
        component: Navbar,
        meta:{requiresAuth: false}
    },
    {
        path: "/attendancestatus",
        name:"Attendancestatus",
        component: Attendancestatus,
        meta:{requiresAuth: false}
    },
    {
        path: "/attendancestatusnext",
        name:"Attendancestatusnext",
        component: Attendancestatusnext,
        meta:{requiresAuth: false}
    },
    {
        path: "/mainadmin",
        name:"Mainadmin",
        component: Mainadmin,
        meta:{requiresAuth: false}
    },
    {
        path: "/checkout",
        name:"Checkout",
        component: Checkout,
        meta:{requiresAuth: false}
    },
    {
        path: "/checkin",
        name:"Checkin",
        component: Checkin,
        meta:{requiresAuth: false}
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
        meta:{requiresAuth: false}
    },
    {
        path: "/edituser",
        name:"Edituser",
        component: Edituser,
        meta:{requiresAuth: false}
    },
    {
        path: "/test",
        name:"Test",
        component: Test,
        meta:{requiresAuth: false}
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// function isLoggedIn(){
//    var obj = {
//     // "Emp_ID":localStorage.getItem("Emp_ID"),
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

// router.beforeEach((to, from) => {
//     // instead of having to check every route record with
//     // to.matched.some(record => record.meta.requiresAuth)
//     if (to.meta.requiresAuth && !isLoggedIn()) {
//       // this route requires auth, check if logged in
//       // if not, redirect to login page.
//       return {
//         path: '/login',
//         // save the location we were at to come back later
//         query: { redirect: to.fullPath },
//       }
//     }
//   })
export default router;