angular.module('spellingB').directive('editWordListDirective', function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/editWordListDirective.html",
    controller: function($scope, $firebaseObject, wordListService, fb) {
      $scope.editListButton = true;
      $scope.acceptEditButton = false;
      $scope.deleteButton = false;
      $scope.cancelButton = false;
      $scope.editListName = false;
      $scope.editListCreator = false;

      $scope.editListItem = function() {
        $scope.wordListDisplay = false;
        $scope.editListButton = false;
        $scope.editListName = true;
        $scope.editListCreator = true;
        $scope.acceptEditButton = true;
        $scope.deleteButton = true;
        $scope.cancelButton = true;
      };

      $scope.acceptEdit = function(listId) {
        var selectedListId = wordListService.getSelectedList();
        var listObj = $firebaseObject(new Firebase(fb.url + "/wordlists/" + listId.$id));
        listObj.$loaded().then(function(response) {
          listObj.title = $scope.wordlist.title;
          listObj.listCreator = $scope.wordlist.listCreator;
          listObj.$save().then(function(res) {
            console.log(res);
          });
        }, function(error) {
          console.log(error);
        });
        $scope.cancelEdit();
      };

      $scope.deleteList = function(listId) {
        var selectedListId = wordListService.getSelectedList();
        var listObj = $firebaseObject(new Firebase(fb.url + "/wordlists/" + listId.$id));
        if (confirm("Are you sure you like to remove this list?") === true) {
          listObj.$remove();
        }
        $scope.cancelEdit();
      };

      var defaultTitle = $scope.wordlist.title.toString();
      var defaultCreator = $scope.wordlist.listCreator.toString();
      $scope.cancelEdit = function() {
        $scope.wordlist.title = defaultTitle;
        $scope.wordlist.listCreator = defaultCreator;
        $scope.wordListDisplay = true;
        $scope.editListButton = true;
        $scope.acceptEditButton = false;
        $scope.deleteButton = false;
        $scope.cancelButton = false;
        $scope.editListName = false;
        $scope.editListCreator = false;
      };
    }
  };
});
