import * as Vue from 'vue';
import App from './App'
import router from './router'
import store from './store/'
// 'development',use package;'production':use cdn;
import ElementUI from "element-plus"
Vue.use(ElementUI, { size: 'mini'});
import('element-ui/lib/theme-chalk/index.css')

import './components/iconSvg' // iconSvg

import '@/permission' // permission control

import '@/mockjs'; // mock数据

// i18n国际化
import i18n from "@/lang";

// 分享功能集合
import { shareConfig } from './utils/share';
import IconSvg from "../src/components/iconSvg/index.js";
Vue.prototype.shareConfig = shareConfig;



const app = Vue.createApp(App).use(IconSvg).use(i18n).use(router).use(store);
app.mount("#app");
