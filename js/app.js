angular.module('spellingB', ['firebase', 'ui.router'])

.constant('fb', {url: 'https://hh-spellingb.firebaseio.com/'})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login' ,{
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
    .state('logout', {
      // url: '/login',
      // templateUrl: '/templates/login.html',
      controller: function(userService) {
        userService.logout();
      }
    })
    .state('wordlists', {
      url: '/wordlists',
      templateUrl: 'templates/wordLists.html',
      controller: 'wordListsCtrl',
      resolve: {
        wordListsRef: function(wordListService) {
          return wordListService.getWordLists();
        }
      }
    })
    .state('indlist', {
      url: '/wordlists/:wordlistId',
      templateUrl: 'templates/indList.html',
      controller: 'indListCtrl',
      resolve: {
        indListRef: function(wordListService, $stateParams) {
          return wordListService.getList($stateParams.wordlistId);
        },
        spellingWordsRef: function(wordListService, $stateParams) {
          return wordListService.getSpellingWords($stateParams.wordlistId);
        }
      }
    });

  $urlRouterProvider  //.otherwise('login') does not work on hosted server due to ui-router bug, need to use this workaround.
    .otherwise(function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go("login");
    });
});
