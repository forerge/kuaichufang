<template>
	<view>
		<view v-if='have'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">亲你目前暂无履行中的合同</view>
		</view>
		<view v-else > 
			<block v-for="(val,index) in tuijianContent" :key="index">
				<view class="grid grid-col-2 tuijian-content-list" v-if="val.o_level == 1">
					<view class="grid-list grid-combine-col-2 ">
						<view class="navigator"  hover-class="none">
							<!-- <navigator class="grid grid-col-2 tuijian-content-list" :url="'../fangyuanxiangqing/fangyuanxiangqing?id='+val.h_id"> -->
							<view class="title">{{val.h_qv}}</view>
							<view class="description">{{val.h_addr}}</view>
							<view class="btn-box grid-row-align-space-around-center">
								<navigator :url="'../fangyuanxiangqing/fangyuanxiangqing2?id='+val.h_id" class="btn ">查看合同</navigator>
								<text class="btn" v-if="val.o_status == 3">房东已确认</text>
								<text class="active" v-else>房东未确认</text>
								<text class="btn active" @click="del(val.o_id,index)">删除</text>
							</view>
						</view>
					</view> 
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				// role:'',                        //当前角色
				uid:'',                         //当前用户编号
				have:'',                        //是否有合同   false/true
				tuijianContent:'',
			};
		},
		methods: {
			del(id,obj){
				uni.request({
					url: this.serverApiUrl+'home/order/kuai_order_del', //请求url
					method: 'POST',               //请求方式 
					data: {
						u_id:this.uid,
						o_id:id,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								this.tuijianContent[obj]['o_level'] = -1;
							}
						}else{ 
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			del(id,obj){
				uni.request({
					url: this.serverApiUrl+'home/order/kuai_order_del', //请求url
					method: 'POST',               //请求方式 
					data: {
						u_id:this.uid,
						o_id:id,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								this.tuijianContent[obj]['o_level'] = -1;
							}
						}else{ 
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad() {
			this.uid = uni.getStorageSync('weijia_pro')['u_id'];
			// this.role = uni.getStorageSync('weijia_role');
			// console.log(this.role);
			// console.log(this.uid);
			uni.request({ 
				url: this.serverApiUrl+'home/order/kuai_list_fangke', //请求url
				method: 'POST',               //请求方式 
				data: {
					u_id:this.uid,
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
						if(res.data == 0){
							this.have = true;
						}else{
							this.have = false;
							this.tuijianContent= res.data;
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
</script>

<style lang="scss" scoped>
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


.grid.tuijian-content-list{
		width:94%;
		margin:0 auto;
		margin-top:15px;
		.grid-list{
			padding:1em;
			box-shadow: 0 2px 5px #ccc;
			.navigator{
				display: block;
				height:100%;
				.title{
					text-align: center;
					font-weight: 700;
				}
				.description{
					margin-top:0.5em;
					color:#C1C1C1;
				}
				.btn-box{
					margin-top:1em;
					.btn{
						padding:6px 12px;
						border:1px solid #CCCCCC;
						border-radius: 12px;
						font-size:$uni-font-size-sm;
						&.active{
							color:#FC8B86;
							border:1px solid #FC8B86;
						}
					}
					
				}
			}
		}
	}
</style>
