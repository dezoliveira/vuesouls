import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
/* import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' */
//Add all icons to the library so you can use it in your page
library.add(faPhone)

createApp(App)
  .component("font-awesome", FontAwesomeIcon).mount("#app");
