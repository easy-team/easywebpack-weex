'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBaseBuilder = require('./base');
class WebpackServerBuilder extends WebpackBaseBuilder(EasyWebpack.WebpackClientBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('web');
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
    Object.keys(this.options.entry).forEach(entryName => {
      const isCommonsChunk = this.config.build.commonsChunk.some(chunk => chunk === entryName);
      if (!isCommonsChunk) {
        const chunks = [].concat(this.config.build.commonsChunk).concat(entryName);
        this.addPlugin(HtmlWebpackPlugin, {
          chunks,
          filename: `${this.prefix}/${entryName}.html`,
          template: path.join(this.config.baseDir, 'test/web/view/layout.html'),
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
        });
      }
    });
  }
}
module.exports = WebpackServerBuilder;
