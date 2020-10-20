import Vue from 'vue'
import {store} from './store'
import {router} from './routes'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { mdiAccount,mdiFileEdit,mdiMinusCircleOutline  ,mdiStarBoxOutline,mdiMinusCircle ,mdiPlusCircleOutline ,mdiDeleteForever, mdiStarBox ,mdiCloseThick,mdiPlusCircle  } from '@mdi/js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  mdiAccount,
  mdiMinusCircle ,
  mdiStarBox ,
  mdiFileEdit,
  mdiStarBoxOutline ,
  mdiCloseThick,
  mdiDeleteForever  ,
  mdiPlusCircle,  mdiPlusCircleOutline,
  mdiMinusCircleOutline ,
  render: h => h(App)
}).$mount('#app')
