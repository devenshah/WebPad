'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            //output: ['app/scripts/_output/*']
            options: {

            },
            files: ['app/scripts/_output/*.js'],
            folders: ['app/scripts/_output']
        },
        jshint: {
            options: {
                //force: true  ---ignores all the errors
                //'-W069' : false ---ignores particular error
                ignores: ['./app/scripts/3rdparty/*.js'], // ---ignores files in the list
                reporterOutput: 'jshint.log'
            },
            files: ['app/scripts/*/*.js']
        },
        uglify: {
            development: {
                files: [{
                    expand: true,
                    src: 'app/scripts/domain/*.js',
                    dest: 'app/scripts/_output/domain.js'
                }]
            },
            options: {
                mangle: false, //stops renaming functions and variable
                compress: {
                    drop_console: true //drops console statements
                },
                beautify: true
            }
        },
        htmlhint: {
            templates: {
                options: {
                    "attr-lower-case": true,
                    "attr-value-not-empty": true,
                    "tag-pair": true,
                    "tag-self-close": true,
                    "tagname-lowercase": true,
                    "id-class-value": true,
                    "id-class-unique": true,
                    "src-not-empty": true,
                    "img-alt-required": true
                },
                src: ['app/views/**/*.html']
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-htmlhint");
    grunt.registerTask("default", ["clean", "jshint", "uglify", "htmlhint"]);
}