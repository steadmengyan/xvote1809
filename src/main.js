import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import "babel-polyfill"
Vue.use(Vuex)
Vue.use(VueRouter)
const Verify = require('./components/verify/verify.vue')// 验证
const router = new VueRouter({
  routes:[
    {
      path:'/verify',
      component:Verify.default,
      name:"验证"
    }
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