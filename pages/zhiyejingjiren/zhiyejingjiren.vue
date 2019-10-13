<template>
	<view>
		<view class="user-base-msg fangke" >
					<view class="grid grid-col-2">
						<view class="grid-list grid-row-align-left-center">
							<image class="img" :src="serverImgUrl+'head.png'"></image>
							<text class="text">昵称</text>
						</view>
						<view class="grid-list grid-row-align-right-center">
							<view class="turnBtn" @tap="showRoleTurn">
								<text>
									切换身份	
								</text>
							</view>
						</view>
					</view>
					<!-- 波浪 -->
					<view class="water-group">
			<view class="water water1" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
			<view class="water water2" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
			<view class="water water3" :style="'background-image: url('+serverImgUrl+'wave-yellow.png)'"></view>
					</view>
					
		</view>
		<view class="grid grid-col-4 user-record">
			<view class="grid-list grid-col-align-center">
				<text class="num">0</text>
				<text class="title">我的发布</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<text class="num">0</text>
				<text class="title">收藏房源</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<text class="num">0</text>
				<text class="title">联系记录</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<text class="num">0</text>
				<text class="title">最近浏览</text>
			</view>
		</view>
		<!-- 个人服务 -->
		<columnTitle columnTitle="个人服务" borderTopColor="#fff"/>
		<view class="grid grid-col-4 grid-fixed-width personserve">
			<view class="grid-list grid-col-align-center" @click="wodeyuyue">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu01.png'"></image>
				<text class="text">我的预约</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="wodehetong">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu02.png'"></image>
				<text class="text">我的合同</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="qianbao">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu03.png'"></image>
				<text class="text">我的钱包</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="yuanchengkaimen">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu04.png'"></image>
				<text class="text">远程开门</text>
			</view>
			<!--<view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu05.png'"></image>
				<text class="text">我的福利券</text>
			</view>
			 <view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu06.png'"></image>
				<text class="text">我的水电</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu07.png'"></image>
				<text class="text">维修服务</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu08.png'"></image>
				<text class="text">保洁服务</text>
			</view> 
			<view class="grid-list grid-col-align-center" @click="daoqijiaozu">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu09.png'"></image>
				<text class="text">到期交租</text>
			</view>-->
			<view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu010.png'"></image>
				<text class="text">找室友</text>
			</view>
			<view class="grid-list grid-col-align-center" @click="renzheng">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu011.png'"></image>
				<text class="text">我的认证</text>
			</view>
			<view class="grid-list grid-col-align-center">
				<image  class="img" :src="serverImgUrl+'fangke-gerenfuwu012.png'"></image>
				<text class="text">账单查询</text>
			</view>
		</view>
		<radio-group>
		<view class="grid grid-col-2 roleSelect">
			<!-- <view class="grid-list grid-row-align-left-center">
				职业房东
			</view>
			<view class="grid-list grid-col-align-right-center">
					<radio value="v1"  color="#F97F36" />
			</view>
			<view class="grid-list grid-row-align-left-center">
				经纪人
			</view>
			<view class="grid-list grid-col-align-right-center">
				<radio value="v2"  color="#F97F36" />
			</view> -->
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
		
		<!-- 切换身份弹框-->
		   <roleTurn :showRoleTurn="roleTurn" />
	</view>
</template>

<script>
	import columnTitle from "../../components/dzy-column-title/dzy-column-title.vue";
	import roleTurn from "../../components/dzy-role-turn/dzy-role-turn.vue";
	export default {
		components:{
			columnTitle,
			roleTurn
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//客服弹框显示隐藏
				active:false,
				roleTurn:false
			}
		},
		onPullDownRefresh() {
			if(this.status == true){
				uni.request({
					url: this.serverApiUrl+'home/user/kuai_shuaxin', //请求url
					method: 'POST',               //请求方式 
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id']
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							uni.setStorageSync('weijia_pro', res.data);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onLoad() {
			uni.setStorageSync('weijia_role',4);
		}, 
		methods: {
			//简单处理点击客服手机号，弹框显示隐藏
			hideMask(){ 
				this.active=false;
			},
			showMask(){
				this.active=true;
			},
			//显示切换身份弹框
			showRoleTurn(){
				this.roleTurn=true;
			},
			wodeyuyue(){
				uni.navigateTo({
				    url: '../wodeyuyue/fangdongyuyue'
				});
			},
			wodehetong(){
				if(this.role == 1){
					uni.navigateTo({
						url: '../wodehetong/wodehetong1'
					});
				}else{
					uni.navigateTo({
						url: '../wodehetong/fangdonghetong'
					});
				}
			},
			renzheng(){
				uni.navigateTo({
				    url: '../woderenzheng/woderenzheng'
				});
			},
			qianbao(){
				uni.navigateTo({
				    url: '../wodeqianbao/wodeqianbao'
				});
			},
			yuanchengkaimen(){
				uni.navigateTo({
				    url: '../yuanchengkaimen/yuanchengkaimen'
				});
			},
			
		}
	}
</script>

<style lang="scss">	
	@import "../../common/user-center";	
</style>
