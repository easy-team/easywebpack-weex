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
$ npm i easywebpack-weex --save-dev
```

## 使用

```js
const weex = require('easywebpack-weex');
// 获取 webpack weex 配置
const webpackConfig = weex.getWeexWebpackConfig({
  env: process.env.BUILD_ENV, // 支持 dev，test，local 模式
  entry: {
    index: 'src/app.js'
  }
});

// 获取 webpack web 配置
const webpackConfig = weex.getWeexWebpackConfig({
  entry: {
    index: 'src/app.js'
  }
});

//  获取 webpack weex 和 web 配置
const webpackConfig = weex.getWebpackConfig({
  entry: {
    index: 'src/app.js'
  }
});
```


## 开发构建

- 使用 webpack-cli 开发构建服务

```bash
webpack --config webpack.config.js
```

-  使用 easywebpack 内置开发构建服务


```js
const weex = require('easywebpack-weex');
if (process.env.NODE_ENV === 'development') {
  // development mode: webpack building and start webpack hot server
  weex.server(webpackConfig);
} else {
  // build file to disk
  weex.build(webpackConfig);
}
```

## 工程骨架

[easywebpack-weex-boilerplate](https://github.com/easy-team/easywebpack-weex-boilerplate) Weex构建项目骨架

![webpack-weex-compile](https://github.com/easy-team/easywebpack-weex/blob/master/doc/images/webpack-weex-compile.png)

![webpack-weex-debug](https://github.com/easy-team/easywebpack-weex/blob/master/doc/images/webpack-weex-debug.png)


## License

[MIT](LICENSE)

