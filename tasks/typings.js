/*
 * grunt-typings
 * https://github.com/sebastianhaas/grunt-typings
 *
 * Copyright (c) 2016 Sebastian Haas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('typings', 'A Grunt plugin for typings', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      cwd: process.cwd()
    });

    var typings = require('typings-core');
    
    var done = this.async();
    
    var promise = typings.install(options);
    promise.then(function (tree) {
      done(true);
    }, function (err) {
      grunt.log.fail('error!');
      grunt.log.fail(err.stack);
      done(false);
    });
  });

};
