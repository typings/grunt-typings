# grunt-typings

> A Grunt plugin for typings

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typings --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typings');
```

## The "typings" task

### Overview
In your project's Gruntfile, add a section named `typings` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  typings: {
    install: {}
  }
});
```

### Options
This plugin does not support any options yet. It will just update typings as specified in `typings.json`.
