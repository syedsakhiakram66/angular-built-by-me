module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'test/**/*.js': ['jshint'],
            'src/**/*.js': ['jshint']
        },
        browsers: ['ChromeHeadless'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-jshint-preprocessor'
        ]
    })
}