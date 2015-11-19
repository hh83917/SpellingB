angular.module('spellingB').directive('editWordListDirective', function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/editWordListDirective.html",
    controller: function($scope, $firebaseObject, wordListService, fb) {
      $scope.editListButton = true;
      $scope.acceptEditButton = false;
      $scope.deleteButton = false;
      $scope.cancelButton = false;

      $scope.editListItem = function() {
        $scope.editListButton = false;
        $scope.acceptEditButton = true;
        $scope.deleteButton = true;
        $scope.cancelButton = true;
      };

      $scope.cancelEdit = function() {
        $scope.editListButton = true;
        $scope.acceptEditButton = false;
        $scope.deleteButton = false;
        $scope.cancelButton = false;
      };
    }
  };
});
