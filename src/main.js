import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAg4e1D0Yv2TUemmI75zga5sZGu9z5szDc",
  authDomain: "vue-crm-mark-601b2.firebaseapp.com",
  projectId: "vue-crm-mark-601b2",
  storageBucket: "vue-crm-mark-601b2.appspot.com",
  messagingSenderId: "954690020036",
  appId: "1:954690020036:web:18c8dd92e371bee5a95f91",
  measurementId: "G-RM6JHCTDMK"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
