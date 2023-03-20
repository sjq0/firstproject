<template>
	<view class="bfcenter">
		<img ref="imgg" src="./img/zhen.png" alt="">
		<view class="pan">
			<span ref="bf">
				<img :src="img" alt="">
			</span>
		</view>
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { ref , onMounted , onUpdated , onBeforeUnmount } from 'vue'
	import mitts from '../../../mitt/mitt.js'
	import { useStore } from 'vuex'
	
	let id = ref(null)
	let img = ref('')
	let bf = ref('')
	let num = ref(-5)
	let imgg = ref(null)
	
	let musicstatus = ref(null)
	
	let store = useStore()
	
	onLoad((option) => {
		img.value = option.img
		id.value = option.id
		// console.log(option);
	})
	
	onMounted(()=>{
		
		// console.log(store.state.status);
		
		mitts.on('status',(data)=>{
			musicstatus.value = data
			// console.log(musicstatus.value);
			if(musicstatus.value){
				bf.value.style.animationPlayState = 'paused'
				imgg.value.style.transform = `rotate(-30deg)`
			}else{
				bf.value.style.animationPlayState = 'running'
				imgg.value.style.transform = `rotate(-5deg)`
			}
		})
	})
	
</script>

<style scoped lang="less">
	.bfcenter{
		width: 750px;
		height: 1000px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		>img{
			position: absolute;
			width: 200px;
			top: 20px;
			right: 200px;
			z-index: 9;
			transform: rotate(-30deg);
			transform-origin: 25px 25px;
			transition: all 1s linear 0s;
		}
		.pan{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			>span{
				width: 80%;
				height: 600px;
				background-color: black;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				animation: rotation 25s linear infinite;
				animation-play-state: paused;
				>img{
					width: 70%;
					border-radius: 50%;
				}
			}
			@keyframes rotation{
				from {-webkit-transform: rotate(0deg);}
				to {-webkit-transform: rotate(360deg);}
			}
		}
	}
	
</style>