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
  console.log(text)
  console.dir(integerArray)
  var ngrams = []
  var ngrams = ngraminator(text, [3])
  console.log('N-grams: ' + ngrams)
  ngrams = JSON.stringify(ngrams, 2, ' ')
  populateNgrams(ngrams)
}

// Populating div ngrams
// Still need some work...
const populateNgrams = function(result) {
  console.log('Boom')
  console.dir(result)
  const node = document.createElement('pre')
  node.innerHTML = result
  emptyElement('nGraminated')
  document.getElementById('nGraminated').appendChild(node)
}

// Empty HTML element
const emptyElement = function (element) {
    document.getElementById(element).innerHTML = ''
}