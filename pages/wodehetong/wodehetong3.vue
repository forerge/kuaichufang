<template>
	<view>
		<tuijianContentList :tuijianContent="tuijianContent"/>
		 <view class="grid grid-col-2 hetong">
		 	<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 		<text class="text1">租 期</text>                                                            
		 		<text class="text2">2019-6-25至12-30 </text>                                                            
		 	</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">租金（月付）</text>
				<text class="text2">￥2300.00/月 </text>   
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">押金</text>
				<text class="text2">2300.00  </text>  
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">物业交接</text>
				<text class="text2">已确认 </text>                                                      
			</view>
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between subject">
				<view class="title">签约主体信息</view>
				<view class="description">
					<text class="text1">身份证：</text><text class="text2">00000000000000000 </text>  
				</view>                                                   
				<view class="description">
					<text class="text1">联系方式： </text><text class="text2">123-4567-789</text>
				</view>                                                     
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-right-center">
				<text class="btn">去签约</text>                                                         
			</view>
		 </view>
	</view>
</template>

<script>
	import tuijianContentList from '../../components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue'
	export default {
		components:{
			tuijianContentList
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
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
		}
	}
</script>

<style lang="scss" scoped>
.hetong{
	width:90%;
	margin:0 auto;
	.grid-list{
		padding:1em;
		height:80rpx;
		.text2{
			color:#B0B0B0;
		}
		&.subject{
			height:200rpx;
			border-top:1px solid #ccc;
			.title{
				font-size:$uni-font-size-lg;
			}
			.description{
				.text2{
					color:#B0B0B0;
				}
			}
		}
		&:last-child{
			height:150rpx;
			.btn{
				padding:3px 12px;
				border:1px solid #333;
				border-radius: 12px;
			}
		}
	}
}
</style>
