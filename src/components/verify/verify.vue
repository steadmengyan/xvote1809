<template>
  <div class="xverify">
      <!-- 投票验证 -->
      <span class="closepage">X</span>
      <div class="box">
        <div>
          <h3>投票验证</h3>
          <h2>媒体评审
              投票通道
          </h2>
          <input placeholder="请输入您的手机号获取邀请码">
          <input type="text">
          <input type="text" value="获取验证码">
        </div>
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
.xverify{
  width:100%;
  height:100%;
  background-color: #52caec;
  .closepage{
    width:1rem;
    height:1rem;
    float: right;
    border-radius:50%;
    border:0.01rem solid #E4DCD3;
    text-align:center;
    margin-top:-1.5rem;
  }
  .box{
    width: 90%;
    border:0.1rem solid #E4DCD3;
    height:60%;
    margin:0 auto;
    margin-top: 1.5rem;
    // 投票验证
    h3{
      width:100%;
      height:2.0rem;
      line-height:2.0rem;
      text-align:center;
      margin:0;
      font-weight:400;
      font-size:0.6rem;
      border-bottom:0.01rem solid #E4DCD3;
    }
    h2{
      // 八个大字
      width:3rem;
      height:2.4rem;
      margin: 0 auto;
      padding-top:1rem;
      text-align:center;
      font-size:0.75rem;
      font-weight:600;
      line-height:1.05rem;
    }
    input{
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
    }
    input:nth-child(3){
      border:none;
      border-top:0.01rem solid #E4DCD3;
      border-bottom:0.01rem solid #E4DCD3;
      background-color: #52caec;
      outline:none;
    }
    input:nth-child(4){
      border:0.01rem solid #E4DCD3;
      background-color: #52caec;
    }
    input:nth-child(5){
      background-color: #E4DCD3;
      color:#52caec;
      border:none;
      text-align:right;
      width:70%;
      padding-right:10%;
      letter-spacing: 0.05rem;
    }    
  }
}
</style>