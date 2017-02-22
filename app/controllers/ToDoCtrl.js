"use strict";

app.controller("ToDoCtrl", function($scope, $location){
    $scope.welcome = "hello";
    $scope.showListView = true;

    //////////////////////
    //WORKS FILTER BUTTONS
    //////////////////////
    $scope.newItem = function(){
        console.log("you clicked on New Item");
        $scope.showListView = false;
        $location.url("/items/new");
    };

    $scope.allItems = function(){
        console.log("you clicked on Show All Items");
        $scope.showListView = true;
        $location.url("/items/list");
    };
    // $scope.newTask = {};
    
    ///////////////////////////
    // MOVED TO ItemListCtrl.js
    ///////////////////////////
    // $scope.items = [
    //   {
    //     id: 0,
    //     task: "mow the lawn",
    //     isCompleted: false,
    //     dueDate: "12/5/17",
    //     assignedTo: "Greg",
    //     location: "Joe's house",
    //     urgency: "low",
    //     dependencies: "sunshine, clippers, hat, water, headphones"
    //   },
    //   {
    //     id: 1,
    //     task: "grade quizzes",
    //     isCompleted: false,
    //     dueDate: "12/5/15",
    //     assignedTo: "Christina",
    //     location: "NSS",
    //     urgency: "high",
    //     dependencies: "wifi, tissues, vodka"
    //   },
    //   {
    //     id: 2,
    //     task: "take a nap",
    //     isCompleted: false,
    //     dueDate: "5/21/16",
    //     assignedTo: "Joe",
    //     location: "Porch of lakefront cabin",
    //     urgency: "medium",
    //     dependencies: "hammock, silence"
    //   }
    // ];

    ///////////////////////////
    // MOVED TO ItemViewCtrl.js
    ///////////////////////////
    // $scope.newItem = function(){
    //     console.log("you clicked on New Item");
    //     $scope.showListView = false;
    // };

    // $scope.allItems = function(){
    //     console.log("you clicked on Show All Items");
    //     $scope.showListView = true;
    // };

    ///////////////////////////
    // MOVED TO ItemsNewCtrl.js
    ///////////////////////////
    // $scope.addNewItem = function(){
    //     console.log("Add New Item");
    //     $scope.newTask.isCompleted = false;
    //     $scope.newTask.id = $scope.items.length;
    //     console.log("you added a new item:", $scope.newTask);
    //     $scope.items.push($scope.newTask);
    //     $scope.newTask = {};
    // };

    ///////////////////////////
    //MOVED TO ItemListCtrl.js
    ///////////////////////////
    // $scope.removeTaskItem = function(itemId){
    //     console.log("you clicked the delete button", itemId);
    //     for (var i = 0; i < $scope.items.length; i++){
    //         if ($scope.items[i].id === itemId){
    //             $scope.items.splice(i,1);
    //         }
    //     }

    //     // $scope.items[itemId].splice(itemId,0);
    // };
});