<template>
    <div class="container-fluid top-second">
      <div class="row no-gutters content-first">
              <div>
                  您所在的位置
                  <span>
                      <a href="#">首页</a>
                      >
                      <a href="#">医院概况</a>
                      >医院沿革
                  </span>
              </div>
          </div>
          <div class="asd">
            <div class="total">
                医院沿革
                <span>
                    <a href="#">一九零四</a>
                    <a href="#">五十年代</a>
                    <a href="#">七十年代</a>
                    <a href="#">八十年代</a>
                    <a href="#">现代</a>
                </span>
            </div>
          </div>
        <div class="q">
            <div>
                <img src="./public/pic/yange1_1.png" alt="">
                <img src="./public/pic/yange1_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange2_1.png" alt="">
                <img src="./public/pic/yange2_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange3_1.png" alt="">
                <img src="./public/pic/yange3_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange4_1.png" alt="">
                <img src="./public/pic/yange4_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange5_1a.png" alt="">
                <img src="./public/pic/yange5_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange5_1b.png" alt="">
                <img src="./public/pic/yange5_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange5_1c.png" alt="">
                <img src="./public/pic/yange5_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange5_1d.png" alt="">
                <img src="./public/pic/yange5_2.png" alt="">
            </div>
            <div>
                <img src="./public/pic/yange5_1e.png" alt="">
                <img src="./public/pic/yange5_2.png" alt="">
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  
  export default {
      name:'NoticeList2',
      data() {
          return {
              nottwodata: [],
          };
      },
      mounted() {
          axios.get('http://127.0.0.1:3000/getNotTwoData').then(res=>{
              this.nottwodata = res.data;
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
  .top-second{
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
        .asd{
                width: 1200px;
                margin: 0 auto;
                .total{
                font-size: 18px;
                color: #333;
                line-height: 50px;
                >span{
                    float: right;
                    font-size: 14px;
                    >a{
                        background: url(../pages/public/img/ico_004.png) left center no-repeat;
                        padding-left: 18px;
                        margin-left: 17px;
                        list-style: none;
                        text-decoration: none;
                        font-size: 14px;
                        color: #505050;
                    }
                }
            }
        }

    .q{
        width: 100%;
        height: auto;
        margin: 0 auto;
        >div:nth-child(1){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-1.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(2){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-2.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(3){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-3.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(4){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-4.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(5){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-5.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(6){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-5a.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(7){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-5b.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(8){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-5c.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
        >div:nth-child(9){
            position: relative;
            width: 100%;
            height: 745px;
            background: url(./public/pic/yange-5d.jpg) center center fixed no-repeat;
            background-size: cover;
            >img:nth-child(1){
                width: 250px;
                height: 225px;
                position: absolute;
                top: 388px;
                left: 50%;
                margin-left: -125px;
            }
            >img:nth-child(2){
                width: 530px;
                height: 40px;
                position: absolute;
                bottom: 5.7%;
                left: 4.5%;
            }
        }
    }
      
  }
  </style>