'use strict';
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);

    this.setAlias('app', 'test/web/framework/vue/app');
    this.setAlias('framework', 'test/web/framework');
  }
};
module.exports = WebpackBaseBuilder;
