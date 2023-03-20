<template>
	<view class="header">
		<view class="left">
			<img src="./img/列表.png" alt="">
			<span>4</span>
		</view>
		<view class="center">
			<img src="./img/搜索.png" alt="">
			<view class="sousuo">
				<input type="text" placeholder="大家都在搜 林俊杰">
			</view>
			<img src="./img/扫一扫.png" alt="">
		</view>
		<view class="right">
			<img src="./img/麦克风.png" alt="">
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped lang="less">
	.header{
		height: 60px;
		display: flex;
		align-items: center;
		padding: 0px 20px;
		justify-content: space-between;
		.left{
			height: auto;
			position: relative;
			>img{
				width: 30px;
			}
			>span{
				position: absolute;
				top: -2px;
				right: -5px;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: #fb393a;
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
			}
		}
		.center{
			height: auto;
			display: flex;
			align-items: center;
			background-color: transparent;
			padding: 5px 20px;
			border-radius: 20px;
			background: linear-gradient(to right , #dadbfa , #f5d7ef) !important;
			>img:nth-of-type(1){
				height: 20px;
			}
			.sousuo{
				box-sizing: border-box;
				width: 470px;
				padding: 5px 10px;
				>input{
					
				}
			}
			>img:nth-of-type(2){
				height: 25px;
			}
		}
		.right{
			height: auto;
			>img{
				height: 30px;
			}
		}
	}
</style>