import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Vue.use(require('@/plugins/jquery'))

/***********************style start*****************************/
import "../public/assets/scss/style.scss"; // 메인 style
/***********************style end*****************************/

/***********************js start*****************************/
//import "/assets/js/menu.js"; // 메뉴 관련 js
/***********************js end*****************************/

/***********************fontawesome 설정(icon) start*****************************/
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//사용법 : <font-awesome-icon :icon="['fas','heart']"/> //solid 아이콘 사용
/***********************fontawesome 설정(icon) end*****************************/

/***********************bootstrap 설정 start*****************************/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/***********************bootstrap 설정 end*****************************/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
