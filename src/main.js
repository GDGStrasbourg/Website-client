// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueScheduler from 'v-calendar-scheduler'
import VueMoment from 'vue-moment'
import moment from 'moment'

import App from './App'
import Router from './router'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'v-calendar-scheduler/lib/main.css'

Vue.use(Vuetify)
Vue.use(VueScheduler)
Vue.use(VueMoment, {
  moment
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App }
})
