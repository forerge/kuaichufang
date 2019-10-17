<template>
	<view class="page">
		
		<view class="grid grid-col-2 tap">
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(2)' :class="{active:curTabIndex==2}">已租</text>
			</view>
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(1)' :class="{active:curTabIndex==1}">空闲</text>
			</view>
		</view>
		<block v-if="have">
			<view class="grid grid-col-2 xiaoqu-list" v-for="(val,index) in tuijianContent" :key="index">
				<view class="grid-list grid-combine-col-2 grid-row-align-center title" >
					{{index}}
				</view>
				<block v-for="(v,k) in val" :key="k">
					
					<view class="grid-list grid-combine-col-2 description" v-if="curTabIndex == v.h_level">
						<view class="address">
							{{v.h_addr}}
						</view>
						<view class="info grid-row-align-space-around-center">
							<text>{{v.h_state}}</text>
							<text>{{v.h_space}}m2</text>
							<block v-if="v.h_level == 1"><text @click="change_level(v.h_id,2,index,k)" class="btn">下架</text></block>
							<block v-if="v.h_level == 2"><text @click="change_level(v.h_id,1,index,k)" class="btn">重新发布</text></block>
						</view>
					</view>
				</block>
			</view>
		</block>
		<block v-else>
			<view class="footer">
				<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
				<view class="text">亲！空空如也！</view>
			</view>
		</block>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				curTabIndex:1, //tab索引
				tuijianContent:'',
				level:1,
				have:0
			};
		},
		onLoad() {
			uni.request({
				url: this.serverApiUrl+'home/house/kuai_wodefabu', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:uni.getStorageSync('weijia_pro')['u_id'],
					level:1
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						if(res.data == 0){
							this.have = 0;
						}else{
							this.have = 1;
							this.tuijianContent = res.data;
						}
						console.log(res.data)
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			//tab切换
			toShow(obj){
				this.level = obj
				this.curTabIndex = obj
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_wodefabu', //请求url
					method: 'POST',               //请求方式 
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id'],
						level:obj
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							console.log(res.data)
							if(res.data == 0){
								this.have = 0;
							}else{
								this.have = 1;
								this.tuijianContent = res.data;
							}
							
							
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			change_level(hid,level,index,k){
				this.tuijianContent[index][k]['h_level'] = level;
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_wodefabu_change_level', //请求url
					method: 'POST',               //请求方式 
					data: {
						hid:hid,
						level:level
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							console.log(res.data)
							if(res.data == 0){
								this.have = 0;
							}else{
								
							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onPullDownRefresh() {
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_wodefabu', //请求url
					method: 'POST',               //请求方式 
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id'],
						level:this.level
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 0){
								this.have = 0;
							}else{
								this.have = 1;
								this.tuijianContent = res.data;
							}
							console.log(res.data)
						}
					},
					fail: () => {},
					complete: () => {}
				});
				// console.log(123456);
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 2000);
			},
		}
	}
</script>

<style lang="scss" >
	.grid.tap{
		.grid-list{
			height:40px;
			.text{
				color:#9B9B9B;
				font-size: $uni-font-size-lg;
				padding-bottom:6px;
				border:1px solid #fff;
				&.active{
					color:#333;
					border-bottom-color:#FDB472;
				}
			}
			
		}
	}
	.grid.xiaoqu-list{
		width:90%;
		margin:1em auto;
		border:1px solid #ccc;
		box-shadow: 0 2px 5px #ccc;
		border-radius: 15px;
		.grid-list{
			margin-top:0.5em;
			&.title{
				padding:0.2em 0;
				color:#333333;
				font-size:1.1em;
			}
			&.description{
				padding-bottom:1em;
				font-size:$uni-font-size-sm;
				.address{
					margin-left:1em;
				}
				.info{
					margin-top:5px;
					.btn{
						padding:3px 10px;
						border:1px solid #ccc;
						border-radius: 10px;
						&.active{
							color:#09BB07;
							border:1px solid #09BB07;
						}
					}
				}
			}
		}
	}
	.footer{
		.img{
			display: block;
			width:30%;
			margin:100rpx auto 0;
		}
		.text{
			line-height:90px;
			text-align: center;
			color:#F98747;
		}
	}
	
</style>
