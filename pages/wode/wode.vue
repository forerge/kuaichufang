<template>
	<view>
		<view class="user-base-msg fangke" >
			<view class="grid grid-col-2">
				<view class="grid-list grid-row-align-left-center">
					<image class="img" :src="serverImgUrl+'head.png'"></image>
					<text class="text">昵称</text>
				</view>
			</view>
			<!-- 波浪 -->
			<view class="water-group">
				<view class="water water1" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
				<view class="water water2" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
				<view class="water water3" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
			</view>	
		</view>
		<!-- 个人服务 -->
		<columnTitle columnTitle="个人服务" borderTopColor="#fff"/>
		<view class="grid grid-col-4 grid-fixed-width personserve">
			<view class="grid-list grid-col-align-center" @click="hetong">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu02.png'"></image>
				<text class="text">我的合同</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="qianbao">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu03.png'"></image>
				<text class="text">我的钱包</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="wodefabu">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu04.png'"></image>
				<text class="text">我的发布</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="fuliquan">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu05.png'"></image>
				<text class="text">我的福利券</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="fuwu(1)">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu01.png'"></image>
				<text class="text">转青年公寓</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="fuwu(2)">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu06.png'"></image>
				<text class="text">我的水电</text>
			</view>
			<view class="grid-list grid-col-align-center"  @click="fuwu(3)">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu07.png'"></image>
				<text class="text">维修服务</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="fuwu(4)">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu08.png'"></image>
				<text class="text">保洁服务</text>
			</view>
			<!-- <view class="grid-list grid-col-align-center" @click="daoqijiaozu">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu09.png'"></image>
				<text class="text">到期交租</text>
			</view> -->
			<!-- <view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu010.png'"></image>
				<text class="text">找室友</text>
			</view> -->
			<view class="grid-list grid-col-align-center" @click="renzheng">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu011.png'"></image>
				<text class="text">我的认证</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="zhangdan">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu012.png'"></image>
				<text class="text">账单查询</text>
			</view>
		</view>
		<radio-group>
		<view class="grid grid-col-2 roleSelect">
			<view class="grid-list grid-combine-col-2 grid-col-align-left-center" @tap="showMask">
				联系客服
			</view>
		</view>
		</radio-group>
		
		<!-- 联系客服弹框-->
		<view class="mask kefu" :class="{active:active}">
			<view class="grid grid-col-2 contact-waiter">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					123-4567-789
				</view>
				<view class="grid-list grid-row-align-center" @tap="hideMask">
					取消
				</view>
				<view class="grid-list grid-row-align-center" @tap="hideMask">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import columnTitle from "../../components/dzy-column-title/dzy-column-title.vue";
	export default {
		components:{
			columnTitle,
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//客服弹框显示隐藏
				active:false,
			
			}
		},
		onLoad() {
			uni.setStorageSync('weijia_role',1);
			var	user = uni.getStorageSync('weijia_pro');
		}, 
		methods: {
			//简单处理点击客服手机号，弹框显示隐藏
			hideMask(){ 
				this.active=false;
			},
			showMask(){
				this.active=true;
			},
			hetong(){
				uni.navigateTo({
				    url: '../wode/wodehetong'
				});
			},
			renzheng(){
				uni.navigateTo({
				    url: '../wode/woderenzheng'
				});
			},
			qianbao(){
				uni.navigateTo({
				    url: '../wode/wodeqianbao'
				});
			},
			fuliquan(){
				uni.navigateTo({
				    url: '../wode/fuliquan'
				});
			},
			fuwu(e){
				uni.navigateTo({
				    url: '../fuwu/fuwu?level='+e
				});
			},
			daoqijiaozu(){
				uni.navigateTo({
				    url: '../jiaozu-order/jiaozu-order'
				});
			},
			wodefabu(){
				uni.navigateTo({
				    url: '../wode/wodefabu'
				});
			},
			zhangdan(){
				uni.navigateTo({
				    url: '../wode/zhangdanchaxun'
				});
			}
				
		},
		onshow(){
			if(uni.getStorageSync('weijia_status') == false){
				uni.redirectTo({
				    url: '../login/login'
				});
			}
		},
		
	}
</script>

<style lang="scss">	
	@import "../../common/user-center";	
</style>
