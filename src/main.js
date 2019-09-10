import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FirebaseVue from './api/firebase'
import './api/axios'
import './plugins/vuesax.js'


Vue.config.productionTip = false

Vue.use(FirebaseVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
