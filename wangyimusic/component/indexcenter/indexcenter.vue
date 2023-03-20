<template>
	<view class="cen">
		<view class="t">
			<span>
				<span>推荐歌单</span>&nbsp;
				<img src="./img/右箭头.png" alt="">
			</span>
			<span>
				<img src="./img/更多.png" alt="">
			</span>
		</view>
		<view class="d">
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<img :src="item.picUrl" alt="">
					<p>{{item.name}}</p>
					<span>
						<img src="./img/播放.png" alt="">
						<i>{{Math.round(item.playCount/10000)}}万</i>
					</span>
					<span>
						<img src="./img/播放.png" alt="">
					</span>
				</li>
			</ul>
		</view>
	</view>
</template>

<script setup>
	import { tuijian } from '../../api/lunbotu/lb.js'
	import { onMounted , ref } from 'vue'
	
	let list = ref([])
	
	onMounted(()=>{
		tuijian()
			.then(
				res => {
					// console.log(res);
					list.value = res.result
					// console.log(list.value);
				},
				err => {
					console.log(err);
				}
			)
	})
	
</script>

<style scoped lang="less">
	.cen{
		.t{
			padding: 0px 20px !important;
			height: 80px;
			padding: 10px 0px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			>span:nth-child(1){
				>span{
					font-size: 25px;
					font-weight: 500;
					color: #565968;
				}
				>img{
					width: 20px;
				}
			}
			>span:nth-child(2){
				>img{
					width: 35px;
				}
			}
		}
		.d{
			width: 750px;
			overflow-x: scroll;
			&::-webkit-scrollbar {
			  display: none;
			}
			>ul{
				display: flex;
				
				>li{
					position: relative;
					padding: 0px 20px;
					>img{
						width: 210px;
						border-radius: 15px;
					}
					>p{
						width: 100%;
						word-wrap:break-word;
						color: gray;
					}
					>span:nth-of-type(1){
						width: 65px;
						height: 20px;
						display: flex;
						position: absolute;
						top: 10px;
						right: 40px;
						>img{
							width: 15px;
						}
						>i{
							color: white;
							font-size: 15px;
							font-style: normal;
						}
					}
					>span:nth-of-type(2){
						display: block;
						width: 20px;
						position: absolute;
						bottom: 50px;
						right: 35px;
						>img{
							width: 30px;
						}
					}
				}
			}
		}
	}
</style>