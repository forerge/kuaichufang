<template>
	<view>
		<view class="grid grid-col-2 tap">
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(0)' :class="{active:curIndex==0}">我的收藏</text>
			</view>
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(1)' :class="{active:curIndex==1}">我的浏览</text>
			</view>
		</view>
		<view class="tab-list" :class="{active:curIndex==0}">
		<block v-for="(val,index) in tuijianContent" :key="index">
			<scroll-view scroll-x="true" class="scroll-left-right">
			<view class="grid grid-col-5 tuijian-content-list">
			<view class="grid-list grid-combine-col-4 grid-row-align-center">
				<navigator class="img-navigator" url="javascript:void(0)" hover-class="none">
				 <image class="img" :src="val.imgUrl" ></image>
				  </navigator>
				<view class="description">
					<navigator url="javascript:void(0)" hover-class="none">
					<view class="v1">{{val.title}}</view>
					<view class="v2">
						<text class="t1">{{val.area}}</text>
						 <text class="t2">{{val.floor}}</text> 
						 <text class="t3">{{val.towards}}</text> <br>
						 <text class="t4">{{val.subwayDistance}}</text>
					</view>
					<view class="v3">
						<text class="t1">{{val.pledge}}</text>
						 <text class="t2">{{val.subway}}</text> 
						 <text class="t3">{{val.veranda}}</text>
					</view>
					<view class="v4">
						<text class="t1">{{val.monthPrice}}</text>
						 <text class="t2">元/月</text>
					</view>
					 </navigator>
				</view>
			</view> 
			<view class="grid-list right-del grid-row-align-center">
				<image class="del" :src="serverImgUrl+'static/images/lj.png'" ></image>
			</view>
		</view>
		 </scroll-view>
		 </block>
		</view>
		
		<view class="tab-list" :class="{active:curIndex==1}">
		<block v-for="(val,index) in yulan" :key="index">
			<scroll-view scroll-x="true" class="scroll-left-right">
			<view class="grid grid-col-5 tuijian-content-list">
			<view class="grid-list grid-combine-col-4 grid-row-align-center">
				<navigator class="img-navigator" url="javascript:void(0)" hover-class="none">
				 <image class="img" :src="val.imgUrl" ></image>
				  </navigator>
				<view class="description">
					<navigator url="javascript:void(0)" hover-class="none">
					<view class="v1">{{val.title}}</view>
					<view class="v2">
						<text class="t1">{{val.area}}</text>
						 <text class="t2">{{val.floor}}</text> 
						 <text class="t3">{{val.towards}}</text> <br>
						 <text class="t4">{{val.subwayDistance}}</text>
					</view>
					<view class="v3">
						<text class="t1">{{val.pledge}}</text>
						 <text class="t2">{{val.subway}}</text> 
						 <text class="t3">{{val.veranda}}</text>
					</view>
					<view class="v4">
						<text class="t1">{{val.monthPrice}}</text>
						 <text class="t2">元/月</text>
					</view>
					 </navigator>
				</view>
			</view> 
			<view class="grid-list right-del grid-row-align-center">
				<image class="del" :src="serverImgUrl+'static/images/lj.png'" ></image>
			</view>
		</view>
		 </scroll-view>
		 </block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				curIndex:0, //tab索引
				//我的收藏
				tuijianContent:[
					{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'1合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					},{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					}
				],
				//我的预览
				yulan:[
					{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'2合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					},{
					imgUrl:'../../static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					}
				]
			};
		},
		methods:{
			//tab切换
			toShow:function(index){
						this.curIndex=index;	
					}
		}
	}
</script>

<style lang="scss">
	.grid.tap{
		.grid-list{
			height:40px;
			.text{
				color:#9B9B9B;
				font-size: $uni-font-size-lg;
				padding-bottom:6px;
				border-bottom-width:1px;
				border-bottom-style:solid;
				border-bottom-color:#fff;
				&.active{
					color:#333;
					border-bottom-color:#FDB472;
				}
			}
			
		}
	}
.tab-list{
	display:none;
	&.active{
		display: block;
	}
}
.scroll-left-right {
		white-space: nowrap; // 左右滚动必须加的属性
		width: 100%;   // 左右滚动必须加的属性
.grid.tuijian-content-list{
		width:calc(100% + (100% / 4));
		margin-top:15px;
		.grid-list{
			height:auto !important;
			margin-bottom:30rpx;
			box-shadow:1px 0  5px #ccc;
			padding:1em;
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
			.del{
				width:40rpx;
				height:40rpx;
			}
			
		}
	}
}
</style>
