<template>
	<view >
		
	<view class="grid grid-col-3 zhaoshiyou  grid-right-space">
		<view class="grid-list grid-combine-col-3 grid-row-align-left-center row1">
			<image class="head" :src="serverImgUrl+'static/images/head.png'"></image>
			<view class="my">
				<view class="nickname">新一 <text class="shiming">已实名</text></view>
				<view class="time">男/19岁/巨蟹座/湖南省岳阳市/岳阳富岳外语</view>
				<view class="time">ui设计师</view>
			</view>
		</view>
		<view class="grid-list grid-combine-col-3 row2">
			<text class="text">工作稳定</text>
			<text class="text">游泳</text>
			<text class="text">跑步</text>
		</view>
		<view class="grid-list grid-combine-col-3 grid-row-align-space-between-center row3">
			<image class="img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
			<image class="img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
			<image class="img" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
		</view>
		<view class="grid-list grid-combine-col-3 grid-col-align-left-center row4">
		<text class="text1">TA希望你</text>
		<text class="text2">爱干净/作息正常/男女不限</text>
		</view>
	</view>
		<view class="tadefangyuan-title">
			TA的房源
		</view>
		
		<!-- 轮播图板块 start -->
		<swiper  :indicator-dots="true" :autoplay="true" :interval="3000"  :circular="true" class="lunbo" >
			<swiper-item>
				<image class="lunboimg" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image class="lunboimg" :src="serverImgUrl+'static/images/tuijian-thumbnail.png'" mode="widthFix"></image>
			</swiper-item> 
		</swiper>
		  <!-- 轮播图板块 end -->
			
			<view class="grid grid-col-2 tadefangyuan-xiangqing">
				<view class="grid-list grid-combine-col-2">
					1.<text class="text"><text style="color:#FC881C;">2300 元/月</text>  押一付三</text>
				</view>
				<view class="grid-list grid-combine-col-2">
					2.<text class="text">丽江苑6栋401室    二室一厅一卫</text>
				</view>
				<view class="grid-list grid-combine-col-2">
					3.<text class="text">奉贤.运河小区</text>
				</view>
				<view class="grid-list grid-combine-col-2">
					4.<text class="text">当前居住一男一女</text>
				</view>
				<view class="grid-list grid-combine-col-2">
					5.<text class="text">床/沙发/衣柜/桌椅/电视/空调/油烟机/独立卫生间/阳台/可做饭</text>
				</view>
				<view class="grid-list grid-combine-col-2">
					6.<text class="text">干净</text>
				</view>
			</view>
			
			<view class="grid grid-col-2 liulanjilu">
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row1">
					<text class="text1">已有1人看过</text>
					<text class="text2">查看全部</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-col-align-left-center row2">
					<view class="head-box">
						<image class="head" :src="serverImgUrl+'static/images/head.png'"></image>
						<view class="text">新一</view>
					</view>
				</view>
			</view>
		<!-- 同小区房源 -->
		<view class="housing-resource-title">
				<text>相关推荐</text>
		</view>
		<tuijianContentList  :tuijianContent="tuijianContent"/>	
		<!-- 底部 -->
		<view class="grid grid-col-2 footer">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<view class="left grid-col-align-center">
					<image class="img" :src="serverImgUrl+'static/images/xinxing.png'" ></image>
					<text>收藏</text>
				</view>
				<text class="center">预约房源</text>
				<text class="right">电话咨询</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tuijianContentList from "@/components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue";
	export default {
		components:{
			tuijianContentList
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				//推荐内容
				tuijianContent:[
					{
					imgUrl:this.$commonConfig.serverImgUrl+'static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					},{
					imgUrl:this.$commonConfig.serverImgUrl+'static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					}
				],
			};
		},
		methods: {
		
		}
	}
</script>

<style lang="scss" scoped>
	.zhaoshiyou{
		width:90%;
		margin:0 auto;
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
						.shiming{
							background: #67E2B3;
							padding:1px 6px;
							color:#fff;
							margin-left:1em;
						}
					}
					.time{
						font-size:$uni-font-size-sm;
						color:#7B7B79;
					}
				}
			}
			&.row2{
				margin-top:2em;
				.text{
					padding:3px 12px;
					border-radius: 12px;
					border:1px solid #EBEBEB;
					color:#999;
					margin-right:1em;
				}
			}
			&.row3{
				margin-top:1em;
				.img{
					width:32%;
					border-radius: 6px;
				}
			}
			&.row4{
				margin-top:1em;
				.text2{
					font-size:$uni-font-size-sm;
					color:#757573;
					margin-top:0.5em;
				}
			}
		}
	}
	.tadefangyuan-title{
		width:90%;
		margin:0 auto;
		margin-top:1em;
	}
	/* 轮播图板块 start */
	.lunbo{
		width:90%;
		margin:0 auto;
		.lunboimg{
			width:100%;
			will-change: transform;
			margin-top:0.5em;
		}
	}
	/* 轮播图板块 end */
	.tadefangyuan-xiangqing{
		width:90%;
		margin:0 auto;
		.grid-list{
			padding:0.5em 0;
			.text{
				font-size:$uni-font-size-sm;
				padding-left:1em;
			}
		}
	}
	.liulanjilu{
		width:90%;
		margin:0 auto;
		.grid-list{
			&.row1{
				margin-top:1em;
				.text1{
					font-weight: 700;
				}
				.text2{
					color:#999;
				}
			}
			&.row2{
				margin-top:1em;
				.head-box{
					width:60px;
					text-align: center;
				}
				.head{
					width:40px;
					height:40px;
					border-radius: 40px;
				}
				.text{
					color:#71716F;
				}
			}
		}
	}
	.housing-resource-title{
		width:90%;
		margin:1em auto;
		font-size:$uni-font-size-lg;
	}
	
	.footer{
		height:120rpx;
		padding:0 1em;
		border-top:1px solid #F2F2F2;
		margin-top:1em;
		.left{
			.img{
				width:25px;
				height:25px;
			}
		}
		.center,.right{
			padding:6px 12px;
			border-radius: 6px;
		}
		.center{
			background:#67E2B3;
			color:#fff;
		}
		.right{
			background:#FCE649;
			color:#444337;
		}
	}
</style>
