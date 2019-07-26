// Populating div with only meaningful words
const populateNgrams = function(result) {
  console.log('Boom')
  console.log(result)
  const node = document.createElement('span')
  node.innerHTML = result
  emptyElement('nGraminated')
  document.getElementById('nGraminated').appendChild(node)
}

// Listen to key up and initiate n-gramming
document.getElementById("text").onkeyup = function() {
  // const oldString = document.getElementById("text").value.split(' ')
  // const newString = sw.removeStopwords(oldString)
  // console.log('oldString: ' + oldString)
  // console.log('newString: ' + newString)
  populateNgrams(newString.join(' '))
}

// Empty HTML element
const emptyElement = function (element) {
    document.getElementById(element).innerHTML = ''
}