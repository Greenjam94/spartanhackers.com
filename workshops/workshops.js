spartanHackers.controller("WorkshopsCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var workshops = this;

    workshops.user = {};

    $http.get("/users/current").then(function(res){
        workshops.user = res.data;
    }, function(res){
        window.location.href = "#/login";
    });

    $http.get("/workshops").then(function(res){
        console.log(res.data);
    });

    $http.get("/heartbeat").then(function(res){
        console.log(res.data);
    })

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