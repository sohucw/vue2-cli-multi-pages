/**
 * @file
 * @author cjw
 * Created by cjw on 17/6/22.
 */

import Vue from 'vue'
import App from './listApp'

// 引入store相关信息
import store from '../../../vuex/store';


new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
