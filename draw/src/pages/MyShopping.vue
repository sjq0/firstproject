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
                <div>全部药品</div>
                <div>
                    <!-- <div>
                        <input type="checkbox" :checked="ischecked">
                        <span>是否勾选</span>
                    </div> -->
                    <div style="width: 200%;">
                        <span>商品信息</span>
                    </div>
                    <div>
                        <span>单价(元)</span>
                    </div>
                    <div>
                        <span>数量</span>
                    </div>
                    <div>
                        <span>小计(元)</span>
                    </div>
                    <div>
                        <span>操作</span>
                    </div>
                </div>
                <div>
                    <div v-for="item in list" :key="item.id">
                        <!-- <div>
                            <input type="checkbox" v-model="item.status" @click="changestatus(item.shoppingid,item.status)">
                        </div> -->
                        <div style="display: flex; width: 200%;">
                            <img :src="require('./public/img/'+item.img)" alt="">
                            <span>{{ item.content }}</span>
                        </div>
                        <div>
                            <span>{{ item.price }}</span>
                        </div>
                        <div>
                            <el-input-number class="shu" v-model="item.num" @change="handleChange(item.num,item.shoppingid)" :min="1" label="描述文字"></el-input-number>
                        </div>
                        <div>
                            <span>{{ item.price*item.num }}</span>
                        </div>
                        <div>
                            <span @click="deleteshop(item.shoppingid)">删除</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        已选择<i>{{ allnumber }}</i>件商品
                    </div>
                    <div>
                        <span>总价：</span>
                        <span>￥{{ totalPrice }}</span>
                    </div>
                    <div>去结算</div>
                </div>
            </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
      name:'MyShopping',
      data() {
        return {
            sum:1,
            list:[],
            sta:1,
            ischecked:1,
            allnumber:0,
            // allprice:0,
            // totalCount : 0,
            totalPrice : 0

        };
      },
      methods: {
        handleChange(num,id) {
            console.log(num,id);
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/upnum',
                  params: {
                    id,
                    num
                }
            })
                .then((res) => {
                    // console.log(res.data);
                }).catch((err) => {
                    console.log(err.data);
                });
                axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/all',
            })
                .then((res) => {
                    // console.log(res.data);
                    this.list = res.data
                    console.log(this.list);
                    this.allnumber = this.list.reduce(function (total, currentValue) {
                        return total + currentValue.num;
                    }, 0);
                    for (var i = 0; i < this.list.length; i++) {
                        this.totalPrice += this.list[i].price * this.list[i].num;
                    }
                    return this.totalPrice;
                }).catch((err) => {
                    console.log(err.data);
                });
        },
        changestatus(id,status){
            // console.log(id,status);
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/upstatus',
                params:{
                    id,
                    status:!status
                }
            })
                .then((res) => {
                    console.log(res.data);
                    // this.sta = res.data[0].status
                    // console.log(this.sta);

                }).catch((err) => {
                    console.log(err.data);
                });
                axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/all',
            })
                .then((res) => {
                    // console.log(res.data);
                    this.list = res.data
                    console.log(this.list);
                    this.allnumber = this.list.reduce(function (total, currentValue) {
                        return total + currentValue.num;
                    }, 0);
                    for (var i = 0; i < this.list.length; i++) {
                        this.totalPrice += this.list[i].price * this.list[i].num;
                    }
                    return this.totalPrice;
                }).catch((err) => {
                    console.log(err.data);
                });
        },
        deleteshop(id){
            axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/deleteshop',
                params:{
                    id,
                }
            })
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err.data);
                });

                axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/all',
            })
                .then((res) => {
                    // console.log(res.data);
                    this.list = res.data
                    console.log(this.list);
                    this.allnumber = this.list.reduce(function (total, currentValue) {
                        return total + currentValue.num;
                    }, 0);
                    
                }).catch((err) => {
                    console.log(err.data);
                });
        },
        
      },
      computed: {
        // 总件数
        // totalCountq: function() {
        //     for (var i = 0; i < this.list.length; i++) {
        //         this.totalCount += this.list[i].num;
        //     }
        //     return this.totalCount;
        // },
        // 总价钱
        // totalPriceq: function() {
        //     for (var i = 0; i < this.list.length; i++) {
        //         this.totalPrice += this.list[i].price * this.list[i].num;
        //     }
        //     return this.totalPrice;
        // }
    },
      mounted() {
        axios({
                method: 'GET',
                url: 'http://127.0.0.1:3000/all',
            })
                .then((res) => {
                    // console.log(res.data);
                    this.list = res.data
                    console.log(this.list);
                    this.allnumber = this.list.reduce(function (total, currentValue) {
                        return total + currentValue.num;
                    }, 0);
                    for (var i = 0; i < this.list.length; i++) {
                        this.totalPrice += this.list[i].price * this.list[i].num;
                    }
                    return this.totalPrice;
                }).catch((err) => {
                    console.log(err.data);
                });
      },
      updated() {
        
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

            >div:nth-of-type(1){
                height: 60px;
                position: relative;
                line-height: 60px;
                border-bottom: 1px #e7e6e6 solid;
                color: #adadad;
                font-size: 30px;
            }

            >div:nth-of-type(2){
                display: flex;
                >div{
                    width: 100%;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    position: relative;
                    >input{
                        position: absolute;
                        top: 13.5px;
                        left: 15px;
                    }
                    >span{
                        font-size: 12px;
                        color: #595757;
                        font-weight: 700;
                    }
                }
            }

            >div:nth-of-type(3){
                >div{
                    display: flex;
                    >div{
                        width: 100%;
                        height: 150px;
                        text-align: center;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        >input{
                            position: absolute;
                            top: 68.5px;
                            left: 40px;
                        }
                        >span{
                            font-size: 12px;
                            color: #595757;
                            font-weight: 700;
                        }
                        >img{
                            width: 100px;
                            height: 100px;
                        }
                    }
                }
                
            }

            >div:nth-of-type(4){
                display: flex;
                border-top: 1px solid #e7e6e6;
                border-bottom: 1px solid #e7e6e6;
                justify-content: flex-end;
                align-items: center;
                
                >div:nth-child(1){
                    font-size: 12px;
                    font-weight: 700;
                    >i{
                        color: red;
                        font-style: normal;
                        margin: 0px 5px;
                    }
                }
                >div:nth-child(2){
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    >span:nth-child(1){
                        font-size: 12px;
                        display: block;
                        line-height: 24px;
                        margin-left: 40px;
                    }
                    >span:nth-child(2){
                        font-size: 16px;
                        color: red;
                        margin: 0px 40px;
                    }
                }
                >div:nth-child(3){
                    width: 135px;
                    height: 60px;
                    color: white;
                    background: red;
                    font-size: 24px;
                    line-height: 60px;
                    text-align: center;
                }
            }
          }
      }
  }

  /deep/ .el-input-number .el-input__inner{
    padding-left: 0px;
    padding-right: 0px;
  }
  .shu{
    width: 100px;
  }
  /deep/  .el-input-number__increase{
    width: 30px;
  }
  /deep/  .el-input-number__decrease{
    width: 30px;
  }
  </style>