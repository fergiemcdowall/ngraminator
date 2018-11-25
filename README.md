# ngraminator

A really small ngram generator

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