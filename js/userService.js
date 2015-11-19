angular.module('spellingB').service('userService', function(fb, $firebaseAuth, $state) {

  var authRef = new Firebase('https://hh-spellingb.firebaseio.com/');
  var auth = $firebaseAuth(authRef);

  this.getUser = function() {
    return auth.$getAuth();
  };

  this.register = function(newUser) {
    return auth.$createUser(newUser);
  };

  this.login = function(user) {
    return auth.$authWithPassword(user);
  };

  this.logout = function(user) {
    $state.go('login');
    return auth.$unauth();
  };

  auth.$onAuth(function(authData) {
		if (authData) {
			console.log("authenticated");
      $state.go('wordlists');
		}
		else {
			console.log("not authenticated");
			if ($state) {
				$state.go('login');
		  }
	  }
  });

});
