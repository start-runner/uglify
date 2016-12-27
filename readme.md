# start-uglify

[![npm](https://img.shields.io/npm/v/start-uglify.svg?style=flat-square)](https://www.npmjs.com/package/start-uglify)
[![linux build](https://img.shields.io/travis/start-runner/uglify/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/uglify)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/uglify/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/uglify)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/uglify/master.svg?style=flat-square)](https://codecov.io/github/start-runner/uglify)
[![deps](https://img.shields.io/gemnasium/start-runner/uglify.svg?style=flat-square)](https://gemnasium.com/start-runner/uglify)

[UglifyJS](http://lisperator.net/uglifyjs/) task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-uglify
# or
yarn add --dev start-uglify
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import rename from 'start-rename';
import uglify from 'start-uglify';
import write from 'start-write';

export const build = () => start(reporter())(
  files('build/'),
  clean(),
  files('lib/**/*.js'),
  read(),
  babel({ sourceMaps: true }),
  write('build/'),
  rename(file => file.replace(/\.js$/, '.min.js')),
  uglify({ outSourceMap: true }),
  write('build/')
);
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`uglify(options)`

* `options` – [UglifyJS options](https://github.com/mishoo/UglifyJS2#the-simple-way)
