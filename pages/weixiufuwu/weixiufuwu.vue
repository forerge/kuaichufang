<template>
	<view>
		<tuijianContentList :tuijianContent="tuijianContent"/>
		<textareaColumnFrame columnTitle="补充内容" borderTopColor="#fff" placeholder="描述您要维修的原因..." inputShow="true" inputPlaceholder="请输入需维修物品"/>
		<columnTitle columnTitle="请输入地址" borderTopColor="#fff" inputShow="true" inputPlaceholder="请输入您的地址" />
		<bigButonYellow big_button_yellow="提交"/>
	</view>
</template>

<script>
	import tuijianContentList from '../../components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue'
	import textareaColumnFrame from "../../components/dzy-textarea-column-frame/dzy-textarea-column-frame.vue"
	import columnTitle from "../../components/dzy-column-title/dzy-column-title.vue"
	import bigButonYellow from "../../components/yw-big-buton-yellow/yw-big-buton-yellow.vue";
	export default {
		components:{
			tuijianContentList,
			textareaColumnFrame,
			columnTitle,
			bigButonYellow
		},
		data() {
			return {
				//我的发布
				tuijianContent:[
					{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					}
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
