module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.js': ['jshint', 'browserify'],
            'src/**/*.js': ['jshint', 'browserify']
        },
        browsers: ['ChromeHeadless'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-jshint-preprocessor'
        ],
        browserify: {
            debug: true
        }
    })
}