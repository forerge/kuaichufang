<template>
	<view>
		<view class="grid grid-col-3 jiankong-list">
			<view class="grid-list grid-row-align-left">
			<image class="col1 row1 img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
			</view>
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
				<text  class="text grid-line-clamp-1">丽江苑 2室一厅一卫</text>
				<input type="text" value="" class="input" placeholder="请输入监控密码"/>
			</view>
		</view>
		
		<view class="grid grid-col-3 jiankong-list">
			<view class="grid-list grid-row-align-left">
			<image class="col1 row1 img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
			</view>
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
				<text  class="text grid-line-clamp-1">丽江苑 2室一厅一卫</text>
				<input type="text" value="" class="input" placeholder="请输入监控密码"/>
			</view>
		</view>
		
		<view class="grid grid-col-3 jiankong-list">
			<view class="grid-list grid-row-align-left">
			<image class="col1 row1 img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'"></image>
			</view>
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
				<text  class="text grid-line-clamp-1">丽江苑 2室一厅一卫</text>
				<input type="text" value="" class="input" placeholder="请输入监控密码"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				serverImgUrl:this.$commonConfig.serverImgUrl,
			};
		}
	}
</script>

<style lang="scss">
.grid.jiankong-list{
	padding:1em;
	width:90%;
	margin:1em auto 1em;
	border:1px solid #F1F1F1;
	border-radius: 8px;
	box-shadow: 2px 2px 5px #ccc;
	.grid-list{
		&:first-child{
			.img{
				width:226rpx;
				height:154rpx;
				border-radius: 20rpx;
			}
		}
		&:last-child{
			padding-left:1em;
			.input{
				box-sizing: border-box;
				width:75%;
				border:1px solid #CBCBCB;
				border-radius: 15px;
				padding-left:1em;
			}
		}
	}
}

</style>
