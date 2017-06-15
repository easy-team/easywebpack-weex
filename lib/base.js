'use strict';
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
    this.setExtensions('.vue');
  }
};
module.exports = WebpackBaseBuilder;
