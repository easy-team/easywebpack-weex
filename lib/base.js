'use strict';
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.mergeConfig(require('../config/config'));
    this.mergeLoader(require('../config/loader'));
    this.mergePlugin(require('../config/plugin'));
    this.setExtensions('.vue');
    this.setStyleLoader(null);
  }
};
module.exports = WebpackBaseBuilder;
