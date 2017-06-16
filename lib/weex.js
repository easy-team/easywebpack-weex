'use strict';
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
const merge = EasyWebpack.merge;
const WebpackBaseBuilder = require('./base');

class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(merge({ build: { commonsChunk: null } }, config));
    this.setPrefix('weex');
    this.setCssExtract(false);
    this.setStyleLoaderName('weex-vue-loader/lib/style-loader');
    this.addLoader(/\.vue$/, 'weex-loader', () => ({
      options: EasyWebpack.Loader.getStyleLoaderOption(this.getStyleConfig())
    }));
    this.addPlugin(webpack.BannerPlugin, { banner: '// { "framework": "Vue" }\n', raw: true });
    this.addPlugin(webpack.DefinePlugin, {
      'process.env': {
        PLATFORM: '"weex"'
      }
    });
  }
}
module.exports = WebpackWeexBuilder;
