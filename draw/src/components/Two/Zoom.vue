<template>
  <div class="spec-preview">
    <!-- 控制台会报错，因为数据还未返回来之前是个undefined -->
    <!-- <img :src="imgObj.imgUrl" /> -->
    <img src="@/pages/public/img/doctor1.jpg" />
    
    <!-- event这里的event就是存放事件的(鼠标移入事件) -->
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <!-- <img :src="imgObj.imgUrl" ref="big"/> -->
    <img src="@/pages/public/img/doctor1.jpg" ref="big" />
    </div>
    <!-- 蒙版 遮罩层  -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['skuImageList','skuAttrValueList'],
    data(){
      return {
        currentIndex:0
      }
    },
    computed:{
      imgObj(){
        return this.skuImageList[this.currentIndex] || {}
      }
    },
    mounted(){
      // 全局事件总线，获取兄弟组件的传过来的索引值
      this.$bus.$on('getIndex',(index)=>{
        // 当兄弟组件把index值传过来就开始修改
        this.currentIndex = index
      })

    },
    methods:{
      handler(event) {
        // ref:在js精准获取元素
        let mask=this.$refs.mask
        let big=this.$refs.big

        let left=event.offsetX-mask.offsetWidth/2
        let top=event.offsetY-mask.offsetHeight/2
        // 修改left和top属性值
        if(left<=0) left=0
        if(left>=mask.offsetWidth) left=mask.offsetWidth
        if(top<=0) top=0 
        if(top>=mask.offsetHeight) top=mask.offsetHeight
        mask.style.left= left+'px'
        mask.style.top=top+'px'
        big.style.left= -2*left+'px'
        big.style.top= -2*top+'px'
      }

    }


  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>