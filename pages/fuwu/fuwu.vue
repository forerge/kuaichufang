<template>
	<view class="page">
		
		<view class="grid grid-col-2 tap">
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(1)' :class="{active:curTabIndex==1}">整租</text>
			</view>
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(2)' :class="{active:curTabIndex==2}">合租</text>
			</view>
		</view>
		<block v-if="have">
			<view class="grid grid-col-2 xiaoqu-list" v-for="(val,index) in tuijianContent" :key="index">
				<view class="grid-list grid-combine-col-2 grid-row-align-center title" >
					{{index}}
				</view>
				<block v-for="(v,k) in val" :key="k">
					<view class="grid-list grid-combine-col-2 description" @click="xuanzhong(v.h_id)">
						<view class="address">
							{{v.h_addr}}
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
				have:0,
				state:'整租',
				fuwu_leixing:''          //1：房源转青年公寓，2：交水电费，3：维修服务，4：保洁服务
			};
		},
		onLoad(e) {
			this.fuwu_leixing = e.level;
			uni.request({
				url: this.serverApiUrl+'home/house/kuai_fuwu', //请求url
				method: 'POST',               //请求方式 
				data: {
					uid:uni.getStorageSync('weijia_pro')['u_id'],
					state:1,
					fuwu_leixing:this.fuwu_leixing
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						if(res.data == 0){
							this.have = 0;
						}else{
							this.have = 1;
							this.tuijianContent = res.data;
						}
						// console.log(res.data)
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			//tab切换
			toShow(obj){
				this.curTabIndex = obj;
				this.tuijianContent = '';
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_fuwu', //请求url
					method: 'POST',               //请求方式
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id'],
						state:this.curTabIndex,
						fuwu_leixing:this.fuwu_leixing
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
			xuanzhong(hid){
				if(this.fuwu_leixing == 1){
					uni.navigateTo({
					    url: './qingniangongyu?h_id='+hid
					});
				}else if(this.fuwu_leixing == 2){
					uni.navigateTo({
					    url: './shuidianfei?h_id='+hid
					});
				}else if(this.fuwu_leixing == 3){
					uni.navigateTo({
					    url: './weixiu?h_id='+hid
					});
				}else if(this.fuwu_leixing == 4){
					uni.navigateTo({
					    url: './baojie-list?h_id='+hid
					});
				}
				
			}
		},
			onPullDownRefresh() {
				curTabIndex = 1;
				this.tuijianContent = '';
				uni.request({
					url: this.serverApiUrl+'home/house/kuai_fuwu', //请求url
					method: 'POST',               //请求方式 
					data: {
						uid:uni.getStorageSync('weijia_pro')['u_id'],
						state:this.curTabIndex
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
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 2000);
			
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
