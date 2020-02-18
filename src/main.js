import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import CurrencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter);
Vue.filter('currency', CurrencyFilter);
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyAPw6OXND8Dfm9jWTgRdZ6XyxtFezvSAVE",
  authDomain: "vue-crm-5dc21.firebaseapp.com",
  databaseURL: "https://vue-crm-5dc21.firebaseio.com",
  projectId: "vue-crm-5dc21",
  storageBucket: "vue-crm-5dc21.appspot.com",
  messagingSenderId: "131578761170",
  appId: "1:131578761170:web:0936b6f4d993a55478820b",
  measurementId: "G-2Q4CCYY4XW"
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


