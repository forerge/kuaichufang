<template>
	<view class="page">
		<view class="grid grid-col-2 head">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<text class="text" :class="{active:activeIndex==0}" @click="wodeyuyueActive(0)">全部</text>
				<text class="text" :class="{active:activeIndex==1}" @click="wodeyuyueActive(1)">已预约</text>
				<text class="text" :class="{active:activeIndex==2}" @click="wodeyuyueActive(2)">已失败</text>
			</view>
		</view>
		<view class="grid grid-col-2 wodeyuyue-list" :class="{active:activeIndex==0||activeIndex==1}">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center title-box">
				<view class="grid-row-align-left-center text success">
					<image class="img" :src="serverImgUrl+'static/images/time-green.png'" ></image><text>预约成功</text>
					</view>
				<text class="text">06.30  12:00</text>
			</view>
			<view class="grid-list grid-combine-col-2 content">
				<view class="grid-row-align-space-between-top title">
					<text class="text">预约时间：6月30日  12：00</text>
					<text class="text">&gt;</text>
				</view>
				<view class="description">
					预约地址：上海市奉贤区南桥镇解放东路绿地翡翠国际广场3号楼1920室
				</view>
			</view>
		</view>
		<view class="grid grid-col-2 wodeyuyue-list" :class="{active:activeIndex==0||activeIndex==2}">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center title-box">
				<view class="grid-row-align-left-center text no">
					<image class="img" :src="serverImgUrl+'static/images/time-red.png'" ></image><text>预约失败</text>
					</view>
				<text class="text">06.30  12:00</text>
			</view> 
			<view class="grid-list grid-combine-col-2 content">
				<view class="grid-row-align-space-between-top title">
					<text class="text">原因：房东未在时间内确认预约时间</text>
					<text class="text">&gt;</text>
				</view>
				<view class="description">
					预约地址：上海市奉贤区南桥镇解放东路绿地翡翠国际广场3号楼1920室 副本
				</view>
			</view>
		</view>
		
	</view>
</template> 
 
<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				activeIndex:0
			} 
		},
		methods:{
			wodeyuyueActive(index){
				this.activeIndex=index;
			}
		}
		
	}
</script>
 
<style lang="scss" scoped>
.page{
	width:90%;
	margin:0 auto;
}
.head{
	.grid-list{
		height:50px;
		.text{
			color:#999999;
			&.active{
				color:#333;
			}
		}
	}
}
.wodeyuyue-list{
	display:none;
	&.active{
		display: block;
	}
	.title-box{
		height:40px;
		.text:first-child{
			.img{
				width:16px;
				height:16px;
				padding:0 3px;
			}
			&.success{
				color:#2ADE6A;
			}
			&.no{
				color:#E14A3F;
			}
		}
		.text:last-child{
			color:#999;
		}
	}
	.content{
		height:100px;
		padding:1em;
		border-top:1px solid #F2F2F2;
		box-shadow: 0 2px 3px rgba(0,0,0,0.3);
		.title{
			&.text:first-child{
				font-weight: 700;
			}
			&.text:last-child{
				color:#999;
			}
		}
		.description{
			margin-top:1em;
			color:#999;
			font-size:14px;
		}
	}
}
</style>
