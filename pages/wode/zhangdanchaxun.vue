<template >
	<view >
		<view  class="header" v-if='have'>
			<image class="img" :src="serverImgUrl+'no-contract.png'" mode="widthFix"></image>
			<view class="text">空空如也！</view>
		</view>
		<view v-else>
			<block v-for="(val,index) in order" :key="index">
				<view class="grid grid-col-2 myorder-list">
					<view class="grid-list grid-combine-col-2 ">
						<view class="row1 grid-row-align-space-around-center">
							<text class="text">{{val['o_ctime']}}</text>
							<text class="text">{{val['o_leixing']}}</text>
							<text class="text">{{val['o_money']}}￥</text>
						</view>
						<view class="row2 grid-row-align-space-around-center">
							<text>{{val['h_qv']}}</text>
							<text>{{val['h_addr']}}</text>
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
				serverApiUrl:this.$commonConfig.serverApiUrl,
				serverImgUrl:this.$commonConfig.serverImgUrl,
				order:'',
				have:true,
			}
		},
		onLoad(){
			uni.request({
				url: this.serverApiUrl+'home/order/kuai_order_list', //请求url
				method: 'POST',               //请求方式 
				data: {
					ou_id:uni.getStorageSync('weijia_pro')['u_id'],
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
						if(res.data == 0){
							this.have = true;
						}else{
							this.have = false;
							this.order = res.data;
						}
						
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss" scoped>
.grid.myorder-list{
	width:90%;
	margin:0 auto;
	.grid-list{
		font-size:0.8em;
		padding:1em 0;
		box-shadow: 0 2px 5px #ccc;
		margin-bottom:1em;
		height:150rpx;
		.row2{
			margin-top:1em;
		}
		.text{
			&:nth-child(1){
				color:orange;
			}&:nth-child(3){
				color:olive;
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
