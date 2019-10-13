<template>
	<view  class="page">
		
		<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-col-align-left-space-around row1">
					<text class="text1">物业托管已上报</text>
					<text class="text2">物品清点</text>
					<text class="text3">1.床 2.冰箱 3.桌椅 4.微波炉 5.衣柜</text>
				</view>
				
				<view class="grid-list grid-combine-col-2 row2">
					<text class="grid-row-align-left-center text1">现场拍照（<text class="text1-1">3-9张</text>）</text>
					<view class="grid-row-align-center v1">
						<view class="grid-row-align-center circle">
							+
						</view>
					</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-col-align-left-space-around row3">
					<view class="grid-row-align-space-between-center v1">
						<view class="grid-col-align-left-top v1-1">
							<text class="text1">缴纳水/电费</text>
							<text class="text2">门牌号  401</text>
						</view>
						<text class="v1-2">立即支付</text>
					</view>
					<text class="v2">
						物业交接完成
					</text>
				</view>
		</view>
		<bigButonYellow big_button_yellow="提交"/>
	</view>
</template>

<script>
	import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			bigButonYellow
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.page{
	width:90%;
	margin:0 auto;
}
.grid{
	.grid-list{
		&.row1{
			height:200rpx;
			.text1{
				font-size:$uni-font-size-base;
			}
			.text2{
				font-size:$uni-font-size-sm;
			}
			.text3{
				font-size:$uni-font-size-sm-minus;
			}
		}
		&.row2{
			.text1{
				height:40px;
				.text1-1{
					color:#FD3E3E;
				}
			}
			.v1{
				height:250rpx;
				border:1px solid #EBEBEB;
				border-radius: 15px;
				.circle{
					width:45px;
					height:45px;
					border:1px solid #EBEBEB;
					border-radius: 45px;
					color:#EBEBEB;
					font-size:25px;
					font-weight: 700;
				}
			}
		}
		&.row3{
			height:120px;
			.v1{
				width:100%;
				.v1-1{
					.text2{
						font-size:$uni-font-size-sm;
					}
				}
				.v1-2{
					padding:3px 12px;
					background:#FCE649;
					font-size:$uni-font-size-sm;
					border-radius: 12px;
				}
			}
			
		}
	}
}
</style>
