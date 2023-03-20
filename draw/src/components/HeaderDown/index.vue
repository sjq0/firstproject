<template>
  <div class="row no-gutters container-top2">
      <div class="col-3">
        <img src="./public/img/logo.jpg" alt="">
      </div>
      <div class="col-4">
        <img src="./public/img/bwchuxin2019.jpg" alt="">
      </div>
      <div class="col-5">
        <div class="searchbase">
          <div>
            <div>医生查找</div>
            <!-- <a href="#"></a> -->
          </div>
          <div>
            <form action="">
              <input class="ss" type="text" placeholder="请输入您要查找内容的关键字">
            </form>
          </div>
          <div>
            <input type="submit" class="animated">
            <!-- <a href="#" class="animated">搜索</a> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:'HeaderDown',
    data() {
        return {
            lists: [],
        };
    },
    mounted() {
        let sub = document.querySelector('.animated')
            sub.addEventListener('click',()=>{
                // console.log(123);
                let search = document.querySelector('.ss').value
                // console.log(search);
                
                axios({
                    method: 'GET',
                    url: 'http://127.0.0.1:3000/search',
                    params: {
                        ss:search
                    }
                })
                    .then((res) => {
                        // console.log(res.data);
                        this.lists.push(res.data)
                        // console.log(this.lists[0]);
                        this.$store.commit('getsearch',this.lists[0])
                        this.$router.push('/home/search')
                    }).catch((err) => {
                        console.log(err.data);
                    });
                })
    },
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

dl,dd,dt,li,span {
    margin: 0;
}
.container-top2 {
        width: 1200px;
        height: 130px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .col-3 {
            height: 130px;
            text-align: center;
            line-height: 130px;
        }

        .col-4 {
            height: 130px;
            text-align: center;
            line-height: 130px;
        }

        .col-5 {
            display: flex;
            justify-content: center;
            align-items: center;

            .searchbase {
                width: 500px;
                height: 50px;
                border: 2px solid #dddddd;
                box-sizing: border-box;
                display: flex;

                >div:nth-child(1) {
                    width: 23%;
                    height: 100%;
                    // border: 1px solid #dddddd;
                    border-right: 1px solid #ddd;
                    box-sizing: border-box;
                    text-align: center;
                    line-height: 48px;

                    >div {
                        // text-decoration: none;
                        font-size: 12px;
                        color: #505050;
                        // background: url(./public/img/ico_005.jpg) 84px center no-repeat;
                        // text-indent: -25px;
                        cursor: pointer;
                        box-sizing: border-box;
                    }
                }

                >div:nth-child(2) {
                    width: 54%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    form {
                        width: 90%;
                        height: 50%;

                        input {
                            width: 100%;
                            height: 24px;
                            outline: none;
                            border: 0;
                            font-size: 12px;
                        }

                        ::-webkit-input-placeholder {
                            color: #505050;
                            font-size: 12px;
                        }
                    }

                }

                >div:nth-child(3) {
                    width: 23%;
                    height: 100%;
                    // background: #6bcbca;
                    cursor: pointer;
                    box-sizing: border-box;
                    text-align: center;
                    line-height: 48px;

                    >input {
                        width: 110px;
                        height: 50px;
                        position: absolute;
                        top: 0px;
                        right: 0px;
                        background: #6bcbca;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        font-size: 14px;
                        transition: all .28s linear;
                    }

                    >input:hover {
                        background: #ff7544;
                        color: #FFF;
                    }
                }
            }
        }
    }
</style>