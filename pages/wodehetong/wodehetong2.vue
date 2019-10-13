<template>
	<view>
		<view class="grid grid-col-2 hetong">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">甲 方</text>                                                            
				<text class="text2">{{uname}}</text>                                                            
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">乙 方</text>                                                            
				<text class="text2">{{list.hname}}</text>                                                            
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">支付金额</text>                                                            
				<text class="text2">{{list.money}}</text>                                                            
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">租金（月付）</text>
				<text class="text2">{{list.zmoney}}</text>   
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">押金</text>
				<text class="text2">{{list.ymoney}}</text>  
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">开始时间</text>                                                            
				<text class="text2">{{time}}</text>                                                            
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">租 期</text>                                                            
				<text class="text2">{{list.long}}个月</text>                                                            
			</view>
			<!-- <view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">租 期</text>                                                            
				<text class="text2">2019-6-25至12-30 </text>                                                            
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">租 期</text>                                                            
				<text class="text2">2019-6-25至12-30 </text>                                                            
			</view> -->
			<!-- <view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text1">物业交接</text>
				<text class="text2">未交接 </text>                                                      
			</view> -->
			<view class="grid-list grid-combine-col-2 grid-row-align-right-center">
				<text class="btn" @click="yulan">预览</text>                                                         
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			this.list = uni.getStorageSync('weijia_order_list');
			console.log(this.list);
			if(uni.getStorageSync('weijia_pro')['u_tname'] == ''){
				this.uname = uni.getStorageSync('weijia_pro')['u_name']
			}else{
				this.uname = uni.getStorageSync('weijia_pro')['u_tname']
			}
			console.log(this.list);
			var time_one = new Date();
			var time = time_one.format('yyyy-MM-dd');
			
			uni.request({ 
				url: this.serverApiUrl+'home/order/kuai_order_list', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:this.list.uid,
					hid:this.list.hid
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
					}else{ 
						// console.log(res);
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}, 
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				list:'',                  //确认租房页面传递过来的数据
				order:'',                  //合同详情内容
				uname:'',                  //当前登录用户的名称
				time:''                     //租房开始时间
			};
		},
		methods: {
			yulan(){
				uni.navigateTo({
				    url: '../wodehetong/wodehetong-detail',
				})
			},
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
