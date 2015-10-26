spartanHackers.controller("LoginCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    "use strict";

    var login = this;

    login.user = {};

    login.submit = function(){
        $http.post("/login", login.user).then(function(res){
            console.log("logging in! going home");
            $location.url("/home");//replace with angular?
        }, function(){
            alert("login failed");
        });
    }
}]);