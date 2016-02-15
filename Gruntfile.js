/*
 * grunt-typings
 * https://github.com/sebastianhaas/grunt-typings
 *
 * Copyright (c) 2016 Sebastian Haas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      all: ['tmp', 'typings']
    },

    // Configuration to be run (and then tested).
    typings: {
      default: {
        options: {
        }
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'typings']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
