<template >
	<view >
		<view class="grid grid-col-2 weixiuzhifu">
			<view class="grid-list grid-combine-col-2 grid-row-align-center title">
				{{detail.o_title}}
			</view>
			<view class="grid-list grid-combine-col-2 description">
				{{detail.o_content}}
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-center  input-box">
				<input type="text" @input="jine" placeholder="金额"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-center btn-box">
				<text class="btn" @tap="fuqian">支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data() {
			return {
				serverApiUrl:this.$commonConfig.serverApiUrl,
				inputVal:'',
				money:'',
				detail:'',
				o_id:''
			}
		},
		onLoad(e){
			this.o_id = e.o_id;
			uni.request({
				url: this.serverApiUrl+'home/order/qk_weixiu_detail', //请求url
				method: 'POST',               //请求方式 
				data: {
					o_id:e.o_id,
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						this.detail = res.data
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			fuqian(){
				uni.request({
					url: this.serverApiUrl+'home/order/qk_weixiu_zhifu', //请求url
					method: 'POST',               //请求方式 
					data: {
						o_id:this.o_id,
						o_money:this.money,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							if(res.data == 1){
								uni.navigateTo({
									url: '../login/empty?message='+'支付成功！'
								});
							}
							
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			jine(e){
				this.money = e.detail.value
			},
		}
		
	}
</script>

<style lang="scss" scoped>
.grid.weixiuzhifu{
	width:90%;
	margin:0 auto;
	.grid-list{
		padding:1em 0;
		&.title{
			font-size:1.1em;
		}
		&.description{
			text-indent: 2em;
			font-size:0.9em;
			color:#999;
		}
		&.input-box{
			input{
				text-align: center;
				width:50%;
				border:1px solid #ccc;
				border-radius: 10px;
			}
			
		}
		&.btn-box{
			.btn{
				padding:3px 12px;
				border:1px solid #ccc;
				border-radius: 10px;
				color:#007AFF;
			}
		}
	}
}
</style>
