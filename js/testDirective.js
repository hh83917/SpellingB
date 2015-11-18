angular.module('spellingB').directive('testDirective', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/testDirective.html',
    link: function(scope, elem, attrs) {
      var i = 1;
      elem.on("keydown keypress", function(e) {
        // console.log(elem);
        if(e.keyCode === 9) {
          e.preventDefault();
          var nextInput = elem.find("input");
          if(i > nextInput.length - 1) {
            i = 0;
          }
          // console.log(nextInput);
          nextInput[i].focus();
          i++;
        }
      });
    },
    controller: function($scope) {
      $scope.answer = "";
      $scope.showTest = false;
      $scope.showWordList = true;
      $scope.testButton = true;
      $scope.closeTestButton = false;
      $scope.calcScoreButton = false;
      $scope.beginTest = function() {
        $scope.showTest = true;
        $scope.showNewWordForm = false;
        $scope.showWordList = false;
        $scope.testButton = false;
        $scope.calcScoreButton = true;
        $scope.closeTestButton = true;
        $scope.closeTest = function() {
          if (confirm("Would you like to close the test?") === true) {
            $scope.showTest = false;
            $scope.showNewWordForm = true;
            $scope.showWordList = true;
            $scope.testButton = true;
            $scope.calcScoreButton = false;
            $scope.closeTestButton = false;
            $scope.finalScore = false; //show final score
            $scope.enteredAnswer = []; //clear input boxes
          }
        };
      };

      //Individual CheckAnswer:
      // $scope.checkAnswer = function(correctWord, answer) {
      //   console.log(correctWord);
      //   console.log(answer);
      //   if (answer.toLowerCase() === correctWord) {
      //     console.log("correct");
      //     // correctArr.push(answer);
      //   }
      //   else {
      //     console.log("wrong");
      //     // incorrectArr.push(answer);
      //   }
      // };

      $scope.enteredAnswer = [];

      $scope.calcScore = function() {
        var correctArr = [];
        var incorrectArr = [];
        var answerLength = $scope.spellingWords.length;

        for (var i = 0; i < answerLength; i++) {
          if (!$scope.enteredAnswer[i]) {  //prevent error on undefined input boxes
            $scope.enteredAnswer[i] = "";
          }
          // console.log($scope.spellingWords);
          // console.log($scope.enteredAnswer[i].toLowerCase());

          var lowerCasedAnswer = $scope.enteredAnswer[i].toLowerCase();
          var correctAnswer = $scope.correctWords[i].word;

          if (lowerCasedAnswer === correctAnswer) {
            correctArr.push(correctAnswer);
          }
          else if (lowerCasedAnswer !== correctAnswer) {
            incorrectArr.push(lowerCasedAnswer);
          }
          else {
            incorrectArr.push("");
          }
        }
        $scope.finalScore = true; //show final score
        // console.log(correctArr);
        // console.log(incorrectArr);
        $scope.correctWordsNum = correctArr.length;
        $scope.correctWords = correctArr;
        $scope.incorrectWords = incorrectArr;
        $scope.percentScore = Math.floor((correctArr.length * 100) / $scope.spellingWords.length);

        switch (true){
          case ($scope.percentScore === 100):
            $scope.scoreComment = "Wow! A perfect score! Good for you!";
            break;
          case ($scope.percentScore >= 90):
            $scope.scoreComment = "You have done a great job!";
            break;
          case ($scope.percentScore >= 80 && $scope.percentScore < 90):
            $scope.scoreComment = "Just need little bit more practice to reach the top!";
            break;
          case ($scope.percentScore >= 70 && $scope.percentScore < 80):
            $scope.scoreComment = "Not bad, but study a bit harder and you'll be good!";
            break;
          case ($scope.percentScore >= 60 && $scope.percentScore < 70):
            $scope.scoreComment = "Need to study some more to get a better grade!";
            break;
          case ($scope.percentScore >= 50 && $scope.percentScore < 60):
            $scope.scoreComment = "Hey, more studying, less playing!";
            break;
          case ($scope.percentScore >= 40 && $scope.percentScore < 50):
            $scope.scoreComment = "Ouch..., have you even been studying?";
            break;
          case ($scope.percentScore >= 30 && $scope.percentScore < 40):
            $scope.scoreComment = "Geez, open your books and study!";
            break;
          case ($scope.percentScore >= 20 && $scope.percentScore < 30):
            $scope.scoreComment = "Gosh, that is a really bad score!";
            break;
          case ($scope.percentScore >= 10 && $scope.percentScore < 20):
            $scope.scoreComment = "OMG, what kind of score is that!?";
            break;
          case ($scope.percentScore >= 0 && $scope.percentScore < 10):
            $scope.scoreComment = "That's it, you have no future...";
            break;
        }

        // console.log((correctArr.length * 100) / $scope.spellingWords.length);
      };
    }
  };
});
