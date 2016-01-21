var app = angular.module('myDirectiveApp', []);
app.directive('myFirstDirective', function() {
    return {        
        template: "<h2>This is a custom made directive !!!<h2>"     
    };
});