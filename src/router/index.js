import { createRouter, createWebHistory } from "vue-router"
// import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Navbar from "@/views/Navbar.vue"
import Regist from "@/views/Regist.vue"
import Leave from "@/views/Leave.vue"
import Leaveend from "@/views/Leaveend.vue"
import Status from "@/views/Status.vue"
import Status_next from "@/views/Status_next.vue"
import Mainadmin from "@/views/Mainadmin.vue"
import Checkout from "@/views/Checkout.vue"
import Checkin from "@/views/Checkin.vue"
import Checkinyear from "@/views/Checkinyear.vue"
import Calendar from "@/views/Calendar.vue"
import Edituser from "@/views/Edituser.vue"
import Test from "@/views/Test.vue"
import Status_coo from "@/views/Status_coo.vue"
import Status_mkt from "@/views/Status_mkt.vue"
import Status_md from "@/views/Status_md.vue"
import Status_dev from "@/views/Status_dev.vue"
import Status_csr from "@/views/Status_csr.vue"
import Upscan from "@/views/Upscan.vue"
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
        path: "/status",
        name:"Status",
        component: Status,
        meta:{requiresAuth: false}
    },
    {
        path: "/status_next",
        name:"Status_next",
        component: Status_next,
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
    {
        path: "/status_csr",
        name:"Status_csr",
        component: Status_csr,
        meta:{requiresAuth: false}
    },
    {
        path: "/status_dev",
        name:"Status_dev",
        component: Status_dev,
        meta:{requiresAuth: false}
    },
    {
        path: "/status_md",
        name:"Status_md",
        component: Status_md,
        meta:{requiresAuth: false}
    },
    {
        path: "/status_mkt",
        name:"Status_mkt",
        component: Status_mkt,
        meta:{requiresAuth: false}
    },
    {
        path: "/status_coo",
        name:"Status_coo",
        component: Status_coo,
        meta:{requiresAuth: false}
    },
    {
        path: "/upscan",
        name:"Upscan",
        component: Upscan,
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