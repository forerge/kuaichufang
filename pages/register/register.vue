<template>
	<view>
		<image class="logoImg" :src="serverImgUrl+'logo.png'" mode="widthFix"></image>
		<form @submit="formsubmit">
			<view class="grid grid-col-2 form">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" name="tel" placeholder="请输入手机号"/>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" name="pwd" placeholder="请输入密码"/>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" name='captcha' value="" @input="change_captcha" placeholder="请输入验证码"/>
					<text class="regCode">获取验证码</text>
				</view>
			</view>
			
			<view style="padding:1em 0;background:#fff;">
				<button form-type="submit" class="big_button_yellow">注册</button>
			</view>
			
		</form>	
	</view>
</template>

<script>
		// import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			// bigButonYellow,
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
			};
		},
		methods: {
			change_captcha(e){
				this.captcha = e.detail.value
			},
			formsubmit(e){
				var	me = this;
				// var tel = e.detail.value.tel;
				// var pwd = e.detail.value.pwd;
				// var captcha = e.detail.value.captcha;
				// console.log(e.detail.value);
				uni.request({
					url: this.serverApiUrl + 'home/login/kuai_register', //请求url
					method: 'POST', //请求方式
					// data: {tel:tel,pwd:pwd,captcha:captcha}, //传递的数据
					data: e.detail.value, //传递的数据
					success: res => {
						//成功执行回调函数
						if (res.statusCode == 200) {
							var result = res.data;
							// console.log(result);
							uni.setStorageSync('weijia_pro', result);
							uni.setStorageSync('weijia_status', true);
							uni.setStorageSync('weijia_role', 1);
							uni.switchTab({
							    url: '/pages/index/index'
							});
						} else {
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}, 
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
.grid.otherBtnBox{
	width:475rpx;
	margin:0 auto;
	margin-top:-1.5em;
	.grid-list{
		.text{
			color:#626261;
		}
	}
}
.big_button_yellow{
		height:64rpx;
		font-size: 16px;
		line-height: 64rpx;
		width:475rpx;
		margin:0 auto;
		color:#362F0C;
		background:#FDE648;
		border-radius: 30px;
		text-align: center;
		margin-bottom: 32rpx;
	}

</style>
