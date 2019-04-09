angular.module('testApp', ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: require("./page1.html"),
            controller: "mainController"
        })
        .when("/page2", {
            templateUrl: "./page2.html",
            controller: "secondController"
        })
});

angular.module('testApp').controller('mainController', ['$scope', function ($scope) {

    $scope.pageName = "FirstPage";

}]);

angular.module('testApp').controller('secondController', ['$scope', function ($scope) {

    $scope.pageName = "secondPage";

}]);