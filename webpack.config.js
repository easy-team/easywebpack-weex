'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  entry: {
    include: 'test/web/page',
    exclude: ['test/web/page/html'],
    template: 'test/web/view/layout.html'
  },
  alias: {
    asset: 'test/web/asset',
    app: 'test/web/framework/vue/app.js',
    component: 'test/web/component',
    framework: 'test/web/framework',
    store: 'test/web/store'
  },
  create() {
    if (this.type === 'web') {
      this.addEntry('vendor', [path.join(this.config.baseDir, 'test/web/framework/weex/web.js')]);
    }
  }
};