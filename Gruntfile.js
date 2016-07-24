module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dist: {
        src: ['src/less/build.less'],
        dest: 'dist/css/main.less.css'
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'dist/css/main.less.css': 'dist/css/main.less.css'
        }
      }
    },

    watch: {
      less: {
        files: ['src/**/*.less'],
        tasks: ['less', 'autoprefixer']
      },
      all: {
        files: ["Gruntfile.js"],
        tasks: []
      },
      bake: {
        files: ["src/html/**/*"],
        tasks: "bake"
      },
      options: {
        livereload: {
          host: 'localhost',
          port: 9000,
        }
      }
    },

    bake: {
      dist: {
        options: {
          basePath: "src/html/",
          content: function() {
            var files = grunt.file.readJSON('src/html/contents.json');
            var content = {};
            for (var i = 0; i < files.length; i++) {
              content[files[i]] = grunt.file.readJSON('src/html/contents/' + files[i] + '.json');
            }
            return content;
          },
          transforms: {
            trim: function(str){
              return str.trim();
            },
            clearWhitespaces: function(str){
              return str.replace(/\s+/g, "");
            }
          }
        },
        files: [{
          expand: true,
          cwd: "src/html/",
          src: ["**/*.html", "!**/_*.html"],
          dest: ""
        }]
      }
    },

    clean: {
      prebuild: {
        src: ["dist/**/*.less.css", "!dist/**/*.min.css", "*.html"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['clean:prebuild', 'less', 'autoprefixer', 'bake', 'watch']);

};
