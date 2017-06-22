/**
 * @file
 * @author cjw
 * Created by cjw on 17/6/22.
 */

import Vue from 'vue';
import Vuex from 'vuex';

//提供了一种机制将状态从根组件『注入』到每一个子组件中
Vue.use(Vuex)

import main from './modules/main';
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    modules: {
        main
    },
    strict: debug
})