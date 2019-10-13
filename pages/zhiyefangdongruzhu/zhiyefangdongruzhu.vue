<template >
	<view>
		<form @submit="zhiyefangdong">
			<view class="grid grid-col-2 content">
				<view class="grid-list grid-combine-col-2 grid-row-align-center-bottom title">
						<text>免费加入职业房东</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
						<input class="input" name="name" type="text" value=""  placeholder="请输入姓名"/>
				</view>
				<!-- <view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
					<provinceCityArea class="input-select" :iniIndex="[8,0,0]" v-on:provinceCityAreaChange="provinceCityAreaChange" >
					<input slot="show-province-city-area" class="input input-select" type="text" :value="address"  placeholder="请选择所在省市区："/>
					</provinceCityArea>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
						<input class="input" type="text" value=""  placeholder="请输入公寓名称"/>
				</view>
				
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
					<input class="input" type="text" value=""  placeholder="请输入公寓数量"/>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
						
				</view> -->
				
				<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between upload-title">
					<text class="text1" >请上传身份证</text>
					<text class="text2" >（上传身份证信息以便我们审核）</text>
				</view>
				<!-- <view class="grid-list grid-combine-col-2 grid-row-align-space-around-center upload-box">
					<view class="upload-btn grid-col-align-center">
							<text class="plus">+</text>
							<text class="text">身份证正面</text>
					</view>
					<view class="upload-btn grid-col-align-center">
							<text class="plus">+</text>
							<text class="text">身份证反面</text>
					</view>
				</view> -->
				<view class="grid-list grid-combine-col-2 grid-row-align-space-around-center upload-box">
					<imgUpload ref="imgUploadView1" @tap="uploadImg('imgUploadView1')" path_url='id_card'>
						<view class="upload-btn grid-col-align-center"  slot="img-upload" id="imgUploadView1">
								<text class="plus">+</text>
								<text class="text">身份证正面</text>
						</view>
					</imgUpload>
				</view>
				<!-- <view class="grid-list grid-combine-col-2 grid-row-align-center upload-box">
					<imgUpload ref="imgUploadView1" @tap="uploadImg('imgUploadView1')" path_url='id_card'>
						<view class="upload-btn grid-row-align-center" slot="img-upload" id="imgUploadView1">
							<text class="plus">+</text>
						</view>
					</imgUpload>
				</view> -->
				<view class="grid-list grid-combine-col-2">
					<view style="padding:1em 0;background:#fff;">
						<button class="big_button_yellow" form-type="submit" >限时免费入住</button>
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import provinceCityArea from "@/components/dzy-province-city-area/dzy-province-city-area.vue";
	import imgUpload from "@/components/dzy-img-upload/dzy-img-upload.vue";
	export default {
		components:{
			provinceCityArea,
				imgUpload
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl: this.$commonConfig.serverApiUrl,
				address:'',
				u_id:'',
				imgSaveUrl:{},
				model:'shenqing'
			};
		},
		onLoad(e) {
			this.u_id = e.id;
			uni.setStorageSync('weijia_role',3);
		},
		
		methods: {
			provinceCityAreaChange: function (data) {
				this.address=data.join('');//逗号将数组拼接为字符串
				//console.log(data);
			},
			zhiyefangdong(e){
				// console.log(e);
				uni.request({
					url: this.serverApiUrl+'home/shenqing/shenqing', //请求url
					method: 'POST',               //请求方式 
					// data: {id:this.u_id,name:e.detail.value.name,level:1},                     //传递的数据
					data: {id:this.u_id,name:e.detail.value.name,level:1,img:this.imgSaveUrl,model:this.model}, 
					success: res => {   //成功执行回调函数
						if(res.statusCode==200){
							uni.switchTab({
							    url: '/pages/index/index'
							});
						}else{ 
							// console.log(res);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			uploadImg(eleid){	//调用子组件上传函数
				this.$refs.imgUploadView1.upload(eleid);
			},
			//获取上传图片的存储路径
			getImgSaveUrl(){
				console.log(this.imgSaveUrl);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.big_button_yellow{
		height:64rpx;
		font-size: 16px;
		line-height: 64rpx;
		width:475rpx;
		margin:0 auto;
		color:#362F0C;
		background:#FDE648;
		border-radius: 30px;
		text-align: center;
		margin-bottom: 32rpx;
	}
.content{
	width:90%;
	margin:1em  auto 3em;
	padding:0 1em;
	border:1px solid #DFDFDF;
	background: #fff;
	.grid-list{
		&.title{
			height:75rpx;
			font-weight: 700;
		}
		&.inputFrame{
			margin-top:1em;
			.input{
				width:100%;
				height:35px;
				box-sizing: border-box;
				padding-left:0.5em;
				border:1px solid #DFDFDF;
				border-radius: 10px;
			}
			.input-select{
				width:100%;
			}
		}
		&.upload-title{
			margin-top:1em;
			height:3em;
			.text2{
				color:#9E9E9E;
			}
		}
		&.upload-box{
			margin:1em 0 0;
			.upload-btn{
				height:200rpx;
				width:200rpx;
				border:1px solid #D9D7D7;
				border-radius: 10px;
				.plus{
					color:#D9D7D7;
					font-size:$uni-font-size-larger;
				}
				.text{
					margin-top:0.5em;
					color:#D9D7D7;
				}
			}
		}
		
	}
	
}
</style>
