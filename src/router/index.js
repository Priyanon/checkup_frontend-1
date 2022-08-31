import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/Login'

Vue.use(VueRouter)

const router = [
    {
        path: '/',
        name: 'login',
        component: Login
    }
]