
// 引入i18n国际化插件
import { getToken} from '@/utils/auth'
import * as Vue from 'vue';
process.env.NODE_ENV === "development" ? Vue.use(VueI18n) : null;

import enLocale from './en'
import zhLocale from './zh'

import { createI18n } from "vue-i18n";

// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = createI18n({
  locale: getToken('lang') || 'en',
  messages: {
    zh: {
      ...zhLocale
    },
    en: {
      ...enLocale
    },
  }
});

export default i18n;