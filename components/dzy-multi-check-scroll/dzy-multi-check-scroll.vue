<template>
    <view>
			<view class="mask"  v-show="show">
				<scroll-view scroll-y="true" class="scroll-up-down">
					<checkbox-group @change="checkbox">
						 <view class="grid grid-col-2 ">
								<view class="grid-list grid-combine-col-2 grid-row-align-center title-box">
									 <text class="title">{{multiCheckTitle}}</text> <text class="btn" @tap="checkDone">完成</text>
								</view>
								<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
										
								</view>
								
						<block v-for="(val,index) in checkArray" :key="index">
								<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
										<text>{{val}}</text> 
											<checkbox :value="val" />
								</view>
						</block>
						 </view>   
			</checkbox-group>
				</scroll-view>
			</view>
    </view>
</template>

<script>
      export default {
				props:['show','multiCheckTitle','checkArray'],
      	data() {
      		return {
							checkedVal:[]
						}
				},
				methods:{
					// 赋值
					checkbox(e){
						this.checkedVal=e.detail.value;
					},
					//传值
					checkDone(){
						this.$emit('multiCheckDone',this.checkedVal);
						this.checkedVal=[];
					}
				}
		}
</script>

<style lang="scss" scoped>
					// 上下滚动样式
          .scroll-up-down {
						height:50%; // 上下滚动必须加的属性
						position: absolute;
						bottom:0;
						background: #fff;
           .grid{
						 .grid-list{
							 position: relative;
							 height:50px;
							 border-top:1px solid #EBEBEB;
							 padding:0 1.5em;
							 &.title-box{
								 position: fixed;
								 z-index: 999;
								  height:50px;
								 background: #F6F6F6;
								 color:#A9A9A9;
								 border-top:1px solid #EBEBEB;
								 .btn{
									 position: absolute;
									 right:1.5em;
									 color:#FA3131;
								 }
							 }
						 }
					 }
          }

</style>
