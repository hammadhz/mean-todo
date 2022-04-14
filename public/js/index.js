var app = angular.module("myApp",[]);
app.controller("myCtrl", function($scope,$http){

    $http.get("/api").then(function(response) {
        $scope.points = response.data;  
    },function(e){
      console.log(e);
    })
});