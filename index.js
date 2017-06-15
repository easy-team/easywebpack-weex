'use strict';
const WeexWebpackTool = require('./tool');
exports.EasyWebpack = require('easywebpack');
exports.webpack = exports.EasyWebpack.webpack;
exports.merge = exports.EasyWebpack.merge;
exports.WebpackWeexBuilder = require('./lib/weex');
exports.WebpackWebBuilder = require('./lib/web');
exports.WeexWebpackTool = WeexWebpackTool;
exports.build = (config, callback) => {
  new WeexWebpackTool(config).build(callback);
};
exports.server = config => {
  new WeexWebpackTool(config).server();
};
