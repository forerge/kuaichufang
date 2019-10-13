<template>
	<view>
		<view class="grid grid-col-2">
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center row1" >
					<text class="text" >物业交接</text>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row2" >
					<text class="text" >甲方（申请方）：</text>
					<input type="text" :value="house.h_hname"  placeholder="请输入联系人名称"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row2" >
					<text class="text" >乙方（接受方）：</text>
					<input type="text" value="唯家平台"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row2" >
					<text class="text" >甲方电话：</text>
					<input type="text" value="" @input="tel" placeholder="请输入联系人电话号码"/>
			</view>
		
			<view style="padding:1em 0;background:#fff;">
				<view class="big_button_yellow" @click="jiaojie" >提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				serverApiUrl:this.$commonConfig.serverApiUrl,
				house:'',
			};
		},
		methods: {
			tel(e){
				this.house.h_tel = e.detail.value
			},
			jiaojie(){
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_wuye_jiaojie', //请求url
					method: 'POST',               //请求方式 
					data: {
						id:this.house.h_id,
						tel:this.house.h_tel,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.switchTab({
								    url: '/pages/index/index'
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
		
		onLoad(e) {
			console.log(e);
			uni.request({
				url: this.serverApiUrl+'home/house/kuai_wuye_one', //请求url
				method: 'POST',               //请求方式 
				data: e,                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
						this.house= res.data;
					}else{ 
						// console.log(res);
					}
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style lang="scss" scoped>
	
.grid{
	.grid-list{
		padding:0 1em;
	}
	.grid-list.row1{
		height:40px;background:#EFECF0;
		.text{
			color:#AAAAAA;
		}
	}
	.grid-list.row2{
		border-bottom:1px solid #F4F4F4;
		height:50px;
		.text{
			font-weight: 700;
		}
	}
	.grid-list.row3{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:70px;
		.row3-row1{
			color:#A6A6A6;
			font-size:12px;
		}
		.row3-row2{
			width:100%;
			.text{
				font-weight: 700;
			}
		}
	}
	.grid-list.row4{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:90px;
		.row4-row1{
				font-weight: 700;
		}
		.row4-row2{
			width:100%;
			.text{
				font-weight: 700;
			}
		}
	}
	.grid-list.row5{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:120px;
		.row5-row1{
				color:#A6A6A6;
				font-size:12px;
		}
		.row5-row2{
				font-weight: 700;
		}
		.row5-row3{
			width:100%;
			.text{
				font-weight: 700;
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
