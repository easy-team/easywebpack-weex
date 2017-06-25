'use strict';
const EasyWebpack = require('easywebpack');
const webpack = EasyWebpack.webpack;
const Loader = EasyWebpack.Loader;
const WebpackBaseBuilder = require('./base');

class WebpackWeexWebBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('web');
    this.setHtml(true);
    this.addLoader(/\.html$/, 'vue-html-loader');
    this.addLoader({
      test: /\.vue$/,
      fn: () => this.createWeexVueLoader()
    });
    this.addPlugin(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV || 'development'}"`,
        PLATFORM: '"web"'
      }
    }));
  }

  createVueStyleLoader() {
    return Loader.getLoaderConfig('vue-style-loader', this.getStyleConfig());
  }

  createWeexVueLoader() {
    const styleConfig = this.getStyleConfig();
    const vueStyleLoader = this.createVueStyleLoader();
    const cssLoader = Loader.getCssLoader(styleConfig);
    const sassLoader = Loader.getSassLoader(styleConfig);
    return {
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [vueStyleLoader, cssLoader],
            scss: [vueStyleLoader, cssLoader, sassLoader],
            sass: [vueStyleLoader, cssLoader, sassLoader]
          },
          compilerModules: [{
            postTransformNode: el => {
              el.staticStyle = `$processStyle(${el.staticStyle})`;
              el.styleBinding = `$processStyle(${el.styleBinding})`;
            }
          }]
        }
      }
    };
  }
}
module.exports = WebpackWeexWebBuilder;
