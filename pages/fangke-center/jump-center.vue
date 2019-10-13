<template>
	<view></view>
</template>

<script>
	export default {
	data() {
		return {
			//获取自定义$commonConfig对象中的服务器地址
			serverImgUrl:this.$commonConfig.serverImgUrl,
		}
	},
	onLoad(){
		if(uni.getStorageSync('weijia_status') == false){
			uni.redirectTo({
			    url: '../login/login'
			});
		}else if(uni.getStorageSync('weijia_role') == 1){
			uni.redirectTo({
			    url: '../fangke-center/fangke-center'
			});
		}else if(uni.getStorageSync('weijia_role') == 2){
			uni.redirectTo({
			    url: '../fangdong-center/fangdong-center'
			});
		}else if(uni.getStorageSync('weijia_role') == 3){
			uni.redirectTo({
			    url: '../zhiyefangdong/zhiyefangdong'
			});
		}else if(uni.getStorageSync('weijia_role') == 4){
			uni.redirectTo({
			    url: '../zhiyejingjiren/zhiyejingjiren'
			});
		}
		
	}, 
	}
</script>

<style>
</style>
