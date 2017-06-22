/**
 * @file
 * @author cjw
 * Created by cjw on 17/6/22.
 */

import Api from 'assets/js/api';

import * as types from './mutation-type'

const state = {
    demoData: ''

};
const getters = {

   /* menuData: state => state.menuList,*/

};

const actions = {
    // 根据系统获取下的应用列表
    /*getAppList ({commit, state}, name) {
        return Api.getAppList({app: name}).then(res => {
            commit(types.SET_APP_LIST, {
                data:res.data
            });
            return res;
        });
    }*/

};

const mutations = {

    /*[types.GET_MENU_LIST] (state, payload) {
        state.menuList = Utils.filterEmptyData(payload.data);
    },*/
};

export default{
    state,
    actions,
    getters,
    mutations
}
