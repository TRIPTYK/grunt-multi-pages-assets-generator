# grunt-multi-pages-assets-generator

> A grunt plugin to assemble css & js for multiple pages

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-multi-pages-assets-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-multi-pages-assets-generator');
```

## The "multi_pages_assets_generator" task

### Overview
In your project's Gruntfile, add a section named `multi_pages_assets_generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  multi_pages_assets_generator: {
    options: {
      jsFolder: 'tmp/js',
      cssFolder: 'tmp/css',
      configJSON: 'config.json',
      cssCompression:''
    },
    files: {
      src: 'tmp',
      dest: 'static'
    }
  }
});
```

### Options

#### options.jsFolder
Type: `String`
Default value: `''`

This folder should contain your prepared Javascript for combination

#### options.cssFolder
Type: `String`
Default value: `''`

This folder should contain your prepared CSS for combination

#### options.configJSON
Type: `String`
Default value: `''`

This file should exist and have the right values see example lower
Config example

{
  "pages": [{

    "idName": "home",
    "page": "tmp/index.html",
    "css": [
      "index.css",
      "modules/menu.css"
    ],
    "js": [
      "index.js",
      "modules/menu.js"
    ]
  }]
}


### Usage Examples

#### Default Options

```js
grunt.initConfig({
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
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
