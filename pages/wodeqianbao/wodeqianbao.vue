<template>
	<view>
		<view class="wodeqianbao-banner">
			<image class="banner" :src="serverImgUrl+'static/images/wodeqianbao-banner.png'" mode="widthFix"></image>
			<view class="grid grid-col-2 yuer">
				<view class="grid-list grid-combine-col-2 grid-col-align-left-center">
					<text class="title">当前余额（元）</text>
					<text class="val">7000</text>
				</view>
			</view>
		</view>
		<view class="grid grid-col-2 yuermignxi">
			<view class="grid-list grid-combine-col-2 title-box">
				余额明细
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center contentlist-box">
					<view class="left grid-col-align-left-center">
						<text>收入</text>
						<text class="date">2019-06-22</text>
					</view>
					<view class="right">
						<text class="money">+3000</text>
					</view>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center contentlist-box">
					<view class="left grid-col-align-left-center">
						<text>收入</text>
						<text class="date">2019-06-22</text>
					</view>
					<view class="right">
						<text class="money">+3000</text>
					</view>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center contentlist-box">
					<view class="left grid-col-align-left-center">
						<text>收入</text>
						<text class="date">2019-06-22</text>
					</view>
					<view class="right">
						<text class="money">+3000</text>
					</view>
			</view>
		</view>
		<bigButonYellow big_button_yellow="下一步"/>
	</view>
</template>

<script>
	
	import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			bigButonYellow
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
			};
		}
	}
</script>

<style lang="scss">
.wodeqianbao-banner{
	width:90%;
	margin:1em auto;
	position: relative;
	.banner{
		width:100%;
		border-radius: 15px;
	}
	.yuer{
		position: absolute;
		left:1em;
		top:2em;
		.grid-list{
			color:#fff;
			.val{
				font-size:$uni-font-size-larger;
				margin-top:3px;
			}
		}
	}
}
.yuermignxi{
	width:90%;
	margin:0 auto;
	.title-box{
		height:40px;
		font-weight: 700;
	}
	.contentlist-box{
		height:50px;
		.date{
			font-size:$uni-font-size-sm;
			color:#ccc;
		}
		.money{
			color:#F21818;
			font-weight: 700;
		}
	}
}
</style>
