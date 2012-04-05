/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! comment.aculo.us - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* https://github.com/cowboy/comment.aculo.us\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        '"Cowboy" Ben Alman; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    concat: {
      user: {
        src: ['<banner>', '<file_strip_banner:src/commentaculous.user.js>'],
        dest: 'dist/commentaculous.user.js'
      }
    },
    min: {
      main: {
        src: ['<banner>', '<file_strip_banner:src/commentaculous.js>'],
        dest: 'dist/commentaculous.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');

};
