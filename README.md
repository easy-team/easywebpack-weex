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

Webpack(2.x.x) building solution for `Weex` + `Vue`, support `Native`` and `Web` build.


## Install

```bash
$ npm i easywebpack-weex --save
```

## Usage

### webpack common config `base.js`

```js
'use strict';
const path = require('path');
const WeexWebpack = require('easywebpack-weex');
const merge = WeexWebpack.merge;
const baseDir = path.join(__dirname, '../../../');
const webpackConfig = {
  baseDir,
  build: {
    entry: 'test/web/page'
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

### webpack weex config `weex.js`

```js
'use strict';
const WeexWebpack = require('easywebpack-weex');
const WebpackWeexBuilder = WeexWebpack.WebpackWeexBuilder;
const WebpackBaseBuilder = require('../base');
class WeexBuilder extends WebpackBaseBuilder(WebpackWeexBuilder) {
}
module.exports = new WeexBuilder().create();
```

### webpack weex web config `web.js`

```js
'use strict';
const WeexWebpack = require('easywebpack-weex');
const WebpackWebBuilder = WeexWebpack.WebpackWebBuilder;
const WebpackBaseBuilder = require('../base');
class WeexWebBuilder extends WebpackBaseBuilder(WebpackWebBuilder) {
}
module.exports = new WeexWebBuilder().create();
```

### command run entry file `build.js`

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

### commmand run

```js
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

```bash

npm start

```


## Example

- [easywebpack-weex-boilerplate](https://github.com/hubcarl/easywebpack-weex-boilerplate) Weex构建项目骨架

![webpack-weex-compile](https://github.com/hubcarl/easywebpack-weex/blob/master/doc/images/webpack-weex-compile.png)

![webpack-weex-debug](https://github.com/hubcarl/easywebpack-weex/blob/master/doc/images/webpack-weex-debug.png)

see [weex example](test/web) and [weex webpack build config](test/build)  for more detail.



## Questions & Suggestions

Please open an issue [here](https://github.com/hubcarl/easywebpack-weex).

## License

[MIT](LICENSE)

