// your code here!

function getWords(rawText) {
  return rawText.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(rawText) {
  return rawText.replace(/\r?\n|\r/g, "");
}

function uniqueWordCount(words) {
  var uniqueCount = [];
  for (i=0; i < words.length; i++){
    if (uniqueCount.indexOf(words[i]) === -1) {
      uniqueCount.push(words[i]);
    }
  }
  return uniqueCount.length;
}

function averageWordLength(words) {
  var totalCharacters = words.join("").length;
  return )totalCharacters/words.length).toFixed(1);
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
