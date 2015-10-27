spartanHackers.controller("HackathonsCtrl", ["$scope", "$http", function ($scope, $http) {
    "use strict";

    var hackathons = this;

    hackathons.user = {};

    $http.get("/users/current").then(function(res){
        hackathons.user = res.data;
    }, function(res){
        window.location.href = "#/login";
    });

    // hackathons.logout = function(){
    //     $http.post("/logout").then(function(res){
    //         if (res.status === 200) {
    //             window.location.href  = "#/login";
    //         } else {
    //             console.log("Error on logout", res);
    //         }
    //     });
    // };
}]);