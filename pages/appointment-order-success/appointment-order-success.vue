<template>
	<view>
		<view class="yuyue_success_img">
			<image class="img" :src="serverImgUrl+'static/images/weijia_yuyue.png'"  mode="widthFix"></image>
		</view>
		<view class="yuyue_success_litter" >该预约单稍后将以短息的形式发送给你</view>
		<bigButonYellow big_button_yellow="继续找房"/>
		<view class="big_button_while" >查看订单</view>
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
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.yuyue_success_img{
	height:160rpx ;
	width:160rpx;
	border-radius: 50px;
	margin:0 auto;
	margin-top:64rpx;
}
.yuyue_success_img .img{
	width:100%;
	height:100%;
}
.yuyue_success_litter{
	height: 125rpx;
	font-size: 12px;
	line-height: 97rpx;
	text-align: center;
	color: #000;

}
.big_button_while{
	height:64rpx;
	line-height: 64rpx;
	font-size: 16px;
	border:1px solid #7F7F7F;
	color:#020001;
	border-radius: 30px;
	width:475rpx;
	text-align: center;
	margin:0 auto;
}

</style>
