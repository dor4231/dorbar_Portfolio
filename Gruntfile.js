module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      responsive_images: {
          dev: {
            options: {
                engine: 'gm',
                newFilesOnly: true,
                sizes: [
                {
                    width: 500,
                    rename: false,
                    suffix: "-small",
                    quality: 60
                },
                {
                    width: 800,
                    rename: false,
                    suffix: "-medium",
                    quality: 60
                },
                {
                    width: 1600,
                    rename: false,
                    suffix: "-large",
                    quality: 60
                }
              ]
            },
              files: [{
                  expand: true,
                  src: ['**.{jpg,gif,png}'],
                  cwd: 'assets/images_src/',
                  dest: 'assets/images/'
              }]
          }
      },
      clean: {
          dev: {
              src: ['assets/images']
          }
      },
      mkdir: {
          dev: {
              options: {
                  create: ['assets/images']
              }
          }
      },
      copy: {
          options: {},
          files: {
              'assets/images/': ['assets/icons/*']
          }
      }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['mkdir', 'responsive_images', 'copy']);
};
