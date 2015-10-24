spartanHackers.controller("HomeCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var home = this;

    home.user = {};

    $http.get("/users/current").then(function(res){
        home.user = res.data;
    }, function(res){
        window.location.href = "#/login";
    });

    // home.logout = function(){
    //     $http.post("/logout").then(function(res){
    //         if (res.status === 200) {
    //             window.location.href  = "#/login";
    //         } else {
    //             console.log("Error on logout", res);
    //         }
    //     });
    // };
}]);