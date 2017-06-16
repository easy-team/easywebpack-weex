'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  baseDir,
  build: {
    entry: path.join(baseDir, 'test/web/page'),
    template: path.join(baseDir, 'test/web/view/layout.html'),
  }
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('app', path.join(this.config.baseDir, 'test/web/framework/vue/app'));
    this.setAlias('framework', path.join(this.config.baseDir, 'test/web/framework'));
  }
};
module.exports = WebpackBaseBuilder;
