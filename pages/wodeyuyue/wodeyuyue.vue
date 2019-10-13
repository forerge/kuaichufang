<template>
	<view>
		<view  class="header" v-if='tuijianContent == 0'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">亲你目前暂无预约</view>
		</view>
		<view v-else>
			<block v-for="(val,index) in tuijianContent" :key="index">
			<view class="grid grid-col-2 tuijian-content-list" v-if="val['m_status'] >-2">
				<navigator class="grid-list grid-combine-col-2 grid-row-align-space-between-center" :url="'../querenzufang/querenzufang?hid='+val.h_id+'&mid='+val.m_id" >
					<view class="image-box"  >
						<image class="img" :src="val.h_uploads[0]" ></image>
					</view>
					<view class="description">
							<view class="view v1">{{val.h_state+'.'+val.h_qv+' '+val.h_shi+'居室.'+val.h_ting+'厅.'+val.h_wei+'卫'}}</view>
							<view class="view v2">
								<text class="text">{{val.h_space+'㎡'}}</text>
								 <text class="text">{{val.h_floor+'层'}}</text> 
								 <text class="text">{{'朝'+val.h_xiang}}</text>
								  <text class="text"> <text class="text-active">{{val.h_money}}</text>元/月</text>
								  <br>
								 <text class="text">{{'距'+val.h_metro_no+'线地铁'+val.h_metro_length+'m'}}</text>
								 <text class="text">{{val['m_level']}}</text>
							</view>
							<view class="view v3">
								<text class="text text-active">联系人:{{val.hu_name}}</text>
								 <text class="text">/</text> 
								 <text class="text">电话:{{val.hu_phone}}</text>
							</view>
							<view class="view v4 grid-row-align-space-between-center">
								<text class="text">{{val.m_level}}</text>
								<text class="text btn" @click="del(val.m_id,index)">删除</text>
							</view>
					</view>
				</navigator> 
			</view>
			</block>
		</view>
		
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//我的收藏
				tuijianContent:[],
				// role:'',
			};
		},
		methods: { 
			del(obj,key){
				uni.request({
					url: this.serverApiUrl+'home/meet/kuai_fangke_del', //请求url
					method: 'POST',               //请求方式
					data: {id:obj},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								this.tuijianContent[key][m_status] == -2;
								// uni.redirectTo({
								// 	url: '../wodeyuyue/fangdongyuyue'
								// });
							}
						}else{
							console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		  },
		  
		  onLoad() {
			this.role = uni.getStorageSync('weijia_role');
			  console.log(this.role);
		  	//执行uni-app提供的类似ajax异步加载
		  	uni.request({ 
		  		url: this.serverApiUrl+'home/meet/kuai_list_fangke', //请求url
		  		method: 'POST',               //请求方式
		  		data: {id:uni.getStorageSync('weijia_pro')['u_id']},                     //传递的数据
		  		success: res => {   //成功执行回调函数
		  			if(res.statusCode==200){
						console.log(res.data);
		  				this.tuijianContent = res.data;
		  			}else{
		  				console.log(res);
		  			}
		  		},
		  		fail: () => {},
		  		complete: () => {}
		  	});
		  }, 
	}
</script>

<style lang="scss">
.grid.tuijian-content-list{
		width:94%;
		margin:0 auto;
		margin-top:15px;
		.grid-list{
			padding:1em;
			box-shadow: 0 2px 5px #ccc;
			.image-box{
				display: block;
				width:35%;
				height:100%;
				.img{
					height:100%;
					width:100%;
					border-radius: 15rpx;
				}
			}
			.description{
				box-sizing: border-box;
				padding-left:1em;
				width:65%;
				.view{
					margin-bottom:0.5em;
					&.v2{
						color:#C1C1C1;
						font-size:$uni-font-size-sm;
						.text{
							margin-right:1em;
							.text-active{
								color:#FC8B22;
							}
						}
					}
					&.v3{
						color:#6B6B6B;
						font-size:$uni-font-size-sm;
						.text{
							margin-right:1em;
							&.text-active{
								color:#7AE5BB;
							}
						}
					}
					&.v4{
						color:#6B6B6B;
						font-size:$uni-font-size-sm;
						.text{
							&.btn{
								border:1px solid #ccc;
								border-radius: 12px;
								padding:3px 12px;
							}
						}
					}
				}
			}
		}
	}
	.header{
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
