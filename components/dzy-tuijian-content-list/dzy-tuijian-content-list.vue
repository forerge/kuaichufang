<template>
	<view>
		<block v-for="(val,index) in tuijianContent" :key="index">
		<navigator class="grid grid-col-2 tuijian-content-list" :url="'../fangyuanxiangqing/fangyuanxiangqing?id='+val.h_id">
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
					<view class="img-navigator"  hover-class="none">
						<image class="img" :src="val.h_uploads[0]" ></image>
			    </view>
				<view class="description">
					<view hover-class="none">
					<view class="v1">{{val.h_state+'.'+val.h_qv+' '+val.h_shi+'居室.'+val.h_ting+'厅.'+val.h_wei+'卫'}}</view>
					<view class="v2">
						<text class="t1">{{val.h_space+'㎡'}}</text>
						 <text class="t2">{{val.h_floor+'层'}}</text> 
						 <text class="t3">{{'朝'+val.h_xiang}}</text> <br>
						 <text class="t4">{{'距'+val.h_metro_no+'线地铁'+val.h_metro_length+'m'}}</text>
					</view>
					<view class="v3">
						<text class="t1">{{val.h_rule}}</text>
						 <text class="t2">{{val.h_metro_length < 2000?'离地铁近':''}}</text> 
						 <!-- <text class="t3">{{JSON.parse(val.h_liangdian)['yangtai']?'有阳台':''}}</text> -->
					</view>
					<view class="v4">
						<text class="t1">{{val.h_money}}</text>
						 <text class="t2">元/月</text>
					</view>
					 </view>
				</view>
			</view> 
		</navigator>
		</block>
	</view>
</template>

<script>
	export default {
		props:['tuijianContent'],
		data() {
			return {
			}
		}
	}
</script>

<style lang="scss">
	.grid.tuijian-content-list{
		width:94%;
		margin:0 auto;
		margin-top:15px;
		.grid-list{
			height:auto !important;
			padding:1em;
			box-shadow: 0 2px 5px #ccc;
			.img-navigator{
				display: block;
				width:35%;
				height:100%;
				.img{
					height:100%;
					width:100%;
					border-radius: 15rpx;
				}
			}
			.description{
				padding-left:1em;
				width:65%;
			}
			.description view{
				margin-bottom:3px;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.description .v2{
				color:#C1C1C1;
				font-size:$uni-font-size-sm;
			}
			.description .v2 text{
				margin-right:1em;
			}
			.description .v3{
				color:#6B6B6B;
				font-size:$uni-font-size-sm;
			}
			.description .v3 text{
				margin-right:1em;
			}
			.description .v3 .t1{
				color:#7AE5BB;
			}
			.description .v4{
				color:#FC8B22;
				font-size:$uni-font-size-sm;
			}
		}
	}
</style>
