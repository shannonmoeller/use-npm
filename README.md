# please-use-npm

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Request that users use `npm` instead of `yarn`.

If run from `yarn` instead of `npm`, the process will exit with error code `1` and print an error message.

## Install

`npm install --save-dev please-use-npm`

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "npm i -D --ignore-scripts please-use-npm && use-npm"
  }
}
```

Or if you have [`npx`](https://www.npmjs.com/package/npx):
```json
{
  "scripts": {
     "preinstall": "npx please-use-npm"
  }
}
```

You may provide a custom message as an argument:
```
{
  "scripts": {
     "preinstall": "npx please-use-npm 'Please use npm!'"
  }
}
```

You may disable please-use-npm by setting the `DISABLE_USE_NPM` environment variable to `true`:
```
{
  "scripts": {
     "preinstall": "DISABLE_USE_NPM=true npx please-use-npm"
  }
}
```

### API

```js
var useNpm = require('please-use-npm');

useNpm();

// or a custom message
useNpm('You should switch back to npm. Version >=5 is really great.');
```

### Acknowledgements

Forked from [use-yarn](http://npm.im/use-yarn).

----

MIT

[downloads-img]: http://img.shields.io/npm/dm/please-use-npm.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/please-use-npm.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/please-use-npm
