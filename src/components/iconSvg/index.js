import IconSvg from './IconSvg'
//全局注册icon-svg
export default {
  install: app => {
    app.component('icon-svg', IconSvg);
  }
};;
