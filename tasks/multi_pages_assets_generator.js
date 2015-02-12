/*
 * grunt-multi-pages-assets-generator
 * https://github.com/TRIPTYK/grunt-multi-pages-assets-generator
 *
 * Copyright (c) 2015 TRIPTYK Team
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('multi_pages_assets_generator', 'A grunt plugin to assemble css & js for multiple pages', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.log.writeln('File de merde "' + f.dest + '" created.');
    });
  });

};
