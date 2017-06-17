// your code here!

function getWords(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function averageWordLength(words) {
  var totalCharacters = words.join("").length;
  return (totalCharacters / words.length).toFixed(1);
}

function uniqueWordCount(words) {
  var uniqueCount = [];
  for (var i=0; i < words.length; i++) {
    if (uniqueCount.indexOf(words[i]) === -1) {
      uniqueCount.push(words[i]);
    }
  }
  return uniqueCount.length;
}

function displayResults(text){
    var wordCount = getWords(text).length;
    var uniqueCount = uniqueWordCount(text);
    var avgLength = averageWordLength(text);
  
    $('.js-report').find('.js-word-count').text(wordCount);
    $('.js-report').find('.js-unique-word-count').text(uniqueCount);
    $('.js-report').find('.js-average-word-length').text(avgLength);
    
  $('.js-report').removeClass('hidden');
}

function analyzeText() {
  $('.js-form').submit(function(event) {
    event.preventDefault();
  var text = $(this).find('#user-text').val();
  displayResults(removeReturns(text));
});
}
                       
$(function() {
  analyzeText();
});
