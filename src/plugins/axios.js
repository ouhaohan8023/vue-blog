"use strict";

import Vue from 'vue';
import axios from "axios";
import {
	Message,
	Loading
} from 'element-ui';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	baseURL: "/api",
	timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
//loading对象
let loading;
let loadingTimes = 0;
_axios.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		if (loadingTimes === 0) {
			loading = Loading.service({
				lock: true,
				elementLoadingText: "拼命加载中",
				elementLoadingSpinner: "el-icon-loading",
				background: 'rgba(0, 0, 0, 0.8)',
			});
		}
		loadingTimes++;
		
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	function(response) {
		// Do something with response data
		if (loadingTimes === 1) {
			loading.close();
		}
		loadingTimes--;
		if (response.data.code === 500) {
			Message.error({
				message: response.data.msg
			});
		}
		return response;
	},
	function(error) {
		// Do something with response error
		let response = error.response
		if (response.status === 500) {
			Message.error({
				message: response.statusText
			});
		}
		return Promise.reject(error);
	}
);

Plugin.install = function(Vue) {
	Vue.axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		axios: {
			get() {
				return _axios;
			}
		},
		$axios: {
			get() {
				return _axios;
			}
		},
	});
};

Vue.use(Plugin)

export default Plugin;
