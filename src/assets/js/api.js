/**
 * @file
 * @author cjw
 * Created by cjw on 17/6/22.
 */

import http from 'axios';
import Qs from 'qs';

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const baseUrl = '';


const apiList = {
    // 获取登陆用户的名字
    getTestData: {
        url: '../../../static/data/1.json'
    }

};

const apiFactory = api => {

    let method = api.method ? api.method : 'get';
    return params => {
        if (!params) {
            params = {};
        }
       // params['t'] = Utils.getCookie('token');
        if (method === 'get') {
            params = {params};
        } else {
            params = Qs.stringify(params);
        }
        return http[method](api.url, params).then(res => {
            // 处理用户未登陆的操作
           /* let data = res.data;
            if (data.status === 401) {
                if (location.search) {
                    Utils.setCookie('token', getQueryString('t'), 1);
                    window.location.href = sendUrl;
                } else {
                    window.location.href = data.data.url;
                }
                return;
            }*/
            return Promise.resolve(res.data);
            /* if (res.data.status ===0) {
             return Promise.resolve(res.data);
             } else  {
             // alert(res.data.msg);
             return Promise.reject(res.data);
             }*/
        }).catch(res => Promise.reject(res));
    };
};




const Api = {};
for (let key in apiList) {
    Api[key] = apiFactory(apiList[key]);
}


export default Api;
