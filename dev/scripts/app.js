
var myApp = angular.module("myApp", []);

myApp.controller("HomeController", HomeController);

HomeController.$inject = ["$scope"];

function HomeController($scope) {
  $scope.welcome = {
    message: "Welcome to my website"
  };
}
