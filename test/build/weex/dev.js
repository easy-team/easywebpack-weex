'use strict';
const WebpackWeeNativeBaseBuilder = require('./base');
class WeexBuilder extends WebpackWeeNativeBaseBuilder {
  constructor(config) {
    super(config);
    this.setEnv('dev');
  }
}
module.exports = new WeexBuilder().create();
