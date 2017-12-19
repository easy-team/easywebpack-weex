'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexWebBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.type = WebpackWeexWebBuilder.TYPE;
    this.setPrefix('web');
    this.setAlias('vue', 'vue/dist/vue.common.js', false);
    this.setDefine('process.env.PLATFORM', '"web"');
  }
}
WebpackWeexWebBuilder.TYPE = 'web';
module.exports = WebpackWeexWebBuilder;

