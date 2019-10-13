<template>
    <view>
			
			
			<text @tap="showdMultiCheckScroll">{{checkArray||'获取值'}}</text>
    </view>
</template>

<script>
	import multiCheckScroll from "@/components/dzy-multi-check-scroll/dzy-multi-check-scroll.vue";
      export default {
				components:{
					multiCheckScroll
				},
      	data() {
      		return {
							showMultiCheck:false,
							checkArray:""
						}
				},
				methods:{
					//点击弹框"完成"按钮时触发
					checkBoxDone(checkArrayVal){
						this.showMultiCheck=false;//关闭多选弹框
						this.checkArray=checkArrayVal.toString();//获取选中值
					},
					//事件显示多选弹框
					showdMultiCheckScroll(){
						this.showMultiCheck=true;
					}
				}
		}
</script>

<style lang="scss" scoped>
					
</style>
