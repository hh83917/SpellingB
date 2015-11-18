angular.module('spellingB').controller('wordListsCtrl', function($scope, wordListsRef, $firebaseArray) {
  $scope.wordlists = $firebaseArray(wordListsRef);

  $scope.createList = function(listCreator, title) {
    $scope.wordlists.$add({
      listCreator: listCreator,
      title: title
    });
  };
});
