webpackJsonp([7],{10:function(t,e){},11:function(t,e){},112:function(t,e,n){n(217);var i=n(0)(n(159),n(249),null,null);t.exports=i.exports},12:function(t,e){},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},139:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(112),s=n.n(a);new i.a({render:function(t){return t(s.a)}}).$mount("#app")},14:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(e){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(2),n(44)),a=n.n(i),s=n(17),o=n.n(s);e.default={components:{HbHead:o.a,Divider:a.a},data:function(){return{}},methods:{}}},16:function(t,e,n){n(12);var i=n(0)(n(8),n(15),null,null);t.exports=i.exports},17:function(t,e,n){n(21);var i=n(0)(n(19),n(23),null,null);t.exports=i.exports},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=n.n(i);e.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return a()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(2),n(24)),a=n.n(i);e.default={data:function(){return{}},components:{XHeader:a.a},props:{headfont:{type:String,default:"导航"}},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}}},2:function(t,e,n){"use strict";var i=n(30),a=n(31),s=n(1),o=n(3),r=n(4),u=(n(5),n(32)),l=n.n(u);n(9),s.a.use(i.a),s.a.use(a.a),l.a.attach(document.body),e.a={M:r.a,C:o.a}},20:function(t,e){},21:function(t,e){},217:function(t,e){},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},23:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("x-header",{staticClass:"headfix"},[t._v(t._s(t.headfont))]),t._v(" "),n("div",{staticClass:"headMargin"})],1)},staticRenderFns:[]}},24:function(t,e,n){n(20);var i=n(0)(n(18),n(22),null,null);t.exports=i.exports},249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"过滤器"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"bgfff martop10 pad10 filterBox"},[n("divider",[t._v("人民币货币符号，有小数点")]),t._v(" "),n("p",[t._v("\n    \t\t"+t._s(t._f("currency")(4546.2222))+"\n    \t")]),t._v(" "),n("divider",[t._v("美元货币符号，不留小点数")]),t._v(" "),n("p",[t._v("\n    \t\t"+t._s(t._f("currency")(168,"$",0))+"\n    \t")]),t._v(" "),n("divider",[t._v("美元货币符号，5位小数点")]),t._v(" "),n("p",[t._v("\n    \t\t"+t._s(t._f("currency")(2172.356258598,"$",4))+"\n    \t")])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bgfff martop10 pad10 font14 color666"},[n("p",[t._v("\n    \t\t这里展示了多页面全局过滤器的用法，在 /src/assets/js/vueFilter.js 注册全局过滤器，方便全局调用。\n    \t")])])}]}},27:function(t,e,n){n(11);var i=n(0)(n(6),n(14),null,null);t.exports=i.exports},3:function(t,e,n){"use strict";var i=n(33),a=(n.n(i),{appname:"云收银",url_host:window.location.host,background:"#FBF9FE"});e.a=a},34:function(t,e,n){n(10);var i=n(0)(n(7),n(13),null,null);t.exports=i.exports},4:function(t,e,n){"use strict";var i=(n(3),n(29)),a=n.n(i),s=Object.prototype,o=s.toString,r={ajax:function(t){var e=t||{};if(!e.url)return alert("请填写接口地址"),!1;a()({method:e.type||"post",url:e.url,params:e.data||{},headers:e.headers||{"Content-Type":"application/x-www-form-urlencoded"},baseURL:"http://t.lanchenglv.com/tp5demo/index.php/",timeout:e.time||1e4,responseType:e.dataType||"json"}).then(function(t){200==t.status?e.success&&e.success(t.data,t):data.error?e.error(error):alert("好多人在访问呀，请重新试试[timeout]")}).catch(function(t){console.log(t),e.error?e.error(t):alert("好多人在访问呀，请重新试试[timeout]")})},isArrayLike:function(t){if(!t)return!1;var e=t.length;if(e===e>>>0){var n=o.call(t).slice(8,-1);if(/(?:regexp|string|function|window|global)$/i.test(n))return!1;if("Array"===n)return!0;try{return!1!=={}.propertyIsEnumerable.call(t,"length")||/^\s?function/.test(t.item||t.callee)}catch(e){return!t.window}}return!1},each:function(t,e){var n=this;if(t){var i=0;if(n.isArrayLike(t))for(var a=t.length;i<a&&!1!==e(i,t[i]);i++);else for(i in t)if(t.hasOwnProperty(i)&&!1===e(i,t[i]))break}},getUrlQuery:function(t,e){var n=new RegExp("(^|\\?|&)"+t+"=([^&]*)(\\s|&|$)","i"),i=e||location.href;return n.test(i)?unescape(RegExp.$2.replace(/\+/g," ")):""}};e.a=r},40:function(t,e){},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"vux-divider"},[t._t("default")],2)},staticRenderFns:[]}},44:function(t,e,n){n(40);var i=n(0)(null,n(42),null,null);t.exports=i.exports},5:function(t,e,n){"use strict";var i=n(1),a=n(28),s=n.n(a);i.a.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"¥",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return s.a.formatMoney(t,e,n)})},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),a=n.n(i);e.default={components:{XDialog:a.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},9:function(t,e){}},[139]);