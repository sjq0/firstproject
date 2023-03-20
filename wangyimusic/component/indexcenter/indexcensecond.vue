<template>
	<view class="cens">
		<view class="t">
			<view class="l">
				<img src="./img/刷新.png" alt="">
				<p>让你单曲循环的华语歌</p>
				<span>
					<img src="./img/学院-视频播放.png" alt="">
					<i>播放</i>
				</span>
			</view>
			<img src="./img/更多.png" alt="">
		</view>
		<view class="b">
			<view class="bc">
				<ul v-for="item in newlist" :key="item">
					<li v-for="i in item" :key="i">
						<img :src="i.picUrl" alt="">
						<view class="po">
							<p>{{i.name}}</p>
							<span>
								<i>热门华语歌曲</i>
								<span>{{i.song.artists[0].name}}</span>
							</span>
						</view>
						<view class="qwe">
							<img v-if="isshow.value ? false : true" @click="playvideo(i)" src="./img/播放1.png" alt="">
							<img v-if="isshow.value ? true : false" @click="playvideo(i)" src="./img/播放1.png" alt="">
						</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { xunhuan , autoplay } from '../../api/lunbotu/lb.js'
	import { onMounted , ref } from 'vue'
	let list = ref([])
	let newlist = ref([])
	let songsid = ref([])
	let isshow = ref(false)
	let currenttime = ref(0)
	
	let play = ref(null)
	
	const innerAudioContext = uni.createInnerAudioContext() 
	
	let ScanAudio = (url) => {
		let	music = innerAudioContext
		isshow.value = !isshow.value
		if(!isshow.value){
			music.src = url
			music.seek(currenttime.value)
			music.play()
		}else{
			music.pause()
			currenttime.value = music.currentTime
		}
		
		music.onEnded(() => {
			music = null
		})
	}
	
	
	let playvideo = (i) => {
		// console.log(i.id);
		autoplay(i.id)
			.then(
				res => {
					console.log(res.data[0].url);
					let url = res.data[0].url
					ScanAudio(url)
				},
				err => {
					console.log(err);
				}
			)
	}
	
	
	onMounted(()=>{
		xunhuan()
			.then(
				res => {
					// console.log(res);
					// console.log(res.result[0].song.bMusic.id);
					for(let i = 0;i<res.result.length;i++){
						songsid.value.push(res.result[i].id)
					}
					// console.log(songsid);
					let state=-1;
					let newArr= res.result.reduce((total,item,index)=>{
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
	.cens{
		padding: 0px 20px;
		.t{
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.l{
				width: 380px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				>img{
					display: inline-block;
					width: 25px;
				}
				>p{
					display: inline-block;
					font-size: 25px;
				}
				>span{
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #e8ecf0;
					width: 80px;
					height: 30px;
					border-radius: 25px;
					>img{
						width: 20px;
					}
					>i{
						font-style: normal;
						font-size: 18px;
					}
				}
			}
			>img{
				width: 35px;
			}
		}
		.b{
			overflow-x: scroll;
			&::-webkit-scrollbar {
				width: 0 !important;
			}
			.bc{
				width: 3000px;
				display: flex;
				>ul{
					width: 750px;
					>li{
						display: flex;
						justify-content: space-between;
						padding: 5px 0px;
						>img{
							width: 15%;
							height: 100px;
							border-radius: 10px;
						}
						.po{
							width: 65%;
							height: 100px;
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
									background-color: #f1e9e6;
									border-radius: 5px;
									padding: 0px 5px;
									color: red;
								}
								>span{
									color: gray;
									padding: 0px 5px;
								}
							}
						}
						.qwe{
							width: 15%;
							height: 100px;
							display: flex;
							align-items: center;
							justify-content: center;
							>img{
								width: 40px;
								height: 40px;
							}
						}
					}
				}
			}
		}
	}
	
</style>