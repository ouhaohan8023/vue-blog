import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import {
	backTopClick
} from '@/utils/common.js'
// import axios from 'axios'
// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'http://vue-blog.test/api' // api 即上面 vue.config.js 中配置的地址

Vue.config.productionTip = false
// 返回頂部
Vue.prototype.$backTopClick = backTopClick
console.log(process.env)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
