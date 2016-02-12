# start-uglify

[![npm](https://img.shields.io/npm/v/start-uglify.svg?style=flat-square)](https://www.npmjs.com/package/start-uglify)
[![travis](http://img.shields.io/travis/start-runner/uglify.svg?style=flat-square)](https://travis-ci.org/start-runner/uglify)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/uglify.svg?style=flat-square)](https://codecov.io/github/start-runner/uglify)
[![deps](https://img.shields.io/gemnasium/start-runner/uglify.svg?style=flat-square)](https://gemnasium.com/start-runner/uglify)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[UglifyJS](http://lisperator.net/uglifyjs/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-uglify
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import watch from 'start-watch';
import clean from 'start-clean';
import read from 'start-read';
import babel from 'start-babel';
import rename from 'start-rename';
import uglify from 'start-uglify';
import write from 'start-write';

export function build() {
    return start(reporter())(
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
}
```

Task is rely on `[{ path, data, map }]` input and provide the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`uglify(options)`

* `options` – [UglifyJS options](https://github.com/mishoo/UglifyJS2#the-simple-way), `{ compress: true, mangle: true }` by default
