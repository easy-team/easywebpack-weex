'use strict';
const WebpackWebBaseBuilder = require('./base');
class WeexWebBuilder extends WebpackWebBaseBuilder {
  constructor(config) {
    super(config);
  }
}

module.exports = new WeexWebBuilder().create();
