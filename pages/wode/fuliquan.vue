<template>
	<view>
		<view  class="header" v-if='have == 0'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">亲你目前暂无预约</view>
		</view>
		<view v-else>
			<view class="grid grid-col-3 header">
				<view class="grid-list grid-combine-col-3 grid-row-align-space-around-center">
					<text class="text" @tap="tabDiscountCoupon(1)" :class="{active:curIndex==1}">未使用(2)</text>
					<text class="text" @tap="tabDiscountCoupon(2)" :class="{active:curIndex==2}">已使用(2)</text>
					<!-- <text class="text" @tap="tabDiscountCoupon(2)" :class="{active:curIndex==2}">已赠送(1)</text> -->
				</view>
			</view>
			
			<!-- 未使用券 -->
			<block v-for="(val,index) in fulijuan" :key="index">
				<view class="contents"  v-if="val.c_status == curIndex">
					<view class="list">
						<image class="img" :src="serverImgUrl+'yellow-bg.png'" v-if="val['c_status'] == 1" ></image>
						<image class="img" :src="serverImgUrl+'gray-bg.png'" v-if="val['c_status'] == 2" ></image>
						<view class="grid grid-col-2">
							<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom" v-if="val['c_status'] == 1">未使用</view>
							<view class="grid-list grid-combine-col-2 grid-row-align-left-bottom" v-if="val['c_status'] == 2">已使用</view>	
							
							<view class="grid-list grid-col-align-center">
								<text class="money">￥{{val.c_money}}</text>
								<text class="title">福利券</text>
								<text class="msg" v-if="val['c_level'] == 1" >(租房)</text>
								<text class="msg" v-if="val['c_level'] == 2" >(非租房)</text>
							</view>
							<view class="grid-list grid-col-align-center-space-around">
								<text v-if="val['c_level'] == 1" >可抵扣房费或赠送</text>
								<text v-if="val['c_level'] == 2" >可抵扣其他费用（除房费）或赠送</text>
								<text>租房奖励</text>
								<text class="textBorder">赠送</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			
			
			<view class="grid grid-col-2 give" :class="{active:curIndex==0}">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input class="input" type="text" value="" placeholder="请输入对方手机号"/>
					<text class="btn">赠送</text>
				</view>
			</view>
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
				curIndex:1,
				yong:true,
				fulijuan:'',
			};
		},
		methods:{
			tabDiscountCoupon(index){
				this.curIndex=index;
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('weijia_status'));
			console.log(uni.getStorageSync('weijia_role'));
			console.log(uni.getStorageSync('weijia_pro')['u_phone']);
			uni.request({ 
				url: this.serverApiUrl+'home/coupon/qing_list', //请求url
				method: 'POST',               //请求方式 
				data: {
					u_id:uni.getStorageSync('weijia_pro')['u_id']
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						if(res.data == 0){
							this.have = 0;
						}else{
							this.fulijuan= res.data;
							this.have = 1
						}
						console.log(this.fulijuan);
					}else{ 
						// console.log(res);
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}, 
	}
</script>

<style lang="scss">
.header{
	width:90%;
	margin: 0 auto;
	.grid-list{
		height:100rpx;
		.text{
			padding-bottom:6px;
			border-bottom:1px solid #fff;
			&.active{
			color:#FC9940;
			border-bottom:1px solid #FC9940;
			}
		}
	}
}
.contents{
	width:90%;
	margin:0 auto;
	&.active{
	display:block;
	}
	.list{
		height:160px;
		position:relative;
		margin-bottom:2em;
		.img{
			width:100%;
			height:100%;
		}
		.grid{
			position: absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			color:#fff;
			.grid-list{
				&:first-child{
					height:20%;
					padding-left:1.5em;
				}
				&:not(:first-child){
					.money{
						font-size:1.5em;
					}
					.title{
						font-size:2em;
						
					}
					.msg{
						font-size:1em;
					}
					height:80%;
					padding-right:1.5em;
					.textBorder{
						padding:3px 1.5em;
						border:1px solid #fff;
						border-radius: 12px;
					}
				}
			}
		}
	}
}

.grid.give{
	width:90%;
	margin:0 auto;
	display:none;	
	&.active{	
		display:block;	
		}
	.grid-list{
		height:100rpx;
		.input{
			box-sizing: border-box;
			border:1px solid #D2D2D2;
			border-right:none;
			height:70rpx;
			width:75%;
			padding-left:1em;
		}
		.btn{
			height:70rpx;
			line-height:70rpx;
			width:25%;
			text-align: center;
			background:#FC881C;
			color:#fff;
		}
	}
}
</style>
