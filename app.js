// your code here!

function averageWordLength(tokens) {
  var totalCharacters = tokens.join("").length;
  return (totalCharacters / tokens.length).toFixed(3);
}

function uniqueWordCount(tokens) {
  var uniqueCount = [];
  for (var i=0; i < tokens.length; i++) {
    if (uniqueCount.indexOf(tokens[i]) === -1) {
      uniqueCount.push(tokens[i]);
    }
  }
  return uniqueCount.length;
}

function getWords(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function displayResults(text) {
    var tokens = getWords(text);
    var wordCount = tokens.length;
    var uniqueCount = uniqueWordCount(tokens);
    var avgLength = averageWordLength(tokens);
  
    var finalReport = $('.js-report');
  
    finalReport.find('.js-word-count').text(wordCount);
    finalReport.find('.js-unique-word-count').text(uniqueCount);
    finalReport.find('.js-average-word-length').text(avgLength);
    
    finalReport.removeClass('hidden');
}

function analyzeText() {
  $('.js-form').submit(function(event) {
    event.preventDefault();
    var inputText = $(this).find('#user-text').val();
    displayResults(removeReturns(inputText));
  });
}
                       
$(function() {
  analyzeText();
});
