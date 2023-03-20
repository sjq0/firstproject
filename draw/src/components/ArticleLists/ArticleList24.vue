<template>
  <div>
      <div class="d24">
        <div>荣誉称号</div>
        <div>
            <div>
                <dl>
                    <dt>
                        2008-2009
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic01.jpg" alt=""></li>
                            <li><img src="./img/honor_pic02.jpg" alt=""></li>
                            <li><img src="./img/honor_pic03.jpg" alt=""></li>
                            <li><img src="./img/honor_pic04.jpg" alt=""></li>
                            <li><img src="./img/honor_pic05.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        2011-2012
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic06.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        2012-2013
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic07.jpg" alt=""></li>
                            <li><img src="./img/honor_pic08.jpg" alt=""></li>
                            <li><img src="./img/honor_pic09.jpg" alt=""></li>
                            <li><img src="./img/honor_pic10.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        2013-2014
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic11.jpg" alt=""></li>
                            <li><img src="./img/honor_pic12.jpg" alt=""></li>
                            <li><img src="./img/honor_pic13.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        2015-2016
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic14.jpg" alt=""></li>
                            <li><img src="./img/honor_pic15.jpg" alt=""></li>
                            <li><img src="./img/honor_pic16.jpg" alt=""></li>
                            <li><img src="./img/honor_pic17.jpg" alt=""></li>
                            <li><img src="./img/honor_pic18.jpg" alt=""></li>
                            <li><img src="./img/honor_pic23a.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        2017-2018
                        <span>(年度)</span>
                        <img src="./img/dian.png" alt="">
                    </dt>
                    <dd>
                        <ul>
                            <li><img src="./img/honor_pic31.jpg" alt=""></li>
                            <li><img src="./img/honor_pic28.jpg" alt=""></li>
                            <li><img src="./img/honor_pic29.jpg" alt=""></li>
                            <li><img src="./img/honor_pic30.jpg" alt=""></li>
                            <li><img src="./img/honor_pic27.jpg" alt=""></li>
                            <li><img src="./img/honor_pic19.jpg" alt=""></li>
                            <li><img src="./img/honor_pic21.jpg" alt=""></li>
                            <li><img src="./img/honor_pic32.jpg" alt=""></li>
                        </ul>
                    </dd>
                </dl>
            </div>
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
.d24{
    width: 936px;
    height: auto;
    float: right;
    display: block;
    color: #adadad;
    >div:nth-child(2){
        margin-left: 18px;
        margin-top: 55px;
        margin-bottom: 61px;
        border-left: 2px #e2ecf2 solid;
        padding-left: 46px;
        padding-bottom: 147px;
        >div{
            font-size: 12px;
            >dl{
                border: 2px #e2ecf2 solid;
                padding: 18px 0px;
                margin-bottom: 28px;
                position: relative;
                >dt{
                    font-size: 28px;
                    color: #6bcbca;
                    line-height: 48px;
                    padding-left: 43px;
                    >span{
                        color: #978571;
                        font-size: 18px;
                    }
                    >img{
                        width: 53px;
                        height: 20px;
                        position: absolute;
                        left: -53px;
                        top: 46%;
                    }
                }
                >dd{
                    >ul{
                        list-style: none;
                        overflow: hidden;
                        >li{
                            width: 213px;
                            height: 132px;
                            float: left;
                            border: 6px #f1f1f1 solid;
                            padding: 0;
                            margin-left: 43px;
                            margin-bottom: 25px;
                            >img{
                                width: 213px;
                                height: 132px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>