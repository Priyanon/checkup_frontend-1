import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Navbar from "@/views/Navbar.vue"
import Regist from "@/views/Regist.vue"
import Leave from "@/views/Leave.vue"
import Leaveend from "@/views/Leaveend.vue"
import Attendancestatus from "@/views/Attendancestatus.vue"
import Attendancestatusnext from "@/views/Attendancestatusnext.vue"

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
    },
    {
        path: "/login",
        name:"Login",
        component: Login,
    },
    {
        path: "/regist",
        name:"Regist",
        component: Regist,
    },
    {
        path: "/leave",
        name:"Leave",
        component: Leave,
    },
    {
        path: "/leaveend",
        name:"Leaveend",
        component: Leaveend,
    },
    {
        path: "/navbar",
        name:"Navbar",
        component: Navbar,
    },
    {
        path: "/attendancestatus",
        name:"Attendancestatus",
        component: Attendancestatus,
    },
    {
        path: "/attendancestatusnext",
        name:"Attendancestatusnext",
        component: Attendancestatusnext,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;