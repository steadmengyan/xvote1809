<template>
  <div class="xcurator">
      <h3 class="xcurator_top_h3">策展人</h3>
      <p>感谢您加入到大众评委的阵营中；大众评委的选票将占道权重的15%</p>
      <p>投票通道开启时间：10月1日-10月30日</p>
      <p>投票规则：每天可获得2次投票机会。</p>
      <ul>
          <li v-for="item of peoplelist">
              <span></span>
              <h3>{{item.title}}</h3>
              <p>{{item.name}}</p>
              <i>给她投票</i>
          </li>
      </ul>
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
      peoplelist:[
        {
          url:"",
          title:"麒麟：共生之域",
          name:"李贝壳+孙天艺"
        },{
          url:"",
          title:"启示,另类未来的召唤",
          name:"刘倩兮"
        },{
          url:"",
          title:"药理学.赛博格与非物质劳动",
          name:"姚梦溪"
        },{
          url:"",
          title:'"近未来"的回旋',
          name:"王慰慰"
        },{
          url:"",
          title:'未来演化',
          name:"魏颖"
        },{
          url:"",
          title:'撒谎的索菲亚和嘲讽的艾莉克莎',
          name:"龙星如"
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
.xcurator{
  width:100%;
  height: 100%;
  // background-color: #52caec;
  font-size:0.33rem;
  font-weight:bold;
  color:#E4DCD3;
  letter-spacing: 0.03rem;
  h3.xcurator_top_h3{
    height: 1.5rem;
    line-height:1.5rem;
    text-align:center;
    margin: 0;
  }
  p{
    margin: 0.3rem 0;
    font-weight:300;
    width:90%;
    padding:0 5% ;
  }
  ul{
    width:90%;
    list-style:none;
    height:12rem;
    padding: 0;
    margin: 0 auto;
    li{
      width:32%;
      height:5.8rem;
      float: left;
      margin-right: 0.03rem;
      position: relative;
      span{
        display:inline-block;
        width:100%;
        height:2.5rem;
        background-color: red;
      }
      h3{
        margin: 0;
        font-size:0.4rem;
        font-weight:400;
      }
      p{
        margin: 0;
        padding: 0;
      }
      i{
        position: absolute;
        width:98%;
        height:1rem;
        bottom:0;
        font-style:normal;
        text-align: center;
        line-height:1rem;
        border:1px solid #E4DCD3;
        color:#E4DCD3;
      }
    }
  }
}
</style>