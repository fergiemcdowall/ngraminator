// Populating div with only meaningful words
const populateNgrams = function(result) {
  console.log('Boom')
  console.dir(result)
  const node = document.createElement('code')
  node.innerHTML = result
  emptyElement('nGraminated')
  document.getElementById('nGraminated').appendChild(node)
}

// Listen to key up on text and initiate a headline parser
document.getElementById("text").onkeyup = function() {
  calculateNgrams()
}

// Listen to key up on integerArray and initiate a headline parser
document.getElementById("integerArray").onkeyup = function() {
  calculateNgrams()
}

// calculate nGrams
const calculateNgrams = function () {
  var text = document.getElementById("text").value.split(' ')
  var integerArray = document.getElementById("integerArray").value.split(',')
  console.log(text)
  console.log(integerArray)
  var ngrams = []
  var ngrams = ngraminator(text, integerArray)
  console.log('N-grams: ' + ngrams)
  populateNgrams(ngrams)
}


// Empty HTML element
const emptyElement = function (element) {
    document.getElementById(element).innerHTML = ''
}