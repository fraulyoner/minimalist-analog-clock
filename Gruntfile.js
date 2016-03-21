module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({

    sass: {
      docs: {
        options: {
          loadPath: [
            'sass'
          ]
        },
        files: {
          'css/clock.css': 'sass/clock.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'css/clock.min.css': 'css/clock.css'
        }
      }
    },

    watch: {
      demo: {
        files: ['demo/*.html', 'demo/*.css', 'css/*.css'],
        options: {
          livereload: 23421
        }
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
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

  grunt.registerTask('package', [
    'sass',
    'cssmin'
  ]);

  grunt.registerTask('serve', [
    'package',
    'connect',
    'watch'
  ]);

  grunt.registerTask('default', [
    'package'
  ]);

};
