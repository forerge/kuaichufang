<template>
	<view> 
		   <picker @change="bindPickerChange" mode="time" :value="curtime" start="8:00" end="18:00" >
		       <text  >显示时间</text>
		    </picker>
			  
		 
	</view>
</template>
   
<script>
	export default { 
		
		data() {
			return {
				curtime:''
			};
		},
		created(){
				//获取当前时间
				var date=new Date();
				var hours=date.getHours();   //返回 Date 对象的小时 (0 ~ 23)。
				var minutes=date.getMinutes();   //返回 Date 对象的分钟 (0 ~ 59)。 
				this.curtime=hours+':'+minutes;
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
