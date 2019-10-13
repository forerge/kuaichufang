<template>
	<view>
		<view class="grid grid-col-2 wodetuijian head">
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
					<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
					<view class="xinxi-box grid-col-align-left-space-around">
						<view class="xinxi-list">
							<text class="text">姓　　名：</text><text class="text">刘一飞</text>
						</view>
						<view class="xinxi-list">
							<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
						</view>
					</view>
			</view>
		</view>
		<view class="grid grid-col-2 tab-title" >
			<view class="grid-list grid-row-align-center" :class="{active:tabTitleIndex==0}" @click="tabTitle(0)">
				职业房东
			</view>
			<view class="grid-list  grid-row-align-center" :class="{active:tabTitleIndex==1}" @click="tabTitle(1)">
				经纪人
			</view>
		</view>
			<view class="grid grid-col-2 wodetuijian wodetuijian-contents" :class="{active:tabTitleIndex==0}">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">新一</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
						</view>
				</view>
			</view>
			<view class="grid grid-col-2 wodetuijian wodetuijian-contents" :class="{active:tabTitleIndex==1}">
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">张三</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">张三</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
						</view>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-left-center">
						<image class="img" :src="serverImgUrl+'static/images/head.png'" ></image>
						<view class="xinxi-box grid-col-align-left-space-around">
							<view class="xinxi-list">
								<text class="text">姓　　名：</text><text class="text">张三</text>
							</view>
							<view class="xinxi-list">
								<text class="text">推荐号　：   </text><text class="text">256547</text>
							</view>
							<view class="xinxi-list">
								<text class="text">加入时间：  </text><text class="text">2018.06.08 </text>
							</view>
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
				 tabTitleIndex:0
			};
		},
		methods:{
			tabTitle(index){
				this.tabTitleIndex=index;
			}
		}
	}
</script>

<style lang="scss" scoped>
.wodetuijian{
	&.wodetuijian-contents{
		display: none;
		&.active{
			display: block;
		}
	}
	.grid-list{
		width:100%;
		height:200rpx;
		border-bottom:1px solid #F1F1F1;
		padding:1em;
		.img{
			width:100rpx;
			height:100rpx;
			border-radius: 100px;
			margin:0 2em;
		}
		.xinxi-box{
			height:100%;
			.xinxi-list{
				.text:last-child{
					color:#999999;
				}
			}
		}
	}
	&.head{
		.grid-list:last-child{
			border-bottom:none;
		}
	}
}
.tab-title{
	.grid-list{
		height:40px;
		border-top:1px solid #F1F1F1;
		border-bottom:1px solid #F1F1F1;
		color:#FC8A20;
		background: #fff;
		&.active{
			border-top:1px solid #FC8A20;
			border-bottom:1px solid #FC8A20;
			color:#fff;
			background: #FC8A20;
		}
	}
	
}
</style>
m