'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      output: ['ToBeCleaned/*']
    },
    jshint:{
      options:{
        //force: true  ---ignores all the errors
        //'-W069' : false ---ignores particular error
        ignores: ['./app/scripts/3rdparty/*.js'],// ---ignores files in the list
        reporterOutput: 'jshint.log'
      },
      files:['app/scripts/*/*.js']
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerTask("default", ["clean","jshint"]);
}