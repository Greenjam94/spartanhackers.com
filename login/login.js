spartanHackers.controller("LoginCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var login = this;

    login.user = {};

    login.submit = function(){
        $http.post("/login", login.user).then(function(res){
            console.log("logging in! going home");
            window.location.href = "#/home";
        }, function(){
            alert("login failed");
        });
    }
}]);