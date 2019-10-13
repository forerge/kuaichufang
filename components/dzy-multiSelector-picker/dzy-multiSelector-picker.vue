<template>
	<view>
					<picker 
					@change="bindPickerChange" 
					mode = "multiSelector" 
					:range="range" 
					 >
					<slot name="html"></slot>
					</picker>
	</view>
</template>

<script>
	export default {
		props:['range'],
		data() {
			return {
			};
		},
		methods: {
			 bindPickerChange: function(e) {
					this.$emit('bindChange',e.detail.value); 
			  }  
    }
	}
</script>

<style lang="scss">

</style>
