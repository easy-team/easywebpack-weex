'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.type = 'weex';
    this.setPrefix('weex');
    this.setExternals(['vue']);
    this.setConfig({ hash: false, hot: false });
  }

  // weex 只能一个js文件，不能提取
  setCommonsChunkLib() {

  }
}
module.exports = WebpackWeexBuilder;
