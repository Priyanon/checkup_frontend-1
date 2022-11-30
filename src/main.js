import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'core-js/es6/promise';
// import 'core-js/es6/set';
// import 'core-js/es6/map';



createApp(App).use(router).mount('#app')
// .component('font-awesome-icon', FontAwesomeIcon)
