<template>
	<view class="page">
		<view class="grid grid-col-4 filter-haofang">
			<view class="grid-list grid-combine-col-4 grid-row-align-space-between-center">
				<text class="text active">上海</text>
				<multiSelectorPicker :range="youfangwufang" @bindChange="bindChange">
					<text class="text" slot="html" :class="{active:curTitleActive==1}">{{youfangwufang[0][pickerValue[0]]||'请选择'}}</text>
				</multiSelectorPicker>
				<text class="text" @click='toShow(2)' :class="{active:curTitleActive==2}">筛选	&or;</text>
			</view>
		</view>
		
		<!-- 筛选 -->
		<view class="mask saixuan-mask" :class="{active:curIndex==2}">
			<view class="saixuan-frame">
				<view class="grid grid-col-2 grid01">
					<view class="grid-list grid-combine-col-2 grid-col-align-left-center">
						筛选
					</view>
				</view>
				<view class="fangyuan-option fangyuan-option01">
					<view class="title">
						<text>性别</text>
					</view>
					<view class="grid grid-col-3">
						<view class="grid-list grid-row-align-center">
							<text class="option">男</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">女</text>
						</view>
					</view>
				</view>
				<view class="fangyuan-option">
					<view class="title">
						<text>标签</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">限女生</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">限男生</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">一个人住</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">爱干净</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">安静</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">作息正常</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">工作稳定</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">不吸烟</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">不养宠物</text>
						</view>
					</view>
				</view>
				
				<view class="grid grid-col-2 btn-group">
					<view class="grid-list grid-combine-col-2 grid-row-align-space-around-center">
						<text class="btn" @tap="toHide">重置</text>
						<text class="btn active" @tap="toHide">确定</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="grid grid-col-3 zhaoshiyou  grid-right-space">
			<view class="grid-list grid-combine-col-3 grid-row-align-left-bottom row1">
				<navigator url="./zhaoshiyou-xiangqing" class="grid-row-align-left-center" hover-class="none">
				<image class="head" :src="serverImgUrl+'static/images/head.png'"></image>
				<view class="my">
					<view class="nickname">昵称</view>
					<view class="time">一小时前</view>
				</view>
				<text class="shiming">已实名</text>
				</navigator>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-col-align-left-center row2">
				<text class="title">有房.找一个合得来的室友</text>
				<view class="dingwei grid-row-align-left-center">
					<image class="icon" :src="serverImgUrl+'static/images/dingwei.png'"></image>
					<text class="address">奉贤.运河小区    男女不限</text>
				</view>
			</view>
			<view class="grid-list grid-col-align-right-center row2">
				<text class="month-price">2300 元/月</text>
			</view>
			<view class="grid-list grid-combine-col-3 row3">
				<scroll-view scroll-x="true" class="scroll-left-right">
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				 </scroll-view>
			</view>
			
			<view class="grid-list grid-combine-col-3 row4">
				<text class="preview-count">小时前.20浏览</text>
			</view>
		</view>
		
		<view class="grid grid-col-3 zhaoshiyou  grid-right-space">
			<view class="grid-list grid-combine-col-3 grid-row-align-left-bottom row1">
				<navigator url="./zhaoshiyou-xiangqing" class="grid-row-align-left-center" hover-class="none">
				<image class="head" :src="serverImgUrl+'static/images/head.png'"></image>
				<view class="my">
					<view class="nickname">昵称</view>
					<view class="time">一小时前</view>
				</view>
				<text class="shiming">已实名</text>
				</navigator>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-col-align-left-center row2">
				<text class="title">有房.找一个合得来的室友</text>
				<view class="dingwei grid-row-align-left-center">
					<image class="icon" :src="serverImgUrl+'static/images/dingwei.png'"></image>
					<text class="address">奉贤.运河小区    男女不限</text>
				</view>
			</view>
			<view class="grid-list grid-col-align-right-center row2">
				<text class="month-price">2300 元/月</text>
			</view>
			<view class="grid-list grid-combine-col-3 row3">
				<scroll-view scroll-x="true" class="scroll-left-right">
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				<image class="fang-img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
				 </scroll-view>
			</view>
			
			<view class="grid-list grid-combine-col-3 row4">
				<text class="preview-count">小时前.20浏览</text>
			</view>
		</view>
	</view>
</template>

<script>
	import multiSelectorPicker from "@/components/dzy-multiSelector-picker/dzy-multiSelector-picker.vue";
	export default {
		components:{
			multiSelectorPicker
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				 curTitleActive:0,
				 curIndex:0,
				 youfangwufang:[['不限','有房找室友','无房找室友']],
			};
		},
		methods: {
			//tab切换
			toShow(index){
				this.curIndex=index;			
				this.curTitleActive=index;			
			},
			toHide(){
				this.curIndex=0;			
			},
			bindChange: function(value) {
			 this.curTitleActive = 1;
			 this.pickerValue = value;
			 }
		}
	}
</script>

<style lang="scss">
	.page{
		width:90%;
		margin:0 auto;
	}

.grid.filter-haofang{
		width:90%;
		margin:0 auto;
		.grid-list{
			height:120rpx;
			.text{
				font-weight:500;
				font-size:$uni-font-size-lg;
				color:#999999;
				&.active{
					color:#333;
				}
			}
		}
	}
	.saixuan-mask,.zhujin-mask,.quyu-mask{
		&.active{
			display:block;
		}
		display:none;
		.saixuan-frame{
			position: absolute;
			width:100%;
			box-sizing: border-box;
			background:#fff;
			padding:0 1em;
			bottom:0;
			height:75%;
			overflow:scroll;
			.grid01{
				.grid-list{
					height:30px;
					&.first-child{
						height:35px;
					}
				}
			}
			.fangyuan-option{
				.title{
					margin-top:1em;
					text-align: center;
				}
				&.fangyuan-option01{
					.title{
						margin-top:2em;
					}
				}
				.grid-list{
					height:100rpx;
					.option{
						padding:0.5em 2em;
						border-radius: 1em;
						color:#9D9D9D;
						border:1px solid #DDDDDD;
						font-size:$uni-font-size-sm-minus;
					}
				}
			}
			.btn-group{
				padding-bottom:50px;
				.grid-list{
					height:150rpx;
					.btn{
						padding:0.3em 2em;
						background:#fff;
						border:1px solid #DBDBDB;
						border-radius:1em;
						&.active{
							background:#FDE64A;
							border:1px solid #FDE64A;
						}
					}
				}
			}
		}
	}
.zhaoshiyou{ 
	.grid-list{
		&.row1{
			height:70px !important;
			.head{
				height:50px;
				width:50px;
				border-radius:50px;
			}
			.my{
				margin-left:1em;
				.nickname{
					font-weight: 700;
				}
				.time{
					font-size:$uni-font-size-sm;
					color:#7B7B79;
				}
			}
			.shiming{
				background: #67E2B3;
				padding:1px 6px;
				color:#fff;
				margin-left:1em;
			}
		}
		&.row2{
			height:70px !important;
			.title{
				font-weight:700;
			}
			.dingwei{
				.icon{
					height:40rpx;
					width:20rpx;
				}
				.address{
					font-size:$uni-font-size-sm;
					color:#797978;
				}
			}
			.month-price{
				color:#FDAC61;
			}
		}
		&.row3{
			.scroll-left-right{
				 white-space: nowrap; 
				 width: 100%;  
				 .fang-img{
				 	width:120px;
				 	height:85px;
				 	margin-right:1em;
				 }
			}
		}
		&.row4{
			.preview-count{
				color:#8E8E8C;
				font-size:$uni-font-size-sm;
			}
		}
	}
}
</style>
