<template>
	<view>
		<!-- 切换身份弹框-->
		<view class="mask qiehuanshenfen" :class="{active:showRoleTurn}">
			<view class="grid grid-col-2">
				<view class="grid-list grid-combine-col-2 grid-row-align-center-bottom title">
					 <text>请选择身份</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center" 
				@tap="checkRole('../fangke-center/fangke-center')" v-if="role !=1 && zuke ==1">
				租客<text class="icon" :class="{active:curRoleUrl=='../fangke-center/fangke-center'}">✔</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center" v-else-if="role !=2 && fangdong ==1"
				@tap="checkRole('../fangdong-center/fangdong-center')">
					房东<text class="icon" :class="{active:curRoleUrl=='../fangdong-center/fangdong-center'}">✔</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center" v-else-if="role !=3 && zhiyefangdong ==1"
				@tap="checkRole('../zhiyefangdong/zhiyefangdong')">
				职业房东<text class="icon" :class="{active:curRoleUrl=='../zhiyefangdong/zhiyefangdong'}">✔</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center clearBottomBorder"  v-else-if="role !=4 && zhiyejingjiren ==1"
				@tap="checkRole('../zhiyejingjiren/zhiyejingjiren')"> 
				职业经纪人<text class="icon" :class="{active:curRoleUrl=='../zhiyejingjiren/zhiyejingjiren'}">✔</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center btn-box" >
					<text class="btn" @tap="jumpRole">
						确认
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['showRoleTurn'],
		data() {
			return {
				//角色切换控制参数
				curRoleUrl:'',
				role:uni.getStorageSync('weijia_role'),
				zuke:uni.getStorageSync('weijia_pro')['u_one'],
				fangdong:uni.getStorageSync('weijia_pro')['u_two'],
				zhiyefangdong:uni.getStorageSync('weijia_pro')['u_three'],
				zhiyejingjiren:uni.getStorageSync('weijia_pro')['u_four'],
			}
		},
		methods: {
			//身份选择事件
			checkRole(url){
				this.curRoleUrl=url;
				// console.log(this.curRoleUrl)
			},
			//页面跳转
			jumpRole(){
				// console.log(234);
				var _that=this;
				// if(this.curRoleUrl=="../fangke-center/fangke-center"){
				// 	console.log(555)
				// 	console.log(_that.curRoleUrl)
				// 	 uni.switchTab({
				// 	     url: _that.curRoleUrl
				// 	 });
				// }else{
					// console.log(666)
					uni.redirectTo({
					    url: _that.curRoleUrl,
							success(){
								_that.$parent.roleTurn=false;
							}
					});
				// }
			}
		}
	}
</script>

<style lang="scss">	
	//身份切换
	.qiehuanshenfen{
		display: none;
		&.active{
			display: block;
		}
		.grid{
			width:75%;
			position: absolute;
			left:0;
			right:0;
			margin:100px auto 0;
			padding-bottom:2em;
			background: #fff;
			border-radius: 1em;
			.grid-list{
				position: relative;
				font-size:$uni-font-size-lg;
				height:90rpx;
				border-bottom:1px dashed #ccc;
				&.title{
					height:50px;
					color:#F5B809;
					font-weight: 700;
					border-bottom:none;
				}
				&.btn-box{
					border-bottom:none;
					margin-top:1em;
					.btn{
						width:320rpx;
						text-align: center;
						color:#fff;
						height:35px;
						line-height:35px;
						background:linear-gradient(to right, #FBE440 , #F5B302);
					}
				}
				.icon{
					position: absolute;
					right:2em;
					color:#F5B809;
					display: none;
					&.active{
						display: block;
					}
				}
				&.clearBottomBorder{
					border-bottom:none;
				}
			}
		}
	}
</style>
