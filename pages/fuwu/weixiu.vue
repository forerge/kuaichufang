<template>
	<view>
		<textareaColumnFrame ref="textareaColumnFrame" columnTitle="标题" borderTopColor="#fff" placeholder="问题描述..." inputShow="true" inputPlaceholder="请输入标题"/>
		<bigButonYellow @tap="tijiao" big_button_yellow="提交"/>
		<block v-for="(val,index) in weixiu" :key="index">
			<view class="grid grid-col-2 weixiu-list" @click="chakan(val.o_id)">
					<view class="grid-list grid-combine-col-2">
						<view class="title grid-row-align-center">
							{{val.o_title}}
						</view>
						<view class="description" >
							{{val.o_content}}
						</view>
						<view class="status grid-row-align-space-around-center">
							<text class="text" v-if="val['o_status'] == 1">订单未接收</text>
							<text class="text" v-if="val['o_status'] == 2">处理中</text>
							<text class="text" v-if="val['o_status'] == 3">完成</text>
							<text class="money border" v-if="val['o_status'] == 1">删除</text>
							<text class="money" v-if="val['o_status'] == 2"></text>
							<text class="money" v-if="val['o_status'] == 3">{{val['o_money']}}￥</text>
						</view>
					</view>
			</view>
		</block>
	</view>
</template>

<script>
	import textareaColumnFrame from "../../components/dzy-textarea-column-frame/dzy-textarea-column-frame.vue"
	import bigButonYellow from "../../components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			textareaColumnFrame,
			bigButonYellow
		},
		data() {
			return {
				serverApiUrl:this.$commonConfig.serverApiUrl,
				weixiu:'',
				zuixin:'',
				h_id:''
			};
		},
		
		onLoad(e){
			this.h_id = e.h_id;
			uni.request({
				url: this.serverApiUrl+'home/order/kuai_weixiu', //请求url
				method: 'POST',               //请求方式 
				data: {
					ou_id:uni.getStorageSync('weijia_pro')['u_id'],
					o_leixing:3,
					o_level:1,
					oh_id:this.h_id
				},                     //传递的数据
				success: res => {   //成功执行回调函数
					if(res.statusCode==200){
						console.log(res.data);
						this.weixiu = res.data;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			tijiao(){
				var textareaVal=this.$refs.textareaColumnFrame.textareaVal;//获取文本域值
				var inputVal=this.$refs.textareaColumnFrame.$refs.columnTitle.inputVal;//获取输入框值
				console.log(textareaVal);
				console.log(inputVal);
				uni.request({
					url: this.serverApiUrl+'home/order/qk_weixiu_tianjia', //请求url
					method: 'POST',               //请求方式 
					data: {
						ou_id:uni.getStorageSync('weijia_pro')['u_id'],
						o_title : inputVal,
						o_content: textareaVal,
						oh_id:this.h_id,
					},                     //传递的数据
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							uni.navigateTo({
								url: '../login/empty?message='+'需求已发出，24小时内会给予回复！'
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			chakan(o_id){
				uni.navigateTo({
					url: './weixiu-fabu?o_id='+o_id
				});
			}
		}
	}
</script>

<style lang="scss">
.grid.weixiu-list{
	width:90%;
	margin:0 auto;
	.grid-list{
		padding:0.5em;
		box-shadow: 0 2px 5px #CCCCCC;
		margin-bottom:1em;
		border-radius: 15px;
		.title{
			font-size:1.2em;
		}
		.description{
			color:#999;
			font-size:1em;
			text-indent: 2em;
			margin-top:0.5em;
		}
		.status{
			margin-top:0.5em;
		}
	}
}
.grid-row-align-space-around-center{
	.border{
		border: 1px solid #2C405A;
	}
	}
</style>
