<template>
	<view>
		<tuijianContentList :tuijianContent="tuijianContent"/>
		 <!-- 水电tab -->
		 <view class="grid grid-col-2 tab">
			 <view class="grid-list grid-row-align-center">
			 	<text class="text"  @click='toShow(0)' :class="{active:curIndex==0}">电费</text>
			 </view>
			 <view class="grid-list grid-row-align-center">
			 	<text class="text" @click='toShow(1)' :class="{active:curIndex==1}">水费</text>
			 </view>
		 </view>
		 <view class="grid grid-col-2 hetong" :class="{active:curIndex==0}">
		 	<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 		<text class="text1">应缴金额</text>                                                            
		 		<text class="text2">97.5</text>                                                            
		 	</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">缴纳单位</text>
				<text class="text2">**供电局</text>   
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">缴纳户名</text>
				<text class="text2">新一  </text>  
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">住址信息</text>
				<text class="text2">上海市奉贤区*******401号</text>                                                      
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center price">
				<text class="text1">应缴金额： </text><text class="text2">97.5</text>  
			</view>
		 </view>
		 <view class="grid grid-col-2 hetong" :class="{active:curIndex==1}" >
					<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
						<text class="text1">应缴金额</text>                                                            
						<text class="text2">77.6</text>                                                            
					</view>
		 			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 				<text class="text1">缴纳单位</text>
		 				<text class="text2">**供电局</text>   
		 			</view>
		 			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 				<text class="text1">缴纳户名</text>
		 				<text class="text2">新一  </text>  
		 			</view>
		 			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 				<text class="text1">住址信息</text>
		 				<text class="text2">上海市奉贤区*******401号</text>                                                      
		 			</view>
		 			<view class="grid-list grid-combine-col-2 grid-row-align-left-center price">
		 				<text class="text1">应缴金额： </text><text class="text2">97.5</text>  
		 			</view>
		 </view>
		 <bigButonYellow big_button_yellow="立即缴费"/>
	</view>
</template>

<script>
	import tuijianContentList from '../../components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue'
	import bigButonYellow from "../../components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			bigButonYellow,
			tuijianContentList
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				curIndex:0, //tab索引
				//我的收藏
				tuijianContent:[
					{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'1合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					}
				]
			};
		},
		methods:{
			//tab切换
			toShow:function(index){
						this.curIndex=index;	
					}
		}
	}
</script>

<style lang="scss" scoped>
.grid.tuijian-content-list{
		width:90%;
		margin:0 auto;
		margin-top:15px;
		.grid-list{
			height:auto !important;
			margin-bottom:30rpx;
			box-shadow:1px 0  5px #ccc;
			padding:1em;
			.img-navigator{
				display: block;
				width:35%;
				height:100%;
				.img{
					height:100%;
					width:100%;
					border-radius: 15rpx;
				}
			}
			.description{
				padding-left:1em;
				width:65%;
			}
			.description view{
				margin-bottom:3px;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.description .v2{
				color:#C1C1C1;
				font-size:$uni-font-size-sm;
			}
			.description .v2 text{
				margin-right:1em;
			}
			.description .v3{
				color:#6B6B6B;
				font-size:$uni-font-size-sm;
			}
			.description .v3 text{
				margin-right:1em;
			}
			.description .v3 .t1{
				color:#7AE5BB;
			}
			.description .v4{
				color:#FC8B22;
				font-size:$uni-font-size-sm;
			}
		}
	}
	
.tab{
	width:90%;
	margin:0 auto;
	.grid-list{
		.text{
			padding-bottom:0.5em;
			border-bottom:1px solid #fff;
			&.active{
				border-bottom:1px solid #FBDC87;
			}
		}
	}
}
.hetong{
	width:90%;
	margin:0 auto;
	display:none;
	&.active{
		display:block;
	}
	.grid-list{
		padding:1em;
		height:80rpx;
		.text2{
			color:#B0B0B0;
		}
		&.price{
			border-top:1px solid #ccc;
			.text2{
				color:#FA1414;
			}
		}
	}
}
</style>
