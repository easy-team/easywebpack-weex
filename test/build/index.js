'use strict';
const config = require('../../webpack.config');
const WeexWebpack = require('../../');
const webpackConfig = WeexWebpack.getWebpackConfig(config);
if (process.env.SERVER) {
  WeexWebpack.server(webpackConfig);
} else {
  WeexWebpack.build(webpackConfig);
}
