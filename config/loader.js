'use strict';
exports.weex = {
  test: /\.vue$/,
  type: 'weex',
  exclude: /node_modules/,
  use() {
    return [
      {
        loader: 'weex-loader',
        options: this.createFrameworkLoader('weex-vue-loader/lib/style-loader')
      }
    ];
  }
};

exports.vue = {
  test: /\.vue$/,
  type: 'web',
  exclude: /node_modules/,
  use() {
    return [
      {
        loader: 'vue-loader',
        options: this.merge(this.createFrameworkLoader('vue-style-loader'), {
          compilerModules: [{
            postTransformNode: el => {
              el.staticStyle = `$processStyle(${el.staticStyle})`;
              el.styleBinding = `$processStyle(${el.styleBinding})`;
            }
          }]
        })
      }
    ];
  }
};

exports.vuehtml = {
  test: /\.html$/,
  type: 'web',
  use: ['vue-html-loader']
};
