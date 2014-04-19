var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.initConfig({
        'gitbook': {
            development: {
                output: path.join(__dirname, ".grunt/gitbook"),
                input: "./",
                title: "Mac OS X Setup Guide",
                description: "Guide to setting up developer environment on OS X",
                github: "sb2nov/mac-setup"
            }
        },
        'gh-pages': {
            options: {
                base: '.grunt/gitbook'
            },
            src: ['**']
        },
        'clean': {
            files: '.grunt'
        },
        'http-server': {
            'dev': {
                // the server root directory
                root: '.grunt/gitbook',

                port: 4000,
                host: "127.0.0.1",

                showDir : true,
                autoIndex: true,
                defaultExt: "html",

                //wait or not for the process to finish
                runInBackground: false
            }
        }
    });

    grunt.registerTask('test', [
        'gitbook',
        'http-server'
    ]);
    grunt.registerTask('publish', [
        'gitbook',
        'gh-pages',
        'clean'
    ]);
    grunt.registerTask('default', 'gitbook');
};