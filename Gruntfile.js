module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({

    watch: {
      demo: {
        files: ['index.html'],
        options: {
          livereload: 23421
        }
      }
    },

    connect: {
      docs: {
        options: {
          port: 8000,
          livereload: 23421,
          open: {
            target: 'http://localhost:8000/index.html'
          }
        }
      }
    }

  });

  grunt.registerTask('default', [
    'connect',
    'watch'
  ]);

};
