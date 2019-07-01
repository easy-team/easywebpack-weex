'use strict';
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const WebpackBaseBuilder = require('./base');
class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config = {}) {
    const port = config.port ? config.port + 1 : 9001;
    super(merge({ port }, config));
    this.type = WebpackWeexBuilder.TYPE;
    this.setPrefix('weex');
    this.setExternals(['vue']);
    this.mergeConfig({ hash: false, hot: false });
    this.setDefine('process.env.PLATFORM', '"weex"');
  }

  setPort(port) {
    super.setPort(port);
    this.config.port += 1;
  }

  // weex 只能一个js文件，不能提取
  setCommonsChunkLib() {

  }
}
WebpackWeexBuilder.TYPE = 'weex';
module.exports = WebpackWeexBuilder;
