# Not empty

### Small lib

[![NPM](https://nodei.co/npm-dl/not-empty.png?months=1)](https://nodei.co/npm/not-empty/)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Install

```
npm i -S not-empty
```

## Usage

```
import notEmpty from 'not-empty';

notEmpty(0, 'string', true, [1, 2, 4]); // true
notEmpty(0, '', true, [1, 2, 4]); // false
notEmpty(0, 'string', true, [], {}); // false
notEmpty(0, 'string', true, [23, 45], { test: true }); // true
```

[downloads-image]: https://img.shields.io/npm/dm/not-empty.svg
[npm-url]: https://www.npmjs.com/package/not-empty
[npm-image]: https://img.shields.io/npm/v/not-empty.svg
