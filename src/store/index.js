import * as Vuex from 'vuex';
// if(process.env.NODE_ENV === "development"){
//     Vue.use(Vuex) 
// } 

import user from './modules/user'
import permission from './modules/permission'
import money from './modules/money'
import menu from './modules/menu'

export default Vuex.createStore({
    modules: {
        user,
        permission,
        money,
        menu
    }
});

