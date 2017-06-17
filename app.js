// your code here!

function getWords(rawText) {
  return rawText.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(rawText) {
  return rawText.replace(/\r?\n|\r/g, "");
}

function uniqueWordCount(rawText) {
  var words = getWords(rawText);
  var uniqueCount = [];
  for (i=0; i < words.length; i++){
    if (!(words[i] in uniqueCount)) {
      uniqueCount.push(words[i]);
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

function displayResults(rawText){
    var wordCount = getWords(rawText).length;
    var uniqueCount = uniqueWordCount;
    var avgLength = averageWordLength;
    $('.js-word-count').text(wordCount);
    $('.js-unique-word-count').text(uniqueCount);
    $('.js-average-word-length').text(avgLength);
    $('.js-report').removeClass('hidden');
}

function analyzeText(){
  $('.js-form').submit(function(event){
    event.preventDefault();
  $(".js-word-count").empty();
  $(".js-unique-word-count").empty();
  $(".js-average-word-length").empty();
  var text = $(this).find(
      'input[name="user-text"]').val();
  displayResults(text);
});
}
                       
$(function() {
  analyzeText();
});
