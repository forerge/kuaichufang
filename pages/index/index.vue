<template>
    <view class='page'>
		<!-- 位置搜索板块 start -->
		<view class="topsearch">
			<view class="location" @click="showCitySelect">
				<text class="address" v-text="cityName"></text>
				<image class="img" :src="serverImgUrl+downUpImg"></image>
			</view>  
			<view class="searchInput">
				<view class="hr"></view>
				<image class="img" :src="serverImgUrl+'sousuo.png'" ></image>
				<input class="input" type="text" placeholder="请输入小区名或地址" @focus="hideCitySelect"/>
			</view>
		</view>
		<!-- 位置搜索板块 end -->
		
		<!-- 轮播图板块 start -->
		<swiper  :indicator-dots="true" :autoplay="true" :interval="3000"  :circular="true" class="lunbo" >
			<block v-for="(val,index) in banner" :key="index">
				<swiper-item>
					<image class="lunboimg" :src="val['i_img']" mode="widthFix"></image>
				</swiper-item>
			</block>
		</swiper>
      <!-- 轮播图板块 end -->
		
	<!-- 导航栏板块 start-->
	<view class="grid grid-col-4 nav-list">
		<view class="grid-list">
				<navigator url="../weijiahaofang/weijiahaofang" hover-class="none">
			<image :src="serverImgUrl+'nav01.png'" ></image>
			<text>唯家好房</text>
			 </navigator>
		</view>
		<view class="grid-list">
			<view @click="zhengzu" hover-class="none">
				<image :src="serverImgUrl+'nav02.png'" ></image>
				<text>整租</text>
			</view>
		</view>
		<view class="grid-list">
			<view @click="hezu" hover-class="none">
				<image :src="serverImgUrl+'nav03.png'" ></image>
				<text>合租</text>
			</view>
		</view>
		<view class="grid-list">
			<navigator url="../zhaoshiyou/zhaoshiyou" hover-class="none">
			<image :src="serverImgUrl+'nav010.png'" ></image>
			<text>找室友</text>
			 </navigator>
		</view>
		<view class="grid-list" @click="fangdong">
			<view hover-class="none">
				<image :src="serverImgUrl+'nav05.png'" ></image>
				<text>房东</text>
			</view>
		</view>
		<view class="grid-list" @click="zhiyefangdong">
			<view hover-class="none">
				<image :src="serverImgUrl+'nav05.png'" ></image>
				<text>职业房东</text>
			</view>
		</view>
		<view class="grid-list" @click="zhiyejingjiren" >
			<view hover-class="none">
				<image :src="serverImgUrl+'nav06.png'" ></image>
				<text>职业经纪人</text>
			</view>
		</view>
		<view class="grid-list">
			<navigator url="../fangyuanshangchuan/fangyuanshangchuan" open-type="switchTab" hover-class="none">
			<image :src="serverImgUrl+'nav04.png'" ></image>
			<text>上传房源</text>
			 </navigator>
		</view>
	</view>
	<!-- 导航栏板块 end-->
	
		<!-- 推荐模块开始 -->
		<view class="tuijian">
			<view class="title">
				推荐
			</view>
			<tuijianContentList :tuijianContent="tuijianContent"/>
		</view>
		<!-- 推荐模块结束 -->
		<!-- 城市选择组件 -->
		<citySelect class="uni-select" :class="{active:isActive }" :listData="listData" :quickPanelData="quickPanelData" @chooseItem="chooseItem" />
    </view>
</template>
<!-- 二、逻辑层 -->
<script>
	import city from '@/common/city.js'
	import citySelect from '@/components/uni-city-select/uni-city-select.vue'
	import tuijianContentList from '@/components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue'
	export default {
		components:{
			citySelect,
			tuijianContentList
		},
		//1.初始化模板变量
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//推荐内容
				tuijianContent:[],
				//获取定位城市处->上下图标切换
				downUpImg:"xiala-down.png",
				banner:[],
				
				//获取定位城市
				cityName:'上海',//默认定位城市
				
				//城市选择面板
				isActive:false,
				listData: city,
				quickPanelData:[
					{
					title:'当前城市',
					navName: '当前',
					data:['上海'], //默认显示当前城市
					height: 150
				},
				{
					title:'热门城市',
					navName: '热',
					data:['上海','北京','成都','昆明','西安'],
					height: 224
				}
				]
			}
		},
		
		//2.页面加载完成、页面卸载事件
		onLoad() {
			console.log(uni.getStorageSync('weijia_status'));
			console.log(uni.getStorageSync('weijia_role'));
			console.log(uni.getStorageSync('weijia_pro')['u_tname']);
			
			if(uni.getStorageSync('weijia_status') == true){
				this.role = uni.getStorageSync('weijia_role')
			}
			
			// console.log(this.role)
			// console.log(this.status)
			//执行uni-app提供的类似ajax异步加载
			uni.request({ 
				url: this.serverApiUrl+'home/house/kuai_hot', //请求url
				method: 'POST',               //请求方式 
				data: {},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						this.tuijianContent= res.data['house'];
						this.banner = res.data['banner']
					}else{ 
						// console.log(res);
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}, 
		onPullDownRefresh() {
			if(uni.getStorageSync('weijia_status') == true){
				uni.request({
					url: this.serverApiUrl+'home/user/kuai_shuaxin', //请求url
					method: 'POST',               //请求方式 
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id']
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							uni.setStorageSync('weijia_pro', uni.getStorageSync('weijia_status'));
							uni.setStorageSync('weijia_pro', res.data);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
			// console.log(123456);
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		
		//3.事件以及自定义方法存放处
		methods: {
			showCitySelect(){
				this.downUpImg="xiala-up.png";//切换上下图标
				this.isActive=true;
			},
			hideCitySelect(){
				this.downUpImg="xiala-down.png"; //切换上下图标
				this.isActive=false;
			},
			chooseItem(item){
				this.downUpImg="xiala-down.png"; //切换上下图标
				this.isActive=false; //隐藏城市面板
				this.cityName=item; //赋值给当前定位城市
				this.quickPanelData[0].data=[item]; //赋值给面板当前城市
			},
			zhengzu(){
				uni.navigateTo({
				    url: '../weijiahaofang/weijiahaofang?state=1'
				});
			},
			hezu(){
				uni.navigateTo({
				    url: '../weijiahaofang/weijiahaofang?state=2'
				});
			},
			zhiyejingjiren(){
				if(uni.getStorageSync('weijia_status') == false){
					uni.navigateTo({
					    url: '../login/login'
					});
				}else if(uni.getStorageSync('weijia_pro')['u_two'] != 1 && uni.getStorageSync('weijia_pro')['u_three'] != 1 && uni.getStorageSync('weijia_pro')['u_four'] != 1 ){
					uni.navigateTo({
					    url: "../login/shenqing"
					});
				}else if(uni.getStorageSync('weijia_pro')['u_two'] > 0 || uni.getStorageSync('weijia_pro')['u_three'] > 0){
					uni.navigateTo({
					    url: "../login/empty?message="+'您不是此角色'
					});
				}else{
					uni.navigateTo({
					    url: "../weijiahaofang/wodefabu?role=4"
					});
				}
			},
			zhiyefangdong(){
				if(uni.getStorageSync('weijia_status') == false){
					uni.navigateTo({
					    url: '../login/login'
					});
				}else if(uni.getStorageSync('weijia_pro')['u_two'] != 1 && uni.getStorageSync('weijia_pro')['u_three'] != 1 && uni.getStorageSync('weijia_pro')['u_four'] != 1 ){
					uni.navigateTo({
					    url: "../login/shenqing"
					});
				}else if(uni.getStorageSync('weijia_pro')['u_two'] > 0 || uni.getStorageSync('weijia_pro')['u_four'] > 0 ){
					uni.navigateTo({
					    url: "../login/empty?message="+'您不是此角色'
					});
				}else{
					uni.navigateTo({
					    url: "../weijiahaofang/wodefabu?role=3"
					});
				}
			},
			fangdong(){
				if(uni.getStorageSync('weijia_status') == false){
					uni.navigateTo({
					    url: '../login/login'
					});
				}else if(uni.getStorageSync('weijia_pro')['u_two'] != 1 || uni.getStorageSync('weijia_pro')['u_three'] != 1 || uni.getStorageSync('weijia_pro')['u_four'] != 1 ){
					uni.navigateTo({
					    url: "../login/shenqing"
					});
				}else if(uni.getStorageSync('weijia_pro')['u_four'] > 0 || uni.getStorageSync('weijia_pro')['u_three'] > 0){
					uni.navigateTo({
					    url: "../login/empty?message="+'您不是此角色'
					});
				}else{
					uni.navigateTo({
					    url: "../weijiahaofang/wodefabu?role=2"
					});
				}
			},
		}, 
	
	}
</script>
<!-- 三、样式层 -->
<style lang="scss">
@import "../../common/index";
</style>
