<template>
	<view class="geci">
		<view class="ci" ref="qqq">
			<p v-for="(item,index) in allps" :key="index">
				{{item}}
			</p>
		</view>
	</view>
</template>

<script setup>
	import { getgeci } from '../../../api/lunbotu/lb.js'
	import { onLoad } from '@dcloudio/uni-app'
	import { ref , onMounted , watchEffect } from 'vue'
	import mitts from '../../../mitt/mitt.js'
	
	let id = ref(null)
	let qqq = ref(null)
	let allps = ref([])
	let times = ref([])
	let endtime = ref(null)
	let currenttime = ref(0)
	let currenttimeindex = ref(0)
	let alltime = ref([])
	let changetime =ref([])
	let changetimes = ref([])
	
	onLoad((option) => {
		// console.log(option.time);
		endtime.value = Number(option.time)
		id.value = option.id
	})
	
	watchEffect(() => {
		for(let i = 1; i<alltime.value.length;i++){
			if(currenttime.value>alltime.value[i-1]&&currenttime.value<alltime.value[i]){
				currenttimeindex.value = i
			}
		}
		// console.log(currenttimeindex.value);
		// console.log(allps.value[6]);
		// if(!allps.value){
		// 	// allps.value[6].style.color = 'red'
		// 	console.log(123);
		// 	console.log(qqq.value.$el);
		// }
	})
	
	onMounted(() => {
		
		mitts.on('currenttimes',data => {
			// console.log(data);
			currenttime.value = Number((data*1000+'').split('.')[0])
			// console.log(currenttime.value);
		})
		
		
		setTimeout(()=>{
			console.log(qqq.value.$el.children);
			qqq.value.$el.children[currenttimeindex].style.color = 'white'
		},5)
		
		// if(allps.value != null){
		// 	console.log(123);
		// 	let a = Array.from(qqq.value.$el.children)
		// 	console.log(a);
		// 	// a[5].style.color = 'red'
		// }
		
		getgeci(id.value)
			.then(
				res =>{
					let str = res.lrc.lyric
					// console.log(str);
					allps.value = str.split('\n').map(item => item.slice(11))
					times.value = str.split('\n').map(item => item.slice(1,9))
					// console.log(times.value);
					let str5 = times.value.map(item => item.split('.'))
					str5.pop(str5.length)
					// console.log(str5);
					let str6 = str5.map(item => item[0].split(':'))
					// console.log(str6);
					//分钟转毫秒
					let str7 = str6.map(item => item[0] * 60 * 1000)
					// console.log(str7);
					//秒转毫秒
					let str8 = str6.map(item => item[1] * 1000)
					// console.log(str8);
					//毫秒数
					let str9 = str5.map(item => item[1] * 1)
					// console.log(str9);
					
					for(let i = 0; i < str5.length; i++){
						alltime.value.push(str7[i] + str8[i] + str9[i])
					}
					alltime.value.push(endtime.value)
					// console.log(alltime.value);
					
					alltime.value.reduce((prev,next) => {
						changetime.value[changetime.value.length] = next - prev
						return next
					})
					// console.log(changetime.value);
					
					changetimes = changetime.value.map(item => item/1000)
					// console.log(changetimes.value);
					console.log(qqq.value.$el.children.length);
					
				},
				err =>{
					console.log(err);
				}
			)
		
		
	})
	
	
	
</script>

<style scoped lang="less">
	.geci{
		width: 750px;
		height: 1000px;
		display: flex;
		align-items: center;
		justify-content: center;
		.ci{
			height: 80%;
			color: gray;
			overflow: scroll;
			&::-webkit-scrollbar {
				width: 0!important;
			}
			>p{
				text-align: center;
				font-size: 28px;
				padding: 15px 0px;
				// background: linear-gradient(90deg, #f29914 15%, #0bbbe3 76%);
				// background-clip: text;
				// -webkit-background-clip: text;
				// color: transparent;
				// animation: gradient 3s linear infinite;
				// @keyframes gradient {
				//     to{
				// 		// background: linear-gradient(90deg, #f29914 15%, #0bbbe3 76%);
				// 		background: white;
				// 		background-clip: text;
				// 		-webkit-background-clip: text;
				// 		color: transparent;
				//     }
				// 	from{
				// 		background: linear-gradient(90deg, #f29914 15%, #0bbbe3 76%);
				// 		background-clip: text;
				// 		-webkit-background-clip: text;
				// 		color: transparent;
				// 	}
				// }
			}
			
		}
	}
	
</style>