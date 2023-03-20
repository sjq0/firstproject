<template>
	<view class="centt">
		<view class="tt">
			<span>
				<span>新歌速递</span>&nbsp;
				<img src="./img/右箭头.png" alt="">
			</span>
			<span>
				<img src="./img/更多.png" alt="">
			</span>
		</view>
		<view class="bb">
			<view class="bcc">
				<ul v-for="(item,index) in newlist" :key="index">
					<li v-for="(i,ind) in item" :key="ind">
						<img @click="listenmusic(i)" :src="i.album.picUrl" alt="">
						<view class="po">
							<p>{{i.name}}</p>
							<span>
								<i>新歌速递</i>
								<span>{{i.artists[0].name}}</span>
							</span>
						</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { xunhuan , dt , newmusic } from '../../api/lunbotu/lb.js'
	import { onMounted , ref } from 'vue'
	let list = ref([])
	let newlist = ref([])
	
	let listenmusic = (i) => {
		// console.log(i);
		uni.navigateTo({
			url:`/pages/bofang/bofang?id=${i.id}&img=${i.album.picUrl}&music=${i.name}&name=${i.artists[0].name}&time=${i.bMusic.playTime}`
		})
		// console.log(i);
	}
	
	onMounted(()=>{
		newmusic()
			.then(
				res => {
					// console.log(res);
					let state=-1;
					 let newArr= res.data.reduce((total,item,index)=>{
						if(index%3==0){
						 state++;
						 let newArr=[]
						 newArr.push(item)
						 total.push(newArr) 
						return total
						}else{
						 total[state].push(item)
						 return total
						}
					  },[])
					newlist.value = newArr
					// console.log(newlist);
				},
				err => {
					console.log(err);
				}
			)
			
	})
	
		
</script>

<style scoped lang="less">
	.centt{
		.tt{
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
		.bb{
			padding: 0px 20px;
			overflow-x: scroll;
			&::-webkit-scrollbar {
				width: 0 !important;
			}
			.bcc{
				width: 25500px;
				display: flex;
				>ul{
					width: 750px;
					>li{
						display: flex;
						// justify-content: space-between;
						padding: 5px 0px;
						>img{
							width: 15%;
							height: 100px;
							border-radius: 10px;
						}
						.po{
							width: 65%;
							height: 100px;
							margin-left: 25px;
							position: relative;
							>p{
								font-weight: 700;
								position: absolute;
								left: 0px;
								top: 20px;
							}
							>span{
								position: absolute;
								left: 0px;
								top: 50px;
								>i{
									// font-style: normal;
									padding: 0px 5px;
									color: red;
									background-color: #f1e9e6;
									border-radius: 5px;
								}
								>span{
									color: gray;
									padding: 0px 5px;
								}
							}
						}
					}
				}
			}
		}
	}
	
</style>