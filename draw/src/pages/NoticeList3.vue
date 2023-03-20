<template>
  <div class="container-fluid top-second">
    <div class="row no-gutters content-first">
            <div>
                您所在的位置
                <span>
                    <a href="#">首页</a>
                    >
                    <a href="#">健康管理</a>
                    >科普文章
                </span>
            </div>
        </div>
        <div class="row no-gutters content-second">
            <div>
                <div>健康管理</div>
                <div>
                    <ul>
                        <li>
                            <a href="#" style="color: white;background-color: #ff7544;"><span>科普文章</span></a>
                        </li>
                        <li>
                            <a href="#"><span>专题讲座</span></a>
                        </li>
                        <li>
                            <a href="#"><span>检查检验常识</span></a>
                        </li>
                        <li>
                            <a href="#"><span>急救常识</span></a>
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
                <div>科普文章</div>
                <div>
                    <a href="#">发布时间排序</a>
                    <a href="#">阅览次数排序</a>
                    <div>
                        <div>全部年份</div>
                        <ul style="display: none;">
                            <li><a href="#">2022</a></li>
                            <li><a href="#">2021</a></li>
                            <li><a href="#">2020</a></li>
                            <li><a href="#">2019</a></li>
                            <li><a href="#">2018</a></li>
                        </ul>
                    </div>
                    <span>
                        共发布文章
                        <em>2231</em>
                        篇
                    </span>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,index) of notthreedata" :key="index">
                            <div>
                                <a href="#">
                                    {{ item.title }}
                                </a>
                                <p>
                                    {{ item.content }}
                                </p>
                            </div>
                            <div>
                                <h3>发布时间</h3>
                                <h4>
                                    {{ item.publishdate }}
                                </h4>
                                <p>
                                    阅览次数
                                    <span>
                                        {{ item.visitnumber }}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <a href="#">进入</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#" style="margin-right: 5px;">&nbsp;</a>
                    <span style="margin-right: 5px;">1</span>
                    <a href="#" style="margin-right: 5px;">2</a>
                    <a href="#" style="margin-right: 5px;">3</a>
                    <a href="#" style="margin-right: 5px;">
                        <img src="./public/img/ico_042.png" alt="">
                    </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name:'NoticeList3',
    data() {
        return {
            notthreedata: [],
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/getNotThreeData').then(res=>{
            this.notthreedata = res.data;
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
            width: 936px;
            height: auto;
            float: right;
            display: block;
            color: #666;
            font-size: 12px;

            >div:nth-child(1) {
                height: 60px;
                position: relative;
                line-height: 60px;
                border-bottom: 1px #e7e6e6 solid;
                color: #adadad;
                font-size: 30px;
            }

            >div:nth-child(2) {
                height: 50px;
                line-height: 50px;
                border: 1px #e7e6e6 solid;
                color: #666;
                margin-top: 34px;
                position: relative;

                >a:nth-child(1) {
                    background: url(./public/img/ico_010.gif) right 25px center no-repeat;
                    color: #ff7544;
                    padding-left: 22px;
                    padding-right: 39px;
                    border-right: 1px #e7e6e6 solid;
                    display: inline-block;
                    height: 50px;
                    text-decoration: none;
                }

                >a:nth-child(2) {
                    height: 50px;
                    background: url(./public/img/ico_009.gif) right 25px center no-repeat;
                    padding-left: 22px;
                    padding-right: 39px;
                    border-right: 1px #e7e6e6 solid;
                    display: inline-block;
                    color: #666;
                    text-decoration: none;
                }

                >div {
                    position: relative;
                    float: right;
                    width: 126px;
                    margin-left: 20px;
                    padding: 0 20px;
                    border-left: 1px solid #e7e6e6;
                    line-height: 50px;
                    height: 50px;
                    color: #666;

                    >div {
                        background: url(./public/img/ico_005.jpg) 70px center no-repeat;
                        text-indent: 0px;
                        cursor: pointer;
                    }

                    >ul {
                        position: absolute;
                        padding: 10px 0px;
                        width: 125px;
                        height: auto;
                        top: 50px;
                        left: -1px;
                        border: 1px solid #e7e6e6;
                        display: none;
                        z-index: 100;
                        background: #FFF;

                        >li {
                            float: none;
                            height: 28px;
                            width: 125px;
                            background: none;
                            list-style: none;
                        }
                    }
                }

                >span {
                    position: absolute;
                    width: 156px;
                    height: 50px;
                    display: block;
                    top: 1px;
                    right: 132px;

                    >em {
                        color: #ff7544;
                        margin: 0 5px;
                        font-style: normal;
                        font-weight: 500;
                    }
                }
            }

            >div:nth-child(3) {

                >ul {
                    list-style: none;

                    >li {
                        min-height: 169px;
                        border-bottom: 1px #f5f5f5 solid;
                        padding: 30px 24px;
                        padding-right: 14px;
                        color: #666;
                        list-style: none;

                        &:hover {
                            box-shadow: 0px 5px 15px 5px rgba(128, 128, 128, 0.25);
                            position: relative;
                            transition: box-shadow .28s linear;
                        }

                        >div:nth-child(1) {
                            width: 59%;
                            float: left;
                            line-height: 24px;

                            >a {
                                font-size: 16px;
                                color: #bda179;
                                line-height: 36px;
                                text-decoration: none;
                                outline: 0;
                                outline-width: 0px;
                                transition: all .28s linear;
                                font-size: 16px;
                            }

                            >p {
                                line-height: 24px;
                                font-size: 12px;
                            }
                        }

                        >div:nth-child(2) {
                            width: 18%;
                            float: left;
                            margin-left: 10.5%;

                            >h3 {
                                font-size: 14px;
                                line-height: 30px;
                                font-weight: normal;
                            }

                            >h4 {
                                font-size: 12px;
                                color: #8c8c8c;
                                font-weight: normal;
                            }

                            >p {
                                line-height: 25px;
                                margin-top: 20px;

                                >span {
                                    width: 69px;
                                    height: 25px;
                                    background: url(./public/img/ydcs_ico.png) no-repeat;
                                    display: inline-block;
                                    line-height: 25px;
                                    text-align: center;
                                    margin-left: 5px;
                                }
                            }


                        }

                        >div:nth-child(3) {
                            color: #666;

                            >a {
                                width: 94px;
                                height: 32px;
                                background: #6bcbca;
                                float: right;
                                line-height: 32px;
                                text-align: center;
                                border-radius: 3px;
                                margin-right: 4px;
                                margin-top: 29px;
                                color: #fff;
                                text-decoration: none;
                                outline: 0;
                                outline-width: 0px;
                                transition: all .28s linear;
                            }
                        }

                    }
                }

                .content-sixth {
                    width: 100%;
                    height: 38px;
                    margin: 0 auto;
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
                                        font-size: 14px;
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
            }

            >div:nth-child(4) {
                font-size: 12px;
                margin: 40px 0px;

                >a {

                    border: 1px #d3d3d4 solid;
                    background: url(./public/img/page_bg.jpg) center center no-repeat;
                    padding: 8px 10px;
                    color: #505050;
                    text-decoration: none;
                    outline: 0;
                    outline-width: 0px;
                    transition: all .28s linear;
                }

                >a:nth-of-type(1) {
                    display: none;
                }

                >span {
                    background: none;
                    border: none;
                    cursor: default;
                    padding: 10px 13px;
                }

            }
        }
    }
}
</style>