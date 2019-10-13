<template>
	<view>
		<image class="logoImg" :src="serverImgUrl+'logo.png'" mode="widthFix"></image>
		
		<view class="grid grid-col-2 form">
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<input type="text" value=""  placeholder="请输入手机号"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<input type="text" value=""  placeholder="请输入新密码"/>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<input type="text" value=""  placeholder="请输入验证码"/>
				<text class="regCode">获取验证码</text>
			</view>
		</view>
		
		
		<bigButonYellow big_button_yellow="确认重置密码"/>
	</view>
</template>

<script>
		import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			bigButonYellow,
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
			};
		}
	}
</script>

<style lang="scss" scoped>
.logoImg{
	display: block;
	width:120px;
	margin:2em auto;
}
.grid.form{
	width:475rpx;
	margin:0 auto;
		.grid-list{
			position: relative;
			margin-top:1em;
			margin-bottom:1em;
			input[type='text']{
				width:100%;
				display: block;
				box-sizing: border-box;
				padding:3px 5em 3px 6px;
				border-bottom:1px solid #707070;
			}
			.regCode{
				position: absolute;
				right:0;
				width:75px;
				text-align: center;
				color:#E98784;
				fon-size:$uni-font-size-sm;
			}
		}
}


</style>
