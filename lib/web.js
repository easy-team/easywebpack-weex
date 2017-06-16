'use strict';
const EasyWebpack = require('easywebpack');
const WebpackBaseBuilder = require('./base');
class WebpackWeexWebBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('web');
    this.setHtml(true);
    this.setStyleLoaderName('vue-style-loader');
    this.addLoader(/\.html$/, 'vue-html-loader');
    this.addLoader(/\.vue$/, 'vue-loader', () => {
      const options = EasyWebpack.Loader.getStyleLoaderOption(this.getStyleConfig());
      options.compilerModules = [{
        postTransformNode: el => {
          el.staticStyle = `$processStyle(${el.staticStyle})`;
          el.styleBinding = `$processStyle(${el.styleBinding})`;
        }
      }];
      return { options };
    });
  }
}
module.exports = WebpackWeexWebBuilder;
