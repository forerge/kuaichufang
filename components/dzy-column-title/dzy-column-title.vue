<template>
	<view>
		<view class="column-title" :class="{borderTopHide:borderTopHide}" :style="{color:color,backgroundColor: backgroundColor,borderTopColor:borderTopColor||'#E7E7E7'}">
			<text>{{columnTitle}}</text>
			<text class="titleReminder">{{columnTitleReminder||''}}</text>
			<input type="text" class="input" :class="{inputShow:inputShow}" :placeholder="inputPlaceholder" placeholder-style="color:#AAAAAA;font-size:22rpx;" />
		</view>
	</view>
</template>

<script>
	export default {
		props:[
			'columnTitle',
			'columnTitleReminder',
			'color',
			'backgroundColor',
			'borderTopHide',
			'borderTopColor',
			'inputShow',
			'inputPlaceholder',
			]
	}
</script>

<style lang="scss" scoped>
	
.column-title{
		height:40px;
		background: #fff;
		line-height: 40px;
		font-size: $uni-font-size-base;
		text-indent: 30rpx;
		font-weight: 700;
		border-top:1em solid #E7E7E7;
		display:flex;
		flex-direction: row;
		align-items:center;
		&.borderTopHide{
			border-top:none;
		}
		.titleReminder{
			font-weight:normal;
			font-size:22rpx;
			color:#BFBFBF;
		}
		.input{
			display:none;
			border-bottom:1px solid #ccc;
			padding-left:1em;
		}
		.inputShow{
			display:block;
		}
		
	}
</style>
