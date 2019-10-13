<template>
	<view>
			<view class="grid grid-col-2 wodeshiyou">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">联系方式：   </text><text class="text">123****789</text>
							</view>
							<view class="xinxi-list">
								<text class="text">门牌号　：  </text><text class="text">401 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">联系方式：   </text><text class="text">123****789</text>
							</view>
							<view class="xinxi-list">
								<text class="text">门牌号　：  </text><text class="text">401 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">联系方式：   </text><text class="text">123****789</text>
							</view>
							<view class="xinxi-list">
								<text class="text">门牌号　：  </text><text class="text">401 </text>
							</view>
						</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				 serverImgUrl:this.$commonConfig.serverImgUrl,
			};
		}
	}
</script>

<style lang="scss">
.wodeshiyou{
	width:90%;
	margin:0 auto;
	.grid-list{
		width:100%;
		box-shadow: 0 2px 3px rgba(0,0,0,0.3);
		height:200rpx;
		margin-top:1em;
		border:1px solid #F8F8F8;
		padding:1em 0;
		.img{
			width:100rpx;
			height:100rpx;
			border-radius: 100px;
			margin:0 2em;
		}
		.xinxi-box{
			height:100%;
			.xinxi-list{
				.text:last-child{
					color:#999999;
				}
			}
		}
	}
}
</style>
