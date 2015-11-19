angular.module('spellingB').controller('registerCtrl', function($scope, userService, $state) {

  $scope.register = function() {
    userService.register($scope.newUser)
    .then(function() {
      return userService.login($scope.newUser);
    })
    .then(function() {
      $state.go('wordlists');
    })
    .catch(function(err) {
      console.log(err);
      $scope.error = err.toString();
    });
  };

});
