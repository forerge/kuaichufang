<template>
    <view>
		<view  class="header" v-if='tuijianContent == 0'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">亲你目前暂无预约</view>
		</view>
		<view v-else>
		<block v-for="(val,index) in tuijianContent" :key="index">
			<view class="grid grid-col-2 fangdongyuyue-box">
				<view class="grid-list grid-combine-col-2">
					<view class="row row1">
						<text class="text">{{val['h_qv']}}</text>
						<text class="text">------</text>
						<text class="text">{{val['h_state']}}</text>
					</view>
					<view class="row row2">
						<text class="text">{{val['h_addr']}}</text>
					</view>
					<view class="row row3 grid-row-align-space-between-center">
						<text class="text">租客:{{val['u_phone']}}</text>
						<text class="text">{{val['m_time']}}</text>
						<text class="text">{{val['u_uname']}}</text>
					</view>
					<view class="row row2">
						<text class="text">留言:{{val['m_content']}}</text>
					</view>
					<view class="row row4 grid-row-align-space-around-center" v-if="val.m_level == 1">
						<text class="btn" @click="message(val.m_id,2)">同意</text>
						<text class="btn active" @click="message(val.m_id,-1)">不同意</text>
					</view>
					<view class="row row4 grid-row-align-space-around-center" v-else-if="val.h_level == -1">
						<text class="btn" >已成交</text>
						<text class="btn active" @click="del(val.m_id)">删除</text>
					</view>
					<view class="row row4 grid-row-align-space-around-center" v-else>
						<text class="btn" >预约成功</text>
						<text class="btn active" @click="del(val.m_id)">删除</text>
					</view>
				</view>
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
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//我的收藏
				tuijianContent:[],
				role:'',
				}
		},
		onLoad() {
			this.role = uni.getStorageSync('weijia_role');
			console.log(this.role);
			//执行uni-app提供的类似ajax异步加载
			uni.request({
				url: this.serverApiUrl+'home/meet/kuai_list_fangdong', //请求url
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
		methods:{
			message(x,y){
				var id = x;
				var	agree = y==2?y:-1;
				uni.request({
					url: this.serverApiUrl+'home/meet/kuai_meet_shenhe', //请求url
					method: 'POST',               //请求方式
					data: {id:id,agree:agree},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.redirectTo({
									url: '../wodeyuyue/fangdongyuyue'
								});
							}
						}else{
							console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			del(obj){
				uni.request({
					url: this.serverApiUrl+'home/meet/kuai_fangdong_del', //请求url
					method: 'POST',               //请求方式
					data: {id:id},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.redirectTo({
									url: '../wodeyuyue/fangdongyuyue'
								});
							}
						}else{
							console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grid.fangdongyuyue-box{
		width:90%;
		margin:1em auto 1em;
		padding:1em;
		box-shadow: 0 2px 5px rgba(0,0,0,0.5);
		border:1px solid  rgba(0,0,0,0.1);
		border-radius: 12px;
		.grid-list{
			.row{
				margin-top:0.1em;
				&:first-child{
					margin-top:0;
				}
				.btn{
					padding:3px 12px;
					border:1px solid #ccc;
					font-size:$uni-font-size-sm;
					border-radius: 12px;
					&.active{
						border:1px solid #09BB07;
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
