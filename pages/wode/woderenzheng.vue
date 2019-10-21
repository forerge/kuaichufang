<template>
	<view>
		<view class="house-person" >房源需认证才可展示，任意选一种即可</view>
		
		<block v-for="(val,index) in renzheng">
			<view class="grid grid-col-2 renzheng">
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
					<view class="left grid-row-align-space-between-center">
						<image class="img" :src="serverImgUrl+'renzheng01.png'" mode="widthFix"></image>
						<view class="text-box grid-col-align-space-between-center">
							<text class="text">{{val['s_level']}}</text>
							<text class="text" v-if="val['level'] == 3 ">{{val['h_qv']}}--{{val['h_addr']}}</text>
							<text class="text" v-if="val['level'] == 4">{{val['h_qv']}}--{{val['h_addr']}}</text>
						</view>
					</view>
					<view class="right grid-col-align-center">
						<text  class="text">{{val['s_status']}}</text>
						<text  class="text">删除</text>
					</view>
				</view>
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
			uni.request({
				url: this.serverApiUrl+'home/user/kuai_renzheng', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:uni.getStorageSync('weijia_pro')['u_id'],
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data)
						this.renzheng = res.data;
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

<style lang="scss" scoped>
	.house-person{
		height:100rpx;
		line-height:100rpx;
		text-indent: 2em;
		font-size:$uni-font-size-sm;
	}
	.grid.renzheng{
		width:90%;
		margin:0 auto;
		.grid-list{
			height:140rpx;
			border-bottom: 1px solid #F0F0F0;
			.left{
				.img{
					width:56rpx;
				}
				.text-box{
					margin-left:1em;
					.text:nth-child(1){
						color:#333;
					}
					.text:nth-child(2){
						color:#666;
						margin-top:0.5em;
					}
				}
			}
			.right{
				.text:nth-child(1){
					color:#666;
				}
				.text:nth-child(2){
					color:red;
					margin-top:0.5em;
					padding:1px 10px;
					border-radius: 10px;
					border:1px solid #ccc;
				}
			}
		}	
	}
	
</style>
