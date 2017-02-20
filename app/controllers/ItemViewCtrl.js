"use strict";

app.controller("ItemViewCtrl", function($scope, $location){
	$scope.newItem = function(){
        console.log("you clicked on New Item");
        // $scope.showListView = false;
        $location.url("/items/new");
    };

    $scope.allItems = function(){
        console.log("you clicked on Show All Items");
        // $scope.showListView = true;
        $location.url("/items/list");
    };
});