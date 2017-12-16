'use strict';
const config = require('../webpack.config');
const WeexWebpack = require('../../');
const webpackConfig = WeexWebpack.getWebpackConfig(config);
if (process.env.NODE_ENV === 'development') {
  WeexWebpack.server(webpackConfig);
} else {
  WeexWebpack.build(webpackConfig);
}
