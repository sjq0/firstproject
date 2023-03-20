<template>
	<view class="bofangtop">
		<span>
			<img @click="goaway" src="./img/向下箭头.png" alt="">
		</span>
		<view class="topcen">
			<p>{{msg.musicname}}</p>
			<p>
				<span>{{msg.artname}}</span>
				<span>关注</span>
			</p>
		</view>
		<span>
			<img src="./img/分享.png" alt="">
		</span>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	
	let msg = ref({})
	
	onLoad((option) => {
		// console.log(option);
		msg.value = {
			musicname:option.music,
			artname:option.name
		}
		// console.log(msg);
	})
	
	let goaway = () => {
		uni.switchTab({
			url:"/pages/index/index"
		})
	}
	
</script>

<style scoped lang="less">
	.bofangtop{
		width: 100%;
		display: flex;
		justify-content: space-between;
		>span:nth-of-type(1){
			width: 10%;
			display: flex;
			align-items: center;
			justify-content: center;
			>img{
				width: 60%;
			}
		}
		.topcen{
			width: 80%;
			text-align: center;
			>p:nth-child(1){
				color: #a6a6a6;
				padding: 5px 0px;
			}
			>p:nth-child(2){
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 5px 0px;
				>span:nth-child(1){
					color: #a6a6a6;
					padding: 0px 5px;
				}
				>span:nth-child(2){
					color: white;
					display: block;
					width: 50px;
					border-radius: 5px;
					background-color: #414141;
				}
			}
		}
		>span:nth-of-type(2){
			width: 10%;
			display: flex;
			align-items: center;
			justify-content: center;
			>img{
				width: 60%;
			}
		}
	}
	
</style>