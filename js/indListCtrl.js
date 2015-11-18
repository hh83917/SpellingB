angular.module('spellingB').controller('indListCtrl', function($scope, indListRef, spellingWordsRef, $firebaseObject, $firebaseArray) {
    var indList = $firebaseObject(indListRef);
    indList.$bindTo($scope, 'indList');

    $scope.spellingWords = $firebaseArray(spellingWordsRef);

    $scope.showNewWordForm = true;
    $scope.ttsButton = true;
    $scope.editButton = true;
    $scope.addToList = function(word) {
      $scope.spellingWords.$add({
        word: word
      });
      $scope.newWord = "";
    };
});
