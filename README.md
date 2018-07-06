# ban-yarn

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Request that users use `npm` instead of `yarn`.

If run from `yarn` instead of `npm`, the process will exit with error code `1` and print an [error message](https://raw.githubusercontent.com/shannonmoeller/ban-yarn/master/message.txt).

## Install

`npm install --save-dev ban-yarn`

## Use

### CLI

For example, in your `package.json`:
```json
{
  "scripts": {
     "preinstall": "ban-yarn"
  }
}
```

Or if you have [`npx`][npx]:
```json
{
  "scripts": {
     "preinstall": "npx ban-yarn"
  }
}
```

You may provide a custom message via the `-m` flag:
```
{
  "scripts": {
     "preinstall": "npx ban-yarn -m 'Please use npm!'"
  }
}
```

Or, you may also provide a custom message read from a file via the `-f` flag:
```
{
  "scripts": {
     "preinstall": "npx ban-yarn -f path/to/customMessage.txt"
  }
}
```

You may disable ban-yarn by setting the `DISABLE_USE_NPM` environment variable to `true`:
```
{
  "scripts": {
     "preinstall": "DISABLE_USE_NPM=true npx ban-yarn"
  }
}
```

### API

```js
var useNpm = require('ban-yarn')

useNpm()

// or a custom message
useNpm('You should switch back to npm. Version >=5 is really great.');
```

### Acknowledgements

Forked from [use-yarn](http://npm.im/use-yarn).

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[npx]:           https://www.npmjs.com/package/npx
[downloads-img]: http://img.shields.io/npm/dm/ban-yarn.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/ban-yarn.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/ban-yarn
