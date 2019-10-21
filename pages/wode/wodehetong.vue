<template>
	<view class="content">
	        <page-head :title="title"></page-head>
	        <view class="uni-padding-wrap">
	           <!-- <view class="uni-title uni-common-mt">
	                数组类型
	                <text>\nnodes属性为Array</text>
	            </view>
	            <view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
	                <rich-text :nodes="nodes"></rich-text>
	            </view>
	            <view class="uni-title uni-common-mt">
	                字符串类型
	                <text>\nnodes属性为String</text>
	            </view> -->
	            <view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
	                <rich-text :nodes="strings"></rich-text>
	            </view>
	        </view>
	    </view>
</template>

<script>
	export default {
	    data() {
	        return {
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
	            // nodes: [{
	            //     name: 'div',
	            //     attrs: {
	            //         class: 'div-class',
	            //         style: 'line-height: 60px; color: red; text-align:center;'
	            //     },
	            //     children: [{
	            //         type: 'text',
	            //         text: 'Hello&nbsp;uni-app!'
	            //     }]
	            // }],
	            strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>'
	        }
	    },
		onLoad(e) {
			uni.request({
				url: this.serverApiUrl+'home/order/kuai_order_fangdonghetong', //请求url
				method: 'POST',               //请求方式 
				data: {
					u_id:uni.getStorageSync('weijia_pro')['u_id']
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						this.strings = res.data
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

<style>
</style>
