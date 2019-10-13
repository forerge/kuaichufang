<template>
	<view>
	<!--
		常见参数：
		indicator-dots	是否显示面板指示点 默认false	
		indicator-color	指示点颜色rgba(0, 0, 0, .3)	
		indicator-active-color	当前选中的指示点颜色 #000000
		autoplay	是否自动切换  false	
		current	当前所在滑块的 index 默认  0	
		interval	自动切换时间间隔 默认 5000	
		circular	是否采用衔接滑动 默认 false
		vertical	滑动方向是否为纵向 默认 false	
		@change	   改变时会触发 change 事件，event.detail = {current: current, source: source}
		
		Tips：
		使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 css 设置 height。
		注意：其中只可放置 <swiper-item> 组件，否则会导致未定义的行为。
		<swiper-item>仅可放置在 <swiper> 组件中，宽高自动设置为100%。
    -->
		
		<swiper class="swiper" :indicator-dots="false" :autoplay="false"  :circular="true" :current="current" @change="changeSwiper">
				<block v-for="(val,index) in imgUrl" :key="index">
					<swiper-item class="swiper-item">
						<view class="swiper-img">
							<image class="img" :src="val"></image>
						</view>
						<!-- 悬浮在滑块上的文字 -->
						<text class="cancel" @tap="cancelCurSwiperIndex">x</text>
						<text class="count-indicate">{{current+1}}/{{swiperItemCount}}</text>
					</swiper-item>
				</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:[
			'imgUrl'
		],
		data() {
			return {
				//头部滑块
				current:0,
				swiperItemCount:3
			};
		},
		methods:{
			 changeSwiper(e) {
			    this.current=e.detail.current;
			  },
			  cancelCurSwiperIndex(){
				  if(this.current+1==this.swiperItemCount){
					  this.current=0;
					  return;
				  }
				   this.current=this.current+1;
			  }
			  
		}
	}
	
	
</script>

<style lang="scss" scoped>
	.swiper-item{
		position: relative;
		.img{
			width:100%;
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
			top:1em;
			left:1em;
			color:#fff;
			display:block;
			width:32px;
			height:32px;
			line-height:32px;
			text-align: center;
			background:rgba(0,0,0,0.5);
			border-radius: 32px;
			font-size:16px;
			font-weight: 700;
		}
	} 

</style>
