'use strict';
const EasyWebpack = require('easywebpack');
const Loader = EasyWebpack.Loader;
const webpack = EasyWebpack.webpack;
const merge = EasyWebpack.merge;
const WebpackBaseBuilder = require('./base');

class WebpackWeexBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(merge({ build: { commonsChunk: null } }, config));
    this.setPrefix('weex');
    this.setHotLoad(false);
    this.setFileNameHash(false);
    this.setOption({
      externals: ['vue']
    });
    this.addLoader(/\.vue$/, 'weex-loader', () => this.createWeexLoader());
    this.addPlugin(webpack.BannerPlugin, { banner: '// { "framework": "Vue" }\n', raw: true });
    this.addPlugin(webpack.DefinePlugin, {
      'process.env': {
        PLATFORM: '"weex"'
      }
    });
  }

  createWeexVueLoader() {
    return Loader.getLoaderConfig('weex-vue-loader/lib/style-loader', this.getStyleConfig());
  }

  createWeexLoader() {
    const styleConfig = this.getStyleConfig();
    const weexVueLoader = this.createWeexVueLoader();
    const sassLoader = Loader.getSassLoader(styleConfig);
    return {
      options: {
        loaders: {
          css: [weexVueLoader],
          sass: [weexVueLoader, sassLoader],
          scss: [weexVueLoader, sassLoader]
        }
      }
    };
  }
}
module.exports = WebpackWeexBuilder;
