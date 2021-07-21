import * as Vue from 'vue';
import App from './App'
import router from './router'
import store from './store/'
// 'development',use package;'production':use cdn;
import ElementUI from "element-plus"
import('element-plus/lib/theme-chalk/index.css')

import './components/iconSvg' // iconSvg

import '@/permission' // permission control

import '@/mockjs'; // mock数据

// i18n国际化
import i18n from "@/lang";

// 分享功能集合
import { shareConfig } from './utils/share';
import IconSvg from "../src/components/iconSvg/index.js";

const app = Vue.createApp(App).use(IconSvg).use(i18n).use(router).use(store).use(ElementUI, { size: 'mini'});
app.config.globalProperties.shareConfig = shareConfig;
window.app = app
app.mount("#app");
