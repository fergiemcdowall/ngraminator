const test = require('tape')
const ngraminator = require('../')
const str = "mary had a little lamb it's fleece"

test('basic ngrams (length 3)', function (t) {
  t.plan(1)
  var expectedResult = [
    ['a', 'little', 'lamb'],
    ['had', 'a', 'little'],
    ['lamb', 'it\'s', 'fleece'],
    ['little', 'lamb', 'it\'s'],
    ['mary', 'had', 'a']
  ]
  var actualResult = ngraminator(str.split(' '), [3])
  t.looseEqual(actualResult, expectedResult)
})

test('basic ngrams (length 6)', function (t) {
  t.plan(1)
  var expectedResult = [
    ['had', 'a', 'little', 'lamb', 'it\'s', 'fleece'],
    ['mary', 'had', 'a', 'little', 'lamb', 'it\'s']
  ]
  var actualResult = ngraminator(str.split(' '), [6])
  t.looseEqual(actualResult, expectedResult)
})

test('basic ngrams (length 1)', function (t) {
  t.plan(1)
  var expectedResult = [
    ['a'],
    ['fleece'],
    ['had'],
    ['it\'s'],
    ['lamb'],
    ['little'],
    ['mary']
  ]
  var actualResult = ngraminator(str.split(' '), [1])
  t.looseEqual(actualResult, expectedResult)
})

test('ngrams of 2 seperate lengths (length [1, 2])', function (t) {
  t.plan(1)
  var expectedResult = [
    ['a'],
    ['a', 'little'],
    ['fleece'],
    ['had'],
    ['had', 'a'],
    ['it\'s'],
    ['it\'s', 'fleece'],
    ['lamb'],
    ['lamb', 'it\'s'],
    ['little'],
    ['little', 'lamb'],
    ['mary'],
    ['mary', 'had']
  ]
  var actualResult = ngraminator(str.split(' '), [1, 2])
  t.looseEqual(actualResult, expectedResult)
})

test('ngrams of 3 seperate lengths (length [2, 5, 1])', function (t) {
  t.plan(1)
  var expectedResult = [
    ['a'],
    ['a', 'little'],
    ['a', 'little', 'lamb', 'it\'s', 'fleece'],
    ['fleece'],
    ['had'],
    ['had', 'a'],
    ['had', 'a', 'little', 'lamb', 'it\'s'],
    ['it\'s'],
    ['it\'s', 'fleece'],
    ['lamb'],
    ['lamb', 'it\'s'],
    ['little'],
    ['little', 'lamb'],
    ['mary'],
    ['mary', 'had'],
    ['mary', 'had', 'a', 'little', 'lamb']
  ]
  var actualResult = ngraminator(str.split(' '), [2, 5, 1])
  t.looseEqual(actualResult, expectedResult)
})

test('ngrams of 3 seperate lengths (length [2, 5, 1]) with pretty result', function (t) {
  t.plan(1)
  var expectedResult = [
    'a',
    'a little',
    "a little lamb it's fleece",
    'fleece',
    'had',
    'had a',
    "had a little lamb it's",
    "it's",
    "it's fleece",
    'lamb',
    "lamb it's",
    'little',
    'little lamb',
    'mary',
    'mary had',
    'mary had a little lamb'
  ]
  var actualResult = ngraminator(str.split(' '), [2, 5, 1]).map(item => item.join(' '))
  t.looseEqual(actualResult, expectedResult)
})
