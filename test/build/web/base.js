'use strict';
const path = require('path');
const WebpackWebBuilder = require('../../../lib/web');
const WebpackWeexBaseBuilder = require('../base');
class WebpackWeexWebBaseBuilder extends WebpackWeexBaseBuilder(WebpackWebBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('weex/web');
    this.setHtml({
      include: ['test/web/page'],
      template: 'test/web/view/layout.html'
    });
    this.addEntry('vendor', [path.join(this.config.baseDir,'test/web/framework/weex/web.js')]);
  }
}
module.exports = WebpackWeexWebBaseBuilder;