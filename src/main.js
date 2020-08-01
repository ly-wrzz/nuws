// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import axios from "axios"
import echarts from 'echarts'
import  { ToastPlugin, LoadingPlugin } from 'vux'
import { Picker, Popup, PopupHeader } from 'vux'
import util from './util'

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$util = util;

Vue.component('Picker', Picker);
Vue.component('Popup', Popup);
Vue.component('PopupHeader', PopupHeader);

Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
