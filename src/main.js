import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import "babel-polyfill"
Vue.use(Vuex)
Vue.use(VueRouter)
const Idx = require('./components/idx/idx.vue')// 首页  
const Verify = require('./components/verify/verify.vue')// 验证  
const Activities = require('./components/activities/activities.vue')// 活动页面
const router = new VueRouter({
  routes:[
    {
      path:'/idx',
      component:Idx.default,
    },
    {
      path:'/verify',
      component:Verify.default,
    },
    {
      path:'/activities',
      component:Activities.default,
    },
  ]
})
const store = new Vuex.Store({
  state:{

  },
  mutations:{
    
  },
  actions:{

  }
})
new Vue({
  el: '#app',
  router,
  store,
  components:{
    App
  }
})