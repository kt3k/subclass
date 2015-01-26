


module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        'mocha-chai-sinon': {
            'index.js': {
                src: ['./index.js', './spec.js'],
                options: {
                    reporter: 'spec'
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['mocha-chai-sinon']);

};
