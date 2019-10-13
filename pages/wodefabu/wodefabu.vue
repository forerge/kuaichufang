<template>
	<view class="page">
		
		<view class="grid grid-col-2 tap">
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(0)' :class="{active:curIndex==0}">已租</text>
			</view>
			<view class="grid-list grid-row-align-center">
				<text class="text" @click='toShow(1)' :class="{active:curIndex==1}">空闲</text>
			</view>
		</view>
		
		<block v-for="(val,index) in tuijianContent" :key="index">
		<view class="grid grid-col-2 tuijian-content-list" :class="{active:curIndex==0}">
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<navigator class="img-navigator" url="../fangyuanxiangqing/fangyuanxiangqing" hover-class="none">
				 <image class="img" :src="val.imgUrl" ></image>
				 <text class="msg" :class="{active:curIndex==0}">已租</text>
				  </navigator> 
				<view class="description">
					<navigator url="../fangyuanxiangqing/fangyuanxiangqing" hover-class="none">
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
		</view>
		</block>
		
		<block v-for="(val,index) in tuijianContent" :key="index">
		<view class="grid grid-col-2 tuijian-content-list" :class="{active:curIndex==1}">
			<view class="grid-list grid-combine-col-2 grid-row-align-center">
				<navigator class="img-navigator" url="../fangyuanxiangqing/fangyuanxiangqing" hover-class="none">
				 <image class="img" :src="val.imgUrl" ></image>
				  <text class="msg" :class="{active:curIndex==0}">空闲</text>
				  </navigator>
				<view class="description">
					<navigator url="../fangyuanxiangqing/fangyuanxiangqing" hover-class="none">
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
		</view>
		</block>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				curIndex:0, //tab索引
				//我的发布
				tuijianContent:[]
			};
		},
		created(){
				console.log(this.serverImgUrl);
				this.tuijianContent=[
					{
					imgUrl:this.serverImgUrl+'static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					},{
					imgUrl:this.serverImgUrl+'static/images/tuijian-thumbnail.png',
					title:'合租.天通苑北二区 3居室.1厅.1卫',
					area:'15m²',
					floor:'12/18层',
					towards:'朝南',
					subwayDistance:'距5号线800m',
					pledge:'押一付一',
					subway:'离地铁近',
					veranda:'有阳台',
					monthPrice:'2300'
					},{
					imgUrl:this.serverImgUrl+'static/images/tuijian-thumbnail.png',
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
			},
		onLoad() {
			
		},
		methods:{
			//tab切换
			toShow:function(index){
						this.curIndex=index;	
					}
		}
	}
</script>

<style lang="scss" >
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
	.grid.tuijian-content-list{
		display: none;
		&.active{
			display: block;
		}
		width:94%;
		margin:0 auto;
		margin-top:15px;
		.grid-list{
			height:133px;
			padding:1em;
			box-shadow: 0 2px 5px #ccc;
			.img-navigator{
				display: block;
				position: relative;
				width:35%;
				height:100%;
				.img{
					height:100%;
					width:100%;
					border-radius: 15rpx;
				}
				.msg{
					position: absolute;
					left:0;
					top:1em;
					font-size:$uni-font-size-sm;
					background: #F97F36;
					padding:3px 12px;
					color:#fff;
				}
				.active.msg{
					background:#DF1314 ;
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
