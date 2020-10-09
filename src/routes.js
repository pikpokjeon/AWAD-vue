import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/Index.vue'
;
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/main',
      component: Index,
      beforeEnter: ( to,from,next) => {
        next();
      }
    }, 
    
  ],
});
