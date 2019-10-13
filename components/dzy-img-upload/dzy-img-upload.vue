<template>
     <view class="page">
				<view >
					<slot name='img-upload'></slot>
				</view>
				<!-- 进度条 -->
<progress class="progress" :class="{active:percent>0 && percent<100}" :percent="percent" stroke-width="10" active-mode="forwards" :active="true" :show-info="true"></progress>

<!-- 预览 -->
<swiper class="swiper" :class="{active:percent==100}" :indicator-dots="swiperItemCount>1" :autoplay="false"  :circular="true" :current="current" @change="changeSwiper">
				<block v-for="(val,index) in imgSaveUrl" :key="index">
					<swiper-item class="swiper-item">
						<view class="swiper-img">
							<image class="img" :src="serverApiUrl+val" @load="imgload" 
							:data-index="index" 
							:style="{width: images[index].width+'rpx',height:images[index].height+'rpx'}"
							></image>
						</view>
						<!-- 悬浮在滑块上的文字 -->
						<text class="cancel" @tap.stop="cancelCurSwiperIndex">x</text>
						<text class="count-indicate" v-show="swiperItemCount>1">{{current+1}}/{{swiperItemCount}}</text>
					</swiper-item>
				</block>
		</swiper>
    </view>
</template>

<script>
	var _self;
    export default {
		props:['path_url'],

			 data() {
			 	return {
						//获取自定义$commonConfig对象中的服务器地址
						serverApiUrl:this.$commonConfig.serverApiUrl,
						percent:0,
						//头部滑块
						current:0, //默认显示图片索引
						swiperItemCount:0 ,
						imgSaveUrl:[] ,//存放上传的图片url
						images:[],   //图片预览尺寸
						imgUploadViewHeight:0 //父组件图片视图高度
			 	}
			 },
			methods : {
			  upload : function(curEleId){
			   _self = this;
				 if(this.imgSaveUrl.length>0) return;
			   uni.chooseImage({//激活选择图片
			    success: function (res) {
							//获取父组件图片视图高度
								const query = uni.createSelectorQuery();
								query.select('#'+curEleId).boundingClientRect(data => {
									_self.imgUploadViewHeight=data.height;
								}).exec();
								
								//成功则返回本地图片的临时文件路径列表(一位数组),用：res.tempFilePaths获取
							 const tempFilePaths = res.tempFilePaths;
							 //循环遍历api上传图片
							 var uploadTask=[]; //进度条变量
							 tempFilePaths.forEach(function(value,index){ //index可以省略不写
											//执行图片上传
										 uploadTask[index]=uni.uploadFile({
																		url : _self.serverApiUrl+'home/index/uploads?url='+_self.path_url,
																		filePath: value, //每个图片临时路径
																		name: 'file'+index,  //每个图片key
																		success: function (uploadFileRes) {//图片上传成功
																		//图片路径赋值
																		_self.$set(_self.imgSaveUrl,index,uploadFileRes.data);  
																		//图片个数赋值
																		 _self.swiperItemCount=_self.imgSaveUrl.length; 
																		}
										});
										// 上传进度监测
										uploadTask[index].onProgressUpdate(function (res) {
																		_self.percent = res.progress;//获取进度百分比
										}); 
							 }); 
							 //输出图片存储路径
							// console.log(_self.imgSaveUrl);
							// 图片存储路径赋值到父组件
							 _self.$set(_self.$parent.imgSaveUrl,curEleId,_self.imgSaveUrl)  
							 
			    }
			   });
			  },
				//预览图片
				changeSwiper(e) {
							    this.current=e.detail.current;
							  },
					// 取消图片预览
				cancelCurSwiperIndex(){
								this.imgSaveUrl=[];//存储路径初始化
								this.percent=0;
				},
				// 图片加载事件->图片高度固定，宽度自适应
				imgload(event){
					//获取图片真实宽高
					 var $width=event.detail.width,
							$height=event.detail.height;
					var ratio=$width/$height;    //图片的真实宽高比例
					    // var viewHeight=this.$parent.imgUploadViewHeight * 2,           //设置图片显示高度
					     var viewHeight=this.imgUploadViewHeight * 2,           //设置图片显示高度
					         viewWidth=viewHeight*ratio;    //计算的宽度值
						// 分别为图片尺寸赋值
						this.$set(this.images,event.target.dataset.index,{width:viewWidth,height:viewHeight}) 
				}
			 }
			 
    }
</script>

<style lang="scss">
.page{
	position: relative;
	.progress,.swiper{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: #CCCCCC;
		display: none;
		&.active{
			display: block;
		}
	}
	
	.swiper-item{
			position: relative;
			.swiper-img{
				height:100%;
				text-align: center;
			}
			.count-indicate{
				position: absolute;
				bottom:1em;
				right:2em;
				color:#fff;
				padding:3px 12px;
				background:rgba(0,0,0,0.5);
				border-radius: 12px;
			}
			.cancel{
				position: absolute;
				top:0;
				right:0;
				color:#fff;
				display:block;
				width:32px;
				height:32px;
				line-height:32px;
				text-align: center;
				background:rgba(0,0,0,0.1);
				border-radius: 32px;
				font-size:16px;
				font-weight: 700;
			}
		} 
}

</style>
