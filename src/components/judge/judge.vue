<template>
    <div class="box">
        <div class="pop">
            <img src="../../assets/small_05.jpg">
        </div>
        <div class="top">
            <h1>终极评委</h1>
        </div>
        <div class="content">
            <ul>
                <li v-for="item of list">
                    <!-- <img src="../../../assets/small_05.jpg" alt=""> -->
                     <img :src="item.img" alt="">
                    <div class="co_co">
                        <p>{{item.name}}</p>
                        <div class="line"></div>
                        <div class="con_p">
                            {{item.content}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="main">
            <ul>
                <li v-for="item of vList">
                    <!-- <img src="../../../assets/small_05.jpg" alt="">  -->
                     <img :src="item.img" alt="">
                    <div class="co_co">
                        <p>{{item.name}}</p>
                        <div class="line"></div>
                        <div class="con_p">
                            {{item.content}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
       <!-- <foot></foot>  -->
    </div>
</template>

<script>
// import foot from '../../common/foot.vue'
import img from '../../assets/zj_1.png'
import img1 from '../../assets/zj_2.png'
import img2 from '../../assets/zj_3.png'
import img3 from '../../assets/zj_4.png'
import img4 from '../../assets/zj_5.png'
import img5 from '../../assets/zj_6.png'
import '../../assets/rem.js'
export default {
    data(){
        return {
            list:[
                {
                    img:img,
                    name:'Karen Smith',
                    content:'西安OCAT美术馆馆长'
                },
                {
                    img:img1,
                    name:'邱志杰',
                    content:'中央美术学院教授、实验艺术学院院长、中国美院跨媒体艺术学院教授'
                },
                {
                    img:img2,
                    name:'李振华',
                    content:'实践主要围绕策展、艺术创作和项目管理'
                }
            ],
            vList:[
                {
                    img:img3,
                    name:'伍颖瑜',
                    content:'《亚太艺术》的编辑和出版人'
                },
                {
                    img:img4,
                    name:'Mariano Sard ó n',
                    content:'阿根廷特雷斯德费布雷罗国立大学教授、主席'
                },
                {
                    img:img5,
                    name:'Martin Honzik',
                    content:'奥地利电子艺术中心馆长'
                },
            ]
        }
    },
    components:{
        // foot
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        height: 32rem;
        background-color: #52caec;
        /* overflow: hidden; */
    }
    .pop{
        width: 100%;
        height: 9rem;
        position: relative;
        /* background: url(../../assets/small_05.jpg)no-repeat; */
    }
    .pop img{
        width: 100%;
        height: 100%;
    }
    .top{
        width: 100%;
        position: relative;
        margin: 0 auto;
        top: -3rem;
    }
    .top h1{
        color: #e4dcd3;
        text-align: center;
        letter-spacing: 14px;
    }
    .content,.main{
        width: 90%;
        position: relative;
        text-align: center;
        will-change: scroll-position;
        touch-action: pan-y;
        top: -2rem;
        height: 10rem;
        margin: 0 auto;
    }
    .main{
        top: -128px;    
    }
    .content ul{
        box-sizing: border-box;
        width: 100%;
        /* overflow: hidden; */
    }
    .content ul li{
        width: 33.33%;
        float: left;
        position: relative;
        top:1.89rem;
        overflow: hidden;
    }
     .main ul li{
        width: 33.33%;
        float: left;
        position: relative;
        top:1.89rem;
        overflow: hidden;
    }
    .content ul li img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .main ul li img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .line{
        width: 50%;
        height: 0.1rem;
        position: relative;
        border-top: 2px solid #e4dcd3;
       top:0.3rem;
    }
    .co_co{
        width: 80%;
        margin-left: 0.5rem;
        text-align: left;
        color: #e4dcd3;
        line-height: 0.9rem;
        
    }
    .co_co p{
        font-size: 0.6rem;
        top:0.3rem;
        position: relative;
        color: #e4dcd3;
    }
    .con_p{
        font-size: 0.4rem;
        top:0.3rem;
        position: relative;
    }
</style>
