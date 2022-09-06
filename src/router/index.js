import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Navbar from "@/views/Navbar.vue"
import Regist from "@/views/Regist.vue"
import Leave from "@/views/Leave.vue"
import Leaveend from "@/views/Leaveend.vue"
import Attendancestatus from "@/views/Attendancestatus.vue"
import Attendancestatusnext from "@/views/Attendancestatusnext.vue"
import main from "@/views/main.vue"
import Checkout from "@/views/Checkout.vue"
import Checkinmonth from "@/views/Checkinmonth.vue"
import Checkinyear from "@/views/Checkinyear.vue"
import axios from 'axios';

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
        meta:{requiresAuth: true}
    },
    {
        path: "/login",
        name:"Login",
        component: Login,
        meta:{requiresAuth: false}
    },
    {
        path: "/regist",
        name:"Regist",
        component: Regist,
        meta:{requiresAuth: true}
    },
    {
        path: "/leave",
        name:"Leave",
        component: Leave,
        meta:{requiresAuth: true}
    },
    {
        path: "/leaveend",
        name:"Leaveend",
        component: Leaveend,
        meta:{requiresAuth: true}
    },
    {
        path: "/navbar",
        name:"Navbar",
        component: Navbar,
        meta:{requiresAuth: true}
    },
    {
        path: "/attendancestatus",
        name:"Attendancestatus",
        component: Attendancestatus,
        meta:{requiresAuth: true}
    },
    {
        path: "/attendancestatusnext",
        name:"Attendancestatusnext",
        component: Attendancestatusnext,
        meta:{requiresAuth: true}
    },
    {
        path: "/main",
        name:"main",
        component: main,
        meta:{requiresAuth: true}
    },
    {
        path: "/checkout",
        name:"Checkout",
        component: Checkout,
        meta:{requiresAuth: true}
    },
    {
        path: "/checkinmonth",
        name:"Checkinmonth",
        component: Checkinmonth,
        meta:{requiresAuth: true}
    },
    {
        path: "/checkinyear",
        name:"Checkinyear",
        component: Checkinyear,
        meta:{requiresAuth: true}
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

function isLoggedIn(){
   var obj = {
    // "Emp_ID":localStorage.getItem("Emp_ID"),
    "token" :localStorage.getItem("token")
   }
   axios.get('http://192.168.43.120:3000/checkauthen',obj).then(function(response){
          if(response.message=='ok'){
            return true;
          } else {
            return false;
          }
    
    })
}

router.beforeEach((to, from) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !isLoggedIn()) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: '/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }
  })
export default router;