spartanHackers.controller("WorkshopsCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var workshops = this;

    workshops.user = {};

    $http.get("/users/current").then(function(res){
        workshops.user = res.data;
    }, function(res){
        window.location.href = "#/login";
    });

    // workshops.logout = function(){
    //     $http.post("/logout").then(function(res){
    //         if (res.status === 200) {
    //             window.location.href  = "#/login";
    //         } else {
    //             console.log("Error on logout", res);
    //         }
    //     });
    // };
}]);