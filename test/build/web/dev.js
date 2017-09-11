'use strict';
const WebpackWebBaseBuilder = require('./base');
class WeexWebBuilder extends WebpackWebBaseBuilder {
  constructor(config) {
    super(config);
    this.setEnv('dev');
    this.setDevMode(9001);
  }
}
module.exports = new WeexWebBuilder().create();
