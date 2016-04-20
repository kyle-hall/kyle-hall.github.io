
module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'main.css.map',
          sourceMapFilename: 'public/css/main.css.map'
        },
        src: 'dev/styles/less/main.less',
        dest: 'dev/styles/css/main.css'
      }
    },

    cssmin: {
      build: {
        src: 'dev/styles/css/main.css',
        dest: 'public/css/main.min.css'
      }
    },

    uglify: {
      build: {
        src: 'dev/scripts/app.js',
        dest: 'public/js/app.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify']);

};
