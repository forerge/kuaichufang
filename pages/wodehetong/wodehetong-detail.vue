<template>
	<view class="content">
	       
	            <view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
	                <rich-text :nodes="order"></rich-text>
	            </view>
				<button class="center" @click="queren" >确认租房</button>
	        </view>
	    </view>
</template>

<script>
	export default {
		onLoad(e) {
			this.list = uni.getStorageSync('weijia_order_list');
			uni.request({
				url: this.serverApiUrl+'home/order/kuai_order_hetong', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:this.list.uid,
					hid:this.list.hid
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
						this.order =res.data.r_hetong ;
						console.log(this.order);
						// this.tuijianContent= res.data['house'];
						// this.banner = res.data['banner']r_hetong
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
				 strings: '<div style="text-align:center;color:red">看我的</div>'
			};
		}
	}
</script>

<style>
</style>
