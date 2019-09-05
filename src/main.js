import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import FirebaseVue from './api/firebase'


Vue.config.productionTip = false

Vue.use(FirebaseVue)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
