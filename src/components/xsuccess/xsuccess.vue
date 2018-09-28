<template>
  <div class="xsuccess">
      <div class="box">
        <h3><span>投票成功</span></h3>
        <p>感谢您投出的宝贵的一票，<br>请继续支持您喜欢的策展人哦！<br>同时，您将获得抽奖机会一次！</p>
        <span class="prize">你已中奖</span>        
      </div>
      <div class="congratulation">
          <p>恭喜你获得<br>
              <span>现代汽车WRC&nbsp;礼品套装</span><br>
              <i>(钥匙链，定制车模和帽子三件套)</i>
          </p>
      </div>
      <div class="footer">
        <!-- <img src="" alt=""> -->
        <!-- <img src="" alt=""> -->
      </div>
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
.xsuccess{
  *{
    margin: 0;
    padding: 0;
  }
  width:100%;
  height:15rem;
  background-color: #52caec;
  .box{
    width: 90%;
    border:0.1rem solid #E4DCD3;
    height:7rem;
    margin:0 auto;
    margin-top: 1.5rem;
    h3{
      margin-top: 1rem;
      font-size: 0.7rem;
      height: 1.6rem;
      color: #e4dcd3;
      text-align:center;
    }
    p{
      font-size: 0.35rem;
      color: #e4dcd3;
      text-align:center;
      line-height:0.5rem;
      letter-spacing: 0.01rem;
    }
    .prize{
      width:80%;
      height:1.4rem;
      line-height:1.4rem;
      text-align:center;
      outline:none;
      font-size:0.42rem;
      font-weight:400;
      text-align:left;
      display:block;
      margin:0.5rem auto;
      background-color: #E4DCD3;
      color:#52caec;
      font-weight:bold;
      text-align:center;
      letter-spacing: 0.03rem;
    }
  }
  .congratulation{
    height:5rem;
    width: 90%;
    border:0.1rem solid #E4DCD3;
    margin:0 auto;
    margin-top: 1.5rem;
    p{
      font-size: 0.5rem;
      color: #e4dcd3;
      text-align:center;
      font-weight:bold;
      margin-top: 0.6rem;
      // line-height:0.5rem;
      letter-spacing: 0.01rem;
      span{
        // display:block;
      }
      i{
        font-size: 0.35rem;
      }
    }
  }
}
</style>