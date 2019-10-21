<template>
	<view>
		<view style="padding:1em 0;background:#fff;">
			<view class="big_button_yellow" @click="shenqing" >申请服务</view>
		</view>
		 <view  class="header" v-if='have'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">没有历史记录！</view>
		 </view>
		 <view v-else>
		 	<block v-for="(val,index) in tuijianContent" :key="index">
		 		<view class="grid grid-col-2 myorder-list" @click="detail(val['o_id'])">
		 			<view class="grid-list grid-combine-col-2 grid-row-align-space-around-center">
		 				<text class="text">{{val['o_ctime']}}</text>
		 				<text class="text">{{val['status']}}</text>
		 				<text class="text">{{val['o_money']}}￥</text>
		 			</view>
		 		</view>
		 	</block>
		 </view>
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
				have:true,
				h_id:''
			};
		},
		methods:{
			shenqing(){
				uni.navigateTo({
				    url: './baojie-shenqing?h_id='+this.h_id
				});
			},
			detail(e){
				console.log(e);
				uni.navigateTo({
				    url: './baojie-zhifu?o_id='+e
				});
			}
			
		},
		onLoad(e){
			this.h_id = e.h_id;
			uni.request({ 
				url: this.serverApiUrl+'home/index/qk_baojie_have', //请求url
				method: 'POST',               //请求方式 
				data: {
					u_id:uni.getStorageSync('weijia_pro')['u_id'],
					h_id:this.h_id
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						if(res.data != 0){
							console.log(res.data);
							this.tuijianContent= res.data;
							this.have = false;
						}
					}else{ 
						// console.log(res);
					}
				},
				fail: () => {},
				complete: () => {}
			});
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
	.img{
		display: block;
		width:30%;
		margin:100rpx auto 0;
	}
	.text{
		line-height:90px;
		text-align: center;
		color:#F98747;
	}
</style>
