<template>
	<view >
		<form @submit="shenqing">
			<view class="grid grid-col-2 content">
				<view class="grid-list grid-combine-col-2 grid-row-align-center-bottom title">
						<text>免费加入经纪人</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
						<input class="input" name="name" type="text" value=""  placeholder="姓名："/>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
					<input class="input" name="ma" type="text" value=""  placeholder="请输入推荐码："/>
				</view>
				<!-- <view class="grid-list grid-combine-col-2 grid-row-align-center inputFrame">
						<provinceCityArea :iniIndex="[8,0,0]" v-on:provinceCityAreaChange="provinceCityAreaChange" >
						<text class="input-select grid-row-align-center" slot="show-province-city-area">{{address}}</text>
						</provinceCityArea>
				</view> -->
				
				<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between upload-title">
					<text class="text1" >请上传工作证</text>
					<text class="text2" >（至少请上传3张图片，禁止含有第三方水印照片）</text>
				</view>
				<view class="grid-list grid-combine-col-2 grid-row-align-center upload-box">
					<imgUpload ref="imgUploadView1" @tap="uploadImg('imgUploadView1')" path_url='id_card'>
						<view class="upload-btn grid-row-align-center" slot="img-upload" id="imgUploadView1">
							<text class="plus">+</text>
						</view>
					</imgUpload>
				</view>
				<view class="grid-list grid-combine-col-2">
					<view style="padding:1em 0;background:#fff;">
						<button form-type="submit" class="big_button_yellow" >免费申请</button>
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
				address:'点击选择地址',
				u_id:'',
				imgSaveUrl:{},
				model:'shenqing'
			};
		},
		onLoad(e) {
			this.u_id = e.id;
		},
		methods: {
			provinceCityAreaChange: function (data) {
				this.address=data.join('');//逗号将数组拼接为字符串
				//console.log(data);
			},
			shenqing(e){
				console.log(this.imgSaveUrl);
				uni.request({
					url: this.serverApiUrl+'home/shenqing/shenqing', //请求url
					method: 'POST',               //请求方式 
					data: {id:this.u_id,name:e.detail.value.name,ma:e.detail.value.ma,level:2,img:this.imgSaveUrl,model:this.model},                     //传递的数据
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
.banner{
	width:100%;
}
.content{
	width:90%;
	margin:1em  auto 3em;
	padding:0 1em;
	border:1px solid #DFDFDF;
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
				padding:6px 12px;
				border:1px solid #DFDFDF;
				border-radius: 10px;
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
			}
		}
		
	}
	
}
</style>
