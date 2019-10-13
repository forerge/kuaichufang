<template>
	<view>
	<view class="page-body">
			<map style="width: 100%; height: 150px;" 
			:latitude="latitude" 
			:longitude="longitude" 
			:markers="markers" 
			>
			</map>
        </view>
	</view>
</template>
  
<script>
	export default {
		props:[
			'latitude',
			'longitude',
			'address'
		],
		data() {
			return{
				markers:[{
					label:{
						content:this.address,
						bgColor:'#fff'
					},
					latitude: this.latitude,
					longitude: this.longitude,
					iconPath: '../../static/location.png'
				}]
			}
		}
	}
</script>

<style lang="scss">

</style>
