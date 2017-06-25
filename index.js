'use strict';
const EasyWebpack = require('easywebpack');
exports.EasyWebpack = EasyWebpack;
exports.WebpackWeexBuilder = require('./lib/weex');
exports.WebpackWebBuilder = require('./lib/web');
Object.assign(exports, EasyWebpack);
