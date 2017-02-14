(function() {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.dishes = "a, b, c";

    $scope.numDishes = function () {
      return $scope.dishes.split(",").length;
    };

    $scope.checkDishes = function () {
      // console.log($scope.numDishes() < 4);

      if ($scope.numDishes() == 0) {
        $scope.message = "Please enter some data!";
      } else if ($scope.numDishes() < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };


    // console.log($scope.message);


  }
}());
