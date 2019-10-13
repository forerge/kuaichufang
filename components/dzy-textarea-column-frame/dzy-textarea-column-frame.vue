<template>
	<view>
		<columnTitle :columnTitle="columnTitle" :borderTopHide="titleBorderTopHide" :borderTopColor="borderTopColor" :inputShow="inputShow" :inputPlaceholder="inputPlaceholder" />
			<view class="textareaColumnFrame">
				<textarea class="textarea" name="content" v-model="textareaVal"  :placeholder="placeholder" placeholder-style="font-size:12px;color:#A8A8A8;"/>
			</view>
		</view>
</template>


<script>
	import columnTitle from "../dzy-column-title/dzy-column-title.vue";
	export default {
		components:{
			columnTitle
		},
		props:['columnTitle','titleBorderTopHide','borderTopColor','placeholder','inputShow','inputPlaceholder'],
		data(){
			return{
				textareaVal:''
			}
		}
	}
</script>

<style lang="scss">
	.textareaColumnFrame{
		padding:0 30rpx 30rpx;
		.textarea{
			border:1px solid #D2D2D2;
			width:100%;
			border-radius: 30rpx;
			padding:12rpx;
			font-size:$uni-font-size-base;
			box-sizing: border-box;
		}
	}
</style>
