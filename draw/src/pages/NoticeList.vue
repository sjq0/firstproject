<template>
  <div class="container-fluid top-second">
    <div class="row no-gutters content-first">
            <div>
                您所在的位置
                <span>
                    <a href="#">首页</a>
                    >
                    <a href="#">科学研究</a>
                    >通知公告
                </span>
            </div>
        </div>
        <div class="row no-gutters content-second">
            <div>
                <div>科学研究</div>
                <div>
                    <ul>
                        <li>
                            <a href="#" style="color: white;background-color: #ff7544;"><span>通知公告</span></a>
                        </li>
                        <li>
                            <a href="#"><span>常用下载</span></a>
                        </li>
                        <li>
                            <a href="#"><span>学科建设</span></a>
                        </li>
                        <li>
                            <a href="#"><span>科技支撑</span></a>
                        </li>
                        <li>
                            <a href="#"><span>临床试验</span></a>
                        </li>
                        <li>
                            <a href="#"><span>学术交流</span></a>
                        </li>
                        <li>
                            <a href="#"><span>科研伦理</span></a>
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
                <div>通知公告</div>
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
                        <em>83</em>
                        篇
                    </span>
                </div>
                <div>
                    <ul>
                        <li v-for="(item,index) of notonedata" :key="index">
                            <span>
                                {{ item.notDate }}
                            </span>
                            <a href="#" target="_blank" >
                                {{ item.notData }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="#" style="margin-right: 5px;">&nbsp;</a>
                    <span style="margin-right: 5px;">1</span>
                    <a href="#" style="margin-right: 5px;">2</a>
                    <a href="#" style="margin-right: 5px;">3</a>
                    <a href="#" style="margin-right: 5px;">4</a>
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
    name:'NoticeList',
    data() {
        return {
            notonedata: [],
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/getNotOneData').then(res=>{
            this.notonedata = res.data;
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
                padding: 30px 18px;
                border-bottom: 1px #e7e6e6 solid;

                >ul {
                    list-style: none;

                    >li {
                        line-height: 39px;
                        background: url(./public/img/announce_ico.gif) left center no-repeat;
                        padding-left: 16px;
                        font-size: 14px;

                        >span {
                            color: #8c8c8c;
                            padding-right: 15px;
                            font-size: 14px;
                            line-height: 39px;

                        }

                        >a {
                            color: #505050;
                            text-decoration: none;
                            outline: 0;
                            outline-width: 0px;
                            transition: all .28s linear;
                            font-size: 14px;
                            line-height: 39px;
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