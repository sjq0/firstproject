<template>
  <div class="container-fluid top-second">
    <div class="row no-gutters content-first">
      <div>
        <ul>
          <li class="lli1">
            <a href="#">
              <span>就诊指南</span>
              <i :style="{background: 'url('+img1+')'}"></i>
              <span></span>
            </a>
            <div class="d" style="top: -12px; display: none;">
              <ul>
                <li class="lli2">
                  <a href="#">
                    就诊流程
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    科室导航
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    出诊安排
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    住院指南
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    来院路线
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    医保服务
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="lli2">
                  <a href="#">
                    电话查询
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    信息查询
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    预约挂号
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    省医地图
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <span>预约挂号</span>
              <i :style="{background: 'url('+img2+')'}"></i>
              <span></span>
            </a>
          </li>
          <li class="lli1">
            <a href="#">
              <span>出诊安排</span>
              <i :style="{background: 'url('+img3+')'}"></i>
              <span></span>
            </a>
            <div class="d" style="top: -134px; display: none;">
              <ul>
                <li class="lli2">
                  <a href="#">
                    国际医疗中心
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    内科临床医学部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    外科临床医学部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    妇儿临床医学部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    心血管病医院
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    康馨医学部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="lli2">
                  <a href="#">
                    综合临床医学部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    门诊部
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    河南省眼科医院
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
                <li class="lli2">
                  <a href="#">
                    停诊信息
                    <span class="span" style="display: none;">进入</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <span>专家介绍</span>
              <i :style="{background: 'url('+img4+')'}"></i>
              <span></span>
            </a>
            <!-- <div class="d" style="top: -12px; display: none;">

            </div> -->
          </li>
          <li>
            <a href="#">
              <span>专科介绍</span>
              <i :style="{background: 'url('+img5+')'}"></i>
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>药学服务</span>
              <i :style="{background: 'url('+img6+')'}"></i>
              <span></span>
            </a>
            <!-- <div class="d" style="top: -12px; display: none;">

            </div> -->
          </li>
          <li>
            <a href="#">
              <span style="border: 0;">医保服务</span>
              <i :style="{background: 'url('+img7+')'}"></i>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div class="block">
          <el-carousel height="450px">
            <el-carousel-item v-for="item in limgs" :key="item.id">
              <el-image :src="item.path" style="width: 936px; height: 450px;" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="row no-gutters content-second">
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
      <div>
        <a href="#">更多</a>
        <div>
          <h5>最新公告</h5>
          <span>Latest Announcement</span>
        </div>
        <ul>
          <li>
            <span>2022-01-09</span>
            <a href="#">关于征集阜外华中心血管病医院院徽的公告</a>
          </li>
          <li>
            <span>2022-01-11</span>
            <a href="#">2022年1月11日（周六）、1月15日（周日）出诊医师排班表</a>
          </li>
          <li>
            <span>2022-01-11</span>
            <a href="#">医院标题2017年人才招聘面试通知</a>
          </li>
          <li>
            <span>2022-01-15</span>
            <a href="#">关于我院2022年人才招聘面试工作提前举行的通知</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#">更多</a>
        <div>
          <h5>省内快讯</h5>
          <span>Latest Announcement</span>
        </div>
        <ul>
          <li>
            <span>2022-01-09</span>
            <a href="#">关于征集阜外华中心血管病医院院徽的公告</a>
          </li>
          <li>
            <span>2022-01-11</span>
            <a href="#">2022年1月11日（周六）、1月15日（周日）出诊医师排班表</a>
          </li>
          <li>
            <span>2022-01-11</span>
            <a href="#">医院标题2017年人才招聘面试通知</a>
          </li>
          <li>
            <span>2022-01-15</span>
            <a href="#">关于我院2022年人才招聘面试工作提前举行的通知</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row no-gutters content-third">
      <div>
        <div>
          <span>专家介绍</span>
          <span>Expert Introduction</span>
        </div>
        <div>
          <a href="#">快速查找</a>
          <form action="">
            <input type="text" placeholder="请输入医生的名字" maxlength="28">
            <input type="submit" value="">
          </form>
          <a href="#">更多 ></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <img src="./public/img/sys1.jpg" alt="">
            </a>
            <a href="#">邵凤民</a>
            <a href="#">肾内科</a>
            <a href="#">党委书记 主任医师 教授</a>
            <a href="#">详细</a>
            <a href="#">预约</a>
          </li>
          <li>
            <a href="#">
              <img src="./public/img/sys2.jpg" alt="">
            </a>
            <a href="#">高传玉</a>
            <a href="#">心内科</a>
            <a href="#">主任医师</a>
            <a href="#">详细</a>
            <a href="#">预约</a>
          </li>
          <li>
            <a href="#">
              <img src="./public/img/sys3.jpg" alt="">
            </a>
            <a href="#">程兆云</a>
            <a href="#">心血管外科</a>
            <a href="#">主任医师</a>
            <a href="#">详细</a>
            <a href="#">预约</a>
          </li>
          <li>
            <a href="#">
              <img src="./public/img/sys4.jpg" alt="">
            </a>
            <a href="#">高延征</a>
            <a href="#">脊柱脊髓外科</a>
            <a href="#">主任医师</a>
            <a href="#">详细</a>
            <a href="#">预约</a>
          </li>
          <li>
            <a href="#">
              <img src="./public/img/sys5.png" alt="">
            </a>
            <a href="#">张晓菊</a>
            <a href="#">呼吸内科</a>
            <a href="#">主任医师</a>
            <a href="#">详细</a>
            <a href="#">预约</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row no-gutters content-fourth">
      <div>
        <div>
          <span>重点专科</span>
          <span>Key Specialty</span>
        </div>
        <div>
          <a href="#">快速查找科室</a>
          <a href="#">更多 ></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <i class="icon01"></i>
            <div class="img animated">
              <img src="./public/img/pic_007.png" alt="呼吸内科" width="80" height="80">
            </div>
            <a href="#" title="呼吸内科">呼吸内科</a>
            <p>我科始建于上世纪70年代初，目前为卫生部国家重点专科建设项目单位，山西省重点……</p>
            <a href="#" title="呼吸内科">查看明细</a>
            <a href="#" title="呼吸内科医生">科室专家</a>
          </li>
          <li>
            <i class="icon01"></i>
            <div class="img animated">
              <img src="./public/img/pic_009.png" alt="呼吸内科" width="80" height="80">
            </div>
            <a href="#" title="神经内科">神经内科</a>
            <p>医院标题神经内科始建于1954年，经过半个多世纪的发展，目前已发展为全……</p>
            <a href="#" title="神经内科">查看明细</a>
            <a href="#" title="神经内科医生">科室专家</a>
          </li>
          <li>
            <i class="icon01"></i>
            <div class="img animated">
              <img src="./public/img/pic_008.png" alt="呼吸内科" width="80" height="80">
            </div>
            <a href="#" title="内分泌科">内分泌科</a>
            <p>医院标题内分泌代谢科，是国家重点专科、山西省重点专科、山西省糖尿病防治……</p>
            <a href="#" title="内分泌科">查看明细</a>
            <a href="#" title="内分泌科医生">科室专家</a>
          </li>
          <li>
            <i class="icon01"></i>
            <div class="img animated">
              <img src="./public/img/pic_012.png" alt="呼吸内科" width="80" height="80">
            </div>
            <a href="#" title="神经内科康馨病房">神经内科康馨病房</a>
            <p>医院标题神经内科康馨病房为国家临床重点专科神经内科干部保健病房，成立于……</p>
            <a href="#" title="神经内科康馨病房">查看明细</a>
            <a href="#" title="神经内科康馨病房医生">科室专家</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row no-gutters content-fiveth">
      <div class="left">
        <div>
          <el-carousel height="290">
            <el-carousel-item v-for="item in limgss" :key="item.id">
              <el-image :src="item.path" style="width: 290; height: 185px;" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content">
          <h3>空中救援</h3>
          <p>首个 “中国紧急救援山西航空救援基地” 落户医院标题 ，最快30分钟内施救。</p>
          <label for="">快速施救</label>
          <label for="">空中转院</label>
          <label for="">抢险救灾</label>
          <a href="#">MORE</a>
        </div>
      </div>
      <div class="right">
        <a href="#">
          <img src="./public/img/ico_039a.png" alt="" width="32" height="32">
          <img src="./public/img/ico_039b.png" alt="" width="32" height="32" class="amd">
          <span>新业务新技术</span>
          <span>了解我院最新科研技术发布与介</span>
          <b>MORE</b>
        </a>
        <a href="#">
          <img src="./public/img/ico_041a.png" alt="" width="32" height="32">
          <img src="./public/img/ico_041b.png" alt="" width="32" height="32" class="amd">
          <span>院史馆</span>
          <span>励精图治，厚德济生，省医百年展陈</span>
          <b>MORE</b>
        </a>
        <a href="#">
          <img src="./public/img/ico_042a.png" alt="" width="32" height="32">
          <img src="./public/img/ico_042b.png" alt="" width="32" height="32" class="amd">
          <span>媒体看省医</span>
          <span>我院与社会媒体合作，服务于患者</span>
          <b>MORE</b>
        </a>
        <a href="#">
          <img src="./public/img/ico_043a.png" alt="" width="32" height="32">
          <img src="./public/img/ico_043b.png" alt="" width="32" height="32" class="amd">
          <span>服务动态</span>
          <span>了解我院服务宗旨的最新动态介绍</span>
          <b>MORE</b>
        </a>
      </div>
    </div>
    <div class="row no-gutters content-sixth">

    </div>
  </div>
</template>

<script>
export default {
    name:'ShouYe',
    data() {
      return {
        img1: require('./public/img/ico_017.png'),
        img2: require('./public/img/ico_018.png'),
        img3: require('./public/img/ico_019.png'),
        img4: require('./public/img/ico_020.png'),
        img5: require('./public/img/ico_021.png'),
        img6: require('./public/img/ico_022.png'),
        img7: require('./public/img/ico_023.png'),


        limgs:[
          {
            id:1,
            path:require('./public/img/ys1.jpeg')
          },
          {
            id:2,
            path:require('./public/img/ys.jpeg')
          },
          {
            id:3,
            path:require('./public/img/ys2.jpeg')
          }
        ],

          limgss:[
            {
              id:1,
              path:require('./public/img/fj.jpg')
            },
            {
              id:2,
              path:require('./public/img/fj.jpg')
            },
            {
              id:3,
              path:require('./public/img/fj.jpg')
            }
          ]

      };
    },
    mounted(){
      let lli1 = document.querySelectorAll('.lli1')
      let lli2 = document.querySelectorAll('.lli2')
      let span = document.querySelectorAll('.span')
      let div = document.querySelectorAll('.d')

      for (let i = 0; i < lli1.length; i++) {
          lli1[i].addEventListener('mouseover', () => {
              div[i].style.display = 'block'
          })
          lli1[i].addEventListener('mouseout', () => {
              div[i].style.display = 'none'
          })
      }

      for (let j = 0; j < lli2.length; j++) {
          lli2[j].addEventListener('mouseover',()=>{
              span[j].style.display = 'block'
          })
          lli2[j].addEventListener('mouseout',()=>{
              span[j].style.display = 'none'
          })
      }
      }
}
</script>

<style scoped lang="less">
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
div,ul{
    padding: 0;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 450px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.top-second {
    width: 100%;

    .content-first {
        width: 1200px;
        height: 460px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 10px 0px 0px;

        >div:nth-child(1) {
            width: 21%;
            height: 100%;

            >ul {
                width: 100%;
                height: 100%;
                padding: 10px 0px;
                line-height: 61.4px;
                text-align: center;
                border: 1px solid #dedede;

                >li {
                    width: 100%;
                    height: 14.28%;
                    list-style: none;
                    font-size: 14px;
                    color: #666666;
                    box-sizing: border-box;
                    position: relative;
                    background: url(./public/img/ico_016a.png) right center no-repeat;

                    >a {
                        text-decoration: none;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #666666;
                        position: relative;
                        text-indent: 58px;

                        &:hover {
                            background: #ff7544 url(./public/img/ico_016b.png) right center no-repeat;
                            // text-indent: 68px;
                            color: #FFF;
                            box-shadow: 0px 6px 12px rgba(0, 0, 0, .15);
                        }

                        >span:nth-of-type(1) {
                            width: 86%;
                            height: 100%;
                            border-bottom: 1px solid #ebebeb;
                            text-indent: -35px;
                            &:hover{
                                text-indent: -20px;
                            }
                        }

                        >span:nth-of-type(2) {
                            width: 44px;
                            height: 44px;
                            top: 8px;
                            left: 20px;
                            position: absolute;
                            z-index: 100;
                            background: #FFF;
                            border-radius: 50%;
                            transition: all 0.38s cubic-bezier(0.175, 0.885, 0.320, 1.5);
                        }

                        >i {
                            width: 26px;
                            height: 24px;
                            position: absolute;
                            left: 29px;
                            top: 18px;
                            z-index: 102;
                        }
                    }

                    >div {
                        width: 495px;
                        position: absolute;
                        left: 100%;
                        height: 449px;
                        box-shadow: 0px 8px 15px rgb(128 128 128 / 25%);
                        background: #fff;
                        border: 1px solid #dedede;
                        z-index: 99;
                        transition: all .28s linear;

                        >ul {
                            float: left;
                            margin-left: 19px;
                            width: 222px;
                            height: 449px;
                            border: 0;

                            >li {
                                list-style: none;
                                width: 222px;
                                height: 74px;
                                display: block;
                                background: url(./public/img/ico_004.png) 18px center no-repeat;
                                font-size: 14px;
                                color: #666666;
                                box-sizing: border-box;
                                position: relative;

                                &:hover {
                                    box-shadow: 0px 0px 15px rgb(128 128 128 / 25%);
                                }

                                >a {
                                    padding-left: 38px;
                                    line-height: 74px;
                                    color: #494949;
                                    display: block;
                                    position: relative;
                                    text-align: left;
                                    text-decoration: none;

                                    &:hover {
                                        padding-left: 45px;
                                        transition: all .28s linear;
                                        color: #ff7544;
                                    }

                                    >span {
                                        background: #ff7544;
                                        font-size: 12px;
                                        color: #fff;
                                        border-radius: 2px;
                                        padding: 0px 15px;
                                        line-height: 24px;
                                        text-align: center;
                                        top: 25px;
                                        right: 20px;
                                        position: absolute;
                                        transition: all .28s linear;
                                    }
                                }


                            }
                        }
                    }
                }
            }
        }

        >div:nth-child(2) {
            width: 78%;
            height: 100%;

            img {
                width: 100%;
                height: 450px;
            }
        }
    }

    .content-second {
        width: 1200px;
        height: 250px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin: 15px auto 0px;

        >div:nth-child(1) {
            width: 21%;
            height: 100%;
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
                width: 125px;
                height: 124px;
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
                width: 125px;
                height: 124px;
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
                width: 125px;
                height: 124px;
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
                width: 125px;
                height: 124px;
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

        >div:nth-child(2) {
            width: 38.5%;
            height: 100%;
            background-color: #f1f1f1;
            padding: 18px 28px;
            position: relative;

            >a {
                position: absolute;
                top: 25px;
                right: 0px;
                text-decoration: none;
                width: 96px;
                height: 34px;
                background-color: #bda179;
                color: white;
                text-align: center;
                line-height: 34px;
                font-size: 12px;
                transition: all .28s linear;
                z-index: 100;
            }

            >a:visited {
                text-decoration: none;
                outline: 0;
                outline-width: 0px;
            }

            >a:hover {
                background: #ff7544;
                color: #FFF;
            }

            >div:nth-of-type(1) {
                width: 100%;
                height: 30.33%;
                background-image: url(./public/img/ico_025.jpg);
                background-position: left top;
                background-repeat: no-repeat;
                position: relative;

                >h5 {
                    font-size: 16px;
                    color: #505050;
                    position: absolute;
                    top: 6px;
                    left: 77px;
                }

                >span {
                    font-size: 12px;
                    color: #6bcbca;
                    position: absolute;
                    top: 28px;
                    left: 77px;
                }
            }

            >ul {
                li {
                    list-style: none;

                    >span {
                        padding: 0px 12px 0px 0px;
                        color: #bda179;
                        font-size: 12px;
                    }

                    >a {
                        text-decoration: none;
                        color: #505050;
                        font-size: 12px;
                    }
                }
            }
        }

        >div:nth-child(3) {
            width: 38.5%;
            height: 100%;
            background-color: #f1f1f1;
            padding: 18px 28px;
            position: relative;

            >a {
                position: absolute;
                top: 25px;
                right: 0px;
                text-decoration: none;
                width: 96px;
                height: 34px;
                background-color: #bda179;
                color: white;
                text-align: center;
                line-height: 34px;
                font-size: 12px;
                transition: all .28s linear;
                z-index: 100;
            }

            >a:visited {
                text-decoration: none;
                outline: 0;
                outline-width: 0px;
            }

            >a:hover {
                background: #ff7544;
                color: #FFF;
            }

            >div:nth-of-type(1) {
                width: 100%;
                height: 30.33%;
                background-image: url(./public/img/ico_026.jpg);
                background-position: left top;
                background-repeat: no-repeat;
                position: relative;

                >h5 {
                    font-size: 16px;
                    color: #505050;
                    position: absolute;
                    top: 6px;
                    left: 77px;
                }

                >span {
                    font-size: 12px;
                    color: #6bcbca;
                    position: absolute;
                    top: 28px;
                    left: 77px;
                }
            }

            >ul {
                li {
                    list-style: none;

                    >span {
                        padding: 0px 12px 0px 0px;
                        color: #bda179;
                        font-size: 12px;
                    }

                    >a {
                        text-decoration: none;
                        color: #505050;
                        font-size: 12px;
                    }
                }
            }
        }
    }

    .content-third {
        width: 1200px;
        height: 485px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin: 45px auto 0px;

        >div:nth-child(1) {
            width: 100%;
            height: 47px;
            border-bottom: 1px solid #ddd;
            position: relative;

            >div:nth-child(1) {
                float: left;
                height: 49px;
                width: 251px;
                padding-top: 3px;
                padding-left: 52px;
                border-bottom: 5px solid #6bcbca;
                background: url(./public/img/ico_028.jpg) 7px top no-repeat;

                >span:nth-child(1) {
                    font-size: 18px;
                    color: #333;
                    line-height: 32px;
                }

                >span:nth-child(2) {
                    padding-left: 3px;
                    color: #6bcbca;
                    font-size: 12px;
                }
            }

            >div:nth-child(2) {
                width: 455px;
                height: 35px;
                position: absolute;
                top: 0px;
                right: 6px;

                >a:nth-of-type(1) {
                    display: block;
                    width: 114px;
                    height: 35px;
                    line-height: 34px;
                    text-align: center;
                    border: 1px solid #ddd;
                    left: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    transition: all .28s linear;
                }

                >a:nth-of-type(1):hover {
                    background: #ff7544;
                    color: #FFF;
                }

                >form {
                    width: 161px;
                    height: 35px;
                    position: absolute;
                    top: 0px;
                    left: 130px;

                    >input:nth-child(1) {
                        width: 163px;
                        border: 1px solid #ddd;
                        height: 35px;
                        line-height: 35px;
                        padding-left: 8px;
                        transition: all .28s linear;
                        outline: none;
                        font-size: 12px;
                    }

                    >input:nth-child(2) {
                        background: url(./public/img/ico_030.jpg) center center no-repeat;
                        height: 33px;
                        width: 20px;
                        border: none;
                        position: absolute;
                        top: 1px;
                        right: 5px;
                    }

                    ::-webkit-input-placeholder {
                        color: #505050;
                        font-size: 12px;
                    }
                }

                >a:nth-of-type(2) {
                    display: block;
                    text-decoration: none;
                    font-size: 14px;
                    color: #6bcbca;
                    width: 50px;
                    height: 100%;
                    text-align: center;
                    position: absolute;
                    top: 0px;
                    line-height: 35px;
                    right: 88px;
                    transition: all .28s linear;
                }

                >a:nth-of-type(2):hover {
                    color: #ff7544;
                }

                >a:nth-of-type(3) {
                    display: block;
                    text-decoration: none;
                    position: absolute;
                    top: 0px;
                    right: 39px;
                    width: 30px;
                    height: 30px;
                    display: block;
                    border: 2px solid #ddd;
                    transition: all .28s linear;
                    background: #FFF url(./public/img/ico_031b.png) center center no-repeat;
                }

                >a:nth-of-type(3):hover {
                    background: url(./public/img/ico_031a.png) center center no-repeat;
                    background-color: #ff7544;
                }

                >a:nth-of-type(4) {
                    display: block;
                    text-decoration: none;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 30px;
                    height: 30px;
                    display: block;
                    border: 2px solid #ddd;
                    transition: all .28s linear;
                    background: #FFF url(./public/img/ico_032b.png) center center no-repeat;
                }

                >a:nth-of-type(4):hover {
                    background: url(./public/img/ico_032a.png) center center no-repeat;
                    background-color: #ff7544;
                }
            }

        }

        >div:nth-child(2) {
            width: 100%;
            height: 392px;

            >ul {
                width: 100%;
                height: 362px;

                li {
                    list-style: none;
                    width: 240px;
                    height: 362px;
                    position: relative;
                    float: left;
                    transition: box-shadow .28s linear;

                    >a:nth-of-type(1) {
                        display: block;
                        width: 100%;
                        height: 162px;
                        text-align: center;
                        margin-top: 36px;
                        overflow: hidden;
                        text-decoration: none;

                        img {
                            outline: 0;
                            outline-width: 0px;
                            width: 120px;
                        }
                    }

                    >a:nth-of-type(2) {
                        display: block;
                        width: 100%;
                        height: 16px;
                        text-align: center;
                        margin-top: 18px;
                        font-size: 16px;
                        line-height: 16px;
                        color: #978571;
                        text-decoration: none;
                    }

                    >a:nth-of-type(3) {
                        display: block;
                        width: 100%;
                        text-align: center;
                        line-height: 33px;
                        color: #333333;
                        font-size: 12px;
                        text-decoration: none;
                    }

                    >a:nth-of-type(4) {
                        display: block;
                        width: 100%;
                        text-align: center;
                        color: #6e6e6e;
                        font-size: 12px;
                        text-decoration: none;

                    }

                    >a:nth-of-type(5) {
                        position: absolute;
                        left: 32px;
                        bottom: 35px;
                        background: #bda179;
                        width: 68px;
                        height: 30px;
                        display: block;
                        font-size: 12px;
                        text-align: center;
                        line-height: 30px;
                        color: #fff;
                        text-decoration: none;
                    }

                    >a:nth-of-type(6) {
                        position: absolute;
                        right: 32px;
                        bottom: 35px;
                        width: 68px;
                        height: 30px;
                        display: block;
                        font-size: 12px;
                        text-align: center;
                        line-height: 30px;
                        color: #fff;
                        background: #6bcbca;
                        text-decoration: none;
                    }
                }

                >li:hover {
                    box-shadow: 5px 5px 5px 5px #ccc;
                }
            }
        }
    }

    .content-fourth {
        width: 1200px;
        height: 450px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin: 25px auto 0px;

        >div:nth-child(1) {
            width: 100%;
            height: 47px;
            border-bottom: 1px solid #ddd;
            position: relative;

            >div:nth-child(1) {
                float: left;
                height: 49px;
                width: 251px;
                padding-top: 3px;
                padding-left: 52px;
                border-bottom: 5px solid #6bcbca;
                background: url(./public/img/ico_028.jpg) 7px top no-repeat;

                >span:nth-child(1) {
                    font-size: 18px;
                    color: #333;
                    line-height: 32px;
                }

                >span:nth-child(2) {
                    padding-left: 3px;
                    color: #6bcbca;
                    font-size: 12px;
                }
            }

            >div:nth-child(2) {
                width: 280px;
                height: 35px;
                position: absolute;
                top: 0px;
                right: 6px;

                >a:nth-of-type(1) {
                    display: block;
                    width: 114px;
                    height: 35px;
                    line-height: 34px;
                    text-align: center;
                    border: 1px solid #ddd;
                    left: 0px;
                    text-decoration: none;
                    color: #505050;
                    font-size: 12px;
                    transition: all .28s linear;
                }


                >a:nth-of-type(1):hover {
                    background: #ff7544;
                    color: #FFF;
                }

                >a:nth-of-type(2) {
                    display: block;
                    text-decoration: none;
                    font-size: 14px;
                    color: #6bcbca;
                    width: 50px;
                    height: 100%;
                    text-align: center;
                    position: absolute;
                    top: 0px;
                    line-height: 35px;
                    right: 88px;
                    transition: all .28s linear;
                }

                >a:nth-of-type(2):hover {
                    color: #ff7544;
                }

                >a:nth-of-type(3) {
                    display: block;
                    text-decoration: none;
                    position: absolute;
                    top: 0px;
                    right: 39px;
                    width: 30px;
                    height: 30px;
                    display: block;
                    border: 2px solid #ddd;
                    background: #FFF url(./public/img/ico_031b.png) center center no-repeat;
                }

                >a:nth-of-type(3):hover {
                    background: url(./public/img/ico_031a.png) center center no-repeat;
                    background-color: #ff7544;
                }

                >a:nth-of-type(4) {
                    display: block;
                    text-decoration: none;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 30px;
                    height: 30px;
                    display: block;
                    border: 2px solid #ddd;
                    background: #FFF url(./public/img/ico_032b.png) center center no-repeat;
                }

                >a:nth-of-type(4):hover {
                    background: url(./public/img/ico_032a.png) center center no-repeat;
                    background-color: #ff7544;
                }
            }

        }

        >div:nth-child(2) {
            width: 100%;
            height: 392px;
            margin-top: 60px;
            clear: both;

            ul {
                width: 100%;
                height: 320px;

                li {
                    width: 299px;
                    height: 320px;
                    border-right: 1px solid #f5f5f5;
                    list-style: none;
                    float: left;
                    position: relative;

                    >a {
                        text-decoration: none;
                    }

                    i {
                        background-image: url(./public/img/ico_033.jpg);
                        background-repeat: no-repeat;
                        display: block;
                        width: 26px;
                        height: 44px;
                        position: absolute;
                        top: 0px;
                        right: 29px;
                    }

                    >div {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        margin: 40px auto 20px auto;
                        background: #6bcbca;

                        img {
                            vertical-align: middle;
                            border-style: none;
                        }
                    }

                    >a:nth-of-type(1) {
                        font-size: 18px;
                        text-align: center;
                        display: block;
                        color: #978571;
                        margin-bottom: 6px;
                        outline: 0;
                        outline-width: 0px;
                    }

                    p {
                        line-height: 22px;
                        width: 208px;
                        text-align: center;
                        margin: 0px auto;
                        font-size: 12px;
                        -webkit-text-size-adjust: none;
                        color: #505050;
                        font-family: Arial, Tahoma, "Microsoft YaHei", "SimSun";
                        -webkit-font-smoothing: antialiased;
                    }

                    >a:nth-of-type(2) {
                        font-size: 12px;
                        position: absolute;
                        bottom: 41px;
                        display: block;
                        text-indent: 18px;
                        width: 99px;
                        height: 29px;
                        line-height: 30px;
                        left: 50px;
                        color: #ff7544;
                        background: url(./public/img/ico_034.jpg) no-repeat;
                        background-position: 71px center;
                        transition: all .28s linear;
                    }

                    >a:nth-of-type(2):hover {
                        background-position: 80px center;
                    }

                    >a:nth-of-type(3) {
                        font-size: 12px;
                        position: absolute;
                        bottom: 41px;
                        display: block;
                        text-indent: 18px;
                        width: 99px;
                        height: 29px;
                        line-height: 30px;
                        right: 50px;
                        color: #0088a8;
                        background: url(./public/img/ico_035.jpg) no-repeat;
                        background-position: 71px center;
                        transition: all .28s linear;
                    }

                    >a:nth-of-type(3):hover {
                        background-position: 80px center;
                    }
                }

            }
        }
    }

    .content-fiveth {
        width: 1200px;
        height: 213px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        >div:nth-child(1) {
            width: 595px;
            height: 211px;
            border: 1px solid #ddd;
            float: left;

            >div:nth-child(1) {
                width: 290px;
                height: 185px;
                overflow: hidden;
                position: relative;
                margin-top: 13px;
                margin-left: 13px;
                float: left;
            }

            >div:nth-child(2) {
                height: 185px;
                width: 240px;
                float: right;
                margin-right: 22px;
                margin-top: 13px;
                position: relative;
                line-height: normal;
                font-size: 12px;

                >h3 {
                    padding-left: 50px;
                    background: url(./public/img/ico_037.jpg) left center no-repeat;
                    color: #ff7544;
                    font-size: 16px;
                    line-height: 50px;
                    height: 50px;
                    margin: 0;
                }

                >p {
                    line-height: 20px;
                    padding-bottom: 5px;
                    color: #535353;
                    margin: 0;
                }

                >label:nth-of-type(1) {
                    display: block;
                    margin-top: 5px;
                    padding-left: 23px;
                    color: #333;
                    margin-bottom: 0;
                    background: url(./public/img/ico_038.jpg) left center no-repeat;
                }

                >label:nth-of-type(2) {
                    display: block;
                    margin-top: 5px;
                    padding-left: 23px;
                    color: #333;
                    margin-bottom: 0;
                    background: url(./public/img/ico_038.jpg) left center no-repeat;
                }

                >label:nth-of-type(3) {
                    display: block;
                    margin-top: 5px;
                    padding-left: 23px;
                    color: #333;
                    margin-bottom: 0;
                    background: url(./public/img/ico_038.jpg) left center no-repeat;
                }

                >a {
                    width: 96px;
                    height: 34px;
                    position: absolute;
                    background: #bda179;
                    right: -1px;
                    bottom: 0px;
                    display: block;
                    line-height: 36px;
                    font-size: 12px;
                    text-align: center;
                    color: #fff;
                    text-decoration: none;
                    transition: all .28s linear;
                }

                >a:hover {
                    background: #ff7544;
                }

            }
        }

        >div:nth-child(2) {
            width: 596px;
            height: 211px;
            border-left: 1px solid #ddd;
            border-top: 1px solid #ddd;
            float: right;

            >a:nth-child(1) {
                width: 297px;
                height: 105px;
                display: block;
                position: relative;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                float: left;
                transition: all .28s linear;
                text-decoration: none;

                >img:nth-child(1) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >img:nth-child(2) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >span:nth-of-type(1) {
                    position: absolute;
                    left: 76px;
                    top: 22px;
                    color: #978571;
                    font-size: 14px;
                }

                >span:nth-of-type(2) {
                    position: absolute;
                    left: 76px;
                    top: 45px;
                    color: #666;
                    font-size: 12px;
                }

                b {
                    position: absolute;
                    left: 76px;
                    top: 70px;
                    width: 57px;
                    font-size: 12px;
                    display: block;
                    height: 15px;
                    line-height: 17px;
                    color: #a8a8a8;
                    background: url(./public/img/ico_040a.png) right center no-repeat;
                }

            }

            >a:nth-child(1):hover {
                background: #ff7544;
            }

            >a:nth-child(2) {
                width: 297px;
                height: 105px;
                display: block;
                position: relative;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                float: left;
                transition: all .28s linear;
                text-decoration: none;

                >img:nth-child(1) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >img:nth-child(2) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >span:nth-of-type(1) {
                    position: absolute;
                    left: 76px;
                    top: 22px;
                    color: #978571;
                    font-size: 14px;
                }

                >span:nth-of-type(2) {
                    position: absolute;
                    left: 76px;
                    top: 45px;
                    color: #666;
                    font-size: 12px;
                }

                b {
                    position: absolute;
                    left: 76px;
                    top: 70px;
                    width: 57px;
                    font-size: 12px;
                    display: block;
                    height: 15px;
                    line-height: 17px;
                    color: #a8a8a8;
                    background: url(./public/img/ico_040a.png) right center no-repeat;
                }

            }

            >a:nth-child(2):hover {
                background: #ff7544;
            }

            >a:nth-child(3) {
                width: 297px;
                height: 105px;
                display: block;
                position: relative;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                float: left;
                transition: all .28s linear;
                text-decoration: none;

                >img:nth-child(1) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >img:nth-child(2) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >span:nth-of-type(1) {
                    position: absolute;
                    left: 76px;
                    top: 22px;
                    color: #978571;
                    font-size: 14px;
                }

                >span:nth-of-type(2) {
                    position: absolute;
                    left: 76px;
                    top: 45px;
                    color: #666;
                    font-size: 12px;
                }

                b {
                    position: absolute;
                    left: 76px;
                    top: 70px;
                    width: 57px;
                    font-size: 12px;
                    display: block;
                    height: 15px;
                    line-height: 17px;
                    color: #a8a8a8;
                    background: url(./public/img/ico_040a.png) right center no-repeat;
                }

            }

            >a:nth-child(3):hover {
                background: #ff7544;
            }

            >a:nth-child(4) {
                width: 297px;
                height: 105px;
                display: block;
                position: relative;
                border-bottom: 1px solid #ddd;
                border-right: 1px solid #ddd;
                float: left;
                transition: all .28s linear;
                text-decoration: none;

                >img:nth-child(1) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >img:nth-child(2) {
                    position: absolute;
                    top: 22px;
                    left: 26px;
                    outline: 0;
                    outline-width: 0px;
                }

                >span:nth-of-type(1) {
                    position: absolute;
                    left: 76px;
                    top: 22px;
                    color: #978571;
                    font-size: 14px;
                }

                >span:nth-of-type(2) {
                    position: absolute;
                    left: 76px;
                    top: 45px;
                    color: #666;
                    font-size: 12px;
                }

                b {
                    position: absolute;
                    left: 76px;
                    top: 70px;
                    width: 57px;
                    font-size: 12px;
                    display: block;
                    height: 15px;
                    line-height: 17px;
                    color: #a8a8a8;
                    background: url(./public/img/ico_040a.png) right center no-repeat;
                }

            }

            >a:nth-child(4):hover {
                background: #ff7544;
            }
        }
    }

    .content-sixth {
        width: 100%;
        height: 38px;
        margin: 0 auto;
    }
}

</style>