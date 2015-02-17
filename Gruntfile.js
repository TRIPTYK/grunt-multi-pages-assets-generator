/*
 * grunt-multi-pages-assets-generator
 * https://github.com/TRIPTYK/grunt-multi-pages-assets-generator
 *
 * Copyright (c) 2015 TRIPTYK Team
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    multi_pages_assets_generator: {
      options: {
        jsFolder: 'tmp/js',
        cssFolder: 'tmp/css',
        configJSON: 'config.json'
      },
      files: {
        src: 'tmp',
        dest: 'static'
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'multi_pages_assets_generator', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['multi_pages_assets_generator']);

};
