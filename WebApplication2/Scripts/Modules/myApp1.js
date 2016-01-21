var app = angular.module("myApp", []);
app.controller('personController', function ($scope) {
    $scope.firstName = "Maheem";
    $scope.lastName = "Hossain";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    
});