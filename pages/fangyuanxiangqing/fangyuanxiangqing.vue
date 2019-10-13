 <template>
	<view>
		<goodsDetailsImgSlide :imgUrl="goodsDetailsImg" />
		<view class="grid grid-col-2 head">
			<view class="grid-list grid-combine-col-2 grid-col-align-left-space-between">
				<text class="title grid-line-clamp-1">{{house_detail['h_state']}}.{{house_detail['h_qv']}} {{house_detail['h_shi']}}居室.{{house_detail['h_ting']}}厅.{{house_detail['h_wei']}}卫</text>
				<text class="price">{{ house_detail.h_money }} 元/月</text>
				<text class="pay-way">{{ house_detail.h_rule }}</text>
			</view>
		</view>

		<view class="grid grid-col-2 base-msg">
			<view class="grid-list grid-combine-col-2 title"><text>基本信息</text></view>
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center summarize">
				<text class="text text1">{{house_detail['h_liangdian']['shoucichuzu']?'首次出租':''}}</text>
				<text class="text text1">{{house_detail['h_liangdian']['youyangtai']?'有阳台':''}}</text>
				<text class="text text1">{{house_detail['h_liangdian']['nanbeitongtou']?'南北通透':''}}</text>
				<text class="text text2">{{ house_detail.h_metro_length < 2000 ? '离地铁近' : '' }}</text>
			</view>
			<view class="grid-list grid-row-align-left-center base-parameter">
				<text class="text1">面积：</text>
				<text class="text2">{{ house_detail.h_space }}㎡</text>
			</view>
			<view class="grid-list grid-row-align-left-center base-parameter">
				<text class="text1">朝向：</text>
				<text class="text2">{{ house_detail.h_xiang }}</text>
			</view>
			<view class="grid-list grid-row-align-left-center base-parameter">
				<text class="text1">楼层：</text>
				<text class="text2">{{ house_detail.h_floor }}层</text>
			</view>
			<view class="grid-list grid-row-align-left-center base-parameter">
				<text class="text1">户型：</text>
				<text class="text2">{{ house_detail.h_shi + '室' + house_detail.h_ting + '厅' + house_detail.h_wei + '卫' }}</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center base-parameter">
				<text class="text1">电梯：</text>
				<text class="text2">{{ house_detail.h_elevator }}</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center base-parameter">
				<text class="text1">看房时间：</text>
				<text class="text2">提前预约</text>
			</view>
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center base-parameter">
				<text class="text1">入住日期：</text>
				<text class="text2">即可入住</text>
			</view>
			<!-- <view class="grid-list grid-combine-col-2 grid-row-align-left-center base-parameter">
				<text class="text1">房屋状态：</text>
				<text class="text2">可预约</text>
			</view> -->
		</view>
		<!-- 入驻要求 -->
		<view class="ruzhuyaoqiu">
			<view class="title"><text>入驻要求</text></view>
			<view class="grid grid-col-4 grid-fixed-width">
					<view class="grid-list grid-row-align-center ">
							<text class="text" :class="{active: house_detail['h_ask']['zhixiannvsheng']}" >只限女生</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['yijiaren']}">一家人</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['bannianqizu']}">半年起租</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['yinianqizu']}">一年起租</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['zuhuwending']}">租户稳定</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['jinyan']}">禁烟</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['jinzhiyangchongwu']}">禁止养宠物</text>
					</view>
					<view class="grid-list grid-row-align-center">
							<text class="text" :class="{active: house_detail['h_ask']['zuxizhengchang']}">作息正常</text>
					</view>
			</view>
		</view>
		
		<view class="peizhishebei">
			<view class="title"><text>配置设施</text></view>
			<view class="grid grid-col-5 grid-fixed-width">
				<!-- <view class="grid-list grid-col-align-center {{house_config['kuandai'] == 1?'active':''}} "> -->
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['kuandai']}" >
					<image class="img" :src="serverImgUrl + 'peizhisheshi-01.png'"></image>
					<text class="text">WiFi</text>
				</view>
				<view class="grid-list grid-col-align-center " :class="{active: house_detail['h_config']['chuang']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-02.png'"></image>
					<text class="text">床</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['yigui']}"> 
					<image class="img" :src="serverImgUrl + 'peizhisheshi-03.png'"></image>
					<text class="text">衣柜</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['shafa']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-04.png'"></image>
					<text class="text">沙发</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['zhuoyi']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-05.png'"></image>
					<text class="text">桌椅</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['dianshi']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-11.png'"></image>
					<text class="text">电视</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['kongtiao']}">
					<image class="img"  :src="serverImgUrl + 'peizhisheshi-12.png'"></image>
					<text class="text">空调</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['xiyiji']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-06.png'"></image>
					<text class="text">洗衣机</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['bingxiang']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-07.png'"></image>
					<text class="text">冰箱</text>
				</view>
				<!-- <view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['nuanqi']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-08.png'"></image>
					<text class="text">暖气</text>
				</view> -->
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['reshuiqi']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-09.png'"></image>
					<text class="text">热水器</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['kezuofan']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-10.png'"></image>
					<text class="text">可做饭</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['diancilu']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-11.png'"></image>
					<text class="text">电磁炉</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['weibolu']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-12.png'"></image>
					<text class="text">微波炉</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['duliweishengjian']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-13.png'"></image>
					<text class="text">独立卫生间</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['ranqizao']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-14.png'"></image>
					<text class="text">燃气灶</text>
				</view>
				<view class="grid-list grid-col-align-center" :class="{active: house_detail['h_config']['chouyanji']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-15.png'"></image>
					<text class="text">抽烟机</text>
				</view>
				
				<!-- <view class="grid-list grid-col-align-center" :class="{active: house_config['yan']}">
					<image class="img" :src="serverImgUrl + 'peizhisheshi-13.png'"></image>
					<text class="text">阳台</text>
				</view> -->
			</view>
		</view>

		<!-- <view class="weizhi-and-zhoubian">
			<view class="title"><text>位置及周边</text></view>
			地图组件 
			<showMarkersMap latitude="30.924585" longitude="121.468585" address="运河新村" />
		</view> -->

		<view class="grid grid-col-2 brief">
			<view class="grid-list grid-combine-col-2 grid-row-align-left-center title"><text>房源介绍</text></view>
			<view class="grid-list grid-combine-col-2  description">
				{{house_detail.h_content}}
			</view>
		</view>
		<!-- 同小区房源 -->
		<view class="housing-resource-title"><text>同小区房源</text></view>
		<tuijianContentList :tuijianContent="tuijianContent" />
		<!-- 底部 -->
		<view class="grid grid-col-2 footer">
			<view class="grid-list grid-combine-col-2 grid-row-align-space-between-center">
				<view class="left grid-col-align-center">
					<image class="img" :src="serverImgUrl + 'xinxing.png'"></image>
					<text>收藏</text>
				</view>
				<!-- <navigator class="center" @click="golook" :url="'../yuyuefangyuan/yuyuefangyuan?id=' + house_detail['h_id']">预约房源</navigator> -->
				<view class="center" @click="golook" >预约房源</view>
				<text class="right">电话咨询</text>
			</view>
		</view>
	</view>
</template>

<script>
import goodsDetailsImgSlide from '@/components/dzy-goods-details-img-slide/dzy-goods-details-img-slide.vue';
import showMarkersMap from '@/components/dzy-show-markers-map/dzy-show-markers-map.vue';
import tuijianContentList from '@/components/dzy-tuijian-content-list/dzy-tuijian-content-list.vue';
export default {
	components: {
		goodsDetailsImgSlide,
		showMarkersMap,
		tuijianContentList
	},
	data() {
		return {
			serverImgUrl: this.$commonConfig.serverImgUrl,
			serverApiUrl: this.$commonConfig.serverApiUrl,

			//头部滑块图片url
			goodsDetailsImg: [],
			house_detail: [], //房源详情参数
			tuijianContent: [], //推荐内容
			// house_config: {}, //房源设施
			// house_inmoney: [], //房源包含费用
			// house_ask: [] //房源包含费用
		};
	},
	//2.页面加载完成、页面卸载事件
	onLoad(e) {
		
		uni.request({
			url: this.serverApiUrl + 'home/house/kuai_detail', //请求url
			method: 'POST', //请求方式
			data: e, //传递的数据
			success: res => {
				//成功执行回调函数
				if (res.statusCode == 200) {
					console.log(res.data);
					// console.log(JSON.parse(res.data.h_config));
					this.tuijianContent = res.data.same;
					// delete res.data.same;
					this.goodsDetailsImg = res.data.h_uploads;
					// this.house_config = JSON.parse(res.data.h_config);
					// console.log(this.house_config)
					// this.house_inmoney = JSON.parse(res.data.h_inmoney);
					// this.house_ask = JSON.parse(res.data.h_ask);
					// delete res.data.h_config;
					// delete res.data.h_ask;
					// delete res.data.inmoney;
					this.house_detail = res.data;
				} else {
					// console.log(res);
				}
			},
			fail: () => {},
			complete: () => {}
		});
		// console.log(this.house_config)
	},
	methods: {
		golook(){
			var weijia_status = uni.getStorageSync('weijia_status');
			if(weijia_status == false){
				uni.navigateTo({
				    url: '../login/login'
				});
			}else{
				// console.log(this.house_detail['h_id']);
				uni.navigateTo({
					
					url: "../yuyuefangyuan/yuyuefangyuan?id="+this.house_detail['h_id']
				});
			}
			
		},
		
	}
};
</script>

<style lang="scss" scoped>
.head {
	width: 90%;
	margin: 1em auto;
	.grid-list {
		height: 75px;
		.title {
			font-size: 18px;
		}
		.price {
			font-size: 14px;
			color: #fc8b23;
		}
		.pay-way {
			font-size: 13px;
			color: #68e2b3;
		}
	}
}
.base-msg {
	width: 90%;
	margin: 2em auto;
	.grid-list {
		&.title {
			font-size: $uni-font-size-lg;
		}
		&.summarize {
			height: 3em;
			.text {
				margin-right: 2em;
				&.text1 {
					color: #79e5bc;
				}
			}
		}
		&.base-parameter {
			height: 2em;
			.text1 {
				color: #a8a8a8;
				margin-right: 2em;
			}
		}
	}
}
.ruzhuyaoqiu{
	.title {
		width: 90%;
		margin: 0 auto 1em;
		font-size: $uni-font-size-lg;
	}
	.grid-list {
		margin-bottom:1em;
		.text{
			padding:1px 10px;
			color:#999;
		}
		.active{
			border:1px solid #67E2B3;
			color:#67E2B3;
		}
	}
}
.peizhishebei {
	.title {
		width: 90%;
		margin: 0 auto;
		font-size: $uni-font-size-lg;
	}
	.grid-list {
		height: 160rpx;
		opacity: 0.2;
		.img {
			width: 25px;
			height: 25px;
		}
		.text {
			font-size: $uni-font-size-sm;
			text-decoration: line-through;
			margin-top: 0.3em;
		}
		&.active {
			opacity: 1;
			.text {
				text-decoration: none;
			}
		}
	}
}

.weizhi-and-zhoubian {
	.title {
		width: 90%;
		margin: 0 auto 1em;
		font-size: $uni-font-size-lg;
	}
}
.brief {
	width: 90%;
	margin: 0 auto;
	.title {
		height: 40px;
		font-size: $uni-font-size-lg;
	}
	.description {
		color: #999999;
		text-indent: 2em;
		text-align: justify;
	}
}

.housing-resource-title {
	width: 90%;
	margin: 1em auto;
	font-size: $uni-font-size-lg;
}

.footer {
	height: 120rpx;
	padding: 0 1em;
	border-top: 1px solid #f2f2f2;
	margin-top: 1em;
	.left {
		.img {
			width: 25px;
			height: 25px;
		}
	}
	.center,
	.right {
		padding: 6px 12px;
		border-radius: 6px;
	}
	.center {
		background: #67e2b3;
		color: #fff;
	}
	.right {
		background: #fce649;
		color: #444337;
	}
}
</style>
