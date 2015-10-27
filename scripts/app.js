var spartanHackers = angular.module('skill-up-ng-app', ['ngRoute']);

spartanHackers.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when("/about", {templateUrl: "/static/about.html"})
        .when("/contact", {templateUrl: "/static/contact.html"})
        .when("/home", {templateUrl: "/home/home.html"})
        .when("/lhd", {templateUrl: "/static/lhd.html"})
        .when("/login", {templateUrl: "/login/login.html"})

        .when("/hackathons", {templateUrl: "/hackathons/hackathons.html"}).otherwise({redirectTo: "/login"})
        .when("/workshops", {templateUrl: "/workshops/workshops.html"}).otherwise({redirectTo: "/login"})
        ;
    }
]);

spartanHackers.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var main = this;

}]);


/*Toggle sidebar menu script
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});*/