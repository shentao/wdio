var assert = require('assert');

var WebdriverCSS = require('webdrivercss');


WebdriverCSS.init(browser, {
    screenshotRoot: 'test_results/' + browser.desiredCapabilities.browserName,
    failedComparisonsRoot: 'test_results/' + browser.desiredCapabilities.browserName + '/diff',
    misMatchTolerance: 0.05,
    api: 'http://localhost:9000/api/repositories/'
});




before(function() {
    browser.sync();
})


describe('should do screenshots of given element', function () {

    it('whole page', function(done) {

        browser
            .windowHandleSize({ width: 1200, height: 800 })
            .url('http://localhost:9000')
            .webdrivercss('startpage',[
              {
                name: 'shot',
                browserPrefix: browser.desiredCapabilities.browserName,
                exclude: '.hljs.javascript'
              }
            ], function(err, res) {
                assert.ifError(err);
                assert.ok(res.shot[0].isWithinMisMatchTolerance);
            })
            .call(done);

  });

});

describe('should do screenshots of given element', function () {

    it('header', function(done) {

        browser
            .windowHandleSize({ width: 1200, height: 800 })
            .url('http://localhost:9000')
            .webdrivercss('header',[
              {
                name: 'shot',
                browserPrefix: browser.desiredCapabilities.browserName,
                elem: '.header'
              }
            ], function(err, res) {
                assert.ifError(err);
                assert.ok(res.shot[0].isWithinMisMatchTolerance);
            })
            .call(done);

    });

});


after(function() {
    browser.sync().end();
});

