'use strict';
const EasyWebpack = require('easywebpack');

exports.banner = {
  enable: true,
  type: 'weex',
  name: EasyWebpack.webpack.BannerPlugin,
  args: { banner: '// { "framework": "Vue" }\n', raw: true }
};

exports.commonsChunk = {
  type: 'web'
};


exports.hot = {
  type: 'web'
};

exports.imagemini = {
  type: ['web', 'weex']
};

exports.html = {
  type: 'web'
};

exports.buildfile = false;

exports.manifest = false;