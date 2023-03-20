<template>
	<view class="bfbottom">
		<view class="bfa">
			<img src="./img/爱心.png" alt="">
			<img src="./img/下载.png" alt="">
			<img src="./img/音乐2.png" alt="">
			<img src="./img/评论.png" alt="">
			<img src="./img/Android更多.png" alt="">
		</view>
		<view class="bfb">
			<van-progress pivot-text="" :percentage="num" color="#474a48" track-color="#2d2f2e" />
		</view>
		<view class="bfc">
			<img src="./img/随机.png" alt="">
			<img src="./img/左播放.png" alt="">
			<img class="begin" v-if="isshow.value ? false : true" @click="playvideo()" :src="isshow ? end : start" alt="">
			<img class="begin" v-if="isshow.value ? true : false" @click="playvideo()" :src="isshow ? start : end" alt="">
			<img src="./img/右播放.png" alt="">
			<img src="./img/更多.png" alt="">
		</view>
	</view>
</template>

<script setup>
	import { ref , onMounted } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { musicall , autoplay } from '../../../api/lunbotu/lb.js'
	import mitts from '../../../mitt/mitt.js'
	import { useStore } from 'vuex'
	import start from './img/暂停.png'
	import end from './img/播放2.png'
	
	
	//进度条百分比的数
	let num = ref(0)
	//接受页面的时间(毫秒)参数
	let time = ref(null)
	//接受页面发送过来的歌曲的id
	let id = ref(null)
	//接受从api中返回的歌曲的url
	let musicurl = ref(null)
	
	let isshow = ref(false)
	let currenttime = ref(0)
	
	let timer
	
	let store = useStore()
	
	//这首歌曲的分:秒
	let formatDuring = (time) => {
		let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
		let seconds = Math.round(time % (1000 * 60) / 1000);
		
		if (seconds < 10) {
			seconds = '0' + seconds
		}
		return minutes + ":" + seconds;
	}
	
	//一共多少秒
	let sec = (time) =>{
		let minutes = parseInt(time % (1000 * 60 * 60) / (1000 * 60));
		let seconds = Math.round(time % (1000 * 60) / 1000);
		
		if (seconds < 10) {
			seconds = '0' + seconds
		}
		return parseInt(minutes * 60)+ parseInt(seconds);
	}
	
	const innerAudioContext = uni.createInnerAudioContext() 
	
	//播放暂停歌曲
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
	
	let playvideo = () => {
		ScanAudio(musicurl.value)
		// console.log(time.value);
		
		//使用方法将毫秒数转换为分:秒数
		formatDuring(time.value)
		// console.log(formatDuring(time.value));
		//使用方法将毫秒数转换为一共多少秒
		sec(time.value)
		// console.log(sec(time.value));
		//每秒钟进度条走的距离
		let ones = (1/(time.value/100)) * 1000
		// console.log(ones);
		
		timer = setInterval(()=>{
			if(isshow.value){
				clearInterval(timer)
			}else{
				if(num.value <= 100){
					num.value+=ones
				}
				if(num.value > 100){
					clearInterval(timer)
				}
			}
		},1000)
		
		mitts.emit('status',isshow.value)
		
		// store.commit('status',isshow.value)
		
		mitts.emit('currenttimes',currenttime.value)
		// console.log(currenttime.value);
		// store.commit('currenttimes',currenttime.value)
	}
	
	//接受页面传过来的参数
	onLoad((option) => {
		id.value = option.id
	})
	
	onMounted(()=>{
		
		//根据歌曲的id获取歌曲的信息
		musicall(id.value)
			.then(
				res => {
					// console.log(res.data[0]);
					time.value = res.data[0].time
					musicurl.value = res.data[0].url
				},
				err => {
					console.log(err);
				}
			)
	})
	
</script>

<style scoped lang="less">
	.bfbottom{
		width: 100%;
		.bfa{
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			>img{
				width: 50px;
				height: 50px;
			}
		}
		.bfb{
			width: 80%;
			height: 30px;
			padding-top: 15px;
			margin: 0 auto;
		}
		.bfc{
			width: 100%;
			height: 80px;
			padding-bottom: 25px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			>img{
				width: 50px;
				height: 50px;
			}
			.begin{
				width: 80px;
				height: 80px;
			}
		}
	}
	
</style>