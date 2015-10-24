var spartanHackers = angular.module('skill-up-ng-app', ['ngRoute']);

spartanHackers.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "/login/login.html"
        }).when("/admin", {
                templateUrl: "/admin/admin.html"
            }).otherwise({
                redirectTo: "/login"
            });
    }
]);

spartanHackers.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var main = this;

}]);