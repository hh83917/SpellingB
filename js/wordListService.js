angular.module('spellingB').service('wordListService', function(fb) {

  this.getWordLists = function() {
    return new Firebase(fb.url + "/wordlists");
  };

  var selectedWordList;

  this.getList = function(wordlistId) {
    selectedWordList = wordlistId;
    return new Firebase(fb.url + "/wordlists/" + wordlistId);
  };

  this.getSelectedWord = function() {
      return selectedWordList;
  };

  this.getSpellingWords = function(wordlistId) {
    return new Firebase(fb.url + "/wordlists/" + wordlistId + "/spellingWords");
  };
});
