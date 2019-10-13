<template>
	<view>
		<form @submit="yuyue" >
			<tuijianContentList :tuijianContent="tuijianContent"/>
			<view class="grid grid-col-2 yuyue-input">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
					<text>填写预约信息</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
						<text class="text1">预约时间</text>
						<timePicker sTime="8" cTime="20" interval="10" @changeTime="getTime">
						  <view slot="pCon">
						   <input type="text" name="time" :value="time||''" placeholder="请选择预约时间"/>
						  </view>
						</timePicker>
				</view>
				<!-- <view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
					<text  class="text1">联系方式</text><input type="text" value="" placeholder="请填写联系方式"/>
				</view> -->
			</view>
			<textareaColumnFrame  ref="textareaColumnFrameEle" columnTitle="其它" borderTopColor="#fff" placeholder="如有其他问题请在此留言哦" />
			<view style="padding:1em 0;background:#fff;">
				<button form-type="submit" class="big_button_yellow"  >立即预约</button>
			</view>
		</form>
	</view>
</template>

<script>
	import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	import textareaColumnFrame from "@/components/dzy-textarea-column-frame/dzy-textarea-column-frame.vue";
	import timePicker from "@/components/uni-time-picker/uni-time-picker.vue";
	export default {
		components:{
			bigButonYellow,
			textareaColumnFrame,
			timePicker
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//我的收藏
				time:'',//格式化时间，2019-09-05 00：00：00
				timestamp:'',//时间戳，
				h_id:'',
				u_id:uni.getStorageSync('weijia_pro').u_id,
				// content:this.$refs.textareaColumnFrameEle.textareaVal,   //预约留言内容
			};
		},
		
		onLoad(e) {
			this.h_id = e.id;
			// console.log(e.id);
		},
		
		methods: {
			getTime(time,timestamp){
				//time是传出来的格式化时间，timestamp是传出来的时间戳
				this.time = time;
				this.timestamp = timestamp;
			},
			yuyue(e){
				// console.log(this.$refs.textareaColumnFrameEle.textareaVal);
				console.log(this.timestamp);
				uni.request({
					url: this.serverApiUrl+'home/meet/add', //请求url
					method: 'POST',               //请求方式 
					data: {
						u_id:this.u_id,
						h_id:this.h_id,
						content:this.$refs.textareaColumnFrameEle.textareaVal,
						time:this.timestamp,
						},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.navigateTo({
								    url: '../weijiahaofang/weijiahaofang'
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
			  
	}
}
</script>

<style lang="scss">
.yuyue-input{
	width:90%;
	margin:0 auto;
	.grid-list{
		height:90rpx;
		&:nth-child(1){
			font-size: $uni-font-size-lg;
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
