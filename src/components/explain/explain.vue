<template>
    <div class="wrap">
        <div class="box">
         <span class="item" >投票说明</span>
        </div>
        <div class="main">
            <p>2018 Hyundai Blue Prize 诚挚的邀请您加入本届赛事的评委阵营，您的一票或许将决定最终的大赛结果。</p>
            <p>投票时间: 10月1日- 10月31日</p>
            <p>投票分大众投票和媒体投票。</p>
            <p>所有的线上网友均可为您喜欢的参展人投票，分值权重15%。</p>
            <p>受邀的专业媒体投票通道，分值权重85%.</p>
        </div>
        <footer>
            <p><img src="../../assets/f1.png" alt=""></p>
            <p><img src="../../assets/f2.png" alt=""></p>
        </footer>
    </div>
</template>

<script>
import foot from '../../common/foot.vue'
import img from '../../assets/small_05.jpg'
import '../../assets/rem.js'
export default {
     components:{
        foot
    }
}
</script>

<style scoped>
    .wrap{
        width: 100%;
        height: 80%;
        overflow: hidden;
        color: rgb(228, 220, 221);
        line-height: 1.2rem;
        font-size: 0.6rem;
    }
    .item{
        font-size: 1rem;
        margin-bottom: 0.7rem;
    }
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
        padding-bottom: .8rem;
    }
    .main{
        line-height: 2.3rem;
        margin: 0 1.8rem 0 1.8rem;
    }
    .main p{
        font-size: 33px;
    }
    .main p:nth-child(1){
        line-height: 1.1rem;
    }
     .main p:nth-child(4){
        line-height: 1.1rem;
        margin-bottom: 0.8rem;
    }
    .main p:nth-child(5){
        line-height: 1.1rem;
    }

    footer p{
        width: 16rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer p img{
        width: 12.3rem;
    }
    footer p:nth-child(1){
        margin-top: 1.8rem;
        margin-bottom: .4rem;
    }

</style>
