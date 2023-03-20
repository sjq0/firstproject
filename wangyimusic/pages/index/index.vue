<template>
	<view class="home">
		<view class="jianbian">
			<IndexTop />
			<LunBo />
		</view>
		<view class="">
			<Down />
		</view>
		<view class="cent">
			<cen />
		</view>
		<view class="qaz">
			<cens />
		</view>
		<view class="qweqw">
			<cent />
		</view>
		<view class="qweqww">
			<cenf />
		</view>
	</view>
</template>

<script setup>
	import IndexTop from '../../component/indextop/indextop'
	import LunBo from '../../component/indexlunbo/lunbo.vue'
	import Down from '../../component/lbdown/lbdown.vue'
	import cen from '../../component/indexcenter/indexcenter.vue'
	import cens from '../../component/indexcenter/indexcensecond.vue'
	import cent from '../../component/indexcenter/indexthird.vue'
	import cenf from '../../component/indexcenter/indexcenf.vue'
	
</script>

<style scoped lang="less">
	.home{
		width: 750px;
		.jianbian{
			background: linear-gradient(to bottom right , #e7e5fa , #f8ebf5);
			padding: 0;
		}
		.cent{
			padding-bottom: 30px;
			border-bottom: 1px solid #dad9e1;
		}
		.qaz{
			padding-bottom: 30px;
			border-bottom: 1px solid #dad9e1;
		}
		.qweqw{
			padding-bottom: 30px;
			border-bottom: 1px solid #dad9e1;
		}
		.qweqww{
			padding-bottom: 30px;
			// border-bottom: 1px solid #dad9e1;
		}
	}
</style>
