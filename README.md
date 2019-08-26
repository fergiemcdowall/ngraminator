# ngraminator

A really small ngram generator for Node.js and the browser. Check out the [interactive demo](https://fergiemcdowall.github.io/ngraminator/demo/).

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

<img width="812" alt="Screenshot 2019-08-26 at 13 45 07" src="https://user-images.githubusercontent.com/236656/63688481-d5df0580-c807-11e9-8bf6-67dac790d761.png">

## Initiation

### Node.js
```JavaScript
ngraminator = require('ngraminator')
// ngraminator(wordArray, ngramLenghtArray) available
```

### Script tag
```html
<script src="ngraminator.js"></script>

<script>
// ngraminator(wordArray, ngramLenghtArray) available
</script>
```

## Usage

```javascript
const str = "mary had a little lamb it's fleece"

// get ngrams of length 3
ngraminator(str.split(' '), [3])
// [
//   ['mary', 'had', 'a'],
//   ['had', 'a', 'little'],
//   ['a', 'little', 'lamb'],
//   ['little', 'lamb', 'it\'s'],
//   ['lamb', 'it\'s', 'fleece']
// ]

// get ngrams of lengths 1 and 2
ngraminator(str.split(' '), [1, 2])
// [
//   [ 'mary' ],
//   [ 'had' ],
//   [ 'a' ],
//   [ 'little' ],
//   [ 'lamb' ],
//   [ 'it\'s' ],
//   [ 'fleece' ],
//   [ 'mary', 'had' ],
//   [ 'had', 'a' ],
//   [ 'a', 'little' ],
//   [ 'little', 'lamb' ],
//   [ 'lamb', 'it\'s' ],
//   [ 'it\'s', 'fleece' ]
// ]

// get ngrams of lengths 1, 2, and 5
ngraminator(str.split(' '), [1, 2, 5])
// [
//   [ 'a' ],
//   [ 'a', 'little' ],
//   [ 'a', 'little', 'lamb', 'it\'s', 'fleece' ],
//   [ 'fleece' ],
//   [ 'had' ],
//   [ 'had', 'a' ],
//   [ 'had', 'a', 'little', 'lamb', 'it\'s' ],
//   [ 'it\'s' ],
//   [ 'it\'s', 'fleece' ],
//   [ 'lamb' ],
//   [ 'lamb', 'it\'s' ],
//   [ 'little' ],
//   [ 'little', 'lamb' ],
//   [ 'mary' ],
//   [ 'mary', 'had' ],
//   [ 'mary', 'had', 'a', 'little', 'lamb' ]
// ]
//

// get ngrams of lengths 1, 2, and 5 stringified
ngraminator(str.split(' '), [1, 2, 5]).map(item => item.join(' '))
// [
//   "a",
//   "a little",
//   "a little lamb it's fleece",
//   "fleece",
//   "had",
//   "had a",
//   "had a little lamb it's",
//   "it's",
//   "it's fleece",
//   "lamb",
//   "lamb it's",
//   "little",
//   "little lamb",
//   "mary",
//   "mary had",
//   "mary had a little lamb"
// ]
//

```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/ngraminator
[npm-version-image]: http://img.shields.io/npm/v/ngraminator.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/ngraminator.svg?style=flat
[travis-url]: http://travis-ci.org/fergiemcdowall/ngraminator
[travis-image]: http://img.shields.io/travis/fergiemcdowall/ngraminator.svg?style=flat
