'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.type = 'weex';
    this.setPrefix('weex');
    this.setExternals(['vue']);
    this.setConfig({ hash: false });
  }
}
module.exports = WebpackWeexBuilder;
