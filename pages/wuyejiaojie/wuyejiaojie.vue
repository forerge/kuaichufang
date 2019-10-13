<template>
	<view>
		<view class="grid grid-col-2">
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center row1" >
					<text class="text" >取钥匙人个人信息</text>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row2" >
					<text class="text" >名称：</text>
					<input type="text" value=""  placeholder="请输入联系人名称"/>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center row2" >
					<text class="text" >电话号码：</text>
					<input type="text" value=""  placeholder="请输入联系人电话号码"/>
			</view>
			
			<view class="grid-list grid-combine-col-2 grid-col-align-left-center row3" >
				<view class="row3-row1">
					密码锁密匙
				</view>
					<view class="grid-row-align-space-between-center row3-row2">
						<text class="text" >密码：</text>
						<input type="text" value=""  placeholder="请输入密码锁密匙"/>
					</view>
			</view>
			</view>
		
		
		
		<textareaColumnFrame columnTitle="房源描述" :titleBorderTopHide="true"  placeholder="为提高您的出房速度，请描述房源核心优势，如近地铁站；以及签约对象，时长付款等方式"/>

		
		<view class="grid grid-col-2">
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-around row4" >
				<view class="row4-row1">
					联系方式
				</view>
					<view class="grid-row-align-space-between-center row4-row2">
						<text class="text" >电话号码：</text>
						<input type="text" value=""  placeholder="请输入电话号码"/>
					</view>
			</view>
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-around row5" >
				<view class="row5-row1">
					为保护您的隐私，您的号码将会以虚拟号码的形式拨打
				</view>
				<view class="row5-row2">
					详细地址
				</view>
					<view class="grid-row-align-space-between-center row5-row3">
						<text class="text" >地址：</text>
						<input type="text" value=""  placeholder="请输入详细地址"/>
					</view>
			</view>
		</view>
		
		<bigButonYellow big_button_yellow="提交"/>
		
	</view>
</template>

<script>
	import bigButonYellow from "@/components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	import textareaColumnFrame from "@/components/dzy-textarea-column-frame/dzy-textarea-column-frame.vue";
	export default {
		components:{
			textareaColumnFrame,
			bigButonYellow
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.grid{
	.grid-list{
		padding:0 1em;
	}
	.grid-list.row1{
		height:40px;background:#EFECF0;
		.text{
			color:#AAAAAA;
		}
	}
	.grid-list.row2{
		border-bottom:1px solid #F4F4F4;
		height:50px;
		.text{
			font-weight: 700;
		}
	}
	.grid-list.row3{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:70px;
		.row3-row1{
			color:#A6A6A6;
			font-size:12px;
		}
		.row3-row2{
			width:100%;
			.text{
				font-weight: 700;
			}
		}
	}
	.grid-list.row4{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:90px;
		.row4-row1{
				font-weight: 700;
		}
		.row4-row2{
			width:100%;
			.text{
				font-weight: 700;
			}
		}
	}
	.grid-list.row5{
		border-bottom:1px solid #F4F4F4;
		border-top:1em solid #EFECF0;
		height:120px;
		.row5-row1{
				color:#A6A6A6;
				font-size:12px;
		}
		.row5-row2{
				font-weight: 700;
		}
		.row5-row3{
			width:100%;
			.text{
				font-weight: 700;
			}
		}
	}
}
</style>
