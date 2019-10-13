<template>
	<view>
		<columnTitle columnTitle="入住信息"/>
		<view slot="picker-view-top">
			<view class="grid grid-col-3 top-picker-view" >
				<view class="grid-list grid-col-align-center select-btn" >
					<text class="text">看房时间</text>
								<text class="text">随时</text>
				</view>
				<view class="grid-list grid-col-align-center select-btn" >
					<text class="text">宜住人数</text>
					<multiSelectorPicker :range="renshu" @bindChange="bindChange">
						<text class="text" slot="html">{{renshu[0][renshuIndex[0]]||'请选择'}}</text>
					</multiSelectorPicker>
					
				</view>
				<view class="grid-list grid-col-align-center select-btn" >
					<text class="text">入住时间</text>
						<text class="text">随时</text>
				</view>
			</view>
		</view>
		
		<checkboxColumnFrame @checkboxChange="checkboxFangwupeizhiChange" columnTitle="房屋配置" 
		:checkboxVal="['宽带','床','衣柜','沙发','桌椅','电视','空调','洗衣机','冰箱','热水器','燃气灶','抽烟机','电磁炉','微波炉','独立卫生间','可做饭']"
		/>
		<checkboxColumnFrame @checkboxChange="checkboxFangwuliangdianChange" columnTitle="房屋亮点"
		:checkboxVal="['南北通透','有阳台','首次出租']"
		/>
		<checkboxColumnFrame @checkboxChange="checkboxChuzuyaoqiuChange" columnTitle="出租要求"
		:checkboxVal="['只限女生','一家人','禁止养宠物','半年起租','一年起租','租户稳定','作息正常','禁烟']"
		/>
		
		<!-- 业主姓名 -->
		<view class="yezhuxingming">
			<columnTitle columnTitle="业主姓名"/>
			<input class="input" type="text" @input="yezhu" :value="list.hname" placeholder="签约姓名(签约合同的乙方姓名)"/>
		</view>
		<view class="uploadImgFrame">
			<columnTitle columnTitle="相关证件照片(发布后不可更改)" backgroundColor="#5E5E5E" color="#fff"/>
			<view class="uploadImg row-items-center">
				<imgUpload ref="imgUploadView1" @tap="uploadImg('imgUploadView1')" path_url='house'>
					<view class="uploadImgBtn col-items-center" slot="img-upload" id="imgUploadView1">
						<image :src="serverImgUrl+'xiangji.png'" mode="widthFix"></image>
						<text>上传图片</text>
					</view>
				</imgUpload>
			</view>
		</view>
		
		<!-- 获取值方法：this.$refs.textareaColumnFrame.textareaVal -->
		<textareaColumnFrame ref="textareaColumnFrame"  columnTitle="补充几句" placeholder="详细的描述会大大增加快速出租的机会可以介绍房子引人的地方，交通和周边环境，可以入住的时间，对租客的要求。"/>
		
		<view style="padding:1em 0;background:#fff;">
			<view class="big_button_yellow" @click="fabu" >确认发布</view>
		</view>
	</view>
</template>

<script>
	import columnTitle from "@/components/dzy-column-title/dzy-column-title.vue";
	import imgUpload from "@/components/dzy-img-upload/dzy-img-upload.vue";
	import multiSelectorPicker from "@/components/dzy-multiSelector-picker/dzy-multiSelector-picker.vue";
	import textareaColumnFrame from "@/components/dzy-textarea-column-frame/dzy-textarea-column-frame.vue";
	import checkboxColumnFrame from "@/components/dzy-checkbox-column-frame/dzy-checkbox-column-frame.vue";
	export default {
		components:{
			columnTitle,
			imgUpload,
			multiSelectorPicker,
			textareaColumnFrame,
			checkboxColumnFrame
		},
		onLoad(e) {
			this.house = uni.getStorageSync('weijia_house')['house'];
			console.log(this.house);
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				renshu:[['宜住人数','1人','2人','3人','4人','5人','6人','7人','8人']],
				renshuIndex:[],
				house:'',                    //上页传过来的数据
				imgSaveUrl:{},//图片存储路径参数(此值由后台赋值)
				list:{
					fangwupeizhi:'',                 //房屋配置
					fangwuliangdian:'',              //房屋亮点
					chuzuyaoqiu:'',                  //出租要求
					renshu:'',                       //宜住人数--当前选中值对应索引
					hname:'',                        //合同签约姓名
					buchong:'',                      //补充内容
					img:''                           //房源证件照
				}
			};
		},
		methods:{
			bindChange: function(value){ 
				this.renshuIndex=value;
				console.log(this.renshuIndex);
			 this.list.renshu = value
			 },
			 //获取多选选项值
			 checkboxFangwupeizhiChange(value){
				this.list.fangwupeizhi = value;
			 },
			 checkboxFangwuliangdianChange(value){
				this.list.fangwuliangdian = value;
			 },
			 checkboxChuzuyaoqiuChange(value){
				this.list.chuzuyaoqiu = value;
			 },
			 yezhu(e){
				 this.list.hname=e.detail.value
			 },
			 
			 fabu(){
				 this.list.buchong = this.$refs.textareaColumnFrame.textareaVal
				 this.list.img = this.imgSaveUrl['imgUploadView1'];
				 uni.request({
				 	url: this.serverApiUrl+'home/house/kuai_add', //请求url
				 	method: 'POST',               //请求方式 
				 	data: {
						one:this.house,
						two:this.list
					},                     //传递的数据
				 	success: res => {   //成功执行回调函数
				 		if(res.statusCode==200){
				 			if(res.data == 1){
								uni.switchTab({
								    url: '/pages/index/index'
								});
							}
				 		}else{ 
				 			// console.log(res);
				 		}
				 		
				 	},
				 	fail: () => {},
				 	complete: () => {}
				 });
			 },
			 uploadImg(eleid){	//调用子组件上传函数
			 	this.$refs.imgUploadView1.upload(eleid);//执行图片上传
			 	// console.log(this.imgSaveUrl);//输出存储路径
			 }
		}
	}
</script>

<style lang="scss" scoped>
	.top-picker-view{
		border-top:1px solid #D3D3D3;
				.grid-list{
					position: relative;
					&.select-btn{
					$height:90px;
					height:$height;
					.text:nth-child(1){ 
						font-size: $uni-font-size-sm;
					}
					.text:nth-child(2){
						color:#999999;
						margin-top:5px;
					}
					&:not(:last-child):after{
						position: absolute;
						content: "|";
						right:0;
						top:calc(#{$height} / 3);
						height:calc(#{$height} / 3);
						width:1px;
					}
				}
		}
	}
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
	.uploadImg{
		width:100%;
		height:350rpx;
		background: #C9C9C9;
		.uploadImgBtn{
			width:150px;
			height:150px;
			border-radius: 75px;
			text-align:center;
			background:#fff;		
			image{
				width:60px;
			}
			text{
				font-size:$uni-font-size-base;
				margin-top:1em;
			}
		}
	}
	.yezhuxingming{
		margin-bottom:2em;
		.input{
			border:1px solid #ccc;
			padding:3px 0 3px 1em;
			margin-left:1em;
			margin-right:1em;
			border-radius: 1em;
		}
	}
</style>
