'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.type = WebpackWeexBuilder.TYPE;
    this.setPrefix('weex');
    this.setExternals(['vue']);
    this.mergeConfig({ hash: false, hot: false });
    this.setDefine('process.env.PLATFORM', '"weex"');
  }

  // weex 只能一个js文件，不能提取
  setCommonsChunkLib() {

  }
}
WebpackWeexBuilder.TYPE = 'weex';
module.exports = WebpackWeexBuilder;
