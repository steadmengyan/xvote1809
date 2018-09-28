<template>
    <div class="body">
        
        <transition
        name="bounce"
        enter-active-class="bounceInLeft"
        leave-active-class="bounceOutRight"
        >
        <p v-if="show">hello</p>
        </transition>


        <h3>2018</h3>
        <p class="text">Hyundai Blue Prize助力中国青年策展人的多领域艺术实践平台</p>
        <p class="text2">入围作品线上投稿正式开启</p>
    </div>
</template>
<script>

    export default {
        data (){
            return {
                show:true
            }
        }
    }
</script>
<style scoped>
    .body{
        box-sizing: border-box;
        padding: 0 15%;
        width: 100%;
        /* background-color: red; */
        position: absolute;
        top: 50%;
        margin-top: -150px;
    }
    .body h3{   
        font-size: 0.55rem;
        color: #e4dcd3;
    }
    .body p.text{
        font-size: 0.45rem;
        letter-spacing:2.5px;
        padding-bottom: 0.4rem;
        color: #e4dcd3;
        border-bottom: 1px solid #e4dcd3;
    }
    .body p.text2{
        margin-top: 0.3rem;
        font-size: 0.4rem;
        letter-spacing:10px;
        padding-bottom: 0.4rem;
        color: #e4dcd3;
        text-align: center;
    }
</style>

