'use strict';
const WebpackWeexBuilder = require('../../../lib/weex');
const WebpackBaseBuilder = require('../base');
class WeexBuilder extends WebpackBaseBuilder(WebpackWeexBuilder) {
}
module.exports = new WeexBuilder().create();
