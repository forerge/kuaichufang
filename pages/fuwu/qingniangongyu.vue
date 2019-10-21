<template>
	<view class="page">
		<view class="grid grid-col-2 xiaoqu-list">
			<view class="grid-list grid-combine-col-2 grid-row-align-center title" >
				发的
			</view>
			<view class="grid-list grid-combine-col-2 description">
				<view class="address">
					是的冯绍峰是
				</view>
			</view>
		</view>
		<view style="padding:1em 0;background:#fff;">
			<view class="big_button_yellow" @click="shenqing">申请转发</view>
		</view>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverApiUrl:this.$commonConfig.serverApiUrl,
				curTabIndex:1, //tab索引
				h_id :''
			};
		},
		onLoad(e) {
			console.log(e);
			this.h_id = e.h_id;
			uni.request({
				url: this.serverApiUrl+'home/house/kuai_zhuanpingtai', //请求url
				method: 'POST',               //请求方式 
				data: {
					u_id:uni.getStorageSync('weijia_pro')['u_id'],
					h_id:e.h_id,
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data)
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			shenqing(){
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_zhuanpingtai_shenqing', //请求url
					method: 'POST',               //请求方式 
					data: {
						u_id:uni.getStorageSync('weijia_pro')['u_id'],
						h_id:this.h_id,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.redirectTo({
								    url: '../login/empty?message='+'申请成功！请等待确认！'
								});
							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
			
		},
	}
</script>

<style lang="scss" >
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
	.grid.tap{
		.grid-list{
			height:40px;
			.text{
				color:#9B9B9B;
				font-size: $uni-font-size-lg;
				padding-bottom:6px;
				border:1px solid #fff;
				&.active{
					color:#333;
					border-bottom-color:#FDB472;
				}
			}
			
		}
	}
	.grid.xiaoqu-list{
		width:90%;
		margin:1em auto;
		border:1px solid #ccc;
		box-shadow: 0 2px 5px #ccc;
		border-radius: 15px;
		.grid-list{
			margin-top:0.5em;
			&.title{
				padding:0.2em 0;
				color:#333333;
				font-size:1.1em;
			}
			&.description{
				padding-bottom:1em;
				font-size:$uni-font-size-sm;
				.address{
					margin-left:1em;
				}
				.info{
					margin-top:5px;
					.btn{
						padding:3px 10px;
						border:1px solid #ccc;
						border-radius: 10px;
						&.active{
							color:#09BB07;
							border:1px solid #09BB07;
						}
					}
				}
			}
		}
	}
	.footer{
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
	}
	
</style>
