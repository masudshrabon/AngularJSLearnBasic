var filterApp = angular.module('filterApp', []); 
filterApp.controller('nameCtrl', function ($scope) {
    $scope.controllerName = "Another Controller";
    $scope.names = [
        { name: 'Shrabon', country: 'Bangladesh' },
        { name: 'Mark', country: 'USA' },
        { name: 'Ponting', country: 'Australia' },
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});