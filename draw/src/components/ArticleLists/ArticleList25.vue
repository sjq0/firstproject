<template>
  <div>
      <div class="d25">
        <div>组织结构</div>
        <div>
            <img src="./img/jiegou.jpg" alt="">
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
.d25{
    width: 936px;
    height: auto;
    float: right;
    display: block;
    color: #adadad;
    >div:nth-child(2){
        padding: 30px 18px;
        >img{
            max-width: 100%;
            height: auto;
        }
    }
}
</style>