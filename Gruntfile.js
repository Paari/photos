module.exports = function(grunt) {

  // Project configuration

    grunt.initConfig({

      // resize using sharp
      sharp: {
        resizeFiles: {
          files: [{
            expand: true,
            cwd: 'public/images/',
            src: ['**'],
            dest: 'public/thumbnail'
          }],
          options: {
            tasks: [
              {resize: 400}
            ]
          }
        }
      },

      // create a json file with all the files in the thumbnail folder
      tree: {
        default: {
          options: {
            type: Array
          },
          files: [{
            src: ['public/images/'],
            dest: 'databases/list.json'
          }]

        }
      }

  });

  // grunt.loadNpmTasks('grunt-imagemagick');
  grunt.loadNpmTasks('grunt-sharp');
  grunt.loadNpmTasks('grunt-tree');

  grunt.registerTask('default', ['sharp']);
  grunt.registerTask('list', ['tree']);

  }
