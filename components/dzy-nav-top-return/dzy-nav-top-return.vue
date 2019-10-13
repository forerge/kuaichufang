<template>
	<view>
		<view :style="{height:(45+statusBarHeight)+'px'}"></view>
		<view class="dzy-navigation-top" :style="{paddingTop:statusBarHeight+'px'}">
			<view class="dzy-navigation">
				<text class="title">{{title}}</text>
				<navigator class="dzy-navigation-left-return" open-type="navigateBack" hover-class="none">
					&lsaquo;
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
			statusBarHeight: this.$statusBarHeight//赋值状态栏高度
			}
		}
	}
</script>

<style lang="scss">
	.dzy-navigation-top{
	position: fixed;
	z-index:9999;
	top:0;
	width:100%;
	background: #F8F8F8;
	color:black;
	.dzy-navigation{
		position: relative;
		width:100%;
		height:45px;
		line-height: 45px;
		text-align: center;
		.title{
			font-size: $uni-font-size-base;
			font-weight: 700;
		}
		.dzy-navigation-left-return{
			position: absolute;
			left:0;
			top:0;
			width:45px;
			font-size: $uni-font-size-larger;
			color:black;
		}
	}
}
</style>
