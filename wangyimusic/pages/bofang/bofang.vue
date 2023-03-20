<template>
	<view class="bfbody">
		<bofangtop />
		<view @click="changepage" >
			<keep-alive>
				<component :is=" i ? bofangcenter : bofangcentergeci"></component>
			</keep-alive>
		</view>
		<bofangbottom />
	</view>
</template>

<script setup>
	import bofangtop from '../../component/bofang/bofangtop/bofangtop.vue'
	import bofangcenter from '../../component/bofang/bofangcenter/bofangcenter.vue'
	import bofangcentergeci from '../../component/bofang/bofangcenter/bofangcentergeci.vue'
	import bofangbottom from '../../component/bofang/bofangbottom/bofangbottom.vue'
	import { ref } from 'vue'
	
	let i = ref(true)
	
	let changepage = () => {
		// console.log(i.value);
		i.value = !i.value
	}
	
</script>

<style scoped lang="less">
	.bfbody{
		// height: 1334px;
		background:linear-gradient(#020202,#6d6563 30%,#010101)
	}
	
</style>