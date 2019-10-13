<template>
	<view>
		
		<view class="grid grid-col-2 mianfeirenzheng-input">
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center input-box">
					<text class="text">产权人</text>
					<input class="input" type="text" placeholder="请输入名字"/>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center input-box">
					<text class="text">身份证号</text>
					<input class="input" type="text" placeholder="请输入身份证"/>
				</view>
		</view>
		
		<view class="grid grid-col-2 fangbenzhaopian">
			<view class="grid-list grid-combine-col-2  title-box">
				<text class="text">房本照片</text>
			</view>
			<view class="grid-list grid-combine-col-2  grid-col-align-center img-upload-box">
				<view class="img-upload grid-row-align-center">
					<text class="icon">+</text>
				</view>
				<text class="img-upload-remind">上传房本原件首页</text>
			</view>
			<view class="grid-list grid-combine-col-2  grid-col-align-center img-upload-box">
				<view class="img-upload grid-row-align-center">
					<text class="icon">+</text>
				</view>
				<text class="img-upload-remind">上传房本原件信息页</text>
			</view>
			<view class="grid-list grid-combine-col-2 img-upload-notice">
				<text class="text">上传房本原件信息页</text>
			</view>
		</view>
		
		<bigButonYellow big_button_yellow="确定"/>
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
.mianfeirenzheng-input{
	.grid-list{
		padding:0 1em;
		border-top:1px solid #EDEDED;
		&.input-box{
			height:55px;
			.text{
				font-weight: 700;
			}
		}
	}	
}
.fangbenzhaopian{
	margin:0 1em;
	.grid-list{
		&.title-box{
			padding-top:0.5em;
			font-weight: 700;
			border-top:0.5em solid #E5E5E5;
		}
		&.img-upload-box{
			height:250rpx;
			border:1px solid #ccc;
			border-radius: 15px;
			margin-top:1em;
			.img-upload{
				width:100rpx;
				height:100rpx;
				border:1px solid #CCCCCC;
				border-radius: 100rpx;
				.icon{
					font-size:35px;
					color:#CCCCCC;
				}
			}
			.img-upload-remind{
				margin-top:0.5em;
				font-size:$uni-font-size-sm;
			}
		}
		&.img-upload-notice{
			margin-top:0.5em;
			margin-bottom:1em;
			color:#F72A2B;
			.text{
				font-sise:$uni-font-size-sm-minus;
			}
		}
	}
}
</style>
