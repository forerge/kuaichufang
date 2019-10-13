<template>
	<view>
		<view class="house-person" >房源需认证才可展示，任意选一种即可</view>
		
		<block v-for="(val,index) in renzheng">
			<view class="house-fenlei" >
				<view class="house-left">
					<image class="img" :src="serverImgUrl+'renzheng01.png'" mode="widthFix"></image>
				</view>
				<view class="house-center">
					<view class="house-c-top" >{{val['s_level']}}</view>
					<view class="house-c-bottom" v-if="val['level'] == 3 ">{{val['h_qv']}}--{{val['h_addr']}}</view>
					<view class="house-c-bottom" v-if="val['level'] == 4">{{val['h_qv']}}--{{val['h_addr']}}</view>
					<!-- <view class="house-c-bottom" v-else-if="val['s_status'] == '拒绝'">{{val['s_refuse']}}</view> -->
					<!-- <view class="house-c-bottom" v-else>请耐心等待</view> -->
				</view>
				<view class="house-right" >{{val['s_status']}}</view>
			</view>
		</block>
		<!-- <view class="house-fenlei" >
			<view class="house-left">
				<image class="img" :src="serverImgUrl+'renzheng02.png'" mode="widthFix"></image>
			</view>
			<view class="house-center">
				<view class="house-c-top" >100元保证金</view>
				<view class="house-c-bottom">若无违规，房源下架后将原路退还</view>
			</view>
			<view class="house-right" >立即担保</view>
		</view> -->

	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				renzheng:''
			}
		} ,
		onLoad(){
			var role_woderenzheng = uni.getStorageSync('weijia_role')
			uni.request({
				
				url: this.serverApiUrl+'home/user/kuai_renzheng', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:uni.getStorageSync('weijia_pro')['u_id'],
					role:role_woderenzheng
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data)
						this.renzheng = res.data;
						// this.tuijianContent= res.data['house'];
						// this.banner = res.data['banner']
					}else{ 
						// console.log(res);
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style lang="scss">
	.house-person{
		height: 40rpx;
		line-height: 60rpx;
		font-size: $uni-font-size-sm;
		text-indent: 30rpx;
		color: #999;
	}
	.house-fenlei{
		width: 100%;
		height: 140rpx;
		border-bottom: 1px solid #F0F0F0;
		display: flex;

		}
	.house-left{
		height: 140rpx;
		width: 80rpx;
		text-align: right;
		flex-grow: 0;
	}
	.house-left .img{
		width:56rpx;
		margin-top: 38rpx;

	}
	.house-center{
		height:140rpx;
		flex-grow:1;
	}
	.house-c-top{
		font-size: 24rpx;
		height: 70rpx;
		line-height: 100rpx;
		color: #333;
		font-weight: bold;
		text-indent: 20rpx;

	}
	.house-c-bottom{
		font-size: $uni-font-size-sm;
		height:70rpx;
		line-height: 40rpx;
		color:#666;
		text-indent: 20rpx;
	}
	.house-right{
		height: 140rpx;
		line-height: 140rpx;
		padding-right:1em;
		flex-grow: 0;
		color: #666;

	}
</style>
