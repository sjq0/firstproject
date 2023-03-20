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
            <div class="spec-preview">
                <!-- 控制台会报错，因为数据还未返回来之前是个undefined -->
                <!-- <img :src="imgObj.imgUrl" /> -->
                <!-- <img src="@/pages/public/img/yao1.jpg" /> -->
                <img :src="require('./public/img/'+this.$route.query.img)" alt="">
                
                <!-- event这里的event就是存放事件的(鼠标移入事件) -->
                <div class="event" @mousemove="handler"></div>
                <div class="big">
                <!-- <img :src="imgObj.imgUrl" ref="big"/> -->
                <!-- <img src="@/pages/public/img/yao1.jpg" ref="big" /> -->
                <img :src="require('./public/img/'+this.$route.query.img)" ref="big" alt="">
                </div>
                <!-- 蒙版 遮罩层  -->
                <div class="mask" ref="mask"></div>
            </div>
            <div  v-for="item in list" :key="item.id">
                <h1>{{ item.content }}</h1>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.details }}</span>
                <div>
                    <div>国药价：</div>
                    <div>￥{{ item.price }}</div>
                </div>
                <div>
                    <span>数&nbsp;量：</span>
                    <el-input-number class="shu" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>
                    <el-button class="mai" @click="addsum();searchnum();">加入购买</el-button>
                    <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                        <span>添加成功</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button class="shoppingbtn" @click="dialogVisible = false;asd()">继续购物</el-button>
                            <el-button class="shoppingbtn" type="primary" @click="goshopping">去购物车结算</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:'MyDetail',
    data() {
      return {
        num: 1,
        dialogVisible: false,
        list:[],
        a:[],
      };
    },
    methods:{
      handler(event) {
        // this.$nextTick(()=>{

        // })
        // ref:在js精准获取元素
        let mask=this.$refs.mask
        let big=this.$refs.big

        let left=event.offsetX-mask.offsetWidth/2
        let top=event.offsetY-mask.offsetHeight/2
        // 修改left和top属性值
        if(left<=0) left=0
        if(left>=mask.offsetWidth) left=mask.offsetWidth
        if(top<=0) top=0 
        if(top>=mask.offsetHeight) top=mask.offsetHeight
        mask.style.left= left+'px'
        mask.style.top=top+'px'
        big.style.left= -2*left+'px'
        big.style.top= -2*top+'px'
      },
      handleChange(value) {
        console.log(value);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      goshopping(){
        this.$router.push({
            name:'shopping',
            query:{
                id:this.$route.query.id
            }
        })
      },
      searchnum(){

        // localStorage.getItem('user')

        axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/num',
                  params: {
                    id:this.$route.query.id
                }
            })
                .then((res) => {
                    // console.log(res.data);
                    if(res.data.length != 0){
                        // this.a = res.data
                        console.log(res.data);

                        axios({
                                method: 'GET',
                                url: 'http://127.0.0.1:3000/update',
                                  params: {
                                    id:res.data[0].shoppingid,
                                    num:res.data[0].num+this.num,
                                    status:true
                                }
                            })
                                .then((res) => {
                                    console.log(res.data);
                                }).catch((err) => {
                                    console.log(err.data);
                                });


                    }else{
                        axios({
                            method: 'GET',
                            url: 'http://127.0.0.1:3000/insertsum',
                            params: {
                                id:this.$route.query.id,
                                sum:this.num,
                                status:true
                            }
                        })
                            .then((res) => {
                                console.log(res.data);
                            }).catch((err) => {
                                console.log(err.data);
                            });
                    }
                }).catch((err) => {
                    console.log(err.data);
                });
      },
      addsum(){
        this.dialogVisible = true
        
      },
      asd(){
        this.$router.push('/home/drugstore')
      }
    },
    mounted() {
        // console.log(this.$route.query.id);
        axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/detail',
                  params: {
                    id:this.$route.query.id
                }
            })
                .then((res) => {
                    // console.log(res.data);
                    this.list = res.data
                }).catch((err) => {
                    console.log(err.data);
                });

        // console.log(localStorage.getItem('user'))
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

        >div:nth-child(2){
            position: relative;
            width: 936px;
            height: auto;
            float: right;
            display: block;
            color: #666;
            font-size: 12px;
            display: flex;
            padding-top: 25px;
            .spec-preview {
                position: relative;
                width: 298px;
                height: 221.6px;
                border: 1px solid #ccc;

                img {
                    width: 100%;
                    height: 100%;
                }

                .event {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 998;
                }

                .mask {
                    width: 50%;
                    height: 50%;
                    background-color: rgba(0, 0, 0, 0.3);
                    position: absolute;
                    left: 0;
                    top: 0;
                    display: none;
                }

                .big {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: -1px;
                    left: 100%;
                    border: 1px solid #aaa;
                    overflow: hidden;
                    z-index: 998;
                    display: none;
                    background: white;

                img {
                    width: 200%;
                    max-width: 200%;
                    height: 200%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                }

                .event:hover~.mask,
                .event:hover~.big {
                    display: block;
                }
            }

            >div:nth-child(2){
                padding-left: 10px;
                width: 100%;
                >h1{
                    font-size: 18px;
                    color: #595757;
                    font-weight: 700;
                }
                >span{
                    color: #fa462d;
                    font-size: 14px;
                }
                >div:nth-of-type(1){
                    margin: 20px 0;
                    padding: 15px 0px 15px 15px;
                    background: #f7f8f8;
                    display: flex;
                    align-content: center;

                    >div:nth-child(1){
                        font-size: 14px;
                        color: #000000;
                        line-height: 30px;
                    }
                    >div:nth-child(2){
                        display: inline-block;
                        font-size: 28px;
                        line-height: 1;
                        color: #fa462d;
                    }
                }
                >div:nth-of-type(2){
                    >span{
                        display: inline-block;
                        height: 48px;
                        line-height: 48px;
                        font-size: 14px;
                        font-family: inherit;
                        width: 75px;
                        // text-align: right;
                        padding-left: 25px;
                        color: #000000;
                    }
                    .shu{
                        width: 120px;
                    }
                    .mai{
                        width: 120px;
                        height: 40px;
                        background: red;
                        color: white;
                        margin-left: 15px;
                    }
                }
            }
        }
        
    }
}
.shoppingbtn{
    background: red;
    color: white;
    border: 0;
    &:hover{
        background: red;
        color: white;
    }
}
</style>