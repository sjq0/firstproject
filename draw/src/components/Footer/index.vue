<template>
  <div class="row no-gutters footer">
      <div>
        <div>
          <dl>
            <dt>
              <img src="./public/img/ico_006.jpg" alt="" width="36" height="34" style="display: inline;">
              <span>门诊服务</span>
              <span>outpatient services</span>
            </dt>
            <dd>
              <a href="#" title="预约流程" target="_blank">预约流程</a>
            </dd>
            <dd>
              <a href="#" title="门诊须知" target="_blank">门诊须知</a>
            </dd>
            <dd>
              <a href="#" title="院内导航" target="_blank">院内导航</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./public/img/ico_008.jpg" alt="" width="36" height="34" style="display: inline;">
              <span>住院服务</span>
              <span>hospitalized services</span>
            </dt>
            <dd>
              <a href="#" title="住院须知" target="_blank">住院须知</a>
            </dd>
            <dd>
              <a href="#" title="检查须知" target="_blank">检查须知</a>
            </dd>
            <dd>
              <a href="#" title="住院清单" target="_blank">住院清单</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="./public/img/ico_009.jpg" alt="" width="36" height="34" style="display: inline;">
              <span>体检服务</span>
              <span>examination services</span>
            </dt>
            <dd>
              <a href="#" title="体检须知" target="_blank">体检须知</a>
            </dd>
            <dd>
              <a href="#" title="体检套餐查询" target="_blank">体检套餐查询</a>
            </dd>
            <dd>
              <a href="#" title="体检报告查询" target="_blank">体检报告查询</a>
            </dd>
          </dl>
          <div>
            <img src="./public/img/tempQR.jpg" alt="" width="85" height="85" style="display: block;">
            <span>扫描关注官方微信号</span>
            <a href="#">更多二维码</a>
          </div>
          <div>
            <div>
              <img src="./public/img/ico_010.jpg" alt="">
              <span>省医院报</span>
              <span>内部资料 仅供阅读</span>
            </div>
            <div>
              <select name="" id="">
                <option value="0">年份</option>
                <option value="2022">2022年</option>
                <option value="2021">2021年</option>
                <option value="2020">2020年</option>
                <option value="2019">2019年</option>
              </select>
              <select name="" id="">
                <option value="0">期数</option>
                <option value="3">第一期</option>
                <option value="2">第二期</option>
                <option value="1">第三期</option>
              </select>
            </div>
            <input type="button" value="阅览">
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <a href="#" title="新浪官方微博">新浪官方微博</a>
          <a href="#" title="腾讯官方微博">腾讯官方微博</a>
        </div>
      </div>
      <div>
        <div>
          主办单位：医院标题&nbsp;&nbsp;综合服务电话：120&nbsp;&nbsp;急救中心电话：120&nbsp;&nbsp;传真：120 &nbsp;&nbsp;地 址：地址地址地址&nbsp;
          <br>
          版权所有：医院标题
        </div>
        <ul>
          <li>
            <a href="#" target="_blank">关于我们</a>
          </li>
          <li>
            <a href="#" target="_blank">法律声明</a>
          </li>
          <li>
            <a href="#" target="_blank">网站地图</a>
          </li>
          <li>
            <a href="#" target="_blank">联系我们</a>
          </li>
          <li>
            <a href="#" target="_blank">院长(信访)信箱</a>
          </li>
        </ul>
        <p></p>
      </div>
    </div>
</template>

<script>
export default {
  name:'MyIndex'
}
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;

    >.col,
    >[class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
}

.container-fluid {
    padding-right: 0px;
    padding-left: 0px;
}

dl,
dd,
dt,
li,
span {
    margin: 0;
}
.footer {
        width: 100%;
        height: 538px;

        >div:nth-of-type(1) {
            width: 100%;
            height: 286px;
            background: #f1f1f1;
            padding: 60px 0px;

            >div {
                width: 1200px;
                margin: 0 auto;
                position: relative;

                >dl {
                    position: relative;
                    width: 188px;
                    height: 141px;
                    margin-right: 50px;
                    padding-top: 22px;
                    float: left;
                    font-size: 12px;

                    >dt {
                        padding-bottom: 12px;

                        >span:nth-of-type(1) {
                            font-size: 16px;
                            color: #333;
                            display: block;
                            position: absolute;
                            top: 18px;
                            left: 46px;
                            font-style: normal;
                            font-weight: 500;
                        }

                        >span:nth-of-type(2) {
                            text-transform: capitalize;
                            color: #6bcbca;
                            font-size: 13px;
                            display: block;
                            position: absolute;
                            left: 46px;
                            top: 44px;
                        }
                    }

                    >dd {
                        height: 24px;
                        line-height: 24px;

                        a {
                            color: #696969;
                            font-size: 14px;
                            text-indent: 46px;
                            display: block;
                            text-decoration: none;
                            background: url(./public/img/ico_007.jpg) 26px center no-repeat;
                            transition: all .28s linear;
                        }

                        >a:hover {
                            color: #ff7544;
                        }
                    }
                }

                >div:nth-of-type(1) {
                    width: 128px;
                    height: 163px;
                    position: relative;
                    float: left;

                    >img {
                        margin: 0 auto;
                    }

                    >span {
                        display: block;
                        color: #ff7544;
                        font-size: 14px;
                        text-align: center;
                        padding: 16px 0px;
                    }

                    >a {
                        border-radius: 4px;
                        color: #FFF;
                        width: 94px;
                        height: 29px;
                        margin-top: 3px;
                        background: #cacaca;
                        display: block;
                        line-height: 29px;
                        text-align: center;
                        margin: 0px auto;
                        font-size: 12px;
                        text-decoration: none;
                        transition: all .28s linear;
                    }

                    >a:hover {
                        background: #ff7544;
                    }
                }

                >div:nth-of-type(2) {
                    width: 289px;
                    height: 163px;
                    border-left: 1px solid #e5e5e5;
                    float: right;
                    font-size: 12px;

                    >div:nth-child(1) {
                        float: right;
                        margin-left: 60px;
                        width: 203px;
                        position: relative;
                        margin-top: 15px;

                        img {
                            outline: 0;
                            outline-width: 0px;
                        }

                        >span:nth-of-type(1) {
                            font-size: 14px;
                            display: block;
                            color: #766857;
                            position: absolute;
                            left: 42px;
                            top: 2px;
                            font-style: normal;
                            font-weight: 500;
                        }

                        >span:nth-of-type(2) {
                            font-size: 12px;
                            display: block;
                            position: absolute;
                            left: 42px;
                            top: 22px;
                        }
                    }

                    >div:nth-child(2) {
                        margin-left: 60px;
                        margin-top: 16px;
                        float: right;

                        >select:nth-child(1) {
                            float: left;
                            width: 99px;
                            height: 32px;
                            border: 1px solid #ddd;
                            color: #766857;
                            padding: 6px 3px;
                            border-radius: 4px;

                            >option {
                                font-size: 12px;
                            }
                        }

                        >select:nth-child(2) {
                            float: left;
                            width: 99px;
                            height: 32px;
                            margin-left: 5px;
                            border: 1px solid #ddd;
                            color: #766857;
                            padding: 6px 3px;
                            border-radius: 4px;

                            >option {
                                font-size: 12px;
                            }
                        }
                    }

                    >input {
                        float: right;
                        margin-right: 108px;
                        margin-top: 15px;
                        cursor: pointer;
                        width: 94px;
                        height: 32px;
                        background: #6bcbca;
                        border-radius: 4px;
                        border: none;
                        color: #FFF;
                        transition: all .28s linear;
                    }

                    >input:hover {
                        background: #ff7544;
                    }
                }
            }
        }

        >div:nth-of-type(2) {
            width: 100%;
            height: 38px;
        }

        >div:nth-of-type(3) {
            width: 100%;

            >div {
                width: 283px;
                height: 67px;
                margin: 0px auto;
                padding: 16px 0px 21px 0px;

                >a:nth-child(1) {
                    background: url(./public/img/ico_011.png) 7px center no-repeat;
                    background-color: #cacaca;
                    width: 130px;
                    height: 30px;
                    display: block;
                    float: left;
                    color: #FFF;
                    line-height: 32px;
                    border-radius: 4px;
                    text-indent: 41px;
                    margin-right: 10px;
                    text-decoration: none;
                    outline: 0;
                    outline-width: 0px;
                    font-size: 12px;
                    transition: all .28s linear;
                }

                >a:nth-child(1):hover {
                    background: url(./public/img/ico_011.png) 7px center no-repeat;
                    background: #ff7544;
                }

                >a:nth-child(2) {
                    background: url(./public/img/ico_012.png) 8px center no-repeat;
                    background-color: #a3c638;
                    width: 130px;
                    height: 30px;
                    display: block;
                    float: left;
                    color: #FFF;
                    line-height: 32px;
                    border-radius: 4px;
                    text-indent: 41px;
                    margin-right: 10px;
                    text-decoration: none;
                    outline: 0;
                    outline-width: 0px;
                    font-size: 12px;
                    transition: all .28s linear;
                }

                >a:nth-child(2):hover {
                    background: url(./public/img/ico_012.png) 8px center no-repeat;
                    background: #ff7544;
                }
            }



        }

        >div:nth-of-type(4) {
            width: 868px;
            margin: 0px auto;

            >div {
                text-align: center;
                line-height: 22px;
                color: #333;
                font-family: Arial, Tahoma, "Microsoft YaHei", "SimSun";
                font-size: 12px;
            }

            >ul {
                width: 338px;
                margin: 0px auto;
                padding-top: 16px;
                font-size: 12px;
                -webkit-text-size-adjust: none;
                color: #505050;
                font-family: Arial, Tahoma, "Microsoft YaHei", "SimSun";

                >li {
                    background: none;
                    float: left;
                    background: url(./public/img/ico_vline.jpg) left center no-repeat;
                    padding: 0px 6px;
                    list-style: none;
                    font-size: 12px;
                    -webkit-text-size-adjust: none;
                    color: #505050;
                    font-family: Arial, Tahoma, "Microsoft YaHei", "SimSun";

                    >a {
                        color: #757575;
                        font-size: 12px;
                        -webkit-text-size-adjust: none;
                        color: #505050;
                        font-family: Arial, Tahoma, "Microsoft YaHei", "SimSun";
                    }

                    >a:visited {
                        text-decoration: none;
                        outline: 0;
                        outline-width: 0px;
                    }
                }

                >li:first-child {
                    background-image: none;
                }
            }
        }
    }
</style>