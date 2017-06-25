'use strict';
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setManifest(false);
    this.setCssExtract(false);
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
