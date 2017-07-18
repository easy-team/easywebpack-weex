'use strict';
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('./config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(config, defaultConfig));
    this.setExtractCss(false);
    this.setExtensions('.vue');
    this.setOption({
      resolveLoader: {
        alias: {
          'scss-loader': 'sass-loader'
        }
      }
    });
    const styles = ['css', 'sass', 'less', 'scss'];
    const styleLoaderOption = {};
    styles.forEach(style => {
      styleLoaderOption[style] = {
        deps: {
          postcss: false
        }
      };
    });
    this.setStyleLoaderOption(styleLoaderOption);
  }
};
module.exports = WebpackBaseBuilder;
