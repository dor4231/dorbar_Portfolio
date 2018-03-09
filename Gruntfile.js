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
                    width: 400,
                    suffix: "small",
                    quality: 60
                },
                {
                    width: 800,
                    suffix: "medium",
                    quality: 60
                },
                {
                    width: 1600,
                    suffix: "large",
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
          dev: {
              files: [{
                  expend: true,
                  cwd: 'assets/images_src/fixed/',
                  src: ['*'],
                  dest: 'assets/images/',
                  flatten: true
              }]
          }
      }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['mkdir', 'responsive_images', 'copy']);
};
