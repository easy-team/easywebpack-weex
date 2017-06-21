'use strict';
const WebpackWeexBuilder = require('../../../lib/weex');
const WebpackBaseBuilder = require('../base');
class WeexBuilder extends WebpackBaseBuilder(WebpackWeexBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('weex/native');
  }
}
module.exports = new WeexBuilder().create();
