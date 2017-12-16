# easywebpack-weex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/easywebpack-weex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/easywebpack-weex
[travis-image]: https://img.shields.io/travis/hubcarl/easywebpack-weex.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/easywebpack-weex
[codecov-image]: https://img.shields.io/codecov/c/github/hubcarl/easywebpack-weex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/hubcarl/easywebpack-weex?branch=master
[david-image]: https://img.shields.io/david/hubcarl/easywebpack-weex.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/easywebpack-weex
[snyk-image]: https://snyk.io/test/npm/easywebpack-weex/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/easywebpack-weex
[download-image]: https://img.shields.io/npm/dm/easywebpack-weex.svg?style=flat-square
[download-url]: https://npmjs.org/package/easywebpack-weex

基于 easywebpack 的 Weex Native 和 Weex Web 打包构建解决方案.


## 安装

```bash
$ npm i easywebpack-weex --save
```

## 使用

### 公共配置 `base.js`

```js
'use strict';
const path = require('path');
const WeexWebpack = require('easywebpack-weex');
const merge = WeexWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  entry: {
   include: 'page',
   exclude: ['page/test'],
   template: 'view/layout.html'
  } 
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('app', 'test/web/framework/vue/app');
    this.setAlias('component', 'test/web/component');
  }
};
module.exports = WebpackBaseBuilder;
```

### Weex Native 构建配置 `weex.js`

```js
'use strict';
const WeexWebpack = require('easywebpack-weex');
const WebpackWeexBuilder = WeexWebpack.WebpackWeexBuilder;
const WebpackBaseBuilder = require('../base');
class WeexBuilder extends WebpackBaseBuilder(WebpackWeexBuilder) {
}
module.exports = new WeexBuilder().create();
```

### Weex Web 构建配置 `web.js`

```js
'use strict';
const WeexWebpack = require('easywebpack-weex');
const WebpackWebBuilder = WeexWebpack.WebpackWebBuilder;
const WebpackBaseBuilder = require('../base');
class WeexWebBuilder extends WebpackBaseBuilder(WebpackWebBuilder) {
}
module.exports = new WeexWebBuilder().create();
```

### 构建入口 `build.js`

```js
const WeexWebpack = require('easywebpack-weex');
const weexConfig = require('./weex');
const webConffig = require('./web');
const config = [weexConfig, webConffig];

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  WeexWebpack.server(config);
} else {
  // build file to disk
  WeexWebpack.build(config);
}
```

### 命令行运行

- package.json 添加脚本配置

```js
// ${app_root}/package.json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production node test/build",
    "build-dev": "cross-env NODE_ENV=development node test/build",
    "build-weex": "BUILD_ENV=weex npm run build",
    "build-web": "BUILD_ENV=web npm run build",
    "build-weex-dev": "BUILD_ENV=weex npm run build-dev",
    "build-web-dev": "BUILD_ENV=web npm run build-dev",
    "start" : "cross-env NODE_SERVER=true NODE_ENV=development node test/build"
   }
}
```

- 命令行运行

```bash
npm start
```


## 工程骨架

[easywebpack-weex-boilerplate](https://github.com/hubcarl/easywebpack-weex-boilerplate) Weex构建项目骨架

![webpack-weex-compile](https://github.com/hubcarl/easywebpack-weex/blob/master/doc/images/webpack-weex-compile.png)

![webpack-weex-debug](https://github.com/hubcarl/easywebpack-weex/blob/master/doc/images/webpack-weex-debug.png)


## License

[MIT](LICENSE)

