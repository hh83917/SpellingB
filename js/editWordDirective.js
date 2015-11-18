angular.module('spellingB').directive('editWordDirective', function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/editWordDirective.html",
    controller: function($scope, $firebaseObject) {
      console.log($scope.spellingWord.word);
      $scope.acceptButton = false;
      $scope.editbutton = true;
      $scope.edutInput = false;
      $scope.listedWords = true;
      $scope.cancelButton = false;
      // $scope.spellingWord.$bindTo($scope, "$scope.spellingWord.word");

      $scope.editWord = function() {
        $scope.ttsButton = false;
        $scope.editButton = false;
        $scope.acceptButton = true;
        $scope.editInput = true;
        $scope.listedWords = false;
        $scope.cancelButton = true;
      };

      $scope.acceptEdit = function(wordId) {
        $scope.editButton = true;
        $scope.acceptButton = false;
        $scope.ttsButton = true;
        $scope.editInput = false;
        $scope.listedWords = true;
        $scope.cancelButton = false;
        
      };

      // $scope.addToList = function(word) {
      //   $scope.spellingWords.$add({
      //     word: word
      //   });
      //   $scope.newWord = "";
      // };

      $scope.cancelEdit = function() {
        $scope.editButton = true;
        $scope.acceptButton = false;
        $scope.ttsButton = true;
        $scope.editInput = false;
        $scope.listedWords = true;
        $scope.cancelButton = false;
      };
    }
  };
});
