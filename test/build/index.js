'use strict';
const WeexWebpack = require('../../index');
const weexConfig = require('./weex');
const webConfig = require('./web');
const BUILD_ENV = process.env.BUILD_ENV;
const buildConfig = [];
if (BUILD_ENV === 'weex') {
  buildConfig.push(weexConfig);
} else if (BUILD_ENV === 'web') {
  buildConfig.push(webConfig);
} else {
  Array.prototype.push.apply(buildConfig, [weexConfig, webConfig]);
}

const config = {
  port: 8881,
  webpackConfig: buildConfig
};
if (BUILD_ENV) {
  WeexWebpack.build(config);
} else {
  WeexWebpack.server(config);
}
