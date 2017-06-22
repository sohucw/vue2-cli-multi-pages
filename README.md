## 使用前注意事项
1.本demo参考了 https://github.com/bluefox1688/vue-cli-multi-page
2.在他的配置上做了修改和优化 大部分的配置和vue-cli 命令生产的 webpack模板是一样的
## 技术栈
 vue2
 vue-router
 vuex
 vux

## 说明

vux官网配置[说明](https://vux.li/#/)
>vux2必须配合vux-loader使用, 请在build/webpack.base.conf.js里参照如下代码进行配置：
```js
const vuxLoader = require('vux-loader')
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```
