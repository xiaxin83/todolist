import Vue from "vue";
import App from "./App.vue";
import normlize from 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import element from './element-ui/index'
Vue.config.productionTip = false;

Vue.use(element,normlize)
new Vue({
  render: (h) => h(App),
}).$mount("#app");
