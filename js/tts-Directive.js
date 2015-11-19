angular.module('spellingB').directive('ttsDirective', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      // console.log($scope.spellingWord);
      $scope.speak = function(word, speed) {
        var u = new SpeechSynthesisUtterance();
         u.text = word;
         u.lang = 'en-US';
         u.rate = speed;
         u.onend = function(event) { console.log('Speech complete'); };
         speechSynthesis.speak(u);
      };
    },
    templateUrl: 'templates/tts-Directive.html'
  };
});
