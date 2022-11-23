import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import {fas  } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
// library.add(fas,fab,far)

createApp(App).use(router).mount('#app')
// .component('font-awesome-icon', FontAwesomeIcon)
