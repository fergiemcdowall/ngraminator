// Listen to key up on text and initiate ngraminator
document.getElementById("text").onkeyup = function() {
  calculateNgrams()
}

// Listen to key up on integerArray and initiate ngraminator
document.getElementById("integerArray").onkeyup = function() {
  calculateNgrams()
}

// calculate nGrams
const calculateNgrams = function () {
  var text = document.getElementById("text").value.split(' ')
  var integerArray = document.getElementById("integerArray").value.split(',')
  var ngrams = []
  integerArray = stringToInteger(integerArray)
  var ngrams = ngraminator(text, integerArray)
  ngrams = JSON.stringify(ngrams, 2, ' ')
  populateNgrams(ngrams)
}

// convert array of strings to integers
const stringToInteger = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Number(array[i])
  }
  return array
}

// Populating div ngrams
const populateNgrams = function(result) {
  const node = document.createElement('pre')
  node.innerHTML = result
  emptyElement('nGraminated')
  document.getElementById('nGraminated').appendChild(node)
}

// Empty HTML element
const emptyElement = function (element) {
    document.getElementById(element).innerHTML = ''
}