<template>
	<view>
		<view class="grid grid-col-4 filter-haofang">
			<view class="grid-list grid-combine-col-4 grid-row-align-space-between-center">
				<text class="text curTitleActive">上海	</text>
				<text class="text" @tap="changeShow('QS_Picekr_city')" :class="{curTitleActive:curTitleActive==1}">区域	&or;</text>
				<text class="text" @click='toShow(2)' :class="{curTitleActive:curTitleActive==2}">租金	&or;</text>
				<text class="text" @click='toShow(3)' :class="{curTitleActive:curTitleActive==3}">筛选	&or;</text>
			</view>
		</view>
		
		<tuijianContentList :tuijianContent="tuijianContent"/>
		
		<view class="mask zhujin-mask" :class="{active:curIndex==2}">
			<view class="saixuan-frame">
				<view class="grid grid-col-2 grid01">
					<view class="grid-list grid-combine-col-2 grid-col-align-left-center">
						租金
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-center">
						你的租金预算
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-center">
						{{rangeValue[0]}}-{{rangeValueEnd}}
					</view>
					<view class="grid-list grid-combine-col-2">
						<numberRangeSlider
						  :min="min"
						  :max="max"
						  step="500"
						  bar-height="3"
						  block-size="26"
						  background-color="#EEEEF6"
						  active-color="#FDE64A"
						   :decorationVisible="true"
						   :tipVisible="false"
						   :value="rangeValue"
						  :format="format"
						  @change="handleRangeChange"
						/>
					</view>
				</view>
				<view class="grid grid-col-2 btn-group">
					<view class="grid-list grid-combine-col-2 grid-row-align-space-around-center">
						<text class="btn active" @tap="toHide">确定</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 筛选 -->
		<view class="mask saixuan-mask" :class="{active:curIndex==3}">
			<view class="saixuan-frame">
				<view class="grid grid-col-2 grid01">
					<view class="grid-list grid-combine-col-2 grid-col-align-left-center">
						筛选
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-center">
						你的租金预算
					</view>
					<view class="grid-list grid-combine-col-2 grid-col-align-center">
						{{rangeValue[0]}}-{{rangeValueEnd}}
					</view>
					<view class="grid-list grid-combine-col-2">
						<numberRangeSlider
						  :min="min"
						  :max="max"
						  step="500"
						  bar-height="3"
						  block-size="26"
						  background-color="#EEEEF6"
						  active-color="#FDE64A"
						   :decorationVisible="true"
						   :tipVisible="false"
						   :value="rangeValue"
						  :format="format"
						  @change="handleRangeChange"
						/>
					</view>
				</view>
				<view class="fangyuan-option fangyuan-option01">
					<view class="title">
						<text>出租类型</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">不限</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">整租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">合租</text>
						</view>
					</view>
				</view>
				<view class="fangyuan-option">
					<view class="title">
						<text>房型</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">不限</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">主卧</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">次卧</text>
						</view>
					</view>
				</view>
				<view class="fangyuan-option">
					<view class="title">
						<text>朝向</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">不限</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">东</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">南</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">西</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">北</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">南北</text>
						</view>
					</view>
				</view>
				<view class="fangyuan-option">
					<view class="title">
						<text>出租要求</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">不限</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">只限女生</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">半年起租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">一家人</text>
						</view>
					</view>
				</view>
				<view class="fangyuan-option">
					<view class="title">
						<text>房源特色</text>
					</view>
					<view class="grid grid-col-3 grid-fixed-width">
						<view class="grid-list grid-row-align-center">
							<text class="option">不限</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">可短租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">邻地铁</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">押一付一</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">配套齐全</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">南北通透</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">有阳台</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">首次出租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">随时看房</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">女生合租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">男生合租</text>
						</view>
						<view class="grid-list grid-row-align-center">
							<text class="option">独立卫生间</text>
						</view>
					</view>
				</view>
				<view class="grid grid-col-2 btn-group">
					<view class="grid-list grid-combine-col-2 grid-row-align-space-around-center">
						<text class="btn" @tap="toHide">重置</text>
						<text class="btn active" @tap="toHide">确定</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 省市区 -->
		<provincesSelect type="city" 
		ref="QS_Picekr_city" 
		mode="bottom" 
		pickerId="city_1" 
		:dataSet="citySet" 
		showReset 
		@hideQSPicker="hideQSPicker($event)"
		@showQSPicker="showQSPicker($event)" @confirm="confirm($event)" />
	</view>
</template>

<script>
	import tuijianContentList from "@/components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue"
	import numberRangeSlider from '@/components/uni-number-range-slider/uni-number-range-slider.vue'
	import provincesSelect from '@/components/uni-provinces-select/uni-provinces-select.vue';
	export default {
		components:{
			tuijianContentList,
			numberRangeSlider,
			provincesSelect
		},
		data() {
			return {
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				serverApiUrl:this.$commonConfig.serverApiUrl,
				//我的收藏
				tuijianContent:[],
				 min:500,
				 max:10000,
				 rangeValue: [3000, 8000], //滑块区间默认值
				 curIndex:0,
				 curTitleActive:0,
				 // 省市区
				 citySet: {
				 	defaultValue: [0, 0, 0]
				 }
			};
		},
		methods: { 
			//滑块格式化
		    format(val) {
		      return val + '';
		    },
			//滑块值改变事件
		    handleRangeChange(curRangeVal) {
		       this.rangeValue =curRangeVal;
		    },
			//tab切换
			toShow(index){
				this.curIndex=index;			
				this.curTitleActive=index;			
			},
			toHide(){
				this.curIndex=0;			
			},
			//省市区选择
			changeShow(name) {
				this.$refs[name].show();
			},
			showQSPicker(res) {
				this.curTitleActive=1;	
				console.log(`pickerId为${res.pickerId},类型为${res.type}的QS-picker显示了`);
			},
			hideQSPicker(res) {
				console.log(`pickerId为${res.pickerId},类型为${res.type}的QS-picker隐藏了了`);
			},
			confirm(res) {
				console.log('获取了用户选择----->' + JSON.stringify(res));
			}
		  },
		  
		  onLoad(e) {
			  console.log(e);
			  console.log(this.tuijianContent);
		  	//执行uni-app提供的类似ajax异步加载
		  	uni.request({ 
		  		url: this.serverApiUrl+'home/house/kuai_list', //请求url
		  		method: 'POST',               //请求方式
		  		data: {state:e.state},                     //传递的数据
		  		success: res => {   //成功执行回调函数
		  			if(res.statusCode==200){
						console.log(res.data);
		  				this.tuijianContent= res.data;
		  			}else{
		  				console.log(res);
		  			}
		  			
		  		},
		  		fail: () => {},
		  		complete: () => {}
		  	});
		  }, 
		  
		  //计算属性
		   computed:{//滑块最大值时，显示不限
				rangeValueEnd:function(){
					return this.rangeValue[1]==this.max? "不限":this.rangeValue[1];
				}
			},
		
	}
</script>

<style lang="scss">
	.grid.filter-haofang{
		width:90%;
		margin:0 auto;
		.grid-list{
			height:120rpx;
			.text{
				font-weight:500;
				font-size:$uni-font-size-lg;
				color:#999999;
				&.curTitleActive{
					color:#333;
				}
			}
		}
	}
.saixuan-mask,.zhujin-mask,.quyu-mask{
	&.active{
		display:block;
	}
	display:none;
	.saixuan-frame{
		position: absolute;
		width:100%;
		box-sizing: border-box;
		background:#fff;
		padding:0 1em;
		bottom:0;
		height:75%;
		overflow:scroll;
		.grid01{
			.grid-list{
				height:30px;
				&.first-child{
					height:35px;
				}
			}
		}
		.fangyuan-option{
			.title{
				margin-top:1em;
				text-align: center;
			}
			&.fangyuan-option01{
				.title{
					margin-top:2em;
				}
			}
			.grid-list{
				height:100rpx;
				.option{
					padding:0.5em 2em;
					border-radius: 1em;
					color:#9D9D9D;
					border:1px solid #DDDDDD;
					font-size:$uni-font-size-sm-minus;
				}
			}
		}
		.btn-group{
			padding-bottom:50px;
			.grid-list{
				height:150rpx;
				.btn{
					padding:0.3em 2em;
					background:#fff;
					border:1px solid #DBDBDB;
					border-radius:1em;
					&.active{
						background:#FDE64A;
						border:1px solid #FDE64A;
					}
				}
			}
		}
	}
}
</style>
