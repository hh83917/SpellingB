angular.module('spellingB').controller('wordListsCtrl', function($scope, wordListsRef, $firebaseArray) {
  $scope.wordlists = $firebaseArray(wordListsRef);

  $scope.wordListDisplay = true;

  $scope.createList = function(listCreator, title) {
    $scope.wordlists.$add({
      listCreator: listCreator,
      title: title
    });
    $scope.newListTitle = "";
    $scope.listCreator = "";
  };
});
