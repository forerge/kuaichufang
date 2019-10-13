<template>
	<view>       
			<picker 
			@change="bindPickerChange" 
			@columnchange="columnchange"  
			mode = "multiSelector" 
			:range="range" 
			:value="value" 
			:iniIndex="iniIndex" 
			>
					<slot name="show-province-city-area"></slot>
			</picker>
	</view>
</template>
   
<script>
	import provinceData from '@/common/city-data/province.js';
	import cityData from '@/common/city-data/city.js';
	import areaData from '@/common/city-data/area.js';

	export default { 
		props:[
			"iniIndex" //设置range默认显示索引对应的值
		],
		data() {
			return {
				range:[], //从底部弹起的滚动选择器显示的数据
				value:this.iniIndex
			};
		},
		//初始化
		created(){
			//省转化一维数组形式
			var tempSheng=[];
			provinceData.forEach(function(value){
				tempSheng.push(value.label);
			});
			//市转化一维数组形式
			var tempShi=[];
			cityData[this.value[0]].forEach(function(value){
				tempShi.push(value.label);
			});
			//区转化一维数组形式
			var tempQu=[];
			areaData[this.value[0]][this.value[1]].forEach(function(value){
				tempQu.push(value.label);
			});
			//数据初始化赋值
			this.range=[tempSheng,tempShi,tempQu];
		},
            methods: {
				// value 改变时触发 change 事件，event.detail = {value: value}
                bindPickerChange: function(e) {
					var shengIndex=e.detail.value[0];
					var shiIndex=e.detail.value[1];
					var quIndex=e.detail.value[2];
					//console.log(this.range[0][shengIndex]);//获取省
					//console.log(this.range[1][shiIndex]);//获取市
					//console.log(this.range[2][quIndex]);//获取区 */
					this.$emit('provinceCityAreaChange', [
						this.range[0][shengIndex],
						this.range[1][shiIndex],
						this.range[2][quIndex]
						]);
                },
				/* 
				某一列的值改变时触发 columnchange 事件，
				event.detail = {column: column, value: value}，
				column 的值表示改变了第几列（下标从0开始），
				value 的值表示变更值的下标 
				*/
				columnchange:function(e){
					var tempSheng=[];
					provinceData.forEach(function(value){
						tempSheng.push(value.label);
					});
					if(e.detail.column==0){//省改变时
						var tempShi=[];
						cityData[e.detail.value].forEach(function(value){
							tempShi.push(value.label);
						});
						var tempQu=[];
						areaData[e.detail.value][0].forEach(function(value){
							tempQu.push(value.label);
						});
						this.range=[tempSheng,tempShi,tempQu];
						this.value=[e.detail.value,0,0];
					}else if(e.detail.column==1){ //市改变时
						var tempShi=[];
						cityData[this.value[0]].forEach(function(value){
							tempShi.push(value.label);
						});
						var tempQu=[];
						areaData[this.value[0]][e.detail.value].forEach(function(value){
							tempQu.push(value.label);
						});
						this.range=[tempSheng,tempShi,tempQu];
						this.value=[this.value[0],e.detail.value,0];
					}
				} 
            }
	}
</script>

<style lang="scss">

</style>
