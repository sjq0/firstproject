<template>
  <div class="container-fluid top-first">
    <div class="row no-gutters container-top">
      <div class="col-6">
        <ul>
          <li><a href="#">站点地图</a></li>
          <li><a href="#">院长(信访)信箱</a></li>
          <li><a href="#">新内部OA</a></li>
          <li><a href="#">内部OA</a></li>
          <li><a href="#">人才招聘</a></li>
          <li><a href="#">人事管理</a></li>
          <li><a href="#">网商院使馆</a></li>
          <li><a href="#">在线留言</a></li>
          <li><a href="#">加入收藏</a></li>
        </ul>
      </div>
      <div class="col-2">
        <span style="font-size: 12px; color: #727272;">您好，请&nbsp;</span>
        <router-link to="/login" style="font-size: 12px; color: #6bcbca;">登录</router-link>
        <span style="font-size: 12px; color: #727272;">&nbsp;|&nbsp;</span>
        <router-link to="/logon" style="font-size: 12px; color: #6bcbca;">注册</router-link>
      </div>
      <div class="col-2">
      </div>
      <div class="col-2 top-right">
        <span>选择语言</span>
        <span>&nbsp;|&nbsp;</span>
        <span>中文</span>
      </div>
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

dl,dd,dt,li,span {
    margin: 0;
}
.top-first {
    width: 100%;
    background-color: #eaeaea;

    .container-top {
        width: 1200px;
        height: 40px;
        margin: 0 auto;
        background-color: #eaeaea;

        .col-6 ul {
            height: 40px;
            display: flex;
            justify-content: space-between;
            line-height: 40px;
            margin: 0;

            li {
                list-style: none;

                a {
                    text-decoration: none;
                    color: #727272;
                    font-size: 12px;
                }
            }
        }

        .col-2 {
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin: 0;
            // text-decoration: none;
        }

        .top-right {
            height: 40px;
            font-size: 12px;
            color: #727272;
            line-height: 40px;
            text-align: right;
            margin: 0;
        }
    }
}
</style>