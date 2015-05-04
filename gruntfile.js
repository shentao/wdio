module.exports = function (grunt) {

  grunt.initConfig({
    concurrent: {
      test: ['webdriver:testChrome', 'webdriver:testFirefox']
    },
    webdriver: {
      testChrome: {
        tests: ['tests/testfile.js'],
        options: {
          desiredCapabilities: {
            browserName: 'chrome'
            // chromeOptions: { mobileEmulation: { deviceName: 'Apple iPhone 5' } }
          }
        }
      },
      testFirefox: {
        tests: ['tests/testfile.js'],
        options: {
          desiredCapabilities: {
            browserName: 'firefox'
          }
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-continue');

  grunt.registerTask('', ['webdriver:testChrome', 'webdriver:testFirefox']);
  grunt.task.registerTask('devlog', 'Keep appending everything to a log file.', function () {
    require('logfile-grunt')(grunt, { filePath: './logs/MyDevLog.log', clearLogFile: true, keepColors: true });
  });


  grunt.registerTask('test', [
    'devlog',
    'continue:on',
    'webdriver',
    'continue:off',
  ]);
};
