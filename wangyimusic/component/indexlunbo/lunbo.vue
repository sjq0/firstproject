<template>
	<view class="lunbo">
		<van-swipe class="lb" :autoplay="3000" lazy-render>
		  <van-swipe-item v-for="(item,index) in images" :key="index">
		    <img class="img" :src="item.imageUrl" />
		  </van-swipe-item>
		</van-swipe>
	</view>
</template>

<script setup>
	// import img1 from '@/component/indexlunbo/img/1.jpg'
	// import img2 from '@/component/indexlunbo/img/2.jpg'
	// import img3 from '@/component/indexlunbo/img/3.jpg'
	// import img4 from '@/component/indexlunbo/img/4.jpg'
	// import img5 from '@/component/indexlunbo/img/5.jpg'
	// import img6 from '@/component/indexlunbo/img/6.jpg'
	import { onMounted , ref } from 'vue'
	import { Lbimgs } from '../../api/lunbotu/lb.js'
	// const images = [
	//    img1,
	// 	  img2,
	// 	  img3,
	// 	  img4,
	// 	  img5,
	// 	  img6
	//     ];
	let images = ref([])
		
	onMounted(()=>{
		Lbimgs(0)
			.then(
				res => {
					// console.log(res.banners);
					images.value = res.banners
				},
				err => {
					console.log(err);
				}
			)
	})
</script>

<style scoped lang="less">
	.lunbo{
		padding: 0px 20px;
		margin: 15px 0px 0px;
		.lb{
			width: 100%;
			border-radius: 15px;
			.img{
				width: 100%;
				// border-radius: 15px;
			}
		}
	}
</style>