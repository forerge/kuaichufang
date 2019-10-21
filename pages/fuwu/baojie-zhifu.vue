<template>
	<view>
		 <!-- 水电tab -->
		 <view class="grid grid-col-2 tab">
			 <view class="grid-list grid-row-align-center">
			 	<text class="text">保洁服务</text>
			 </view>
		 </view>
		 <view class="grid grid-col-2 hetong" >
		 	<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
		 		<text class="text1">订单状态</text>                                                            
				<text class="text2">{{tuijianContent.status}}</text>
		 	</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">单位金额</text>                                                            
				<text class="text2">{{tuijianContent.clear}}元/㎡</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">面积</text>                                                            
				<text class="text2">{{tuijianContent.h_space}}㎡</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">应缴金额</text>                                                            
			    <text class="text2">{{tuijianContent.money}}</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">缴纳单位</text>
				<text class="text2">唯家</text>   
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">缴纳户名</text>
				<text class="text2">{{tuijianContent.username}}</text>  
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">住址信息</text>
				<text class="text2">{{tuijianContent.h_qv}}{{tuijianContent.h_addr}}</text>                                                      
			</view>
		 </view>
		 <block v-if="tuijianContent.o_status == 2">
			 <view style="padding:1em 0;background:#fff;">
				<view class="big_button_yellow" @click="fukuan(tuijianContent.o_id)" >确认支付</view>
			 </view>
		 </block>
		 <block v-if="tuijianContent.o_status == 1">
			 <view style="padding:1em 0;background:#fff;">
				<view class="big_button_yellow" @click="chexiao(tuijianContent.o_id)" >撤销</view>
			 </view>
		 </block>
		 
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//我的收藏
				tuijianContent:[],
				o_id:''
			};
		},
		methods:{
			fukuan(o_id){
				uni.request({
					url: this.serverApiUrl+'home/order/qk_baojie_jiaofei', //请求url
					method: 'POST',               //请求方式 
					data: {
						o_id:this.o_id
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.redirectTo({
								    url: '../login/empty?message='+'付款成功！'
								});
							}
						}else{ 
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			chexiao(o_id){
				uni.request({
					url: this.serverApiUrl+'home/order/qk_baojie_chexiao', //请求url
					method: 'POST',               //请求方式 
					data: {
						o_id:this.o_id
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.redirectTo({
								    url: '../login/empty?message='+'撤销成功！'
								});
							}
						}else{ 
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad(e){
			this.o_id = e.o_id;
			uni.request({ 
				url: this.serverApiUrl+'home/order/kuai_baojie_detail', //请求url
				method: 'POST',               //请求方式 
				data: {
					o_id:this.o_id
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						this.tuijianContent= JSON.parse(res.data);
						console.log(this.tuijianContent)
						console.log(this.tuijianContent['h_space'])
						// this.tuijianContent= res.data;
						// this.banner = res.data['banner']
					}else{ 
						// console.log(res);
					}
				},
				fail: () => {},
				complete: () => {}
			});
			// uni.setStorageSync('weijia_wode', 'pages/wode/wode');
			// uni.setStorageSync('weijia_status', false);
		}, 
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
.big_button_yellow{
		height:64rpx;
		font-size: 16px;
		line-height: 64rpx;
		width:475rpx;
		margin:0 auto;
		color:#362F0C;
		background:#FDE648;
		border-radius: 30px;
		text-align: center;
		margin-bottom: 32rpx;
	}
</style>
