angular.module('spellingB').controller('loginCtrl', function($scope, userService, $state) {

  $scope.login = function() {
    userService.login($scope.user).then(function() {
      $state.go('wordlists');
    }).catch(function(err) {
      console.log(err);
      $scope.error = err.toString();
    });
  };

});
