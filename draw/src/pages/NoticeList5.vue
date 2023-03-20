<template>
  <div class="container-fluid top-second">
    <div class="row no-gutters content-first">
            <div>
                您所在的位置
                <span>
                    <a href="#">首页</a>
                    >
                    <a href="#">护理园地</a>
                    >护理概况
                </span>
            </div>
        </div>
        <div class="row no-gutters content-second">
            <div>
                <div>护理园地</div>
                <div>
                    <ul>
                        <li>
                            <a href="#" style="color: white;background-color: #ff7544;"><span>护理概况</span></a>
                        </li>
                        <li>
                            <a href="#"><span>护理专家</span></a>
                        </li>
                        <li>
                            <a href="#"><span>通知公告</span></a>
                        </li>
                        <li>
                            <a href="#"><span>护理动态</span></a>
                        </li>
                        <li>
                            <a href="#"><span>健康知识</span></a>
                        </li>
                        <li>
                            <a href="#"><span>科研教学</span></a>
                        </li>
                        <li>
                            <a href="#"><span>天使风采</span></a>
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
                <div>护理概况</div>
                <div>
                    <p aligen="center" style="text-align: left;">
                        <span style="line-height: 1.5;">在医院的整体管理体制下，护理部建立完善的管理体制和严格的管理制度，实行护理部、医学部、病区护理三级管理体系，现有护理人员3085余人，其中医学部护士长14名，病区护士长161名，是一支团结奋进、敬业奉献、严谨求实、追求卓越的优秀护理队伍。</span>
                    </p>
                    <p>
                        护理部制定的一系列标准和规范，一直代表着全省护理行业的最高标准。由护理专家编写的《护理管理手册》、《新编临床护理手册》、《临床护理常规》、《专科护理技术操作规程》等专业书籍，受到省卫生计生委的充分肯定，多次印刷出版，并在全省各家医院广泛推广应用。同时，还受省卫生计生委的委托，参与制定出台了河南省多部护理工作规范，编写了《河南省医疗机构护理质量评价标准与方法》、《专科护理技术操作规程》、《医疗文书规范与管理》、《河南省护士岗位技能操作评价标准》等，为规范全省护理工作标准奠基了坚实基础。
                        <br>
                        几代护理工作者历经百年锤炼的严谨作风，一代代传承下来，形成了河南省人民医院一种优秀的护理文化。河南省护理质量控制中心、河南省消毒供应质量控制中心、河南省手术部护理质量控制中心，先后经省卫生计生委批准，一一在河南省人民医院挂牌成立，更加确立了在全省的引领地位。首批国家临床重点专科的成功申报，使医院迎来了建院百年以来护理事业最大的荣誉，河南省人民医院的护理队伍走在全国临床护理专业的前列，不仅是河南卫生界的一面旗帜，更是全国护理行业的标杆。
                        <br>
                        &nbsp;
                        <span></span>
                    </p>
                    <p style="text-align: center;">
                        <br>
                    </p>
                    <div v-for="(item,index) of notfivedata" :key="index">
                        <p style="text-align: center;">
                            <img :src="require('./public/img/'+item.imgpath)" alt="" style="width: 470px;">
                        </p>
                        <p style="text-align: center;">
                            <span style="font-size: x-small;">
                                {{ item.imgmsg }}
                            </span>
                        </p>
                        <p style="text-align: center;">&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name:'NoticeList5',
    data() {
        return {
            notfivedata: [],
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:3000/getNotFiveData').then(res=>{
            this.notfivedata = res.data;
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
                line-height: 26px;
                padding: 30px 18px;
                font-size: 14px;
                >p{
                    text-indent: 2em;
                    >img{
                        max-width: 100%;
                        height: auto;
                        outline: 0;
                        outline-width: 0px;
                    }
                }
            }
        }
    }
}

</style>