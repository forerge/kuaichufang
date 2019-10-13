<template>
	<view >
		<view class="content">
			<view class="title head">
				取钥匙人的个人信息
			</view>
			<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" value="" placeholder="请输入联系人名称"/>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" value="" placeholder="请输入联系电话"/>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="title">
				密码锁密匙：
			</view>
			<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" value="" placeholder="请输入密码锁密匙"/>
				</view>
			</view>
		</view>
		
		<textareaColumnFrame columnTitle="房源描述" :titleBorderTopHide="true"  placeholder="为提高您的出房速度，请描述房源核心优势，如近地铁站；以及签约对象，时 长，付款等方式"/>
		
		<view class="content">
			<view class="title">
				联系方式:
			</view>
			<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-col-align-left-center msglist">
					<input type="text" value="" placeholder="请输入联系电话"/>
					<text class="msg">为保护您的隐私，您的号码将会以虚拟号码的形式拨打</text>
				</view>
			</view>
		</view>
		
		<view class="content">
			<view class="title">
				详细地址:
			</view>
			<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<input type="text" value="" placeholder="请输入地址"/>
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
.content{
	width:90%;
	margin:0 auto;
}
.title{
	margin-bottom:0.5em;
	&.head{
		margin-top:2em;
	}
	font-weight: 700;
}
.grid{
	.grid-list{
		margin-bottom:1em;
		input[type='text']{
			box-sizing: border-box;
			padding-left:1em;
			width:100%;
			height:35px;
			border:1px solid #E5E5E5;
			border-radius: 35px;
		}
		.msg{
			color:#F52525;
			font-size: 12px;
		}
		
	}
}
</style>
