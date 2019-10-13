<template>
	<view>
		<!-- 上传图片框 -->
		<form @submit="zhengzufabu">
			<view class="uploadImgFrame">
				<columnTitle columnTitle="房屋照片(发布后不可更改)" backgroundColor="#5E5E5E" color="#fff"/>
				<view class="uploadImg row-items-center">
					<imgUpload ref="imgUploadView1" @tap="uploadImg('imgUploadView1')" path_url='house'>
						<view class="uploadImgBtn col-items-center" slot="img-upload" id="imgUploadView1">
							<image :src="serverImgUrl+'xiangji.png'" mode="widthFix"></image>
							<text>上传图片</text>
						</view>
					</imgUpload>
				</view>
			</view>
			<!-- 托管方式和出租方式选择 -->
			<view class="grid grid-col-2">
				<view class="grid-list grid-col-align-center" style="padding:1em 0;">
						<text class="select-title">托管方式</text>
						<multiSelectorPicker :range="tuoguan" @bindChange="bindChange($event,'tuoguan')">
							<text class="select-btn" slot="html" style="color:#999;">
							{{tuoguan[0][tuoguanIndex[0]]||'请选择'}}
							</text>
						</multiSelectorPicker>
				</view>
				<view class="grid-list grid-col-align-center" style="padding:1em 0;">
						<text class="select-title">出租方式</text>
						<multiSelectorPicker :range="chuzu" @bindChange="bindChange($event,'chuzu')">
							<text class="select-btn" slot="html" style="color:#999;">
							{{chuzu[0][chuzuIndex[0]]||'请选择'}}
							</text>
						</multiSelectorPicker>
				</view>
			</view>
			<columnTitle columnTitle="基本信息"/>
			<view class="grid grid-col-4 base-msg">
				<view class="grid-list grid-col-align-center grid-combine-col-4">
						<text class="select-title">小区</text>
						<input class="select-btn input" type="text" name="qv" value="" placeholder="填写小区名称"/>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-4">
						<text class="select-title">详细地址</text>
						<input class="select-btn input" type="text" name="addr" value="" placeholder="请输入详细地址"/>
				</view>
				<view class="grid-list grid-col-align-center  grid-combine-col-4">
						<text class="select-title">面积</text>
						<input class="select-btn input" type="text" name="space" value="" placeholder="填写面积"/>㎡
				</view>
				
				<view class="grid-list grid-col-align-center  grid-combine-col-4">
						<text class="select-title">最近地铁</text>
						<multiSelectorPicker :range="ditie" @bindChange="bindChange($event,'ditie')">
							<text class="select-btn" slot="html">
							{{ditie[0][ditieIndex[0]]||'请选择'}}
							</text>
						</multiSelectorPicker>
				</view>
				
				<view class="grid-list grid-col-align-center  grid-combine-col-4">
						<text class="select-title">地铁站距离</text>
						<input class="select-btn input" type="text" name="metro_length" value="" placeholder="地铁站距离"/>m
				</view>
				
				<view class="grid-list grid-col-align-center  grid-combine-col-4">
							<text class="select-title">地区选择</text>
							<!-- 省市区组件 -->
							<provinceCityArea  @provinceCityAreaChange="getProvinceCityArea" :iniIndex="[8,0,0]">
								<text class="select-btn" slot="show-province-city-area">
								请选择
								</text>
							</provinceCityArea>
							
							
				</view>
				
				<view class="grid-list grid-col-align-center">
						<text class="select-title">厅室</text>
						<multiSelectorPicker :range="tingshi" @bindChange="bindChange($event,'tingshi')">
							<text class="select-btn" slot="html">
							{{tingshi[0][tingshiIndex[0]]||'请选择'}}{{tingshi[1][tingshiIndex[1]]||''}}
							{{tingshi[2][tingshiIndex[2]]||''}}
							</text>
						</multiSelectorPicker>
						<view class="right-short-line"></view>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-2">
						<text class="select-title">朝向</text>
						<multiSelectorPicker :range="chaoxiang" @bindChange="bindChange($event,'chaoxiang')">
							<text class="select-btn" slot="html">{{chaoxiang[0][chaoxiangIndex[0]]||'请选择'}}</text>
						</multiSelectorPicker>
						<view class="right-short-line"></view>
				</view>
				<view class="grid-list grid-col-align-center">
						<text class="select-title">楼层</text>
						<multiSelectorPicker :range="louceng" @bindChange="bindChange($event,'louceng')">
							<text class="select-btn" slot="html">{{louceng[0][loucengIndex[0]]||'请选择'}}</text>
						</multiSelectorPicker>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-2" >
						<text class="select-title">车位</text>
						<multiSelectorPicker :range="chewei" @bindChange="bindChange($event,'chewei')">
							<text class="select-btn" slot="html">{{chewei[0][cheweiIndex[0]]||'有无车位'}}</text>
						</multiSelectorPicker>
						<view class="right-short-line"></view>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-2" >
						<text class="select-title">电梯</text>
						<multiSelectorPicker :range="dianti" @bindChange="bindChange($event,'dianti')">
							<text class="select-btn" slot="html">{{dianti[0][diantiIndex[0]]||'有无电梯'}}</text>
						</multiSelectorPicker>
				</view>
			</view>
			<!-- 租金详情 -->
			<columnTitle columnTitle="租金详情"/>
			<view class="grid grid-col-2 base-msg">
				<view class="grid-list grid-col-align-center grid-combine-col-2">
						<text class="select-title">付款规则</text>
						<multiSelectorPicker :range="yuezhujin" @bindChange="bindChange($event,'yuezhujin')">
							<text class="select-btn" slot="html">{{yuezhujin[0][yuezhujinIndex[0]]||'请选择'}}</text>
						</multiSelectorPicker>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-2">
						<text class="select-title">月租金</text>
						<input class="select-btn input" type="text" name="money" value="" placeholder="请输入金额"/>
				</view>
				<view class="grid-list grid-col-align-center  grid-combine-col-2">
						<text class="select-title">租金包含费用（物业费等）</text>
						<text class="select-btn" @tap="showdMultiCheckScroll">{{checkedVal||'获取值'}}</text>
				</view>
			</view>
			<!-- 联系人 -->
			<!-- <columnTitle columnTitle="联系人"/> -->
			<!--<view class="grid grid-col-4 base-msg">
				 <view class="grid-list grid-col-align-center grid-combine-col-2">
						<input class="select-btn" type="text" value="" placeholder="请填写姓名"/>
				</view>
				<view class="grid-list grid-row-align-center grid-combine-col-2">
						<label class="radio" :class="{active:gender==0}" @tap="checkedRadio(0)">
							男士
							<radio value="男士" />
						</label>
						<label class="radio" :class="{active:gender==1}" @tap="checkedRadio(1)">
							女士
							<radio value="女士" />
						</label>
				</view>
				<view class="grid-list grid-col-align-center grid-combine-col-4">
						<text class="select-title">您的身份</text>
						<text class="select-btn">请选择</text>
				</view>
				<view class="grid-list grid-col-align-center  grid-combine-col-4">
						<text class="select-title">为保护隐私，您的真实号码将被隐藏</text>
						<text class="select-btn">123-****-789<text class="select-btn-reminder">已验证</text></text>
				</view> 
				<view class="grid-list grid-col-align-left-center grid-combine-col-3">
						<text class="select-title">中介勿扰</text>
						<text class="select-btn">开启后将有效减少中介来电</text>
				</view> 
				<view class="grid-list grid-row-align-right-center">
						<checkbox value="yes" checked=true color="#F7A00C"/>
				</view>
				<view class="grid-list grid-col-align-left-center grid-combine-col-3">
						<text class="select-title">接听时段</text>
						<text class="select-btn">只在所选时间内接收来电</text>
				</view>
				<view class="grid-list grid-row-align-right-center">
						<text class="select-btn" @tap="timeRangeShow">{{rangeValue[0]}}:00-{{rangeValue[1]}}:00</text>
				</view>
			</view>-->
			<view url="./zhengzhufabu2" hover-class="none">
					 <!-- <bigButonYellow big_button_yellow="下一步"/> -->
				<view style="padding:1em 0;background:#fff;">
					<button class="big_button_yellow" form-type="submit">下一步</button>
				</view>
			</view>
		</form>
		
	
		<view class="mask" :class="{active:timeRangeMaskactive}">
					 <view class="grid grid-col-2 time-range-box">
							<view class="grid-list grid-combine-col-2 grid-row-align-center title-box">
								 <text class="title">选择时间段</text> <text class="btn" @tap="timeRangeDone">完成</text>
							</view>
						
							<view class="grid-list grid-combine-col-2 ">
									<!-- 时间滑块 -->
									<numberRangeSlider
									  :value="rangeValue"
									  :min="rangeMin"
									  :max="rangMax"
									  :step="1"
									  :bar-height="3"
									  :block-size="26"
										blockColor="#0073BB"
									  background-color="#EEEEF6"
									  active-color="#FF6B00"
									  :format="format"
									  :decorationVisible="true"
									  @change="getTimeRange"
									></numberRangeSlider>
							</view>
					 </view>  
		</view>
		
		<!-- 租金包含费用弹框	 -->
		<multiCheckScroll
		multiCheckTitle="租金包含费用"
		:checkArray="['水费','电费','燃气费','宽带费','物业费','有线电视费','停车费']" 
		@multiCheckDone="checkBoxDone" :show="showMultiCheck" />     
		  
		
	</view>
</template>

<script>
	import columnTitle from "@/components/dzy-column-title/dzy-column-title.vue";
    import imgUpload from "@/components/dzy-img-upload/dzy-img-upload.vue";
	import multiSelectorPicker from "@/components/dzy-multiSelector-picker/dzy-multiSelector-picker.vue";
	import multiCheckScroll from "@/components/dzy-multi-check-scroll/dzy-multi-check-scroll.vue";
	import numberRangeSlider from '@/components/uni-number-range-slider/uni-number-range-slider.vue'
	import provinceCityArea from '@/components/dzy-province-city-area/dzy-province-city-area.vue'
	export default {
		components:{
			columnTitle,
			imgUpload,
			multiSelectorPicker,
			multiCheckScroll,
			numberRangeSlider,
			provinceCityArea
		},
		
		data() {
			return {
				// 租金包含费用弹框参数
				showMultiCheck:false,
				checkedVal:"",
				
				 // 时间滑块
				 rangeMin: 0,
				 rangMax: 24,
				rangeValue: [0, 24],
				timeRangeMaskactive:false,
				
				//获取自定义$commonConfig对象中的服务器地址
				serverImgUrl:this.$commonConfig.serverImgUrl,
				chewei:[['无车位','有车位']],
				cheweiIndex:[],
				dianti:[['无电梯','有电梯']],
				diantiIndex:[],
				chaoxiang:[['东','南','西','北']],
				chaoxiangIndex:[],
				tingshi:[['1室','2室','3室','4室'],['1厅','2厅'],['1卫','2卫']],
				tingshiIndex:[],
				yuezhujin:[['押一付一','押一付三','半年付']],
				yuezhujinIndex:[],
				louceng:[['-2层','-1层','1层','2层','3层','4层','5层','6层','7层','8层','9层','10层','11层',
				          '12层','13层','14层','15层','16层','17层','18层','19层','20层','21层']],
				loucengIndex:[],
				ditie:[['无','1号线','2号线','3号线','4号线','5号线','6号线','7号线','8号线','9号线','10号线',
						'11号线','12号线','13号线','14号线','15号线','16号线','17号线','18号线','19号线','20号线']],
				ditieIndex:[],
				tuoguan:[['全权委托','托管待客看房']],
				tuoguanIndex:[],
				chuzu:[['整租','合租']],
				chuzuIndex:[],
				gender:0, //性别默认选项
				u_id:'',
				imgSaveUrl:{},//图片存储路径参数(此值由后台赋值)
				house_data:{    //房源上传当前数据的缓存
				house:'',
				metro_no:'',           //靠近几号线地铁
				city:'',                 //省、市、区、、地址
				// state:'',                //1：整租，2：合租
				img:''
				},
				
			};
		},
		onLoad(e) {
			this.u_id = uni.getStorageSync('weijia_pro')['u_id'];
			// this.state = e.state;
		},
		methods:{
			bindChange: function(e,title) {
				switch(title) {
				     case 'chewei':
				        this.cheweiIndex=e;
				        break;
				     case 'dianti':
				         this.diantiIndex=e;
				        break;
							case 'dianti':
							    this.diantiIndex=e;
							   break;
							case 'chaoxiang':
							    this.chaoxiangIndex=e;
							   break;
							case 'tingshi':
							    this.tingshiIndex=e;
							   break;
							case 'yuezhujin':
							    this.yuezhujinIndex=e;
							   break;
							case 'louceng':
							    this.loucengIndex=e;
							   break;
						   case 'ditie':
							this.ditieIndex=e;
						   break;
						   case 'tuoguan':
						   		this.tuoguanIndex=e;
						   break;
						   case 'chuzu':
						   		this.chuzuIndex=e;
						   break;
				     default:
				        break;
				} 
			},
			//性别选择
			checkedRadio(index){
				this.gender=index;
			},
			//点击弹框"完成"按钮时触发
			checkBoxDone(checkArrayVal){
				this.showMultiCheck=false;//关闭多选弹框
				this.checkedVal=checkArrayVal.toString();//获取选中值
			},
			//事件显示多选弹框
			showdMultiCheckScroll(){
				this.showMultiCheck=true;
			},
				// 时间范围选择
				format(val) {
			      return val + ':00'
			    },
			    getTimeRange(e) {
			      this.rangeValue = e
			    },
					timeRangeShow(){
						this.timeRangeMaskactive=true;
					},
					timeRangeDone(){
						this.timeRangeMaskactive=false;
					},
			zhengzufabu(e){
				this.house_data.house = e.detail.value;
				this.house_data.img = this.imgSaveUrl.imgUploadView1;
	
				this.house_data.house.qv = e.detail.value.qv;
				this.house_data.house.space = e.detail.value.space;
				this.house_data.house.addr = e.detail.value.addr;
				this.house_data.house.shi = this.tingshiIndex[0]+1;
				this.house_data.house.ting = this.tingshiIndex[1]+1;
				this.house_data.house.wei = this.tingshiIndex[2]+1;
				this.house_data.house.xiang = this.chaoxiang[0][this.chaoxiangIndex[0]];
				this.house_data.house.floor = parseInt(this.loucengIndex[0])-1;
				this.house_data.house.car =  this.cheweiIndex[0];
				this.house_data.house.elevator = this.diantiIndex[0];
				this.house_data.house.rule = this.yuezhujinIndex[0]+1;
				this.house_data.house.money = e.detail.value.money;
				this.house_data.house.h_province = this.city[0];
				this.house_data.house.h_city = this.city[1];
				this.house_data.house.h_area = this.city[2];
				this.house_data.house.in_money = this.checkedVal;
				// this.house_data.house.state = 1;
				this.house_data.house.uid = this.u_id;
				this.house_data.house.metro_no = this.ditieIndex[0];
				this.house_data.house.metro_length = e.detail.value.metro_length;
				this.house_data.house.weijia = 2;
				this.house_data.house.status = 1;
				this.house_data.house.phone = uni.getStorageSync('weijia_pro')['u_phone'];
				this.house_data.house.listen = '';
				this.house_data.house.uploads = this.imgSaveUrl['imgUploadView1'];
				this.house_data.house.name = uni.getStorageSync('weijia_pro')['u_tname'];
				this.house_data.house.pid = this.tuoguanIndex[0]==0?-1:-2;
				this.house_data.house.state = this.chuzuIndex[0]+1;
				
				uni.setStorageSync('weijia_house',this.house_data)
				uni.navigateTo({
				    url: '../zhengzhufabu/zhengzhufabu2'
				});
			},
			uploadImg(eleid){	//调用子组件上传函数
				this.$refs.imgUploadView1.upload(eleid);//执行图片上传
				// console.log(this.imgSaveUrl);//输出存储路径
			},
			//省市区选择
			getProvinceCityArea(e){
				this.city = e;
				console.log(e);
			}
			
          
		}
	}
</script>

<style lang="scss" scoped>
			// 时间滑块
			.mask{
				display: none;
				&.active{
					display: block;
				}
			}
		 .time-range-box.grid{
			 height:200px; 
			 position: absolute;
			 bottom:0;
			 left:0;
			 width:100%;
			 background: #fff;
			 .grid-list{
				 height:50px;
				 border-top:1px solid #EBEBEB;
				 &.title-box{
						position: relative;
						height:40px;
						background: #F6F6F6;
						color:#A9A9A9;
						border-top:1px solid #EBEBEB;
					 .btn{
						 position: absolute;
						 right:1.5em;
						 color:#FA3131;
					 }
				 }
			 }
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
		@import "../../common/fabujibenxinxi";
</style>
