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
        tasks: ['less', 'autoprefixer', 'cssmin', 'bake']
      },
      bake: {
        files: ['src/html/**/*'],
        tasks: 'bake'
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
            var files = grunt.file.readJSON('src/html/contents.json');
            var content = {};
            for (var i = 0; i < files.length; i++) {
              content[files[i]] = grunt.file.readJSON('src/html/contents/' + files[i] + '.json');
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
              var colorSettings = grunt.file.readJSON('src/html/contents/color_palette.json'),
                selectedColor = colorSettings.colorOptions[str] || 'initial';
              return selectedColor;
            },

            assignBgImg: function(imgUrl) {
              if (imgUrl) {
                return "url('" + imgUrl + "') repeat";
              }
              return 'initial';
            },
            assignFontSize: function(fontSize) {
              if (fontSize) {
                return fontSize + 'rem';
              }
              return 'initial';
            }
          }
        },

        files: [{
          expand: true,
          cwd: 'src/html/',
          src: ['**/*.html', '!**/_*.html'],
          dest: ''
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
        path: process.cwd() + '/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('setDev', 'Sets if we are doing development', function(newVal) {
    grunt.config.dev = newVal;
  });
  grunt.registerTask('process', ['clean:prebuild', 'less', 'autoprefixer',
    'cssmin', 'bake'
  ]);

  grunt.registerTask('default', ['setDev:true', 'process', 'open:dev', 'watch']);
  grunt.registerTask('build', ['setDev:false', 'process']);
};
