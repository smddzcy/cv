module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dev: true,

    less: {
      dist: {
        files: {
          'dist/css/main.less.css': 'src/less/build.less',
          'dist/css/print.less.css': 'src/less/print.less',
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'dist/css/main.less.css': 'dist/css/main.less.css',
          'dist/css/print.less.css': 'dist/css/print.less.css'
        },
        options: {
          browsers: ['last 2 versions', 'ie >= 8']
        }
      }
    },

    watch: {
      less: {
        files: ['src/**/*.less'],
        tasks: ['setDev:true', 'less', 'autoprefixer', 'cssmin', 'bake']
      },
      bake: {
        files: ['src/html/**/*'],
        tasks: ['setDev:true', 'bake']
      },
      options: {
        livereload: {
          host: 'localhost',
          port: 9002,
        }
      }
    },

    bake: {
      dist: {
        options: {
          basePath: 'src/html/',

          content: function() {
            var files = grunt.file.readJSON('src/contents.json');
            var content = {};
            for (var i = 0; i < files.length; i++) {
              content[files[i]] = grunt.file.readJSON('src/contents/' + files[i] + '.json');
            }
            content.dev = grunt.config.dev;
            return content;
          },

          transforms: {
            trim: function(str) {
              return str.trim();
            },

            clearWhitespaces: function(str) {
              return str.replace(/\s+/g, '');
            },

            assignColor: function(str) {
              var colorSettings = grunt.file.readJSON('src/contents/color_palette.json'),
                selectedColor = colorSettings.colorOptions[str] || 'initial';
              return selectedColor;
            },

            assignBgImg: function(imgUrl) {
              if (imgUrl) {
                return "url('" + imgUrl + "') repeat";
              }
              return 'initial';
            }
          }
        },

        files: [{
          expand: true,
          cwd: 'src/html/',
          src: ['**/*.html', '!**/_*.html'],
          dest: 'dist/'
        }]
      }
    },

    clean: {
      prebuild: {
        src: ['dist/**/*.less.css', '*.html']
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },

      dist: {
        files: {
          'dist/css/main.min.less.css': 'dist/css/main.less.css',
          'dist/css/print.min.less.css': 'dist/css/print.less.css'
        }
      }
    },

    open: {
      dev: {
        path: process.cwd() + '/dist/index.html'
      }
    },

    copy: {
      all: {
        files: [
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/img/'},
          {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'dist/fonts/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('setDev', 'Sets if we are doing development', function(newVal) {
    grunt.config.dev = newVal;
  });
  grunt.registerTask('process', ['clean:prebuild', 'less', 'autoprefixer',
    'copy', 'cssmin', 'bake'
  ]);

  grunt.registerTask('default', ['setDev:true', 'process', 'open:dev', 'watch']);
  grunt.registerTask('build', ['setDev:false', 'process']);
};
