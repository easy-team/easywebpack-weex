'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexWebBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.type = 'web';
    this.setPrefix('web');
    this.setAlias('vue', 'vue/dist/vue.common.js', false);
  }
}
module.exports = WebpackWeexWebBuilder;
