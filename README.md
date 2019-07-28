# ngraminator

A really small ngram generator for Node.js and the browser.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]

## Initiation

### Node.js
```javascript
ngraminator = require('ngraminator')
// ngraminator(wordArray, ngramLenghtArray) available
```

### Script tag
```HTML
<script src="ngraminator.js"></script>

<script>
// ngraminator(wordArray, ngramLenghtArray)
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
