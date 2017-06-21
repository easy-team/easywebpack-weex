'use strict';
const path = require('path');
const WebpackWebBuilder = require('../../../lib/web');
const WebpackBaseBuilder = require('../base');
class WeexWebBuilder extends WebpackBaseBuilder(WebpackWebBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('weex/web');
    this.setEntry('vendor', [path.join(this.config.baseDir, 'test/web/framework/weex/web.js')]);
  }
}
module.exports = new WeexWebBuilder().create();
