import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {
    id: "UA-176694381-1",
    params: {
      send_page_view: false
    }
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
