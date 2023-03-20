<template>
  <div>
    <div class="row no-gutters content-first">
            <div>
                您所在的位置
                <span>
                    <a href="#">首页</a>
                    >
                    <a href="#">搜索结果</a>
                </span>
            </div>
    </div>
    <div class="row no-gutters content-second">
        <div>搜索结果</div>
        <div>
            <div>
                <a id="searchdoctor" href="">医生查询</a>
                <!-- <a id="searchnews" href="">新闻动态</a> -->
            </div>
            <div>
                <div v-for="item in this.list" :key="item.id">
                    <a href="">
                        <img :src="require('./public/img/'+item.img)" alt="">
                    </a>
                    <div>
                        <div>
                            <a href="">{{ item.name }}</a>
                            <br />
                            {{ item.hospital }}
                            <br />
                            <em>{{ item.job }}</em>
                        </div>
                        <p>{{ item.content }}</p>
                    </div>
                    <div>
                        <a href="">详细</a>
                        <a href="">预约</a>
                    </div>
                </div>
            </div>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20 ]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MySearch',
    data() {
        return {
            searchdatalists: this.$store.state,
            lis:[], //获取搜索出来的所有数据
            list:[],
            currentPage:1,
            pageSize:10,
            total:0
        };
    },
    created() {
        this.lis = this.searchdatalists.searchlists
        this.list = this.lis
        this.total = this.list.length
    },
    watch:{
        searchdatalists:{
            handler(val,oldValue){
                this.lis = val.searchlists
                this.total = this.lis.length
                console.log(this.total);
                this.list = this.lis.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
            },
            deep:true,
        }
    },
    methods: {
        handleSizeChange(val){
            this.pageSize = val
            this.list = this.lis.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
        },
        handleCurrentChange(val){
            this.currentPage = val
            this.list = this.lis.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
        },
        
    },
    
}
</script>

<style scoped lang="less">
div,ul{
    padding: 0;
}
a{
    text-decoration: none;
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
        >div:nth-child(1){
            font-size: 18px;
            color: #333;
            line-height: 50px;
        }
        >div:nth-child(2){
            >div:nth-child(1){
                height: 43px;
                border-bottom: 1px solid #e5e5e5;
                padding-left: 240px;
                font-size: 14px;
                color: #666;
                #searchdoctor{
                    width: 160px;
                    height: 41px;
                    line-height: 42px;
                    border-top: 3px solid #6bcbca;
                    border-left: 1px solid #e5e5e5;
                    border-right: 1px solid #e5e5e5;
                    background: #fff;
                    display: block;
                    text-align: center;
                    margin-right: 6px;
                    float: left;
                    color: #505050;
                }
                #searchnews{
                    width: 160px;
                    height: 42px;
                    line-height: 42px;
                    border-top: 1px solid #e5e5e5;
                    border-left: 1px solid #e5e5e5;
                    border-right: 1px solid #e5e5e5;
                    background: #fff;
                    display: block;
                    text-align: center;
                    margin-right: 6px;
                    float: left;
                    color: #505050;
                }
            }
            >div:nth-child(2){
                padding-left: 240px;
                padding-top: 36px;
                min-height: 288px;
                >div{
                    height: 150px;
                    padding: 30px 18px;
                    border-bottom: 1px solid #e5e5e5;
                    box-sizing: content-box;
                    background: #fff;
                    position: relative;
                    &:hover{
                        box-shadow: 0px 5px 15px 5px rgba(128 ,128 ,128 ,0.2);
                        transition: box-shadow .28s linear;
                        -moz-transition: -moz-box-shadow .28s linear;
                        -webkit-transition: -webkit-box-shadow .28s linear;
                        position: relative;
                        z-index: 2;
                    }
                    >a{
                        >img{
                            width: 120px;
                            height: 162px;
                            float: left;
                            margin-right: 22px;
                        }
                    }
                    >div:nth-of-type(1){
                        width: 70%;
                        padding: 10px 0px;
                        >div{
                            font-size: 12px;
                            line-height: 24px;
                            color: #333;
                            >a{
                                font-size: 16px;
                                line-height: 28px;
                                color: #978571;
                            }
                            >em{
                                font-size: 12px;
                                line-height: 24px;
                                color: #6e6e6e;
                                font-style: normal;
                                font-weight: 500;
                            }
                        }
                        >p{
                            line-height: 22px;
                            margin-top: 10px;
                            color: #999;
                            font-size: 12px;
                        }
                    }
                    >div:nth-of-type(2){
                        position: absolute;
                        right: 0;
                        bottom: 30px;
                        >a:nth-child(1){
                            width: 68px;
                            height: 30px;
                            display: inline-block;
                            text-align: center;
                            line-height: 30px;
                            color: #fff;
                            margin-right: 28px;
                            margin-top: 19px;
                            background: #bda179;
                            font-size: 12px;
                        }

                        >a:nth-child(2){
                            width: 68px;
                            height: 30px;
                            display: inline-block;
                            text-align: center;
                            line-height: 30px;
                            color: #fff;
                            margin-right: 28px;
                            margin-top: 19px;
                            background: #6bcbca;
                            font-size: 12px;
                        }
                        >a:hover{
                            background: #ff7544;
                            
                        }
                    }
                }
                
            }
        }
    }
}
/deep/.el-pagination{
    text-align: center;
    margin-top: 38px;
}
</style>