// your code here!

function getWords(rawText) {
  return rawText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function wordCount(rawText) {
  var count = getWords(rawText);
  return count.length;
}

function uniqueWordCount(rawText) {
  var words = getWords(rawText);
  var uniqueCount = [];
  for (i=0; i < words.length; i++){
    if (!(words[i] in uniqueCount)) {
      uniqueCount.push(words[i])
    }
  }
  return uniqueCount.length;
}


function averageWordLength(rawText) {
  var totalCharacters = 0;
  var words = getWords(rawText);
  for (i=0; i < words.length; i++) {
    totalCharacters += words[i].length;
  }
  return totalCharacters/words.length;
}
