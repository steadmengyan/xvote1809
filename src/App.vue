<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
     
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