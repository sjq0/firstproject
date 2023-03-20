<template>
	<view class="lbdown">
		<ul>
			<li v-for="(item,index) in msg" :key="index">
				<img :src="item.img" alt="">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</view>
</template>

<script setup>
	import img3 from '@/component/lbdown/img/歌单.png'
	import img4 from '@/component/lbdown/img/排行榜.png'
	import img1 from '@/component/lbdown/img/日历9.png'
	import img2 from '@/component/lbdown/img/收音机.png'
	import img5 from '@/component/lbdown/img/书.png'
	import img6 from '@/component/lbdown/img/直播.png'
	import img7 from '@/component/lbdown/img/专辑.png'
	import img8 from '@/component/lbdown/img/我的关注.png'
	import img9 from '@/component/lbdown/img/音乐.png'
	import img10 from '@/component/lbdown/img/游戏.png'
	import { ref } from 'vue'
	
	let msg = ref([
		{
			img:img1,
			title:'每日推荐'
		},
		{
			img:img2,
			title:'私人FM'
		},
		{
			img:img3,
			title:'歌单'
		},
		{
			img:img4,
			title:'排行榜'
		},
		{
			img:img5,
			title:'有声书'
		},
		{
			img:img6,
			title:'直播'
		},
		{
			img:img7,
			title:'专辑'
		},
		{
			img:img8,
			title:'关注新歌'
		},
		{
			img:img9,
			title:'一歌一遇'
		},
		{
			img:img10,
			title:'游戏专区'
		}
		
	])
</script>

<style scoped lang="less">
	
	.lbdown{
		padding: 20px 0px 20px;
		width: 750px;
		overflow-x: scroll;
		// &::-webkit-scrollbar {
		// 	width: 0 !important;
		// }
		>ul{
			width: 200%;
			height: 80px;
			>li{
				float: left;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				width: 150px;
				>img{
					width: 50px;
				}
				>span{
					display: block;
					width: 150px;
					color: #7c7d81;
					text-align: center;
					padding-top: 10px;
				}
			}
		}
	}
	// .a::-webkit-scrollbar{
	// 	display: none;
	// }
</style>