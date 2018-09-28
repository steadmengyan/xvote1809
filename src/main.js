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
const Xverify = require('./components/verify/verify.vue')// 投票验证
const Xcurator = require('./components/xcurator/xcurator.vue')// 策展人
const Xsuccess = require('./components/xsuccess/xsuccess.vue')// 验证成功
const Judge = require('./components/judge/judge.vue')// 终极评委
const Explain = require('./components/explain/explain.vue')// 投票说明
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
    {
      path:'/xverify',
      component:Xverify.default,
      name:"验证"
    },{
      path:'/xcurator',
      component:Xcurator.default,
      name:"策展人"
    },{
      path:'/xsuccess',
      component:Xsuccess.default,
      name:"验证成功"
    },
    {
      path:'/judge',
      component:Judge.default,
      name:"终极评委"
    },
    {
      path:'/explain',
      component:Explain.default,
      name:"投票说明"
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