import Vue from 'vue'
import {store} from './store'
import {router} from './routes'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { mdiAccount,mdiFileEdit ,mdiStarBoxOutline ,mdiDeleteForever, mdiStarBox   } from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  mdiAccount,
  mdiStarBox ,
  mdiFileEdit,
  mdiStarBoxOutline ,
  mdiDeleteForever  ,
  render: h => h(App)
}).$mount('#app')
