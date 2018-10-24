// Karma configuration
// Generated on Thu Jul 13 2017 11:26:45 GMT-0500 (Central Daylight Time (Mexico))

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-spec-reporter'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-coverage'),
            require('karma-ie-launcher'),
        ],


        // list of files / patterns to load in the browser
        files: [
            './node_modules/angular/angular.js', // angular
            './node_modules/@uirouter/angularjs/release/angular-ui-router.js', // ui-router
            './node_modules/angular-mocks/angular-mocks.js', // loads our modules for tests
            //'./docs/services/users/users.js', // our Users factory
            //'./docs/services/posts/posts.js', // our Posts factory
            './docs/components/users/users.js',
            //'./docs/filters/capitalize/capitalize.js',
            './docs/docs.js', // our angular app
            //'./docs/services/users/users.spec.js', // our test file for our Users factory
            // './docs/services/posts/posts.spec.js', // our test file for our Users factory
            './docs/components/users/users.spec.js',
            './docs/filters/capitalize/capitalize.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './docs/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'text',
            // file: 'output.txt'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['spec'],
        reporters: ['progress', 'coverage'],

        // web server port
        port: 9876,


        //jsHint config
        /* jshint: {
             options: {
                 curly: true,
                 eqeqeq: true,
                 immed: true,
                 latedef: true,
                 newcap: true,
                 noarg: true,
                 sub: true,
                 undef: true,
                 boss: true,
                 devel: true,
                 eqnull: true,
                 browser: true,
                 globals: {
                     cordova: true,
                     jQuery: true
                 }
             },
             summary: true
         },*/


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome'],
        // browsers: ['Chrome', 'IE', 'IE9', 'IE8'],
        browsers: ['PhantomJS'],

        customLaunchers: {
            // chrome setup for travis CI using chromium
            Chrome_travis_ci: {
                base: "Chrome",
                flags: [" --no-sandbox"]
            },
            IE9: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE9'
            },
            IE8: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE8'
            }
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        browserNoActivityTimeout: 30000,
    });
};