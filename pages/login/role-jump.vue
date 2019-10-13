<template>
</template>

<script>
	export default {
	data() {
		return {
			//获取自定义$commonConfig对象中的服务器地址
			serverImgUrl:this.$commonConfig.serverImgUrl,
			serverApiUrl:this.$commonConfig.serverApiUrl,
			//推荐内容
			
		}
	},
	onLoad(e) {
		var two = uni.getStorageSync('weijia_pro')['u_two'];
		var three = uni.getStorageSync('weijia_pro')['u_three'];
		var four = uni.getStorageSync('weijia_pro')['u_four'];
		
		if(uni.getStorageSync('weijia_status') == false){
			uni.redirectTo({
			    url: './login'
			});
		}else if(two != 1 || three != 1 || four != 1 ){
			uni.redirectTo({
			    url: "../weijiahaofang/weijiahaofang"
			});
		}else{
			uni.redirectTo({
			    url: "../weijiahaofang/weijiahaofang"
			});
		}
		
	}
	}
	
</script>

<style>
</style>
