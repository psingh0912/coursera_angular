(function() {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.numDishes = function () {
      // $scope.dishes will be undefined if empty
      if ($scope.dishes == undefined){ return 0}
      else {
        return $scope.dishes.split(',').filter(function(e){return e}).length;
        // Empty elements in the array (, ,) or ("","") will not be counted
      }
    };

    $scope.checkDishes = function () {

      if ($scope.numDishes() == 0) {
        $scope.message = "Please enter some data!";
        $scope.fontcolor = "#f00"
      } else if ($scope.numDishes() < 4) {
        $scope.message = "Enjoy!";
        $scope.fontcolor = "#0f0"
      } else {
        $scope.message = "Too much!";
        $scope.fontcolor = "#0f0"
      }
    };

  }
}());
