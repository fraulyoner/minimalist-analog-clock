module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({

    watch: {
      demo: {
        files: ['demo/*.html', 'demo/*.css', 'css/*.css'],
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
            target: 'http://localhost:8000/demo/index.html'
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
