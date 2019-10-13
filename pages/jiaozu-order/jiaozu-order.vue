<template>
	<view>
		<view class="grid grid-col-3 pro-order">
					<view class="grid-list grid-row-align-left-center">
		<image class="col1 row1 img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
						<view  class="col2 row1 grid-line-clamp-1">合租.运河小区 3居室 1厅1卫</view>
						<view  class="col2 row2"><text class="t1">门牌号：</text><text class="t2">404</text></view>
						<view  class="grid-row-align-space-between-center col2 row3"><text  class="t1">¥2000</text> <text  class="t2">立即缴费</text></view>
					</view>
				</view>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				serverImgUrl:this.$commonConfig.serverImgUrl,
			}
		},
		methods: {
			payMoney(){
				console.log('aaa')
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/order-pay";
</style>
