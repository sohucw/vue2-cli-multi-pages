import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from './addApp'
import List from './listApp'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Add },
  { path: '/list', component: List }
]



/*routes.beforeEach(function (to, form, next) {

});
router.afterEach(function (to) {
  //store.commit('updateLoadingStatus', {isLoading: false})
})*/
const router = new VueRouter({
  routes:routes
})


new Vue({
  router: router
}).$mount('#app')
