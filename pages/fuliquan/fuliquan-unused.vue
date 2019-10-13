<template>
	<view>
		<view class="grid grid-col-3 header">
			<view class="grid-list grid-combine-col-3 grid-row-align-space-between-center">
				<text class="text" @tap="tabDiscountCoupon(0)" :class="{active:curIndex==0}">未使用(2)</text>
				<text class="text" @tap="tabDiscountCoupon(1)" :class="{active:curIndex==1}">已使用(2)</text>
				<text class="text" @tap="tabDiscountCoupon(2)" :class="{active:curIndex==2}">已赠送(1)</text>
			</view>
		</view>
		
		<!-- 未使用券 -->
		<view class="contents" :class="{active:curIndex==0}">
			<view class="list">
				<image class="img" :src="serverImgUrl+'static/images/yellow-bg.png'" ></image>
				<view class="grid grid-col-2">
					<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom">
						未使用
					</view>
					<view class="grid-list grid-row-align-center">
						<text class="title">福利券</text>
					</view>
					<view class="grid-list grid-col-align-center-space-around">
						<text>可抵扣房费或赠送</text>
						<text>租房奖励</text>
						<text class="textBorder">使用</text>
					</view>
				</view>
			</view>
			<view class="list">
				<image class="img" :src="serverImgUrl+'static/images/yellow-bg.png'" ></image>
				<view class="grid grid-col-2">
					<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom">
						未使用
					</view>
					<view class="grid-list grid-row-align-center">
						<text class="title">福利券</text>
					</view>
					<view class="grid-list grid-col-align-center-space-around">
						<text>可抵扣房费或赠送</text>
						<text>租房奖励</text>
						<text class="textBorder">使用</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 已使用券 -->
		<view class="contents unused" :class="{active:curIndex==1}">
			<view class="list">
				<image class="img" :src="serverImgUrl+'static/images/gray-bg.png'" ></image>
				<view class="grid grid-col-2">
					<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom">
						已使用
					</view>
					<view class="grid-list grid-row-align-center">
						<text class="title">福利券</text>
					</view>
					<view class="grid-list grid-col-align-center-space-around">
						<text>可抵扣房费或赠送</text>
						<text>租房奖励</text>
						<text class="textBorder">已使用</text>
					</view>
				</view>
			</view>
			<view class="list">
				<image class="img" :src="serverImgUrl+'static/images/gray-bg.png'" ></image>
				<view class="grid grid-col-2">
					<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom">
						已使用
					</view>
					<view class="grid-list grid-row-align-center">
						<text class="title">福利券</text>
					</view>
					<view class="grid-list grid-col-align-center-space-around">
						<text>可抵扣房费或赠送</text>
						<text>租房奖励</text>
						<text class="textBorder">已使用</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 已赠送券 -->
		<view class="contents" :class="{active:curIndex==2}">
			<view class="list">
				<image class="img" :src="serverImgUrl+'static/images/gray-bg.png'" ></image>
				<view class="grid grid-col-2">
					<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom">
						已赠送
					</view>
					<view class="grid-list grid-row-align-center">
						<text class="title">福利券</text>
					</view>
					<view class="grid-list grid-col-align-center-space-around">
						<text>可抵扣房费或赠送</text>
						<text>租房奖励</text>
						<text class="textBorder">已赠送</text>
					</view>
				</view>
			</view>
		</view>
		<view class="grid grid-col-2 give" :class="{active:curIndex==0}">
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<input class="input" type="text" value="" placeholder="请输入对方手机号"/>
				<text class="btn">赠送</text>
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
				curIndex:0
			};
		},
		methods:{
			tabDiscountCoupon(index){
				this.curIndex=index;
			}
		}
	}
</script>

<style lang="scss">
.header{
	width:90%;
	margin: 0 auto;
	.grid-list{
		height:100rpx;
		.text{
			padding-bottom:6px;
			border-bottom:1px solid #fff;
			&.active{
			color:#FC9940;
			border-bottom:1px solid #FC9940;
			}
		}
	}
}
.contents{
	width:90%;
	margin:0 auto;
	display:none;
	&.active{
	display:block;
	}
	.list{
		height:160px;
		position:relative;
		margin-bottom:2em;
		.img{
			width:100%;
			height:100%;
		}
		.grid{
			position: absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			color:#fff;
			.grid-list{
				&:first-child{
					height:20%;
					padding-left:1.5em;
				}
				&:not(:first-child){
					.title{
						font-size:2em;
					}
					height:80%;
					padding-right:1.5em;
					.textBorder{
						padding:3px 1.5em;
						border:1px solid #fff;
						border-radius: 12px;
					}
				}
			}
		}
	}
}

.grid.give{
	width:90%;
	margin:0 auto;
	display:none;	
	&.active{	
		display:block;	
		}
	.grid-list{
		height:100rpx;
		.input{
			box-sizing: border-box;
			border:1px solid #D2D2D2;
			border-right:none;
			height:70rpx;
			width:75%;
			padding-left:1em;
		}
		.btn{
			height:70rpx;
			line-height:70rpx;
			width:25%;
			text-align: center;
			background:#FC881C;
			color:#fff;
		}
	}
}
</style>
