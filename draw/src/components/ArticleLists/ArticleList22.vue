<template>
  <div>
    <div class="d22">
        <div>医院宗旨</div>
        <div>
            <p>
                <span>医院宗旨</span>
            </p>
            <p>
                <span>人民医院服务人民</span>
            </p>
            <p>
                <span>医院愿景目标</span>
            </p>
            <p>
                <span>打造省内领军、国内一流、国际知名的国家区域医疗中心</span>
            </p>
            <p>
                <span>医院精神</span>
            </p>
            <p>
                <span>仁爱&nbsp;&nbsp;&nbsp;&nbsp;博学&nbsp;&nbsp;&nbsp;&nbsp;严谨&nbsp;&nbsp;&nbsp;&nbsp;卓越</span>
            </p>
            <p>
                <span>医院服务理念</span>
            </p>
            <p>
                <span>服务是立竿见影的，服务有做不尽的文章</span>
            </p>
            <p>
                <span>医院服务共识</span>
            </p>
            <p>
                <span>我是省医人，我愿为您服务</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'ArticleList2'
}
</script>

<style scoped lang="less">
div,ul{
    padding: 0;
}
.d22{
    width: 936px;
    height: auto;
    float: right;
    display: block;
    color: #adadad;
    >div:nth-child(2){
        padding: 30px 18px;
        >p{
            text-align: center;
            margin: 0;
        }
        >p:nth-of-type(odd){
            font-size: 30px; 
            color: #E53333;
        }
        >p:nth-of-type(even){
            font-size: 21px; 
            color: #666666;
            margin-bottom: 59px;
        }
        >p:first-child{
            margin-top: 26px;
        }
        >p:last-child{
            margin-bottom: 26px;
        }
    }
}
</style>