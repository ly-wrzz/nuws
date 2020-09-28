import Vue from 'vue'
import axios from "axios"
import apiConfig from '../config/api.config'
import router from './router'

axios.defaults.baseURL = apiConfig.baseUrl;// 配置接口地址

String.prototype.str2json = function(name){
	var num = this.indexOf("?"),
		str2 = this.substr(num+1),
		str = str2.substring(0, str2.indexOf("#")),
		arr = str.split("&"),
		res = {};
	for(var i=0;i < arr.length;i++){
		num=arr[i].indexOf("=");
		if(num>0){
			var n=arr[i].substring(0,num),
				v=arr[i].substr(num+1);
			res[n.toLowerCase()]=decodeURIComponent(v);
		}
	}
	if(name) {
		name = name.toLowerCase();
		return res[name] ? res[name] : '';
	}
	return res
};

function getTokene () {
	var pageUrl = window.location.href;
	var { code } = pageUrl.str2json();
	if (code) {
		get('login/get-token', {code}).then(res=>{
			localStorage.setItem("newsToken",res.data.token);
			localStorage.setItem("newsIsBind",res.data.is_bind);
		})
	}else{
		var pageUrl = "http://mobile.likunwei.com/#" + router.history.current.path;
		var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6ad5b33a57eec020&redirect_uri='+ encodeURIComponent(pageUrl) + 
		'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
		window.location.href = url;
	}
}

function ajaxRequest (url,params={},type){
    var param ={
		method:type
	}
	var noLoading = params.noLoading || false;
	if (noLoading === true) {
		delete params.noLoading;
	}else {
		Vue.$vux.loading.show({
			text: '加载中'
		})
	}

    switch (type){
        case "GET":
            param.params = params;
            break;
        default:
            param.data = params;
	}
	if (url.indexOf("login/get-token")==-1) {
		var token = localStorage.getItem("newsToken") || "";
		if (token) {
			axios.defaults.headers.common["token"] = token;
		}else{
			getTokene();
		}
	}
    return new Promise((resolve,reject) =>{
        axios(url,param)
        .then(response =>{
			!noLoading && Vue.$vux.loading.hide();
			if (response.data.code == 0) {
				resolve(response.data);
			}else if (response.data.code == -1) {
				localStorage.removeItem('newsToken');
				var pageUrl = "http://mobile.likunwei.com/#" + router.history.current.path;
				var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6ad5b33a57eec020&redirect_uri='+ encodeURIComponent(pageUrl) + 
				'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
				window.location.href = url;
			}else {
				var error = response.data.msg || "网络错误";
				Vue.$vux.toast.text(error);
			}
        })
        .catch(err =>{
			!noLoading && Vue.$vux.loading.hide();
            reject(err)
        })
    })
 };

function post (url, params = {}) {
    return ajaxRequest(url, params, 'POST');
};
function get (url, params = {}) {
    return ajaxRequest(url, params, 'GET');
};

export default{
    post,
	get,
	getTokene,
}