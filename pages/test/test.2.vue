<template>
	<view> 
		 <!-- fields	String	day(默认)	有效值 year,month,day，表示选择器的粒度 -->
		   <picker @change="bindPickerChange" mode="date" :value="curdate" :start="curdate" end="2050-1-1" fields="month">
		       <text  >日期</text>
		    </picker>
			  
		 
	</view>
</template>
   
<script>
	export default { 
		
		data() {
			return {
				curdate:'',
			};
		},
		created(){
				//获取当前时间
				var date=new Date();
				this.curdate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
			},
		methods: {
				bindPickerChange:function(e){
					console.log(e.detail);
				}
			}
		}
</script>

<style lang="scss">

</style>
