<template>
<div class="allbox">
  <div class="topbutton">
    <button v-for="item of webpage" @click="gotopage(item.path)">{{item.title}}</button>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
     webpage:[
        {
          path:'/xverify',
          title:"验证"
        },{
          path:'/xcurator',
          title:"策展人"
        },{
          path:'/xsuccess',
          title:"验证成功"
        },{
          path:'/idx',
          title:"首页"
        },{
          path:'/activities',
          title:"活动"
        },
        {
          path:'/judge',
          title:"终极评委 "
        },
        {
          path:'/explain',
          title:"投票说明 "
        }
      ]
    }
  },
  methods:{
    gotopage(str){
      this.$router.push(str);
    }
  }
}
</script>
<style lang="scss">
.allbox{
  width:100%;
  height:100%;
  background-color: #52caec;
}
.topbutton{
  width:100%;
  height:1rem;
  button{
    float: left;
    width:2rem;
  }
}
</style>