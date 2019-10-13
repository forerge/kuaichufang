<template>
	<view>
		<view class="grid grid-col-9 pro-order">
			<view class="grid-list grid-combine-col-3 grid-row-align-left-center">
				<image class="img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
			</view>
			<view class="grid-list grid-combine-col-4 grid-col-align-right-space-between">
				<view class="grid-line-clamp-1"><text class="text1">姓　　名：</text><text class="text2">新一</text></view>
				<view class="grid-line-clamp-1"><text class="text1">电　　话：</text><text class="text2"> 123****789</text></view>
				<view class="grid-line-clamp-1"><text class="text1">预约时间：</text><text class="text2">2019-05-22</text></view> 
			</view>
			<view  class="grid-list grid-combine-col-2 grid-row-align-center-bottom">
				<text class="text yellow">待预约</text>
			</view> 
		</view> 
		
		<view class="grid grid-col-9 pro-order">
			<view class="grid-list grid-combine-col-3 grid-row-align-left-center">
				<image class="img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
			</view>
			<view class="grid-list grid-combine-col-4 grid-col-align-right-space-between">
				<view><text class="text1">姓　　名：</text><text class="text2">新一</text></view>
				<view><text class="text1">电　　话：</text><text class="text2"> 123****789</text></view>
				<view><text class="text1">预约时间：</text><text class="text2">2019-05-22</text></view> 
			</view>
			<view  class="grid-list grid-combine-col-2 grid-row-align-center-bottom">
				<text class="text green">已预约</text>
			</view> 
		</view> 
	</view>
</template> 
 
<script>
	export default {
		data() {
			return {
				serverImgUrl:this.$commonConfig.serverImgUrl
			} 
		}
		
	}
</script>
 
<style lang="scss">
.grid.pro-order{
	width:98%;
	margin:1em auto 1em;
	border:1px solid #F1F1F1;
	border-radius: 8px;
	box-shadow: 2px 2px 5px #ccc;
	.grid-list{
		padding:1em 0;
		&:nth-child(1){
			.img{
				width:100%;
				height:154rpx;
				border-radius: 20rpx;
			}
		}
		&:nth-child(2){ 
			 font-size:$uni-font-size-sm;
			 padding-left:1em;
			.text2{
				 color:#A6A6A6;
			}
		}
		&:nth-child(3){
			.text{ 
				padding:3px 10px;
				border-radius: 6px;
				font-size:$uni-font-size-sm;
			}
			.yellow{
				 color:#333;
				 background:#FCE649;
			}
			.green{
				 color:#fff;
				 background:#67E2B3;
			}
		}	
	}
}
</style>
