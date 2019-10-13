import Vue from 'vue'
import App from './App'
//导入自定义常量配置文件
import commonConfig from "common/config.js"
Vue.prototype.$commonConfig=commonConfig;//将对象挂载到Vue

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	//...App
	onLaunch: function() { 
		//app启动时获取顶部状态栏高度并原型绑定到vue
		var res = uni.getSystemInfoSync();
		Vue.prototype.$statusBarHeight=res.statusBarHeight;
	}
})
app.$mount()
