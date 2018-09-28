<template>
  <div id="app">
      <button v-for="item of webpage" @click="gotopage(item.path)">{{item.title}}</button>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      webpage:[
        {
          path:'/verify',
          title:"验证"
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

</style>