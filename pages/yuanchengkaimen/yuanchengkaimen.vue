<template>
	<view>
		<view class="grid grid-col-3 pro-order">
					<view class="grid-list grid-row-align-left-center">
					<image class="col1 row1 img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
						<view  class="col2 row1 grid-line-clamp-1">合租.运河小区 3居室 1厅1卫</view>
						<view  class="col2 row2"><text class="t1">门牌号：</text><text class="t2">404</text></view>
						<view  class="col2 row2"><text class="t1">门锁密锁：</text><text class="t2">123455</text></view>
					</view>
				</view>
				<bigButonYellow big_button_yellow="立即开门"/>
	</view>
</template>

<script>
	import bigButonYellow from "../../components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{ 
			bigButonYellow
		},
		data() {
			return {
				serverImgUrl:this.$commonConfig.serverImgUrl,
			};
		}
	}
</script>

<style lang="scss">
		@import "../../common/order-pay";
</style>
