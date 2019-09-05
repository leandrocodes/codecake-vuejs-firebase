import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA851SWqucRdE3hWgsiBHrkNqPug_UQroM",
  authDomain: "codecake-t2.firebaseapp.com",
  databaseURL: "https://codecake-t2.firebaseio.com",
  projectId: "codecake-t2",
  storageBucket: "",
  messagingSenderId: "111437043255",
  appId: "1:111437043255:web:e9ac3e1ce881a8f71c51b2"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
