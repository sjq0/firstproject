<template>
  <div>
    <div class="row no-gutters content-first">
        <div>
                您所在的位置
                <span>
                    <a href="#">首页</a>
                    >
                    <a href="#">云医院</a>
                </span>
        </div>
    </div>
    <div class="row no-gutters content-second">
            <div>
                <div>药房</div>
                <div>
                    <ul>
                        <li>
                            <a href="#" style="color: white;background-color: #ff7544;"><span>呼吸道疾病</span></a>
                        </li>
                        <li>
                            <a href="#"><span>风湿骨科</span></a>
                        </li>
                        <li>
                            <a href="#"><span>消化系统疾病</span></a>
                        </li>
                        <li>
                            <a href="#"><span>心脑血管</span></a>
                        </li>
                        <li>
                            <a href="#"><span>肝病科</span></a>
                        </li>
                        <li>
                            <a href="#"><span>五官科</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#">
                        <img src="./public/img/ico_001.gif" alt="">
                        <p>互联智慧分诊平台</p>
                    </a>

                    <a href="#">
                        <img src="./public/img/ico_002.gif" alt="">
                        <p>96195综合平台</p>
                    </a>

                    <a href="#">
                        <img src="./public/img/ico_003.gif" alt="">
                        <p>名医馆</p>
                    </a>

                    <a href="#">
                        <img src="./public/img/ico_004.gif" alt="">
                        <p>信息查询</p>
                    </a>
                </div>
            </div>
            <div>
                <div>药品</div>
                <span @click="goshopping">我的添加</span>
                <div>
                    <div v-for="item in lists" :key="item.id"
                        @click="sendid(item.id,item.img)"
                    >
                        <img :src="require('./public/img/'+item.img)" alt="">
                        <div>
                            <span>￥</span>
                            <i>{{ item.price }}</i>
                        </div>
                        <p>{{ item.content }}</p>
                        <!-- <el-button class="btn">加入购物车</el-button> -->
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:'MyDrugstore',
    data() {
        return {
            lists: [],
        };
    },
    methods: {
        sendid(id,img){
            this.$router.push({
                name:'detail',
                query:{
                    id,
                    img
                }
            })
        },
        goshopping(){
            this.$router.push({
                name:'shopping',
                
            })
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/medicine').then(res=>{
            // console.log(res.data);
            this.lists = res.data
        }).catch(err=>{
            console.log("获取数据失败" + err);
        })
    },
}
</script>

<style scoped lang="less">
div,ul{
    padding: 0;
}
.top-second {
    width: 100%;

    .content-first {
        >div {
            width: 1200px;
            margin: 0 auto;
            height: 74px;
            background: url(./public/img/bread_ico.png) left 4px center no-repeat;
            padding-left: 25px;
            line-height: 74px;
            color: #666;
            font-size: 12px;
            display: block;

            >span {
                margin-left: 2px;

                >a {
                    text-decoration: none;
                    color: #666;
                    font-size: 12px;
                }
            }
        }
    }

    .content-second {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        >div:nth-child(1) {
            display: block;
            width: 240px;
            height: auto;

            >div:nth-child(1) {
                background: #6bcbca url(./public/img/about_ico06.png) 13px center no-repeat;
                width: 100%;
                height: 62px;
                padding-left: 63px;
                font-size: 18px;
                color: #fff;
                line-height: 62px;
            }

            >div:nth-child(2) {
                background: #f3f3f3;
                margin-top: 8px;
                padding: 7px 0px;
                padding-bottom: 13px;

                >ul {
                    list-style: none;
                    color: #505050;
                    font-size: 12px;
                    margin-bottom: 0;

                    >li {
                        list-style: none;
                        height: 53px;
                        line-height: 53px;
                        font-size: 14px;

                        >a {
                            display: block;
                            height: 53px;
                            padding: 0px 26px;
                            position: relative;
                            transition: all .28s linear;
                            text-decoration: none;
                            color: #505050;

                            &:hover {
                                color: white;
                                background: #ff7544;
                            }

                            >span {
                                padding-left: 23px;
                                width: 165px;
                                background: url(./public/img/ico_004.png) left center no-repeat;
                            }
                        }
                    }

                }
            }

            >div:nth-child(3) {
                width: 240px;
                height: 240px;
                margin-top: 15px;
                font-size: 12px;
                display: flex;
                flex-wrap: wrap;
                position: relative;

                >a:nth-child(1) {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    width: 118px;
                    height: 118px;
                    background-color: #f1f1f1;
                    text-align: center;
                    position: relative;

                    >img {
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        margin-left: -26px;
                    }

                    >p {
                        position: absolute;
                        bottom: 17px;
                        margin: 0;
                        display: block;
                        width: 100%;
                        text-align: center;
                        left: 0px;
                    }

                }

                >a:nth-child(2) {
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    width: 118px;
                    height: 118px;
                    background-color: #f1f1f1;
                    text-align: center;

                    >img {
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        margin-left: -26px;
                    }

                    >p {
                        position: absolute;
                        bottom: 17px;
                        margin: 0;
                        display: block;
                        width: 100%;
                        text-align: center;
                        left: 0px;
                    }
                }

                >a:nth-child(3) {
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    width: 118px;
                    height: 118px;
                    background-color: #f1f1f1;
                    text-align: center;

                    >img {
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        margin-left: -26px;
                    }

                    >p {
                        position: absolute;
                        bottom: 17px;
                        margin: 0;
                        display: block;
                        width: 100%;
                        text-align: center;
                        left: 0px;
                    }
                }

                >a:nth-child(4) {
                    position: absolute;
                    right: 0px;
                    bottom: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    width: 118px;
                    height: 118px;
                    background-color: #f1f1f1;
                    text-align: center;

                    >img {
                        position: absolute;
                        top: 30px;
                        left: 50%;
                        margin-left: -26px;
                    }

                    >p {
                        position: absolute;
                        bottom: 17px;
                        margin: 0;
                        display: block;
                        width: 100%;
                        text-align: center;
                        left: 0px;
                    }
                }
            }
        }

        >div:nth-child(2) {
            position: relative;
            width: 936px;
            height: auto;
            float: right;
            display: block;
            color: #666;
            font-size: 12px;

            >div:nth-of-type(1) {
                height: 60px;
                position: relative;
                line-height: 60px;
                border-bottom: 1px #e7e6e6 solid;
                color: #adadad;
                font-size: 30px;
            }

            >span{
                position: absolute;
                top: 22px;
                right: 10px;
                font-size: 14px;
                cursor: pointer;
            }

            >div:nth-of-type(2){
                margin-top: 20px;
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                
                >div{
                    box-sizing: border-box;
                    margin: 4px;
                    padding: 3px;
                    transition: box-shadow .28s linear;
                    &:hover{
                        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                    }
                    >img{
                        width: 220px;
                        height: 220px;
                    }
                    >div{
                        margin: 10px 0px;
                        color: red;
                        font-size: 16px;
                        >i{
                            font-style: normal;
                            font-size: 20px;
                        }
                    }
                    >p{
                        height: 50px;
                        // margin-bottom: 10px;
                        width: 210px;
                        margin: 0px 5px 10px 5px;
                    }
                    .btn{
                        width: 80px;
                        height: 30px;
                        font-size: 12px;
                        padding: 0;
                        float: right;
                    }
                }
            }
            
        }
    }
}
</style>