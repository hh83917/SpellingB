angular.module('spellingB').directive('editWordDirective', function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/editWordDirective.html",
    controller: function($scope, $firebaseObject, wordListService, fb) {
      // console.log($scope.spellingWord.word);
      // console.log(wordListService.getSelectedList());
      $scope.acceptButton = false;
      $scope.deleteButton = false;
      $scope.editbutton = true;
      $scope.edutInput = false;
      $scope.listedWords = true;
      $scope.cancelButton = false;

      $scope.editWord = function() {
        $scope.ttsButton = false;
        $scope.editButton = false;
        $scope.acceptButton = true;
        $scope.deleteButton = true;
        $scope.editInput = true;
        $scope.listedWords = false;
        $scope.cancelButton = true;
      };

      $scope.acceptEdit = function(wordId) {
        var selectedListId = wordListService.getSelectedList();
        console.log(wordId.$id);
        var wordObj = $firebaseObject(new Firebase(fb.url + "/wordlists/" + selectedListId + "/spellingWords/" + wordId.$id));

        wordObj.$loaded().then(function(response) {
          wordObj.word = $scope.spellingWord.word;
          wordObj.$save().then(function(res) {
            console.log(res);
          });
        }, function(error) {
          console.log(error);
        });
        $scope.cancelEdit();
      };

      $scope.deleteWord = function(wordId) {
        var selectedListId = wordListService.getSelectedList();
        var wordObj = $firebaseObject(new Firebase(fb.url + "/wordlists/" + selectedListId + "/spellingWords/" + wordId.$id));

        wordObj.$loaded().then(function(response) {
          wordObj.word = $scope.spellingWord.word;
          if (confirm("Are you sure you like to remove this word") === true) {
            wordObj.$remove();
          }
        });
        $scope.cancelEdit();
      };

      var defaultWord = $scope.spellingWord.word.toString();
      $scope.cancelEdit = function() {
        $scope.spellingWord.word = defaultWord;
        $scope.editButton = true;
        $scope.acceptButton = false;
        $scope.deleteButton = false;
        $scope.ttsButton = true;
        $scope.editInput = false;
        $scope.listedWords = true;
        $scope.cancelButton = false;
      };
    }
  };
});
