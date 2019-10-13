<template>
	<view>
		<columnTitle :columnTitle="columnTitle"/>
		<checkbox-group class="checkbox-column-frame" @change="checkboxChange">
		<view class="grid grid-col-4 grid-fixed-width checkbox-column">
			<block v-for="(val,index) in checkboxVal" :key="index">
			<view class="grid-list grid-row-align-center">
					<label class="label" :class="{active: activeCheckBox.indexOf(index)>-1}" @tap="activeCheckboxChange(index)">
					 <checkbox :value="val"  />{{val}}
					</label>
			</view> 
			</block>
		</view>
		</checkbox-group>
		
	</view>
</template>

<script>
	import columnTitle from "../dzy-column-title/dzy-column-title.vue";
	export default {
		components:{
			columnTitle
		},
		props:[
			"columnTitle",
			"checkboxVal"
		],
		data() {
			return {
				activeCheckBox:[]
			}
		},
		methods: {
			activeCheckboxChange(index){
				var arrIndex=this.activeCheckBox.indexOf(index);
				 if(arrIndex>-1){
							this.activeCheckBox.splice(arrIndex,1);
					}else{
							this.activeCheckBox.push(index);
					}
			},
			checkboxChange(e){
				this.$emit('checkboxChange',e.detail.value);
			}
		}
	}
</script>

<style lang="scss" >	
	.checkbox-column-frame{
		padding-bottom:30rpx;
		.checkbox-column {
			.grid-list{
				height: 50px !important;
				.label{
					font-size:$uni-font-size-sm-minus;
					padding:3px 15px;
					border-radius: 15px;
					color:#A0A0A0;
					border:1px solid #A0A0A0;
					box-sizing: border-box;
					checkbox{
						display: none;
					}
				}
				.active{
					background:#FDE648 ;
					border-color:#FDE648;
					color:#333;
				}
			}
		}
	}
</style>
