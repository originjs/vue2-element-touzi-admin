import permission from './permission'

const install = function(app) {
  app.directive('permission', permission)
}

if (window.app) {
  window['permission'] = permission 
  app.use(install); // eslint-disable-line
}

permission.install = install 
export default permission


