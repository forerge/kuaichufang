<template>
	<view>
		
		<view class="grid grid-col-2 mianfeirenzheng fangchanren">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center title-box">
					产权人信息
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center radio-box">
					<text class="text">产权人信息</text>
					<view class="radio">
							<text class="radio-text radio-text1" @tap="radioChanquanren(0)" :class="{active:radioIndex==0}">本人</text>
							<text class="radio-text radio-text2" @tap="radioChanquanren(1)" :class="{active:radioIndex==1}">他人</text>
					</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center radio-box">
					<text class="text">产权人信息</text>
					<input class="input" type="text" placeholder="请输入名字"/>
				</view>
		</view>
		
		<view class="grid grid-col-2 mianfeirenzheng fangchanzheng">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center title-box">
					房产证信息
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center radio-box">
					<text class="text">小区名称</text>
					<input class="input" type="text" placeholder="请输入小区名称"/>
				</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center radio-box multiple-input-box">
				<text class="text">详细地址</text>
				<view class="multiple-input grid-col-align-right-center">
					<view class="radio-title grid-row-align-space-between-center">
						<text class="title">楼号</text>
						<text class="hr"></text>
						<text class="title">单元号</text>
						<text class="hr"></text>
						<text class="title">门牌号</text>
					</view>
					<input class="input" placeholder-style="font-size:12px;" type="text" placeholder="楼号，单元号，门牌号为必填信息，没有时默认无"/>
				</view>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center radio-box">
				<text class="text">房产证号</text>
				<input class="input" type="text" placeholder="请输入房产证号"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-right-center radio-box">
				<label class="radio">
					<checkbox value="" /><text class="no-fangben">老房本，没有房产证号</text>
				</label>
			</view>
		</view>
		
		
		<bigButonYellow big_button_yellow="下一步"/>
	</view>
</template>

<script>
	import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			bigButonYellow,
		},
		data() {
			return {
				radioIndex:0
			};
		},
		methods:{
			radioChanquanren:function(radioIndex){
				this.radioIndex=radioIndex;
			}
		}
	}
</script>

<style lang="scss">
.mianfeirenzheng{
	.grid-list{
		padding:0 1em;
		border-top:1px solid #EDEDED;
		&.title-box{
			height:40px;
			color:#9C9C9C;
			font-size:$uni-font-size-sm;
		}
		&.radio-box{
			height:55px;
			.text{
				font-weight: 700;
			}
			.radio{
				.radio-text{
					color:#FC881C;
					background:#fff;
					border:1px solid #FC881C;
					&.radio-text1{
						padding:1px 6px 1px 12px;
						border-right:none;
						border-radius: 10px 0 0 10px;
					}
					&.radio-text2{
						padding:1px 12px 1px 6px;
						border-left:none;
						border-radius: 0 10px 10px 0;
					}
					&.active{
						background:#FC881C;
						color:#fff;
					}
				}
				
			}
		}
	}
	&.fangchanzheng{
			.title-box{
				border-top:0.5em solid #E5E5E5;
			}
			.radio-box{
				&.multiple-input-box{
					height:70px;
					.multiple-input{
						.title{
							background:#FC881C;
							color:#fff;
							padding:1px 12px;
							font-size:$uni-font-size-sm;
						}
						.hr{
							display: block;
							height:1px;
							background: #F0F0F0;
							width:3em;
						}
						.input{
							width:100%;
						}
					}
				}
				.no-fangben{
					font-size:$uni-font-size-sm;
					color:#999999;
				}
			}
			
	}
}
</style>
