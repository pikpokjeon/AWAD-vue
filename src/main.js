import Vue from 'vue'
import {store} from './store'
import {router} from './routes'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { mdiAccount } from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  mdiAccount,
  render: h => h(App)
}).$mount('#app')
